(() => {
  "use strict";

  const main = document.getElementById("app");
  const { refs, factNames } = window.NutritionEvidence;
  const data = window.SUPPLEMENT_DATA;
  const byId = new Map(data.map(item => [item.id, item]));
  const categories = {
    "vitamin-fat": "脂溶性维生素", "vitamin-water": "水溶性维生素", mineral: "矿物质",
    fat: "脂肪酸及脂类", sport: "运动与氨基酸", other: "其他补剂", botanical: "植物提取物"
  };
  const checkerRows = [{ id: "", amount: "" }];

  const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const link = (route, title) => `<a href="#/${esc(route)}">${esc(title)}</a>`;
  const route = (path, params = {}) => {
    const query = new URLSearchParams(Object.entries(params).filter(([, value]) => value)).toString();
    return query ? path + "?" + query : path;
  };
  const routeParams = () => new URLSearchParams(location.hash.split("?")[1] || "");
  const normalize = value => String(value ?? "").normalize("NFKC").toLowerCase().trim();
  const compact = value => normalize(value).replace(/\s+/g, "");
  const matchesQuery = (value, query) => {
    const searchable = compact(value);
    return normalize(query).split(/\s+/).every(term => searchable.includes(term));
  };
  const source = (url, title) => `<a href="${esc(url)}">${esc(title)}</a>`;
  const itemLink = id => byId.has(id) ? link("nutrient/" + id, byId.get(id).name) : esc(id);
  const cite = ids => ids.filter(id => refs[id]).map(id => source(refs[id][1], refs[id][0])).join(" · ");
  const lines = values => (values || []).filter(Boolean).map(value => `<p>${esc(value)}</p>`).join("");
  const list = values => values?.length ? `<ul>${values.map(value => `<li>${esc(value)}</li>`).join("")}</ul>` : "";
  const title = text => `<h1>${esc(text)}</h1>`;
  const options = (values, current) => values.map(([value, label]) =>
    `<option value="${esc(value)}"${String(value) === String(current) ? " selected" : ""}>${esc(label)}</option>`).join("");
  const control = (id, label, field) => `<div class="control"><label for="${id}">${esc(label)}</label>${field}</div>`;
  const selector = (id, label, values, current) => control(id, label, `<select id="${id}">${options(values, current)}</select>`);
  const search = (id, label, value = "") => control(id, label, `<input id="${id}" type="search" maxlength="100" value="${esc(value)}" autocomplete="off">`);
  const details = (name, content, open = false) => content ? `<details class="article-section"${open ? " open" : ""}><summary>${esc(name)}</summary>${content}</details>` : "";
  const row = (...cells) => cells.map(esc);
  const table = (headers, rows, filterable = false) => rows.length ? `
    <div class="table-scroll"${headers.length > 3 ? ' tabindex="0" role="region" aria-label="表格，可横向滚动"' : ""}>
      <table${headers.length > 3 ? ' class="wide-table"' : ""}>
        <thead><tr>${headers.map(header => `<th scope="col">${esc(header)}</th>`).join("")}</tr></thead>
        <tbody>${rows.map(cells => `<tr${filterable ? " data-match" : ""}>${cells.map((cell, index) =>
          index ? `<td>${cell}</td>` : `<th scope="row">${cell}</th>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>` : "";
  const pairTypes = { synergy: "协同", antagonism: "拮抗", warning: "警告" }; // taste-skill-ignore: original interaction enum
  const drugTypes = { avoid: "避免", separate: "错开", monitor: "监测", deplete: "消耗" };
  const resourceTypes = {
    ingredients: "成分", tests: "检测项目", foods: "食物来源", interactions: "相互作用", products: "选购指南"
  };

  function home() {
    return `<section class="home">
      ${title("补剂参考")}
      <form id="home-form" class="home-search" role="search" aria-label="搜索资料">
        ${search("home-search", "查成分、食物、检测或药物")}
        <button type="submit" class="button primary">搜索</button>
      </form>
      <p class="search-examples"><span>例如</span> ${["铁蛋白", "豆腐", "华法林"].map(q => link(route("library", { q }), q)).join(" ")}</p>
      <ul class="entry-list">
        <li><h2>${link("quiz", "补剂自检")}</h2><p>回答 27 道题，查看哪些成分需要优先关注。</p></li>
        <li><h2>${link("checker", "配方自查")}</h2><p>按产品标签填写每日剂量，找出重复成分并合计摄入量。</p></li>
        <li><h2>${link("library", "浏览资料")}</h2><p>按主题浏览成分、检测、食物来源、相互作用和选购指南。</p></li>
      </ul>
    </section>`;
  }

  function library(category, params) {
    const legacyCategory = Object.hasOwn(categories, category) ? category : "";
    const requested = params.get("type");
    const type = Object.hasOwn(resourceTypes, requested) ? requested : legacyCategory ? "ingredients" : "";
    const selectedCategory = params.get("category") || legacyCategory;
    return `<section class="reading">
      ${title("查资料")}
      <form class="controls lookup-controls" id="library-form" role="search" aria-label="搜索资料">
        ${search("lib-search", "成分、食物、检测或药物", params.get("q") || "")}
        ${selector("lib-type", "搜索范围", [["", "全部资料"], ...Object.entries(resourceTypes)], type)}
        <div id="lib-categories"${type === "ingredients" ? "" : " hidden"}>
          ${selector("lib-category", "成分分类", [["", "全部成分"], ...Object.entries(categories)], selectedCategory)}
        </div>
      </form>
      <p id="lib-count" class="hint" role="status"></p>
      <div id="lib-results"></div>
    </section>`;
  }

  const ingredientName = id => byId.get(id)?.name || id;
  const result = (title, context, path, keywords = []) => ({
    title, context, path, keywords: [title, context, ...keywords].filter(Boolean).join(" ")
  });
  const resourceIndex = {
    ingredients: data.map(item => ({
      ...result(item.name, item.en, "nutrient/" + item.id, [item.id, categories[item.category],
        ...(item.forms || []).map(form => form.name), ...(item.deficiency?.signs || [])]),
      category: item.category
    })),
    tests: data.flatMap(item => (item.tests || []).map(test => result(
      test.name, [item.name, test.sample].filter(Boolean).join(" · "),
      route("nutrient/" + item.id, { section: "tests", item: test.name }), [item.en, test.note]
    ))),
    foods: data.flatMap(item => (item.foods || []).map(food => result(
      food.name, [item.name, food.amount, food.per].filter(Boolean).join(" · "),
      route("nutrient/" + item.id, { section: "foods", item: food.name }), [item.en]
    ))),
    interactions: [
      ...window.SUPPLEMENT_DRUG_INTERACTIONS.map((entry, index) => result(
        entry.drug + "与" + ingredientName(entry.n), drugTypes[entry.type],
        route("matrix/drugs", { entry: String(index) }), [entry.drugEn, byId.get(entry.n)?.en]
      )),
      ...window.SUPPLEMENT_INTERACTIONS.map((entry, index) => result(
        ingredientName(entry.a) + "与" + ingredientName(entry.b), pairTypes[entry.type],
        route("matrix/interactions", { entry: String(index) }), [byId.get(entry.a)?.en, byId.get(entry.b)?.en]
      ))
    ],
    products: window.PRODUCT_CATEGORIES.map(product => result(
      product.name, product.en, route("products", { category: product.id }),
      [product.what, ...(product.link ? [ingredientName(product.link)] : [])]
    ))
  };

  function resourceDirectory() {
    const entries = [
      [route("library", { type: "ingredients" }), "成分资料", `浏览 ${data.length} 种成分的剂量、制剂和注意事项。`],
      ["tests", "检测指南", "按成分或化验项目查标本和参考范围。"],
      ["foods", "食物来源", "查食物和原料中的成分含量。"],
      ["matrix/drugs", "相互作用", "查药物与补剂的搭配，或两种补剂同用时的影响。"],
      ["products", "选购指南", "按产品类别查标签、规格和选购要点。"],
      ["matrix", "对照表", "按目标查成分与证据等级，也可比较制剂和膳食指南。"]
    ];
    return `<h2 class="lookup-heading">按主题浏览</h2><ul class="entry-list">${entries.map(([path, label, description]) =>
      `<li><h3>${link(path, label)}</h3><p>${esc(description)}</p></li>`).join("")}</ul>`;
  }

  function renderLibrary(updateUrl = false) {
    const q = main.querySelector("#lib-search").value.trim();
    const type = main.querySelector("#lib-type").value;
    const category = type === "ingredients" ? main.querySelector("#lib-category").value : "";
    main.querySelector("#lib-categories").hidden = type !== "ingredients";
    if (updateUrl) history.replaceState(null, "", "#/" + route("library", { q, type, category }));
    const count = main.querySelector("#lib-count");
    const output = main.querySelector("#lib-results");
    if (!q && !type) {
      count.textContent = "";
      output.innerHTML = resourceDirectory();
      return;
    }

    const searchTypes = type ? [type] : Object.keys(resourceTypes);
    const term = compact(q);
    const rank = entry => {
      const name = compact(entry.title);
      if (name === term) return 0;
      if (name.startsWith(term)) return 1;
      return name.includes(term) ? 2 : 3;
    };
    const groups = searchTypes.map(kind => [kind, resourceIndex[kind].filter(entry =>
      (!category || entry.category === category) && matchesQuery(entry.keywords, q)
    ).sort((a, b) => rank(a) - rank(b))]);
    const total = groups.reduce((sum, [, entries]) => sum + entries.length, 0);
    count.textContent = total ? `${total} 条资料` : "没有找到相关资料。";
    output.innerHTML = groups.filter(([, entries]) => entries.length).map(([kind, entries]) => {
      const shown = type ? entries : entries.slice(0, 3);
      const rows = shown.map(entry => `<li>${link(entry.path, entry.title)}${entry.context ? `<span>${esc(entry.context)}</span>` : ""}</li>`).join("");
      return `<section class="lookup-group">${type ? "" : `<h2>${resourceTypes[kind]}</h2>`}
        <ul class="plain-list lookup-list">${rows}</ul>
        ${shown.length < entries.length ? `<p>${link(route("library", { q, type: kind }), `查看全部 ${entries.length} 条${resourceTypes[kind]}`)}</p>` : ""}
      </section>`;
    }).join("") || `<p>${type ? link(route("library", { q }), "在全部资料中搜索") : link("library", "清除搜索，浏览资料")}</p>`;
  }

  function firstNamed(entries, name) {
    const rows = [...(entries || [])];
    const index = rows.findIndex(entry => entry.name === name);
    if (index > 0) rows.unshift(...rows.splice(index, 1));
    return rows;
  }
  const foodRows = (item, name) => firstNamed(item.foods, name).map(food => row(food.name, [food.amount, food.per].filter(Boolean).join("／"), food.note));
  const originalRef = ref => /^https?:\/\//.test(ref.url || "") ? source(ref.url, ref.text) : esc(ref.text);
  const doseTags = { benefit: "有获益", partial: "部分有效", limited: "证据不足", none: "无获益", harm: "有害" };

  function doseTable(item) {
    const intake = item.intake;
    if (!intake) return "";
    const dose = window.SUPPLEMENT_DOSES[item.id];
    const rows = [
      [intake.mainLabel, intake.main], ...(intake.groups || []).map(group => [group.label, group.value]),
      ["可耐受最高摄入量", intake.upper], ["时间", item.timing], ["随餐", item.withFood]
    ].filter(([, value]) => value).map(cells => row(...cells));
    const research = dose?.research?.map(result => row(result.outcome, result.dose,
      [doseTags[result.tag], result.note, result.src].filter(Boolean).join(" · "))) || [];
    return table(["项目", "说明"], rows) + lines([intake.note]) + table(["用途", "剂量", "说明"], [
      ...(dose?.maintain ? [row("日常摄入", dose.maintain.value, dose.maintain.note)] : []),
      ...(dose?.correct ? [row("临床纠正", dose.correct.value, dose.correct.note)] : []),
      ...research
    ]) + lines([dose?.limits, dose?.caution]);
  }

  function nutrient(id, params) {
    const item = byId.get(id);
    if (!item) return notFound();
    const context = window.SUPPLEMENT_CONTEXT.nutrients[id];
    const requested = params.get("section");
    const selected = params.get("item");
    const factSheet = factNames[id] ? source("https://ods.od.nih.gov/factsheets/" + factNames[id] + "/", "NIH ODS 专业事实表") : "";
    const formRows = (item.forms || []).map(form => [esc(form.name),
      lines([form.dose, form.timing, form.food, form.bio && "吸收 " + form.bio, form.grade && "等级 " + form.grade, form.note])]);
    const checkLink = item.scoring?.unit ? `<p>${link(route("checker", { add: id }), "在配方自查中填写" + item.name)}</p>` : "";
    const sections = [
      ["dose", "摄入量与剂量", doseTable(item) + checkLink],
      ["foods", "食物与原料", table(["食物或原料", "含量与份量", "备注"], foodRows(item, selected))],
      ["tests", "检测项目", table(["项目与标本", "参考范围与说明"], firstNamed(item.tests, selected).map(test =>
        [esc(test.name) + (test.sample ? `<small class="lab-sample">${esc(test.sample)}</small>` : ""), lines([test.range, test.note])]))],
      ["forms", "制剂", table(["制剂", "剂量与吸收"], formRows)],
      ["cautions", "用药、人群与不良反应", list([...(item.deficiency?.groups || []), ...(item.deficiency?.signs || []), ...(item.cautions || [])]) +
        table(["人群", "说明"], (item.special || []).map(entry => row(entry.who, entry.what))) +
        table(["不良反应", "频率", "说明"], (item.sideEffects || []).map(entry => row(entry.effect, entry.frequency, entry.note)))],
      ["roles", "作用", lines([item.tagline, ...(item.intro || [])]) + list(item.roles)],
      ["context", "代谢与制剂", context ? lines([context.organ, context.kidney]) +
        table(["情况", "说明"], Object.entries(context.factors || {}).map(([key, note]) => row(
          window.SUPPLEMENT_CONTEXT.factors.find(factor => factor.id === key)?.label || key, note))) +
        table(["制剂", "说明"], (context.formTraits || []).map(trait => row(trait.match, trait.note))) : ""],
      ["references", "参考文献", (item.refs?.length ? `<ul>${item.refs.map(ref => `<li>${originalRef(ref)}</li>`).join("")}</ul>` : "") +
        (factSheet ? `<p>${factSheet}</p>` : "")]
    ];
    const first = sections.findIndex(([key]) => key === requested);
    if (first > 0) sections.unshift(...sections.splice(first, 1));
    return `<article class="reading">
      <p class="breadcrumb">${link("library", "查资料")}</p>
      ${title(item.name)}<p class="hint latin">${esc(item.en)}</p>
      ${sections.map(([key, name, content]) => details(name, content, key === requested)).join("")}
      ${item.related?.length ? `<p class="hint related">相关成分 ${item.related.map(itemLink).join(" · ")}</p>` : ""}
    </article>`;
  }

  const matrixTypes = [
    ["evidence", "目标与成分"], ["interactions", "成分相互作用"], ["forms", "制剂比较"],
    ["drugs", "药物相互作用"], ["diet", "膳食指南对照"]
  ];
  const grades = { strong: "强", moderate: "中", weak: "弱", insufficient: "不足", avoid: "不推荐" };
  const goals = Object.fromEntries(window.SUPPLEMENT_GOALS.map(goal => [goal.id, goal.name]));
  const dietRows = [
    ["蛋白质", "官方 DGA 给出每天 1.2–1.6 g/kg。DGAC 与 CSPI 更强调蛋白质来源，建议增加豆类、坚果和大豆制品。", ["dga2030", "dgac2025", "uncompromised"]],
    ["乳制品", "官方 DGA 建议无添加糖的全脂乳制品。CSPI 保留低脂或脱脂奶，也纳入强化豆奶。", ["dga2030", "uncompromised"]],
    ["饱和脂肪", "官方 DGA 保留总能量 10% 的上限。Cochrane 综述发现，降低饱和脂肪可减少合并心血管事件，死亡率结果仍不确定。ACC 建议用不饱和脂肪替代。", ["dgaFoundation", "fatCochrane", "accNutrition"]],
    ["全谷物与豆类", "两份指南都纳入全谷物。DGAC 与 CSPI 建议用全谷物替代一部分精制谷物。", ["dga2030", "dgac2025", "uncompromised"]],
    ["加工度与体重", "2025 年交叉喂养试验中，低加工饮食 8 周内多减约 1 个百分点体重。试验比较整套饮食。", ["dgac2025", "upfDicken"]],
    ["钠与酒精", "官方 DGA 建议 14 岁及以上一般人群每天少于 2,300 mg 钠。官方建议少饮酒，CSPI 另提出成人每天最多 1 个标准杯。", ["dga2030", "uncompromised"]]
  ];

  const resourceBreadcrumb = () => `<p class="breadcrumb">${link("library", "查资料")}</p>`;

  function directory(titleText, placeholder, headers, rows, intro = "") {
    return `${resourceBreadcrumb()}${title(titleText)}${intro}
      <div class="filter-line">${search("directory-search", placeholder)}<p id="directory-count" class="hint" role="status">${rows.length} 条</p></div>
      ${table(headers, rows, true)}`;
  }

  function matrix(requested, params) {
    const type = matrixTypes.some(([id]) => id === requested) ? requested : "evidence";
    const name = matrixTypes.find(([key]) => key === type)[1];
    const selectType = selector("matrix-type", "查阅主题", matrixTypes, type);
    const header = `${resourceBreadcrumb()}${title(name)}<div class="filter-line">${selectType}</div>`;
    if (type === "diet") return `${header}<p class="reading">CSPI 与生物多样性中心依据 DGAC 科学报告改写建议，并另拟酒精和可持续饮食建议。</p>` +
      table(["主题", "依据"], dietRows.map(([name, note, ids]) =>
        [esc(name), `<p>${esc(note)}</p><details class="source-note"><summary>出处</summary><p>${cite(ids)}</p></details>`]));

    let headers;
    let rows;
    if (type === "evidence") {
      headers = ["目标", "成分与证据等级", "说明"];
      rows = window.SUPPLEMENT_EVIDENCE.map(entry => [esc(goals[entry.g]), itemLink(entry.n) + " · " + esc(grades[entry.grade] || entry.grade), esc(entry.note)]);
    } else if (type === "interactions") {
      headers = ["成分", "类型", "说明"];
      rows = window.SUPPLEMENT_INTERACTIONS.map(entry => [itemLink(entry.a) + " · " + itemLink(entry.b), esc(pairTypes[entry.type]), lines([entry.note, entry.action])]);
    } else if (type === "forms") {
      headers = ["成分", "制剂", "说明"];
      rows = window.SUPPLEMENT_FORM_CHOICES.map(entry => [itemLink(entry.n), esc(entry.a) + " · " + esc(entry.b), esc(entry.note)]);
    } else {
      headers = ["药物", "成分与类型", "说明"];
      rows = window.SUPPLEMENT_DRUG_INTERACTIONS.map(entry => [esc(entry.drug) + "<br>" + esc(entry.drugEn),
        itemLink(entry.n) + " · " + esc(drugTypes[entry.type]) + (entry.severity ? " · " + esc(({ high: "高", moderate: "中", medium: "中", low: "低" })[entry.severity] || entry.severity) : ""),
        lines([entry.note, entry.action, entry.ref])]);
    }
    const entry = params.get("entry");
    if (["drugs", "interactions"].includes(type) && /^\d+$/.test(entry ?? "") && rows[Number(entry)]) {
      return `${header}${table(headers, [rows[Number(entry)]])}<p>${link("matrix/" + type, "查看全部" + name)}</p>`;
    }
    return `${header}<div class="filter-line">${search("directory-search", "搜索对照表")}<p id="directory-count" class="hint" role="status">${rows.length} 条</p></div>
      ${table(headers, rows, true)}`;
  }

  function foods() {
    return directory("食物来源", "搜索食物、原料或成分", ["食物或原料", "含量与份量", "备注"],
      data.flatMap(item => foodRows(item).map((cells, index) => {
        const food = item.foods[index];
        return [link(route("nutrient/" + item.id, { section: "foods", item: food.name }), food.name) +
          `<small class="lab-sample">${esc(item.name)}</small>`, ...cells.slice(1)];
      })));
  }

  function tests() {
    return directory("检测指南", "搜索成分或检测项目", ["检测项目", "参考范围"],
      data.flatMap(item => (item.tests || []).map(test => [
        link(route("nutrient/" + item.id, { section: "tests", item: test.name }), test.name) +
          `<small class="lab-sample">${esc([item.name, test.sample].filter(Boolean).join(" · "))}</small>`,
        lines([test.range, test.note])
      ])),
      "<p>对照化验报告上的单位和参考范围。</p>");
  }

  function products(_, params) {
    const requested = params.get("category");
    const products = [...window.PRODUCT_CATEGORIES];
    const first = products.findIndex(product => product.id === requested);
    if (first > 0) products.unshift(...products.splice(first, 1));
    return `<article class="reading products">${resourceBreadcrumb()}${title("选购指南")}
      ${products.map(product => details(product.name,
        `<p>${esc(product.what)}</p>
         <div class="product-criteria">
           <section><h2>查看</h2>${list(product.lookFor)}</section>
           <section><h2>避开</h2>${list(product.avoid)}</section>
         </div>
         ${product.link ? `<p>${itemLink(product.link)}</p>` : ""}`, product.id === requested)).join("")}
      <p class="related">参赛时，按产品批号查第三方检测记录。 ${cite(["label", "usada"])}</p>
    </article>`;
  }

  function methods() {
    return `<article class="reading">${title("来源与方法")}
      <h2>自检</h2>
      <p>化验和症状用于识别较高风险。饮食、生活习惯和健康情况也计入评分。</p>
      <h2>膳食调查原表</h2>
      <p class="hint">${cite(["dsq", "dqq", "asa24Method", "foodSecurity"])}</p>
      <h2>膳食指南</h2><p>${link("matrix/diet", "比较官方 DGA、DGAC 和 Uncompromised DGA")}</p>
      <h2>答案</h2><p>答案保存在当前浏览器。可在自检页清除。</p>
    </article>`;
  }

  function filterDirectory() {
    const query = main.querySelector("#directory-search").value.trim();
    let count = 0;
    main.querySelectorAll("[data-match]").forEach(element => {
      element.hidden = !matchesQuery(element.textContent, query);
      if (!element.hidden) count++;
    });
    main.querySelector("#directory-count").textContent = count ? `${count} 条` : "无匹配记录。";
  }

  const checkKey = "supplement-checker-context-v1";
  let checkContext = {};
  try { checkContext = JSON.parse(localStorage.getItem(checkKey)) || {}; } catch { /* Storage is optional. */ }
  const checkOptions = Object.entries(categories).map(([id, name]) => [name,
    data.filter(item => item.category === id && item.scoring?.unit).map(item => [item.id, item.name])
  ]).filter(([, items]) => items.length);
  const units = id => byId.get(id).scoring.unit;

  function checkerRow(item, index) {
    const choices = options([["", "选择成分"]], item.id) + checkOptions.map(([name, items]) =>
      `<optgroup label="${esc(name)}">${options(items, item.id)}</optgroup>`).join("");
    return `<div class="checker-row" data-row="${index}">
      <div class="controls checker-controls">
        ${control(`ingredient-${index}`, `成分 ${index + 1}`, `<select id="ingredient-${index}">${choices}</select>`)}
        ${control(`amount-${index}`, item.id ? `每日剂量（${units(item.id)}）` : "每日剂量",
          `<input id="amount-${index}" type="number" inputmode="decimal" min="0" max="100000000" step="any" value="${esc(item.amount)}"${item.id ? "" : " disabled"}>`)}
      </div>
      ${checkerRows.length > 1 ? `<button type="button" class="text-button" data-remove="${index}">删除成分 ${index + 1}</button>` : ""}
    </div>`;
  }

  function checker(_, params) {
    const add = params.get("add");
    if (byId.get(add)?.scoring?.unit && !checkerRows.some(item => item.id === add)) {
      const blank = checkerRows.find(item => !item.id);
      if (blank) blank.id = add;
      else if (checkerRows.length < 30) checkerRows.push({ id: add, amount: "" });
    }
    if (add) history.replaceState(null, "", "#/checker");
    const contexts = window.SUPPLEMENT_CONTEXT.factors.filter(factor => ["kidney", "diuretic", "warfarin", "pregnancy"].includes(factor.id));
    return `<section class="reading">${title("配方自查")}
      <p class="checker-instructions">按产品标签填写。每份 10 µg、每天 2 份，就填 <strong>20 µg</strong>。矿物质填元素量。</p>
      <form id="checker-form" novalidate>
        <div id="ck-rows">${checkerRows.map(checkerRow).join("")}</div>
        <button type="button" class="text-button" id="ck-add"${checkerRows.length >= 30 ? " hidden" : ""}>添加成分</button>
        ${details("用药与健康情况（选填）", `<div class="choices">${contexts.map(factor =>
          `<label><input type="checkbox" data-factor="${esc(factor.id)}"${checkContext[factor.id] ? " checked" : ""}>${esc(factor.label)}</label>`).join("")}</div>`)}
        <div class="actions"><button type="submit" class="button primary">合计每日剂量</button></div>
      </form>
      <section id="checker-results" tabindex="-1" aria-live="polite"></section>
    </section>`;
  }

  function refreshCheckerRows(focusIndex) {
    main.querySelector("#ck-rows").innerHTML = checkerRows.map(checkerRow).join("");
    main.querySelector("#ck-add").hidden = checkerRows.length >= 30;
    if (checkerSubmitted) checkerResult();
    main.querySelector(`#ingredient-${focusIndex}`).focus();
  }

  let checkerSubmitted = false;
  function checkerResult() {
    const groups = new Map();
    const incomplete = [];
    checkerRows.forEach((item, index) => {
      if (!item.id) return;
      const amount = Number(item.amount);
      const field = main.querySelector(`#amount-${index}`);
      const invalid = !Number.isFinite(amount) || amount <= 0 || amount > 100000000;
      if (invalid) field.setAttribute("aria-invalid", "true");
      else field.removeAttribute("aria-invalid");
      if (invalid) {
        incomplete.push(index + 1);
        return;
      }
      const group = groups.get(item.id) || { dose: 0, count: 0 };
      group.dose += amount;
      group.count++;
      groups.set(item.id, group);
    });
    const format = new Intl.NumberFormat("zh-CN", { maximumSignificantDigits: 8 });
    const checkNotes = [];
    if (checkContext.kidney && (groups.has("potassium") || groups.has("magnesium"))) {
      checkNotes.push(["肾功能受损时，补钾或补镁前向医生核对剂量。", ["potassium"]]);
    }
    if (checkContext.warfarin && groups.has("vitamin-k")) {
      checkNotes.push(["如果服用华法林，保持维生素 K 摄入稳定。换补剂前向药师核对。", ["odsVitaminK"]]);
    }
    if (checkContext.diuretic && groups.has("potassium")) {
      checkNotes.push(["利尿剂对血钾的影响因药而异。用药名和血钾结果核对补钾剂量。", ["potassium"]]);
    }
    if (checkContext.pregnancy && groups.has("vitamin-a")) {
      checkNotes.push(["查看标签上的维生素 A 形式和剂量。孕期尤其需要核对预成型维生素 A。", ["odsVitaminA"]]);
    }
    main.querySelector("#checker-results").innerHTML = `<h2>每日补剂剂量</h2>
      ${incomplete.length ? `<p class="input-warning">第 ${incomplete.join("、")} 行需要填写有效剂量，暂未计入。</p>` : ""}
      ${groups.size ? table(["成分", "剂量", "记录"], [...groups].map(([id, group]) =>
        [link(route("nutrient/" + id, { section: "dose" }), byId.get(id).name), esc(`${format.format(group.dose)} ${units(id)}`),
          group.count > 1 ? `<strong>合计 ${group.count} 条</strong>` : "1 条"]))
        : incomplete.length ? "" : "<p>先选择成分，再填写每日剂量。</p>"}
      ${checkNotes.length ? `<ul class="plain-list">${checkNotes.map(([note, refs]) =>
        `<li>${esc(note)}${refs.length ? `<p class="hint">${cite(refs)}</p>` : ""}</li>`).join("")}</ul>` : ""}
      ${groups.size ? `<p class="hint">${link("products", "核对标签与批号")}</p>` : ""}`;
  }

  function readCheckerRow(event) {
    const match = event.target.id.match(/^(ingredient|amount)-(\d+)$/);
    if (!match) return;
    const [, field, indexText] = match;
    const index = Number(indexText);
    const item = checkerRows[index];
    if (field === "ingredient") {
      item.id = event.target.value;
      item.amount = "";
      const container = event.target.closest("[data-row]");
      container.outerHTML = checkerRow(item, index);
      main.querySelector(`#ingredient-${index}`).focus();
    } else {
      item.amount = event.target.value;
    }
    if (checkerSubmitted) checkerResult();
  }

  function notFound() {
    return `${title("找不到这一页")}<p>${link("library", "查资料")}</p>`;
  }

  const originalQuiz = window.createSupplementQuiz({ byId, esc });
  const pages = { "": home, home, quiz: originalQuiz.page, library, nutrient, checker, matrix, tests, foods, products, method: methods };

  function render(focus = false) {
    const [page = "", param] = location.hash.replace(/^#\/?/, "").split("?")[0].split("/");
    const renderer = Object.hasOwn(pages, page) ? pages[page] : notFound;
    main.innerHTML = renderer(param, routeParams());
    if (page === "library") renderLibrary();
    if (page === "quiz") originalQuiz.bind();
    if (page === "checker" && checkerSubmitted) checkerResult();
    const section = ["nutrient", "matrix", "tests", "foods", "products"].includes(page) ? "library" : page;
    document.querySelectorAll("[data-nav]").forEach(anchor => {
      if (anchor.dataset.nav === section) anchor.setAttribute("aria-current", "page");
      else anchor.removeAttribute("aria-current");
    });
    const heading = main.querySelector("h1").textContent;
    document.title = heading === "补剂参考" ? heading : `${heading}｜补剂参考`;
    if (focus) {
      window.scrollTo(0, 0);
      main.focus({ preventScroll: true });
    }
  }

  main.addEventListener("input", event => {
    const input = event.target;
    if (input.id === "lib-search") {
      if (!event.isComposing) renderLibrary(true);
    } else if (input.id === "directory-search") {
      filterDirectory();
    } else if (input.id.startsWith("amount-")) {
      readCheckerRow(event);
    }
  });

  main.addEventListener("compositionend", event => {
    if (event.target.id === "lib-search") renderLibrary(true);
  });

  main.addEventListener("change", event => {
    const input = event.target;
    if (input.id === "lib-category" || input.id === "lib-type") {
      renderLibrary(true);
    } else if (input.id === "matrix-type") {
      location.hash = "#/matrix/" + input.value;
    } else if (input.matches("[data-factor]")) {
      checkContext[input.dataset.factor] = input.checked;
      try { localStorage.setItem(checkKey, JSON.stringify(checkContext)); } catch { /* Keep the current session. */ }
      if (checkerSubmitted) checkerResult();
    } else if (input.id.startsWith("ingredient-")) {
      readCheckerRow(event);
    }
  });

  main.addEventListener("submit", event => {
    event.preventDefault();
    if (event.target.id === "home-form") {
      const q = main.querySelector("#home-search").value.trim();
      location.hash = "#/" + route("library", { q });
    } else if (event.target.id === "library-form") {
      renderLibrary(true);
    } else if (event.target.id === "checker-form") {
      checkerSubmitted = true;
      checkerResult();
      main.querySelector("#checker-results").focus();
    }
  });

  main.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.id === "ck-add") {
      checkerRows.push({ id: "", amount: "" });
      refreshCheckerRows(checkerRows.length - 1);
    } else if (button.hasAttribute("data-remove")) {
      const index = Number(button.dataset.remove);
      checkerRows.splice(index, 1);
      refreshCheckerRows(Math.min(index, checkerRows.length - 1));
    }
  });

  document.querySelector(".skip-link").addEventListener("click", event => {
    event.preventDefault();
    main.focus();
  });
  window.addEventListener("hashchange", () => render(true));
  render();

})();
