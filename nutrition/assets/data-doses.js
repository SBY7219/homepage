/* =========================================================
   补剂参考 — 剂量分层数据
   每个成分分三层：日常维持 / 缺乏纠正 / 研究中有效剂量
   研究剂量必须同时写清结局、疗程与出处，不能当作日常建议。
   本文件在 app.js 启动时并入 window.SUPPLEMENT_DATA，页面仍只渲染一份对象。
   ========================================================= */
window.SUPPLEMENT_DOSES = {

  /* ---------------- 脂溶性维生素 ---------------- */
  'vitamin-a': {
    maintain: { value: '男 800 / 女 700 µg RAE/天', note: '中国 DRIs 2023 推荐量，包含食物与补充剂。补充剂常见 750–1500 µg RAE/天，不需要每天吃。' },
    correct: { value: '严重缺乏按 WHO 方案分次给药，总量可达 200 000 IU', note: '用于夜盲、干眼等确诊缺乏；孕期高剂量有致畸风险，必须由医生执行。' },
    research: [
      { outcome: '麻疹儿童死亡率', dose: '200 000 IU/天 × 2 天', tag: 'benefit', note: 'WHO 方案在高死亡率地区可降低麻疹死亡，属于公共卫生干预，不是成人日常补充。', src: 'WHO 指南' },
      { outcome: '肺癌预防（吸烟者）', dose: 'β-胡萝卜素 20–30 mg/天', tag: 'harm', note: 'ATBC 与 CARET 两项 RCT 均显示肺癌风险升高，吸烟者不应使用高剂量 β-胡萝卜素。', src: 'ATBC 1994；CARET 1996' }
    ],
    limits: 'UL 3000 µg RAE/天（预成形维生素 A）；β-胡萝卜素 3–6 mg/天较安全，但吸烟者避免高剂量。',
    caution: '孕期每天超过 10 000 IU 的预成形维生素 A 有致畸风险；β-胡萝卜素不能替代确诊缺乏时的治疗。'
  },

  'vitamin-d': {
    maintain: { value: '400–2000 IU/天（10–50 µg）', note: '中国 DRIs 2023 成人 RNI 为 400 IU；常见补充 1000–2000 IU/天。已达标者不需要继续加量。' },
    correct: { value: '50 000 IU/周 × 8 周，或 6 000 IU/天 × 8 周', note: '用于 25(OH)D 明确偏低者；8 周后复查，达标后转为维持量。肥胖或吸收不良者可能需要 2–3 倍剂量。' },
    research: [
      { outcome: '骨折与跌倒预防', dose: '800–2000 IU/天（±钙）', tag: 'none', note: 'USPSTF 2024 对社区居住的绝经后女性和 60 岁以上男性给出 D 级：不推荐用维生素 D（±钙）预防骨折。', src: 'USPSTF 2024' },
      { outcome: '癌症死亡（次要终点）', dose: '2000 IU/天', tag: 'limited', note: 'VITAL RCT 次要分析提示癌症死亡下降，属于探索性结果，不能作为普通人补充的理由。', src: 'VITAL 2019' }
    ],
    limits: 'UL 2000 IU/天（中国）/ 4000 IU/天（美国）；长期超过 10 000 IU/天有高钙血症与肾结石风险。',
    caution: '研究剂量 ≠ 日常建议。没有化验结果不要按“缺乏纠正”剂量自行服用。'
  },

  'vitamin-e': {
    maintain: { value: '14 mg α-生育酚当量/天', note: '中国 DRIs 2023 推荐量；补充剂常见 15–30 mg/天，均衡饮食者通常不需要额外补充。' },
    correct: { value: '确诊缺乏时 100–200 mg/天', note: '维生素 E 缺乏罕见，多见于严重脂肪吸收不良；需医生评估并监测凝血功能。' },
    research: [
      { outcome: '前列腺癌预防', dose: '400 IU/天', tag: 'harm', note: 'SELECT RCT 显示无获益，且前列腺癌风险可能升高，试验提前终止。', src: 'SELECT 2011' },
      { outcome: '心血管事件预防', dose: '400–800 IU/天', tag: 'none', note: '多项 Meta 分析未显示心血管获益；高剂量反而与全因死亡率轻度升高相关。', src: 'Miller 2005 Meta' }
    ],
    limits: 'UL 700 mg α-生育酚当量/天（中国）/ 1000 mg/天（美国）；高剂量增加出血风险，与抗凝药合用需医生评估。',
    caution: '维生素 E 是“高剂量没有额外获益、反而有风险”的典型例子；不要按抗氧化名义长期大剂量服用。'
  },

  'vitamin-k': {
    maintain: { value: 'K1 90–120 µg/天；MK-7 90–180 µg/天', note: '中国 DRIs 2023 推荐 80 µg/天；补充剂按形式分别计量，K1 与 MK-7 的微克数不能直接互换。' },
    correct: { value: '凝血异常时维生素 K1 10 mg，须医生执行', note: '用于华法林过量或胆道梗阻导致的缺乏；不是日常保健剂量。' },
    research: [
      { outcome: '椎体骨折（骨质疏松）', dose: 'MK-4 45 mg/天', tag: 'partial', note: '日本多项 RCT 使用 45 mg/天，椎体骨折有下降趋势；这是药物剂量，不能用 µg 级 MK-7 替代。', src: 'Japanese RCTs 2000s' },
      { outcome: '动脉钙化', dose: 'MK-7 180–360 µg/天', tag: 'limited', note: '部分 RCT 显示动脉弹性改善，但硬终点证据不足。', src: 'Knapen 2015, Thromb Haemost' }
    ],
    limits: '未制定 UL；华法林使用者必须保持维生素 K 摄入稳定，MK-7 也可能影响 INR。',
    caution: '服用华法林或新型口服抗凝药者，加用任何维生素 K 补充剂前都要先咨询医生。'
  },

  'vitamin-c': {
    maintain: { value: '100 mg/天（RNI）；补充 100–200 mg/天', note: '200 mg/天左右血浆已接近饱和，再高剂量主要随尿排出。' },
    correct: { value: '坏血病 250–500 mg/天 × 数周', note: '严重者可用 1–2 g/天，症状改善后转为膳食维持；需医生确认诊断。' },
    research: [
      { outcome: '普通感冒预防', dose: '1 g/天', tag: 'none', note: '普通人群发病率不下降；只有马拉松运动员、士兵等高强度体力应激人群风险约减半。', src: 'Cochrane 2013' },
      { outcome: '感冒病程', dose: '1–3 g/天', tag: 'partial', note: '成人病程平均缩短 8%，儿童约 14%；不能预防感冒。', src: 'Hemilä & Chalker 2013, Cochrane CD000980' },
      { outcome: '脓毒症死亡率', dose: '静脉高剂量 30–50 mg/kg', tag: 'none', note: 'LOVIT 等 RCT 未显示死亡率获益，不推荐常规使用。', src: 'LOVIT 2022' }
    ],
    limits: 'UL 2000 mg/天；单次超过 1 g 易腹泻、腹胀；肾结石病史者避免长期高剂量。',
    caution: '研究剂量 ≠ 日常建议。200 mg/天已能满足饱和需求，高剂量静脉用药只属于医院场景。'
  },

  /* ---------------- 水溶性维生素 ---------------- */
  b1: {
    maintain: { value: '男 1.4 / 女 1.2 mg/天', note: '中国 DRIs 2023 推荐量；主食精细化、酗酒者更容易不足。' },
    correct: { value: '脚气病 10–30 mg/天；Wernicke 脑病 500 mg 静脉，每日 3 次 × 2–3 天', note: '酒精相关缺乏常需肠外高剂量，必须由医生处理。' },
    research: [
      { outcome: '糖尿病周围神经病变', dose: '苯磷硫胺 300–600 mg/天', tag: 'partial', note: '多项小样本 RCT 提示症状改善，但研究质量有限、疗程不一。', src: 'Stracke 2008, Exp Clin Endocrinol Diabetes' },
      { outcome: '认知功能', dose: '苯磷硫胺 600 mg/天 × 12 个月', tag: 'limited', note: '现有 RCT 未显示明确认知获益。', src: 'RCT' }
    ],
    limits: '未制定 UL；口服吸收有饱和上限（约 4–5 mg/次），高剂量需分次服用。',
    caution: '苯磷硫胺 100–300 mg 是研究剂量，不等于日常 B1 需求；不要用它替代戒酒和均衡饮食。'
  },

  b2: {
    maintain: { value: '男 1.4 / 女 1.2 mg/天', note: '中国 DRIs 2023 推荐量；奶类、蛋、动物内脏是主要来源。' },
    correct: { value: '5–10 mg/天 × 数周', note: '缺乏罕见，多与吸收不良或其他 B 族缺乏并存。' },
    research: [
      { outcome: '偏头痛预防', dose: '400 mg/天 × 3 个月', tag: 'benefit', note: 'Schoenen 1998 RCT 应答率 59% vs 15%；后续 Meta 支持发作频率下降。需连续 3 个月才见效果。', src: 'Schoenen 1998；Meta 2024' }
    ],
    limits: '未制定 UL；400 mg/天需分次随餐，尿液变黄属正常现象。',
    caution: '400 mg/天是偏头痛研究剂量，远超日常 RNI；没有偏头痛的人不要按这个剂量长期服用。'
  },

  b3: {
    maintain: { value: '男 15 / 女 12 mg NE/天', note: '中国 DRIs 2023 推荐量；烟酸与烟酰胺按 NE 折算。' },
    correct: { value: '糙皮病 50–100 mg/次，每日 3 次（烟酰胺）', note: '需医生诊断与随访；烟酸形式的潮红反应更明显。' },
    research: [
      { outcome: '血脂改善', dose: '烟酸 1–2 g/天', tag: 'partial', note: '可降低 LDL、升高 HDL，但 AIM-HIGH 与 HPS2-THRIVE 均未显示心血管获益，且不良反应增加。', src: 'AIM-HIGH 2011；HPS2-THRIVE 2014' },
      { outcome: 'NAD+ 与衰老指标', dose: 'NR 250–1000 mg/天', tag: 'limited', note: '人体研究多为短期替代终点，缺乏硬结局证据。', src: 'Yoshino 2018, Cell Metab（综述）' }
    ],
    limits: 'UL 35 mg/天（烟酸）；烟酰胺超过 500 mg/天有肝毒性风险；缓释烟酸肝毒性更高。',
    caution: '调脂剂量的烟酸属于处方药，不能自行购买高剂量烟酸服用。'
  },

  b5: {
    maintain: { value: '5 mg/天', note: '中国 DRIs 2023 推荐量；泛酸广泛存在于食物，缺乏极罕见。' },
    correct: { value: '5–10 mg/天', note: '确诊缺乏时短期补充，通常与其他 B 族一起纠正。' },
    research: [
      { outcome: '血脂改善', dose: '泛硫乙胺 600–900 mg/天', tag: 'partial', note: '小样本 RCT 显示 LDL 与甘油三酯下降，但研究规模小、证据质量低。', src: '小样本 RCT' }
    ],
    limits: '未制定 UL；超过 1 g/天可能引起腹泻。',
    caution: '泛硫乙胺 600–900 mg 是研究剂量，不是日常泛酸需求。'
  },

  b6: {
    maintain: { value: '1.4 mg/天', note: '中国 DRIs 2023 推荐量；高蛋白饮食者需求略高。' },
    correct: { value: '5–10 mg/天；异烟肼相关神经病变 100 mg/天', note: '后者须医生处方并监测；不要自行长期使用 100 mg。' },
    research: [
      { outcome: '经前综合征', dose: '50–100 mg/天', tag: 'partial', note: '部分小样本 RCT 显示症状改善，证据质量中等偏低。', src: 'Wyatt 1999, BMJ' },
      { outcome: '孕期恶心呕吐', dose: '10–25 mg，每 8 小时一次', tag: 'benefit', note: 'ACOG 支持作为一线辅助；需与产科医生确认。', src: 'ACOG 指南' },
      { outcome: '周围神经病变（危害）', dose: '长期 >500 mg/天', tag: 'harm', note: '可导致感觉性共济失调；50–100 mg/天长期使用也存在争议。', src: 'EFSA 2023；TGA 药物警戒' }
    ],
    limits: 'UL 60 mg/天（中国）/ 100 mg/天（美国）；P5P 形式建议 5–25 mg/天。',
    caution: 'B6 是“水溶性就安全”的典型反例；高剂量长期服用可能不可逆损伤神经。'
  },

  b7: {
    maintain: { value: '40 µg/天', note: '中国 DRIs 2023 推荐量；肠道菌群可合成一部分。' },
    correct: { value: '确诊缺乏 5–10 mg/天', note: '多见于长期肠外营养、生鸡蛋清大量摄入或抗癫痫药使用者。' },
    research: [
      { outcome: '头发与指甲', dose: '2.5 mg/天', tag: 'limited', note: '小样本研究提示指甲增厚，头发密度证据不足。', src: '小样本 RCT' },
      { outcome: '多发性硬化', dose: '100–300 mg/天', tag: 'none', note: 'SPI2 RCT 未显示残疾进展改善，高剂量组还出现实验室指标异常。', src: 'SPI2 2020' },
      { outcome: '实验室检测干扰', dose: '>5 mg/天', tag: 'harm', note: '可干扰肌钙蛋白、甲状腺素、激素等免疫检测，导致误诊。', src: 'FDA 安全通告' }
    ],
    limits: '未制定 UL；每天超过 5 mg 者，抽血前应停药至少 3 天并告知医生。',
    caution: '高剂量生物素没有证实的美容获益，却可能让化验结果失真。'
  },

  b9: {
    maintain: { value: '400 µg DFE/天', note: '中国 DRIs 2023 推荐量；备孕与孕早期至少 400 µg/天。' },
    correct: { value: '缺乏 1–5 mg/天 × 数周；孕期 400–800 µg/天', note: '大剂量用于确诊缺乏或既往神经管缺陷妊娠史，需医生评估。' },
    research: [
      { outcome: '神经管缺陷预防', dose: '400 µg/天，孕前至孕早期', tag: 'benefit', note: 'MRC 1991 RCT 显示高风险人群再发风险下降约 72%，是叶酸最重要的证据。', src: 'MRC 1991' },
      { outcome: '同型半胱氨酸与卒中', dose: '0.8 mg/天', tag: 'partial', note: 'HOPE-2 显示卒中风险下降，但获益主要见于未进行面粉叶酸强化的地区。', src: 'HOPE-2 2006' },
      { outcome: '结直肠腺瘤复发', dose: '1 mg/天', tag: 'harm', note: 'Cole 2007 RCT 提示腺瘤复发风险升高，不建议无指征长期大剂量。', src: 'Cole 2007' }
    ],
    limits: 'UL 1000 µg/天（合成叶酸）；天然食物叶酸不适用。维生素 B12 缺乏者单补叶酸会掩盖贫血。',
    caution: '研究剂量 ≠ 日常建议。孕期剂量、缺乏治疗剂量与“防癌”剂量不是一回事。'
  },

  b12: {
    maintain: { value: '2.4 µg/天；素食者 250–500 µg/天', note: '中国 DRIs 2023 推荐量；严格素食者建议每天 250–500 µg 或每周 2500 µg。' },
    correct: { value: '1000–2000 µg/天 × 8–12 周，或肌注 1000 µg', note: '口服高剂量依靠被动扩散，吸收不良者也可能有效；治疗后复查 B12、同型半胱氨酸或 MMA。' },
    research: [
      { outcome: '口服 vs 肌注', dose: '1000 µg/天', tag: 'benefit', note: 'Cochrane 2018 与后续网络 Meta 显示口服与肌注在纠正缺乏上无显著差异。', src: 'Cochrane 2018' },
      { outcome: '认知功能', dose: '1000 µg/天', tag: 'none', note: '无明确证据支持 B12 改善健康老年人认知。', src: 'Malouf & Grimley Evans 2003, Cochrane' }
    ],
    limits: '未制定 UL；严重缺乏治疗初期注意低钾血症；二甲双胍长期使用者应定期监测。',
    caution: '口服 1000 µg 与舌下含服效果相近，不需要为“舌下吸收”支付溢价。'
  },

  /* ---------------- 矿物质 ---------------- */
  calcium: {
    maintain: { value: '总摄入 800–1000 mg/天', note: '中国 DRIs 2023 推荐 800 mg/天，50 岁以上 1000 mg/天；食物优先，补充剂只补差额。' },
    correct: { value: '骨质疏松或确诊不足 1000–1200 mg/天，分次', note: '单次元素钙不超过 500 mg；与维生素 D 联合评估，不能替代抗骨质疏松药物。' },
    research: [
      { outcome: '骨折预防', dose: '1000–1200 mg/天 + 维生素 D 800 IU/天', tag: 'none', note: 'USPSTF 2024 对社区老年人给出 D 级：不推荐用钙 ± 维生素 D 预防骨折。', src: 'USPSTF 2024' },
      { outcome: '血压', dose: '1–1.5 g/天', tag: 'partial', note: 'Meta 分析显示收缩压小幅下降约 1–2 mmHg，临床意义有限。', src: 'Cormick 2015, Cochrane CD010037' },
      { outcome: '肾结石（危害）', dose: '补充剂 >1000 mg/天', tag: 'harm', note: '补充剂形式的钙可能增加结石风险，食物钙不增加。', src: 'WHI 2008, J Urol' }
    ],
    limits: 'UL 2000 mg/天；单次元素钙 ≤500 mg；与铁、甲状腺素、四环素/喹诺酮类间隔 2–4 小时。',
    caution: '先算饮食里的钙，再决定补多少；“一片 600 mg 碳酸钙”通常含元素钙 600 mg，不是 600 mg 化合物。'
  },

  magnesium: {
    maintain: { value: '330 mg/天（食物）；补充 100–350 mg/天', note: '中国 DRIs 2023 成人 RNI 330 mg/天；补充剂只补饮食缺口。' },
    correct: { value: '缺乏 300–400 mg 元素镁/天，分次', note: '确诊低镁或症状明显者使用；严重低镁需静脉补镁，须医生执行。' },
    research: [
      { outcome: '睡眠', dose: '500 mg/天 × 8 周', tag: 'partial', note: 'Abbasi 2012 RCT 显示入睡潜伏期缩短；Mah & Pitre 2021 Meta 合并约减少 17 分钟，但证据质量低。', src: 'Abbasi 2012；Meta 2021' },
      { outcome: '偏头痛预防', dose: '400–600 mg/天', tag: 'partial', note: 'Meta 分析提示发作频率下降，证据质量中等；需连续 8–12 周。', src: 'von Luckner & Riederer 2018, Headache' },
      { outcome: '血压', dose: '300 mg/天', tag: 'partial', note: '2023 Meta 显示收缩压约下降 2 mmHg，血压正常者获益更小。', src: 'Meta 2023' }
    ],
    limits: 'UL 350 mg/天（仅补充剂中的元素镁）；肾功能不全者禁用高剂量；常见副作用是腹泻。',
    caution: '研究里 500 mg/天高于 UL，只能在医生指导下短期使用；日常补充不要超过 350 mg。'
  },

  zinc: {
    maintain: { value: '男 12.5 / 女 7.5 mg/天', note: '中国 DRIs 2023 推荐量；补充剂常见 10–25 mg 元素锌/天。' },
    correct: { value: '缺乏 20–40 mg 元素锌/天 × 数周', note: '肠病性肢端皮炎需 30–50 mg/天，由医生管理；长期高剂量必须监测铜。' },
    research: [
      { outcome: '感冒病程（含片）', dose: '75 mg/天，24 小时内开始', tag: 'benefit', note: 'Hemilä 2017 Meta：每天超过 75 mg 的含片可使病程缩短约 33%；低于 75 mg 的试验无效。', src: 'Hemilä 2017 Meta' },
      { outcome: '儿童腹泻', dose: '10–20 mg/天 × 10–14 天', tag: 'benefit', note: 'WHO 推荐 20 mg/天，可缩短病程并降低复发。', src: 'WHO 指南' },
      { outcome: '铜缺乏（危害）', dose: '长期 >40 mg/天', tag: 'harm', note: '可导致贫血和神经病变，长期补锌应监测铜。', src: 'Hoffman 1988, Gastroenterology' }
    ],
    limits: 'UL 40 mg/天；空腹易恶心，随餐服用；与铁、钙、四环素/喹诺酮类间隔 2 小时。',
    caution: '含片 75 mg/天是短期治疗剂量，症状缓解即停；不能作为日常补锌量。'
  },

  iron: {
    maintain: { value: '男 12 / 女 18 mg/天（食物）', note: '中国 DRIs 2023 推荐量；没有缺铁证据时不推荐常规补铁。' },
    correct: { value: '60–120 mg 元素铁，隔日一次 × 8–12 周', note: '用于确诊缺铁或缺铁性贫血；达标后继续补 3 个月恢复储备，复查铁蛋白。' },
    research: [
      { outcome: '吸收率（隔日 vs 每日）', dose: '60 mg 元素铁，隔日', tag: 'benefit', note: 'Stoffel 2017 RCT 显示隔日给药吸收率更高；2025 Meta 显示每日血红蛋白略高但差异不显著，隔日胃肠道耐受更好。', src: 'Stoffel 2017；Meta 2025' },
      { outcome: '无贫血性疲劳', dose: '80 mg/天 × 4–12 周', tag: 'partial', note: '铁蛋白偏低者可部分改善疲劳，但证据不一致，需先化验。', src: 'Vaucher 2012, CMAJ' },
      { outcome: '铁过载（危害）', dose: '无缺乏长期补铁', tag: 'harm', note: '可能增加氧化应激与肝损伤风险，血色病携带者尤其危险。', src: '综述' }
    ],
    limits: 'UL 42 mg/天（非缺乏人群）；空腹吸收好但刺激胃，可随少量食物；与钙、茶、咖啡、PPI 间隔 2 小时。',
    caution: '必须先查血常规和铁蛋白；不能凭疲劳、面色差自行补铁。'
  },

  selenium: {
    maintain: { value: '60 µg/天', note: '中国 DRIs 2023 推荐量；海产品、动物内脏和坚果是主要来源。' },
    correct: { value: '缺乏 100–200 µg/天', note: '克山病地区曾用 100 µg/天预防；确诊缺乏时短期补充。' },
    research: [
      { outcome: '前列腺癌预防', dose: '200 µg/天', tag: 'none', note: 'SELECT RCT 显示无获益；基线硒较高者 2 型糖尿病风险反而增加。', src: 'SELECT 2011' },
      { outcome: '桥本甲状腺炎抗体', dose: '200 µg/天', tag: 'partial', note: 'Meta 分析显示 TPO 抗体下降，但甲状腺功能与临床结局证据不足。', src: 'Wichman 2016, Thyroid' }
    ],
    limits: 'UL 400 µg/天；长期超过 400 µg 可致脱发、指甲变形、蒜味呼吸等硒中毒表现。',
    caution: '不缺不补；200 µg/天是研究剂量，不是日常推荐量。'
  },

  iodine: {
    maintain: { value: '120 µg/天；孕期 220–250 µg/天', note: '中国 DRIs 2023 推荐量；使用碘盐是最稳妥的来源。' },
    correct: { value: '缺乏 150 µg/天', note: '严重缺乏或孕期需求增加时补充；甲状腺疾病患者需先评估。' },
    research: [
      { outcome: '儿童认知发育', dose: '150 µg/天', tag: 'limited', note: '轻中度缺乏地区补碘对认知改善的证据不足；严重缺乏地区才有明确获益。', src: 'Cochrane 2017' },
      { outcome: '甲状腺功能（危害）', dose: '长期 >600 µg/天', tag: 'harm', note: '过量可诱发甲亢或甲减，自身免疫性甲状腺病者尤其敏感。', src: 'Zimmermann & Boelaert 2015, Lancet Diabetes Endocrinol' }
    ],
    limits: 'UL 600 µg/天（中国）；海带、紫菜粉的碘含量差异极大，不能按“天然”就放心加量。',
    caution: '甲状腺疾病患者补碘前先查尿碘和甲状腺功能，不要自行使用海藻类补充剂。'
  },

  copper: {
    maintain: { value: '0.8 mg/天', note: '中国 DRIs 2023 推荐量；坚果、豆类、动物内脏可满足。' },
    correct: { value: '缺乏 1–2 mg/天', note: '多见于长期高锌、胃旁路术后或肠外营养；严重者需静脉补铜。' },
    research: [
      { outcome: '高锌导致的铜缺乏', dose: '铜 1–2 mg/天', tag: 'benefit', note: '长期补锌超过 40 mg/天者需监测铜；确诊缺乏时补铜可逆转贫血与神经症状。', src: 'Hoffman 1988, Gastroenterology' }
    ],
    limits: 'UL 8 mg/天（中国）/ 10 mg/天（美国）；铜过量可致肝损伤。',
    caution: '不缺不补；铜与锌长期高剂量同补需要医生评估比例。'
  },

  chromium: {
    maintain: { value: '30–35 µg/天（AI）', note: '中国 DRIs 2023 适宜摄入量；全谷物、肉类和坚果可满足。' },
    correct: { value: '无标准纠正剂量', note: '临床铬缺乏极罕见，主要见于长期肠外营养；需医生评估。' },
    research: [
      { outcome: '血糖控制', dose: '200–1000 µg/天', tag: 'limited', note: 'Meta 分析结果不一致，多数显示 HbA1c 无临床意义下降；吡啶甲酸铬证据最弱。', src: 'Balk 2007, Diabetes Care' },
      { outcome: '体重与体脂', dose: '200–400 µg/天', tag: 'none', note: '未显示有临床意义的减重效果。', src: 'Balk 2007, Diabetes Care' }
    ],
    limits: '未制定 UL；超过 1000 µg/天有个例肾损伤报告。',
    caution: '糖尿病不能用铬替代降糖药；血糖异常应先就诊。'
  },

  potassium: {
    maintain: { value: '2000 mg/天（AI，食物）', note: '中国 DRIs 2023 适宜摄入量；蔬菜、水果、豆类为主，补充剂不是首选。' },
    correct: { value: '低钾血症 40–100 mEq/天，须医生处方', note: '中国补钾制剂多为处方药；肾功能不全、ACEI/ARB 或保钾利尿剂使用者有高钾风险。' },
    research: [
      { outcome: '血压', dose: '膳食钾 3500–5000 mg/天', tag: 'benefit', note: 'Meta 分析显示收缩压下降约 4–5 mmHg，主要来自食物而非 99 mg 小片剂。', src: 'Aburto 2013, BMJ' },
      { outcome: '肾结石复发', dose: '柠檬酸钾 30–60 mEq/天', tag: 'benefit', note: '可提高尿枸橼酸、降低复发，须医生监测血钾与肾功能。', src: 'RCT' }
    ],
    limits: '健康人未制定 UL；肾功能不全、肾上腺功能不全、服用保钾药物者需限钾。',
    caution: '不要自行服用氯化钾；治疗剂量与致命高钾之间只差一个肾功能。'
  },

  /* ---------------- 脂类与脂肪酸 ---------------- */
  ala: {
    maintain: { value: '1.1–1.6 g/天（占能量 0.6–1%）', note: '中国 DRIs 2023 推荐量；亚麻籽、奇亚籽、核桃和植物油是主要来源。' },
    correct: { value: '不适用', note: '属于必需脂肪酸，但没有“缺乏纠正”的补充剂方案；缺乏应通过膳食改善。' },
    research: [
      { outcome: '血脂', dose: '2–3 g/天 或亚麻籽 30 g/天', tag: 'partial', note: 'LDL 小幅下降，心血管硬终点证据不一致。', src: 'Meta 分析' },
      { outcome: '心血管事件', dose: '1.5–3 g/天', tag: 'limited', note: '观察性研究结果矛盾，不能替代 EPA/DHA。', src: '综述' }
    ],
    limits: '未制定 UL；极高剂量可能轻度升高前列腺癌风险（观察性研究，证据不一致）。',
    caution: 'ALA 不能替代 EPA 和 DHA；转化率通常低于 10%。'
  },

  epa: {
    maintain: { value: '250–500 mg EPA+DHA/天', note: '中国居民膳食指南建议每周吃鱼 2 次；补充剂按 EPA+DHA 总量计算。' },
    correct: { value: '不适用', note: '没有统一的“缺乏纠正”剂量；血脂异常按医生方案处理。' },
    research: [
      { outcome: '高甘油三酯', dose: '2–4 g/天 EPA+DHA', tag: 'benefit', note: '可使甘油三酯下降 20–30%；处方级 EPA 4 g/天（REDUCE-IT）在高危人群中减少心血管事件。', src: 'REDUCE-IT 2019' },
      { outcome: '心血管事件（他汀时代）', dose: '4 g/天 ω-3 羧酸', tag: 'none', note: 'STRENGTH 未显示获益，提示制剂、人群与基线甘油三酯水平影响结果。', src: 'STRENGTH 2020' },
      { outcome: '房颤（危害）', dose: '≥4 g/天', tag: 'harm', note: 'Meta 分析提示高剂量 ω-3 可能增加房颤风险。', src: 'Gencer 2021, Circulation' }
    ],
    limits: '3 g/天以下一般安全；超过 4 g/天增加出血风险，与抗凝药合用需医生评估。',
    caution: '1 g/天用于一般健康，4 g/天是处方剂量；不要自行长期服用高剂量鱼油。'
  },

  dha: {
    maintain: { value: '250–500 mg DHA/天', note: '孕期至少 200 mg DHA/天；与 EPA 共享每日总量上限。' },
    correct: { value: '不适用', note: '没有统一的缺乏纠正剂量；早产风险等特殊情况由医生评估。' },
    research: [
      { outcome: '早产预防', dose: '800–1000 mg/天（孕期）', tag: 'partial', note: 'Meta 分析提示早产风险下降，但研究异质性较大；需与产科医生确认。', src: 'Makrides 2006, Cochrane CD003402' },
      { outcome: '认知功能', dose: '200–1000 mg/天', tag: 'none', note: '健康成人及阿尔茨海默病患者均未显示明确认知获益。', src: 'RCT' }
    ],
    limits: '与 EPA 合并计算，总 ω-3 建议不超过 3 g/天；高剂量出血风险。',
    caution: '藻油适合素食者，但同样要按 EPA+DHA 总量计算，不是“越多越好”。'
  },

  gla: {
    maintain: { value: '无推荐量', note: 'GLA 不是必需脂肪酸，人体可由亚油酸少量转化。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '经前综合征', dose: '月见草油 1–2 g/天（GLA 约 100–200 mg）', tag: 'limited', note: 'Meta 分析结果不一致，部分小样本 RCT 显示症状改善。', src: 'Meta 分析' },
      { outcome: '湿疹与糖尿病神经病变', dose: '500–1000 mg/天', tag: 'limited', note: '证据弱，不作为常规推荐。', src: '综述' }
    ],
    limits: '未制定 UL；与吩噻嗪类抗精神病药合用可能降低癫痫阈值；孕期避免高剂量。',
    caution: 'GLA 补充剂不是必需脂肪酸缺乏的替代方案。'
  },

  cla: {
    maintain: { value: '无推荐量', note: 'CLA 不是必需营养素，食物中少量存在。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '体脂下降', dose: '3–4 g/天', tag: 'limited', note: 'Meta 分析显示体脂小幅下降，临床意义有限，远小于饮食与运动的效果。', src: 'Whigham 2007, Am J Clin Nutr' },
      { outcome: '代谢风险（危害）', dose: '3–4 g/天', tag: 'harm', note: '可能升高胰岛素抵抗和血脂异常，代谢综合征患者不建议。', src: 'RCT' }
    ],
    limits: '未制定 UL；长期安全性数据有限。',
    caution: 'CLA 不是减脂药；有代谢综合征或糖尿病者避免使用。'
  },

  oleic: {
    maintain: { value: '用油酸替代饱和脂肪，占能量 10–20%', note: '没有“油酸缺乏”这一说；重点是脂肪结构，而不是额外补油。' },
    correct: { value: '不适用', note: '不属于需要纠正缺乏的营养素。' },
    research: [
      { outcome: '心血管事件', dose: '特级初榨橄榄油约 4 汤匙/天', tag: 'partial', note: 'PREDIMED 显示地中海饮食加橄榄油降低心血管事件，属整体膳食模式效应，不能归功于油酸胶囊。', src: 'PREDIMED 2013' }
    ],
    limits: '无 UL；热量密度高，需计入总能量。',
    caution: '油酸不是补剂，优先从橄榄油、坚果和牛油果获得。'
  },

  palmitoleic: {
    maintain: { value: '无推荐量', note: 'ω-7 不是必需脂肪酸，人体可自行合成。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '代谢指标', dose: '200–300 mg/天', tag: 'limited', note: '人体研究规模小，缺乏硬结局证据。', src: '小样本研究' }
    ],
    limits: '未制定 UL；长期安全性数据不足。',
    caution: 'ω-7 补充剂证据薄弱，不建议优先购买。'
  },

  mct: {
    maintain: { value: '无推荐量', note: 'MCT 是能量来源，不是必需营养素。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '能量消耗与体重', dose: '5–15 g/天', tag: 'limited', note: '可小幅增加能量消耗，但减重效果不显著。', src: 'St-Onge & Jones 2002, J Nutr' },
      { outcome: '生酮与运动供能', dose: '5–15 g/天，分次', tag: 'partial', note: '可快速提供酮体，适合特定饮食方案。', src: '小样本研究' }
    ],
    limits: '未制定 UL；从 5 g/天开始，超过 30 g/天易腹泻。',
    caution: 'MCT 是能量来源，不是“燃脂剂”；计入总热量后可能不利于减重。'
  },

  lecithin: {
    maintain: { value: '无推荐量', note: '卵磷脂是食品乳化剂，也提供少量胆碱。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '血脂', dose: '1.2–2.4 g/天', tag: 'limited', note: '小样本研究显示 LDL 小幅下降，证据弱。', src: '小样本 RCT' },
      { outcome: '认知', dose: '磷脂酰胆碱 300–600 mg/天', tag: 'limited', note: '证据不足，不能替代胆碱缺乏的治疗。', src: '综述' }
    ],
    limits: '胆碱 UL 3500 mg/天；大豆过敏者注意来源。',
    caution: '卵磷脂不是高效胆碱补充剂；需要补胆碱时应看磷脂酰胆碱的实际含量。'
  },

  phytosterols: {
    maintain: { value: '1.5–3 g/天，随餐分次', note: '作为饮食辅助降低 LDL；低于 1 g/天效果有限。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量；用于血脂管理。' },
    research: [
      { outcome: 'LDL 胆固醇', dose: '2 g/天', tag: 'benefit', note: 'Meta 分析显示 LDL 下降 8–10%；对心血管硬终点无直接证据。', src: 'Katan 2003, Mayo Clin Proc' },
      { outcome: '家族性高胆固醇血症', dose: '2–3 g/天', tag: 'partial', note: '可作为饮食辅助，但不能替代他汀。', src: '指南' }
    ],
    limits: '未制定 UL；可能降低类胡萝卜素吸收；植物甾醇血症患者禁用。',
    caution: '2 g/天是有效剂量下限；吃不够这个量，降 LDL 效果很有限。'
  },

  /* ---------------- 其他常见补剂 ---------------- */
  coq10: {
    maintain: { value: '100–200 mg/天', note: '没有标准推荐量；随含脂食物服用可提高吸收。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量；他汀相关肌肉症状可试用 100–200 mg/天，需医生评估。' },
    research: [
      { outcome: '心力衰竭', dose: '300 mg/天', tag: 'partial', note: 'Q-SYMBIO RCT 显示主要心血管事件减少，但样本量有限。', src: 'Q-SYMBIO 2014' },
      { outcome: '偏头痛预防', dose: '300 mg/天（100 mg × 3）', tag: 'limited', note: '小样本 RCT 提示发作减少，证据质量中等偏低。', src: 'Sándor 2005, Neurology' },
      { outcome: '帕金森病', dose: '1200 mg/天', tag: 'none', note: 'QE3 RCT 未显示进展改善。', src: 'QE3 2014' }
    ],
    limits: '未制定 UL；与华法林合用可能降低 INR；超过 300 mg 建议分次随餐。',
    caution: '泛醇与泛醌在常规剂量下差异不大，不必为剂型支付过高溢价。'
  },

  probiotics: {
    maintain: { value: '10⁸–10¹⁰ CFU/天，菌株特异', note: '没有统一推荐量；效果取决于具体菌株，不是 CFU 越高越好。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '抗生素相关腹泻', dose: '10⁹–10¹⁰ CFU/天', tag: 'benefit', note: 'Cochrane 2019 中等质量证据支持，需与抗生素间隔 2 小时。', src: 'Cochrane 2019' },
      { outcome: '肠易激综合征', dose: '特定菌株，10⁹–10¹⁰ CFU/天', tag: 'partial', note: '部分菌株（如 LGG、VSL#3）改善症状，不同菌株不能互相替代。', src: 'Ford 2014, Am J Gastroenterol' }
    ],
    limits: '未制定 UL；免疫抑制、危重患者或中心静脉导管使用者有感染风险。',
    caution: '益生菌不是“菌越多越好”；买之前看清菌株编号与活菌数。'
  },

  collagen: {
    maintain: { value: '2.5–10 g/天', note: '没有标准推荐量；水解胶原蛋白肽研究最充分。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '皮肤弹性与皱纹', dose: '2.5–10 g/天 × 8–12 周', tag: 'partial', note: 'Meta 分析显示小幅改善，效果温和。', src: 'Choi 2019, Int J Dermatol' },
      { outcome: '关节疼痛', dose: '8–12 g/天 × 12 周', tag: 'partial', note: '部分 RCT 显示疼痛评分下降，研究异质性较大。', src: 'García-Coronado 2019, Int Orthop' }
    ],
    limits: '未制定 UL；胶原蛋白不是优质蛋白替代品。',
    caution: '效果温和，不能替代防晒、力量训练和整体蛋白质摄入。'
  },

  melatonin: {
    maintain: { value: '0.5–3 mg，睡前 30–60 分钟', note: '从 0.5–1 mg 开始；0.5 mg 与 3 mg 在睡眠潜伏期上的差异不大。' },
    correct: { value: '不适用', note: '褪黑素不是必需营养素，没有缺乏纠正剂量。' },
    research: [
      { outcome: '入睡潜伏期', dose: '0.5–5 mg', tag: 'partial', note: 'Brzezinski 2005 与 Auld 2017 Meta 显示平均缩短约 4–7 分钟，效果温和。', src: 'Ferracioli-Oda 2013, PLoS One' },
      { outcome: '时差', dose: '0.5–5 mg，到达后睡前服用', tag: 'benefit', note: '对跨时区飞行的节律调整有中等证据。', src: 'Cochrane 2002' },
      { outcome: '老年人失眠', dose: '缓释 2 mg', tag: 'partial', note: 'RCT 显示睡眠质量改善；普通速释片证据较弱。', src: 'RCT' }
    ],
    limits: '未制定 UL；常见次日嗜睡；与抗凝药、免疫抑制剂、CYP1A2 抑制剂有相互作用；孕期慎用。',
    caution: 'AASM 2017 不推荐用褪黑素治疗普通入睡困难；先纠正睡眠习惯，再考虑短期使用。'
  },

  /* ---------------- 运动与氨基酸 ---------------- */
  creatine: {
    maintain: { value: '3–5 g/天', note: '一水肌酸研究最充分；每天固定时间服用即可，不需要“冲击期”。' },
    correct: { value: '不适用；可选负荷 20 g/天 × 5–7 天', note: '负荷方案可更快饱和肌肉，但 3–5 g/天连续 4 周也能达到同样水平。' },
    research: [
      { outcome: '力量与瘦体重', dose: '3–5 g/天 × 4 周以上', tag: 'benefit', note: 'Meta 分析显示力量与瘦体重小幅增加，配合抗阻训练效果更明显。', src: 'ISSN 立场声明' },
      { outcome: '认知', dose: '5–20 g/天', tag: 'limited', note: '健康人群认知获益证据不一致，睡眠剥夺场景下可能有短期作用。', src: 'Avgerinos 2018, Exp Gerontol' }
    ],
    limits: '未制定 UL；肾功能不全者慎用；保证饮水，避免与大量咖啡因同时使用。',
    caution: '一水肌酸证据最充分，不需要买更贵的盐酸肌酸或缓冲肌酸。'
  },

  bcaa: {
    maintain: { value: '无必需补充量', note: '蛋白质摄入充足时，BCAA 不是必需补充剂。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '肌肉增长', dose: '5–10 g/天', tag: 'none', note: 'Meta 分析显示不如等量完整蛋白，对训练人群无额外获益。', src: 'Plotkin 2021, Int J Sport Nutr Exerc Metab' },
      { outcome: '肌肉酸痛', dose: '5–10 g/天', tag: 'limited', note: '证据弱，效果不稳定。', src: 'Meta 分析' }
    ],
    limits: '未制定 UL；与色氨酸、酪氨酸竞争转运；肾病者慎用。',
    caution: '吃够蛋白质就不需要 BCAA；支链氨基酸不能替代必需氨基酸。'
  },

  carnitine: {
    maintain: { value: '无推荐量', note: '人体可合成，杂食者通常不缺。' },
    correct: { value: '原发性肉碱缺乏 50–100 mg/kg/天（处方）', note: '属于罕见病治疗，必须由医生管理。' },
    research: [
      { outcome: '体重与体脂', dose: '1–2 g/天', tag: 'none', note: 'Meta 分析显示减重效果有限，临床意义不足。', src: 'Pooyandjoo 2016, Obes Rev' },
      { outcome: '糖尿病神经病变', dose: '乙酰左旋肉碱 1–2 g/天', tag: 'limited', note: '小样本 RCT 提示症状改善，证据质量低。', src: '小样本 RCT' }
    ],
    limits: '未制定 UL；可能升高 TMAO；癫痫患者与丙戊酸合用需谨慎。',
    caution: '肉碱不是减脂补剂；素食者也不一定需要补充。'
  },

  'beta-alanine': {
    maintain: { value: '3.2–6.4 g/天，分次', note: '需要连续 4 周以上才提高肌肉肌肽；不是训练前急性补剂。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '60–240 秒高强度运动', dose: '4–6 g/天 × 4–6 周', tag: 'benefit', note: 'Meta 分析显示肌肉肌肽升高、运动能力改善；短于 60 秒或长于 4 分钟的项目获益有限。', src: 'Trexler 2015, ISSN 立场声明' }
    ],
    limits: '未制定 UL；单次超过 800 mg 易出现皮肤刺痛，分次或缓释可减轻。',
    caution: '需要连续 4 周以上才见效；不要指望训练前临时吃一包。'
  },

  /* ---------------- 运动与氨基酸（新增条目） ---------------- */
  taurine: {
    maintain: { value: '1–3 g/天', note: '正常饮食者通常不缺；作为运动补剂时常见 1–3 g/天，证据效应温和。' },
    correct: { value: '不适用', note: '没有确诊缺乏的常规纠正方案；长期完全肠外营养者由临床营养团队处理。' },
    research: [
      { outcome: '耐力运动表现', dose: '1–3 g，运动前 60–90 分钟 × 1–3 周', tag: 'limited', note: 'Meta 分析显示力竭时间可能轻度延长，但研究样本小、异质性大，效应小于咖啡因。', src: 'Waldron 2018, Sports Med' },
      { outcome: '运动后疲劳与氧化应激', dose: '1–2 g/天 × 2–4 周', tag: 'limited', note: '部分小样本试验提示主观疲劳下降，硬结局不足。', src: '小样本 RCT' }
    ],
    limits: '未制定 UL；EFSA 认为 3 g/天未见安全担忧；高剂量可致腹泻。',
    caution: '能量饮料里的咖啡因和糖，风险通常大于牛磺酸本身。'
  },

  glycine: {
    maintain: { value: '无标准推荐量', note: '蛋白质摄入充足时人体可自行合成，不需要额外补充。' },
    correct: { value: '不适用', note: '没有确诊缺乏的纠正剂量；严重营养不良按整体营养方案处理。' },
    research: [
      { outcome: '入睡与睡眠质量', dose: '3 g，睡前 30–60 分钟 × 1–2 周', tag: 'limited', note: '小样本 RCT 显示核心体温下降、入睡潜伏期缩短；重复研究少，不能当作安眠药。', src: 'Bannai 2012, J Pharmacol Sci' },
      { outcome: '胶原合成', dose: '胶原肽 10–15 g/天 × 8–12 周', tag: 'limited', note: '研究多使用胶原肽而非纯甘氨酸，不能把效果单独归因于甘氨酸。', src: '胶原肽综述' }
    ],
    limits: '未制定 UL；单次超过 10 g 可能引起恶心、腹泻；草酸钙结石者避免长期大剂量。',
    caution: '与镇静催眠药或酒精同服可能加重嗜睡。'
  },

  citrulline: {
    maintain: { value: '无标准推荐量', note: '人体可合成，食物中也有；作为运动补剂常见 3–6 g/天。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量；尿素循环障碍患者禁用。' },
    research: [
      { outcome: '抗阻运动表现', dose: '瓜氨酸苹果酸 6–8 g，运动前 60 分钟', tag: 'limited', note: '部分试验显示重复次数增加，整体证据不一致，效应小于肌酸。', src: 'Gonzalez & Trexler 2020, J Strength Cond Res' },
      { outcome: '血压', dose: '3–6 g/天 × 4–8 周', tag: 'partial', note: 'Meta 分析提示收缩压小幅下降，临床意义有限。', src: 'Meta 分析' }
    ],
    limits: '未制定 UL；高剂量可致胃部不适或腹泻；与降压药、硝酸酯类、PDE5 抑制剂叠加可致低血压。',
    caution: '尿素循环障碍患者禁用；手术前两周停用。'
  },

  arginine: {
    maintain: { value: '无标准推荐量', note: '人体可合成，正常饮食者不需要额外补充。' },
    correct: { value: '不适用', note: '没有常规缺乏纠正剂量；部分先天性代谢病按专科方案处理。' },
    research: [
      { outcome: '急性心肌梗死后结局', dose: '3 g，每日 3 次 × 6 个月', tag: 'harm', note: 'VINTAGE MI 试验因死亡率升高提前终止，心梗后不应补充。', src: 'Schulman 2006, JAMA' },
      { outcome: '内皮功能与血压', dose: '3–6 g/天', tag: 'limited', note: '小样本研究提示内皮功能改善，硬结局证据不足。', src: 'Böger 2007, J Nutr' }
    ],
    limits: '未制定 UL；高剂量易致腹泻；与降压药、硝酸酯类、PDE5 抑制剂合用可致显著低血压。',
    caution: '活动期疱疹感染、哮喘和心梗后人群慎用或禁用。'
  },

  glutamine: {
    maintain: { value: '无标准推荐量', note: '人体可合成，正常饮食者通常不缺；运动补剂常见 5–10 g/天。' },
    correct: { value: '不适用', note: '临床肠内或肠外营养按医嘱执行，不是自行补充的适应症。' },
    research: [
      { outcome: '重症患者临床结局', dose: '高剂量肠内或肠外谷氨酰胺', tag: 'none', note: '多项 RCT 与 Meta 分析未显示死亡率获益，部分试验出现安全性信号。', src: 'Critical Care 2020 等' },
      { outcome: '运动后免疫与恢复', dose: '5–10 g/天', tag: 'limited', note: '小样本研究结果不一致，不能证明减少感染。', src: 'Coqueiro 2019, Nutrients' }
    ],
    limits: '未制定 UL；严重肝功能不全或肝性脑病患者禁用；肾功能不全者高剂量需评估。',
    caution: '不要用谷氨酰胺替代蛋白质摄入。'
  },

  tyrosine: {
    maintain: { value: '无标准推荐量', note: '酪氨酸是条件必需氨基酸，正常饮食者不需要补充。' },
    correct: { value: '不适用', note: '没有常规缺乏纠正剂量；遗传性酪氨酸血症按专科方案处理。' },
    research: [
      { outcome: '应激或认知任务表现', dose: '100–150 mg/kg', tag: 'limited', note: '系统综述显示仅在睡眠剥夺、寒冷、噪音等应激条件下可能有效，健康人群日常认知无稳定获益。', src: 'Jongkees 2015, J Psychiatr Res' },
      { outcome: '情绪与警觉', dose: '500–2000 mg/天', tag: 'limited', note: '结果不一致，不能替代抗抑郁治疗。', src: 'Hase 2015, Pharmacol Biochem Behav' }
    ],
    limits: '未制定 UL；与 MAOI 合用可诱发高血压危象，属禁忌；甲亢患者慎用。',
    caution: '与左旋多巴同服会竞争转运，可能降低药效。'
  },

  theanine: {
    maintain: { value: '无标准推荐量', note: '茶叶中含有茶氨酸，日常饮茶即可摄入；补充剂常见 100–200 mg。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '压力与焦虑评分', dose: '200–400 mg/天 × 4 周', tag: 'limited', note: '小样本 RCT 显示压力相关症状下降，证据质量中等偏低。', src: 'Hidese 2019, Nutrients' },
      { outcome: '咖啡因复配后的警觉与注意力', dose: '茶氨酸 100–200 mg + 咖啡因 100–200 mg', tag: 'limited', note: '部分研究提示可减轻咖啡因引起的紧张感，结果不一致。', src: 'Owen 2008, Nutr Neurosci' }
    ],
    limits: '未制定 UL；低血压者慎用；与镇静药或酒精合用可能加重嗜睡。',
    caution: '不能替代抗焦虑药物或睡眠卫生。'
  },

  tryptophan: {
    maintain: { value: '无标准推荐量', note: '色氨酸是必需氨基酸，蛋白质摄入充足即可满足。' },
    correct: { value: '不适用', note: '没有常规缺乏纠正剂量。' },
    research: [
      { outcome: '睡眠', dose: '500–1000 mg，睡前', tag: 'limited', note: '小样本研究提示入睡潜伏期缩短，重复性不足。', src: 'Hartmann 1982, J Psychiatr Res' },
      { outcome: '情绪', dose: '1–2 g/天', tag: 'limited', note: '短期研究结果不一致，不能替代抗抑郁治疗。', src: '综述' }
    ],
    limits: '未制定 UL；与 SSRI、SNRI、MAOI、曲普坦类、曲马多、圣约翰草合用可致血清素综合征。',
    caution: '5-HTP 与色氨酸不要叠加使用。'
  },

  alcar: {
    maintain: { value: '无标准推荐量', note: '人体可合成肉碱，杂食者通常不缺。' },
    correct: { value: '原发性肉碱缺乏按医嘱（常见 50–100 mg/kg/天）', note: '属于罕见病治疗，必须由医生管理。' },
    research: [
      { outcome: '糖尿病周围神经病变', dose: '1500–3000 mg/天 × 3–12 个月', tag: 'partial', note: '部分 RCT 与 Meta 分析提示症状和神经传导改善，证据质量中等。', src: 'Sima 2005, Diabetes Care' },
      { outcome: '认知与疲劳', dose: '1000–2000 mg/天', tag: 'limited', note: '小样本研究结果不一致。', src: '小样本 RCT' }
    ],
    limits: '未制定 UL；可能降低癫痫发作阈值；与华法林合用有个案报告 INR 升高。',
    caution: '晚间服用可能影响睡眠。'
  },

  hmb: {
    maintain: { value: '无标准推荐量', note: '人体可由亮氨酸生成；作为运动补剂常见 1.5–3 g/天。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '抗阻训练瘦体重与力量', dose: '3 g/天 × 3–6 周', tag: 'limited', note: '早期研究显示获益，近期高质量试验在已训练人群中未复制，整体效应很小。', src: 'ISSN 2013 立场声明' },
      { outcome: '老年人肌肉量', dose: '1.5–3 g/天', tag: 'limited', note: '小样本研究提示可能减缓肌肉流失，证据不足。', src: 'Fitschen 2013, Nutrition' }
    ],
    limits: '未制定 UL；HMB 钙会与四环素类、喹诺酮类抗生素螯合，需间隔 2 小时。',
    caution: '蛋白质吃够、训练到位时，HMB 的额外收益很有限。'
  },

  betaine: {
    maintain: { value: '无标准推荐量', note: '甜菜、菠菜和全谷物可提供甜菜碱；补充剂常见 2.5–5 g/天。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '力量与爆发力', dose: '2.5 g，每日 2 次 × 6 周', tag: 'limited', note: 'Meta 分析提示小幅改善，研究规模小、方案差异大。', src: 'Ismaeel 2021, J Strength Cond Res' },
      { outcome: '同型半胱氨酸', dose: '2.5–5 g/天', tag: 'partial', note: '可降低同型半胱氨酸，但未证明转化为心血管获益。', src: 'Olthof 2003, J Nutr' }
    ],
    limits: '未制定 UL；甜菜碱盐酸盐会增加胃酸，溃疡和反流者不宜；高剂量可致腹泻。',
    caution: '不是减脂补剂；肾功能不全者高剂量需评估。'
  },

  whey: {
    maintain: { value: '按蛋白缺口 20–40 g/天', note: '先算每日总蛋白，目标 1.2–2.0 g/kg 体重，乳清只补差额。' },
    correct: { value: '不适用', note: '蛋白质-能量营养不良按临床营养方案处理，不是自行加蛋白粉。' },
    research: [
      { outcome: '抗阻训练肌肉量与力量', dose: '总蛋白 1.2–2.0 g/kg/天，补充 20–40 g/天', tag: 'benefit', note: 'Meta 分析显示补充蛋白可小幅增加肌肉量和力量，接近总蛋白目标后收益递减。', src: 'Morton 2018, Br J Sports Med' },
      { outcome: '老年人肌少症', dose: '20–30 g/次，每日 1–2 次', tag: 'partial', note: '与抗阻训练联合时效果更明确，单用有限。', src: 'Bauer 2013, PROT-AGE 共识' }
    ],
    limits: '无明确 UL；总蛋白过高需考虑肾功能；慢性肾病患者须限蛋白。',
    caution: '牛奶蛋白过敏者禁用；食物优先，蛋白粉不是必需品。'
  },

  eaa: {
    maintain: { value: '无标准推荐量', note: '优先通过完整蛋白质满足必需氨基酸需求。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '肌肉蛋白合成', dose: '10–15 g/次', tag: 'partial', note: '可刺激肌肉蛋白合成，但同等蛋白量的乳清通常更便宜、效果不差。', src: 'Churchward-Venne 2012, J Physiol' },
      { outcome: '耐力运动表现', dose: '10–15 g/次', tag: 'limited', note: '证据弱，不能替代碳水补剂。', src: 'ISSN 立场声明' }
    ],
    limits: '未制定 UL；苯丙酮尿症患者禁用含苯丙氨酸产品；肾病者需控制总氮负荷。',
    caution: '与左旋多巴同服可能竞争吸收，应错开时间。'
  },

  caffeine: {
    maintain: { value: '≤400 mg/天（健康非孕期成人）', note: '孕期上限 200 mg/天；对咖啡因敏感者应从更低剂量开始。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量；过量中毒按急诊处理。' },
    research: [
      { outcome: '运动表现', dose: '3–6 mg/kg，运动前 60 分钟', tag: 'benefit', note: '力量、耐力和爆发力均有小到中等程度改善，是证据最充分的运动补剂之一。', src: 'Guest 2021, ISSN 立场声明' },
      { outcome: '警觉与认知', dose: '100–200 mg', tag: 'benefit', note: '短期提高警觉和反应速度；耐受后效应减弱。', src: 'Grgic 2020, Br J Sports Med' },
      { outcome: '睡眠（危害）', dose: '睡前 6 小时内 200 mg', tag: 'harm', note: '延迟入睡、缩短总睡眠时间，个体差异大。', src: 'Drake 2013, J Clin Sleep Med' }
    ],
    limits: '健康成人 400 mg/天；孕期 200 mg/天；心律失常、未控制高血压、焦虑障碍者需限制。',
    caution: '与氟伏沙明、环丙沙星等 CYP1A2 抑制剂合用会显著减慢代谢。'
  },

  electrolytes: {
    maintain: { value: '按出汗量补充，日常不需要', note: '普通饮食和饮水足以满足日常需求；只有长时间运动、高温或腹泻时才需要额外补充。' },
    correct: { value: '腹泻脱水使用口服补液盐（ORS）', note: '按说明书冲配，少量多次；严重脱水需就医。' },
    research: [
      { outcome: '长时间运动中的补液与耐力', dose: '钠 300–600 mg/L，按出汗量 400–800 ml/小时', tag: 'partial', note: '可减少低钠血症和容量不足，但过量饮水同样危险。', src: 'ACSM 2007 立场声明' },
      { outcome: '热环境运动表现', dose: '个体化补钠', tag: 'limited', note: '出汗率和汗钠浓度个体差异很大，固定配方并不适合所有人。', src: 'Baker 2017, Sports Med' }
    ],
    limits: '钠约 2000 mg/天（中国 DRIs）；心衰、肾病、未控制高血压需限钠；补钾需防高钾血症。',
    caution: '运动饮料不能替代口服补液盐治疗腹泻脱水。'
  },

  casein: {
    maintain: { value: '按蛋白缺口 20–40 g/天', note: '与乳清一样，先满足每日总蛋白目标，再考虑类型差异。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '睡前蛋白与过夜恢复', dose: '30–40 g，睡前', tag: 'limited', note: '小样本研究提示夜间肌肉蛋白合成增加，长期肌肉量结局证据不足。', src: 'Res 2012, Med Sci Sports Exerc' },
      { outcome: '饱腹感', dose: '20–40 g/次', tag: 'partial', note: '消化较慢，饱腹感强于乳清，但减脂效果取决于总能量。', src: 'Veldhorst 2008, Physiol Behav' }
    ],
    limits: '无明确 UL；慢性肾病患者需在医生指导下控制总蛋白。',
    caution: '牛奶蛋白过敏者禁用；与左甲状腺素间隔 4 小时以上。'
  },

  /* ---------------- 草本与植物提取物（新增条目） ---------------- */
  curcumin: {
    maintain: { value: '500–1000 mg/天（含吸收增强配方）', note: '普通姜黄素吸收差，研究多使用胡椒碱、磷脂复合物或纳米制剂。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '膝骨关节炎疼痛', dose: '500–1500 mg/天 × 8–12 周', tag: 'partial', note: 'Meta 分析提示疼痛和功能小幅改善，研究异质性大、部分试验质量低。', src: 'Daily 2016, J Med Food' },
      { outcome: '血脂', dose: '500–1000 mg/天', tag: 'limited', note: '结果不一致，不能替代他汀。', src: 'Meta 分析' }
    ],
    limits: '未制定 UL；高剂量有个案报告肝损伤；胆结石或胆道梗阻者慎用。',
    caution: '围手术期提前 2 周停用；与抗凝抗血小板药合用需评估出血风险。'
  },

  quercetin: {
    maintain: { value: '500–1000 mg/天', note: '洋葱、苹果、茶等食物中含有槲皮素；补充剂剂量远高于膳食摄入。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '血压', dose: '500–1000 mg/天 × 4–8 周', tag: 'partial', note: 'Meta 分析显示收缩压约下降 3 mmHg，舒张压变化不确定。', src: 'Serban 2016, J Am Heart Assoc' },
      { outcome: '过敏症状', dose: '500–1000 mg/天', tag: 'limited', note: '小样本研究提示组胺释放减少，临床终点证据不足。', src: 'Mlcek 2016, Molecules' }
    ],
    limits: '未制定 UL；抑制 CYP3A4 和 P-糖蛋白；肾功能不全者代谢物可能蓄积。',
    caution: '与他克莫司、环孢素等治疗窗窄的药物合用需医生评估。'
  },

  resveratrol: {
    maintain: { value: '150–500 mg/天', note: '葡萄皮、红酒中含量有限；补充剂剂量远高于膳食水平。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '血压与血脂', dose: '150–500 mg/天 × 4–12 周', tag: 'limited', note: 'Meta 分析结果不一致，部分研究提示小幅改善。', src: 'Ramírez-Garza 2018, Nutrients' },
      { outcome: '胰岛素敏感性', dose: '150–500 mg/天', tag: 'limited', note: '小样本研究结果矛盾，不能用于糖尿病治疗。', src: 'Timmers 2011, Cell Metab' }
    ],
    limits: '未制定 UL；高剂量可致胃肠不适；体外抑制 CYP3A4。',
    caution: '人体硬结局证据不足；激素敏感性疾病患者慎用。'
  },

  berberine: {
    maintain: { value: '500 mg，每日 2–3 次，随餐', note: '这是研究中的短期用量，不是长期保健剂量。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '2 型糖尿病血糖', dose: '500 mg，每日 2–3 次 × 8–12 周', tag: 'partial', note: 'Meta 分析显示 HbA1c 约下降 0.7–0.9%，但试验多在中国、样本量有限。', src: 'Lan 2015, J Ethnopharmacol' },
      { outcome: '血脂', dose: '500–1500 mg/天', tag: 'partial', note: '可轻度降低 LDL 和甘油三酯，硬结局未验证。', src: 'Kong 2004, Nat Med' }
    ],
    limits: '未制定 UL；抑制 CYP3A4、CYP2D6 和 P-糖蛋白；孕妇、哺乳期、新生儿和 G6PD 缺乏者禁用。',
    caution: '不能替代降糖药；与二甲双胍合用需监测血糖。'
  },

  ginkgo: {
    maintain: { value: '120–240 mg/天，分 2–3 次', note: '使用标准化提取物（如 EGb 761），不是普通银杏叶茶。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '认知与痴呆', dose: '120–240 mg/天 × 6 个月以上', tag: 'none', note: 'Cochrane 系统综述未显示可预防痴呆或改善健康老年人认知。', src: 'Birks 2009, Cochrane' },
      { outcome: '间歇性跛行', dose: '120–240 mg/天', tag: 'limited', note: '部分较早期试验提示步行距离增加，证据质量低。', src: 'Nicolai 2009, Cochrane CD006888' }
    ],
    limits: '未制定 UL；与抗凝抗血小板药合用增加出血风险；可能降低癫痫阈值。',
    caution: '不能替代痴呆的规范评估与治疗；围手术期提前 2 周停用。'
  },

  ginseng: {
    maintain: { value: '200–400 mg/天（标准化提取物）', note: '不同人参种类和提取物规格差异大，剂量不能直接互换。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '疲劳', dose: '200–400 mg/天 × 4–8 周', tag: 'limited', note: '小样本 RCT 提示疲劳评分下降，研究质量参差。', src: 'Cochrane 2010' },
      { outcome: '认知', dose: '200–400 mg/天', tag: 'none', note: 'Cochrane 系统综述未显示稳定认知获益。', src: 'Geng 2010, Cochrane' }
    ],
    limits: '未制定 UL；可能引起失眠、心悸、头痛；与华法林合用可能降低抗凝效果。',
    caution: '躁狂、焦虑障碍患者慎用；晚间服用更易失眠。'
  },

  ashwagandha: {
    maintain: { value: '250–600 mg/天 × 8 周', note: '使用标准化醉茄内酯提取物；不建议无间断长期连续服用。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '压力与焦虑', dose: '300–600 mg/天 × 8 周', tag: 'limited', note: '小样本 RCT 显示焦虑量表下降，样本量小、发表偏倚风险高。', src: 'Chandrasekhar 2012, Indian J Psychol Med' },
      { outcome: '睡眠', dose: '250–600 mg/天 × 6–8 周', tag: 'limited', note: '部分研究提示睡眠效率改善，证据不足。', src: 'Salve 2019, Cureus' }
    ],
    limits: '未制定 UL；有个案报告肝损伤；可能升高甲状腺激素。',
    caution: '孕妇禁用；自身免疫病和免疫抑制剂使用者慎用。'
  },

  rhodiola: {
    maintain: { value: '200–600 mg/天', note: '使用标准化 3% 红景天苷、1% 红景天素提取物。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '疲劳', dose: '200–600 mg/天 × 4–8 周', tag: 'limited', note: '系统综述提示可能改善疲劳，但试验样本小、方法学质量低。', src: 'Ishaque 2012, BMC Complement Altern Med' },
      { outcome: '压力相关症状', dose: '200–400 mg/天', tag: 'limited', note: '小样本研究结果不一致。', src: 'Olsson 2009, Planta Med' }
    ],
    limits: '未制定 UL；可能引起失眠、焦虑、心悸；可能降低血糖。',
    caution: '避免晚间服用；与抗抑郁药合用需谨慎。'
  },

  valerian: {
    maintain: { value: '300–600 mg，睡前 30–60 分钟', note: '使用标准化缬草烯酸提取物；连续 2–4 周评估效果。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '入睡潜伏期与睡眠质量', dose: '300–600 mg，睡前', tag: 'limited', note: 'Meta 分析结果不一致，部分试验显示主观睡眠改善，客观指标无差异。', src: 'Bent 2006, Am J Med' },
      { outcome: '焦虑', dose: '300–600 mg/天', tag: 'none', note: '证据不足，不能替代抗焦虑治疗。', src: 'Miyasaka 2006, Cochrane CD004515' }
    ],
    limits: '未制定 UL；与苯二氮䓬类、唑吡坦、巴比妥类或酒精合用可致过度镇静。',
    caution: '服药后不要驾车或操作机械；围手术期提前 2 周停用。'
  },

  'milk-thistle': {
    maintain: { value: '200–400 mg/天（水飞蓟素）', note: '使用标准化 70–80% 水飞蓟素提取物；分 2–3 次。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '酒精性肝病或病毒性肝炎', dose: '420–800 mg/天 × 6–12 个月', tag: 'none', note: 'Cochrane 系统综述未显示死亡率或肝组织学改善。', src: 'Rambaldi 2007, Cochrane' },
      { outcome: '肝酶', dose: '200–800 mg/天', tag: 'limited', note: '部分试验提示转氨酶下降，临床结局未改善。', src: 'Saller 2008, Forsch Komplementmed' }
    ],
    limits: '未制定 UL；可能抑制 CYP2C9 和 UGT；菊科植物过敏者慎用。',
    caution: '不能替代戒酒、抗病毒治疗或肝病规范管理。'
  },

  'saw-palmetto': {
    maintain: { value: '320 mg/天', note: '使用标准化 85–95% 脂肪酸和甾醇提取物。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '良性前列腺增生症状', dose: '320 mg/天 × 6–12 个月', tag: 'none', note: 'Cochrane 与 JAMA 试验均显示与安慰剂无显著差异。', src: 'Tacklind 2012, Cochrane；Barry 2011, JAMA' },
      { outcome: 'PSA', dose: '320 mg/天', tag: 'none', note: '不能降低前列腺癌风险，也不能替代 PSA 筛查。', src: 'RCT' }
    ],
    limits: '未制定 UL；可能增加出血风险；可能轻度降低 PSA。',
    caution: '不能替代 BPH 药物或手术；育龄女性避免使用。'
  },

  garlic: {
    maintain: { value: '大蒜粉片 600–900 mg/天（相当于大蒜素 3.6–5.4 mg）', note: '陈化大蒜提取物常见 600–1200 mg/天；生蒜 1–2 瓣/天。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '高血压患者血压', dose: 'AGE 600–1200 mg/天 × 8–12 周', tag: 'partial', note: 'Meta 分析显示高血压人群收缩压约下降 8 mmHg，正常血压者变化较小。', src: 'Ried 2016, J Nutr' },
      { outcome: '血脂', dose: '600–1200 mg/天', tag: 'limited', note: '部分 Meta 分析提示小幅改善，结果不一致。', src: 'Cochrane' }
    ],
    limits: '未制定 UL；与抗凝抗血小板药合用增加出血风险；可能降低沙奎那韦血药浓度。',
    caution: '不能替代降压药；围手术期提前 7–10 天停用。'
  },

  cranberry: {
    maintain: { value: '250–500 mg 提取物/天（约 36 mg PACs）', note: '以原花青素（PACs）含量为标准化依据，不是单看提取物重量。' },
    correct: { value: '不适用', note: '不能治疗已发生的尿路感染，需就医。' },
    research: [
      { outcome: '复发性尿路感染预防', dose: '36 mg PACs/天', tag: 'partial', note: 'Cochrane 2023 显示女性复发性 UTI 风险可能下降，儿童和老年人证据不足。', src: 'Williams 2023, Cochrane' },
      { outcome: '幽门螺杆菌根除辅助', dose: '蔓越莓汁或提取物', tag: 'limited', note: '小样本研究提示可能抑制黏附，不能替代抗生素方案。', src: '小样本 RCT' }
    ],
    limits: '未制定 UL；含草酸，草酸钙结石者慎用；果汁含糖高。',
    caution: '可能增强华法林作用，合用需监测 INR。'
  },

  elderberry: {
    maintain: { value: '300–900 mg/天（症状早期）', note: '使用标准化接骨木莓提取物；糖浆按产品标示。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '上呼吸道感染病程', dose: '300–900 mg/天 × 3–5 天', tag: 'limited', note: 'Meta 分析提示症状持续时间可能缩短，但试验样本小、异质性高。', src: 'Hawkins 2019, Complement Ther Med' },
      { outcome: '流感症状', dose: '15 ml 糖浆，每日 3–4 次', tag: 'limited', note: '小样本 RCT 提示退热和症状改善，不能替代抗病毒治疗。', src: 'Zakay-Rones 2004, J Int Med Res' }
    ],
    limits: '未制定 UL；可能增强免疫反应；糖浆含糖高。',
    caution: '生果、未成熟果实和茎叶含氰苷，不可生食或自制生果汁。'
  },

  'tart-cherry': {
    maintain: { value: '30–60 ml 浓缩汁/天', note: '或冻干粉 480–1000 mg/天；果汁 240–480 ml/天。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '运动后恢复与酸痛', dose: '30 ml 浓缩汁，每日 1–2 次 × 4–5 天', tag: 'limited', note: '小样本研究提示氧化应激和疼痛标志物下降，功能结局不一致。', src: 'Howatson 2010, Scand J Med Sci Sports' },
      { outcome: '睡眠', dose: '30 ml 浓缩汁，早晚各 1 次 × 2 周', tag: 'limited', note: '小样本研究提示睡眠时间和效率改善，证据不足。', src: 'Losso 2018, Am J Ther' }
    ],
    limits: '未制定 UL；钾含量较高，肾功能不全者注意；果汁和果干含糖高。',
    caution: '个案提示可能影响 INR，与华法林合用需监测。'
  },

  beetroot: {
    maintain: { value: '硝酸盐 400–800 mg/天', note: '相当于浓缩甜菜根汁 70–140 ml；运动前 2–3 小时使用。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '耐力运动表现', dose: '硝酸盐 400–800 mg，运动前 2–3 小时', tag: 'partial', note: 'Meta 分析显示耐力项目用时小幅缩短，效应在业余运动员中更明显。', src: 'Hoon 2013, Int J Sport Nutr Exerc Metab' },
      { outcome: '血压', dose: '硝酸盐 400–800 mg/天', tag: 'partial', note: '可降低收缩压约 3–5 mmHg，效应在高血压人群更明显。', src: 'Kapil 2010, Hypertension' }
    ],
    limits: '未制定 UL；与降压药、PDE5 抑制剂叠加可致低血压；含草酸和钾。',
    caution: '抗菌漱口水会削弱硝酸盐向亚硝酸盐的转化，降低效果。'
  },

  ginger: {
    maintain: { value: '1000–2000 mg/天，分次', note: '相当于鲜姜 1–3 g/天；不同提取物规格差异大。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '孕期恶心呕吐', dose: '1000–1500 mg/天，分次', tag: 'benefit', note: 'Cochrane 与 Meta 分析提示可减轻恶心，证据质量中低，但安全性较好。', src: 'Matthews 2015, Cochrane' },
      { outcome: '痛经', dose: '1000–2000 mg/天，经期前开始', tag: 'partial', note: '小样本 RCT 提示疼痛评分下降，证据有限。', src: 'Rahnama 2012, BMC Complement Altern Med' }
    ],
    limits: '未制定 UL；孕期超过 3–4 g/天安全性数据不足；与抗凝药合用可能增加出血风险。',
    caution: '胃食管反流、消化性溃疡患者可能加重烧心。'
  },

  /* ---------------- 其他常见补剂（新增条目） ---------------- */
  'ala-r': {
    maintain: { value: '300–600 mg/天', note: 'R-硫辛酸与消旋硫辛酸的毫克数不能直接互换，R 型剂量通常为消旋体的一半左右。' },
    correct: { value: '不适用', note: '没有常规缺乏纠正剂量；糖尿病神经病变方案见研究剂量。' },
    research: [
      { outcome: '糖尿病周围神经病变', dose: '600 mg/天 × 3–5 周（静脉或口服）', tag: 'partial', note: 'Meta 分析提示症状评分改善，但多数试验样本小、疗程短。', src: 'Mijnhout 2012, Int J Endocrinol' },
      { outcome: '氧化应激指标', dose: '300–600 mg/天', tag: 'limited', note: '可降低部分氧化应激标志物，未证明临床获益。', src: '小样本 RCT' }
    ],
    limits: '未制定 UL；空腹服用易恶心；与降糖药合用可能增加低血糖风险。',
    caution: '不能替代血糖控制和神经病变的规范治疗。'
  },

  nac: {
    maintain: { value: '600–1200 mg/天，分次', note: '常见于祛痰和抗氧化用途；不是所有人都需要长期服用。' },
    correct: { value: '对乙酰氨基酚中毒按医院方案', note: '按体重静脉或口服，必须由急诊或中毒中心执行。' },
    research: [
      { outcome: 'COPD 急性加重', dose: '600 mg，每日 2 次 × 12 个月', tag: 'partial', note: '部分 RCT 显示急性加重次数减少，结果不完全一致。', src: 'PANTHEON 2014, Lancet Respir Med' },
      { outcome: '特发性肺纤维化', dose: '600 mg，每日 3 次', tag: 'harm', note: 'PANTHER 试验因不良反应和缺乏获益提前终止。', src: 'PANTHER 2014, NEJM' }
    ],
    limits: '未制定 UL；与硝酸甘油合用可致严重低血压，应避免；大剂量可能延长凝血酶原时间。',
    caution: '哮喘患者雾化吸入可诱发支气管痉挛。'
  },

  glutathione: {
    maintain: { value: '250–500 mg/天（口服）', note: '口服吸收有限，效果不确定；食物中的含硫氨基酸和 NAC 可支持内源性合成。' },
    correct: { value: '不适用', note: '没有常规缺乏纠正剂量。' },
    research: [
      { outcome: '皮肤色素', dose: '500 mg/天 × 4 周', tag: 'limited', note: '小样本研究提示色素指数下降，证据质量低。', src: 'Weschawalit 2017, Clin Cosmet Investig Dermatol' },
      { outcome: '口服生物利用度', dose: '250–500 mg/天', tag: 'none', note: '口服谷胱甘肽大部分在肠道被分解，难以显著提高细胞内水平。', src: '药代研究' }
    ],
    limits: '未制定 UL；静脉美白无批准适应症，存在感染和肾损伤风险。',
    caution: '不要使用来源不明的静脉谷胱甘肽产品。'
  },

  astaxanthin: {
    maintain: { value: '4–12 mg/天', note: '随含脂肪的餐食服用可提高吸收。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '皮肤弹性与紫外线损伤', dose: '4–8 mg/天 × 8–12 周', tag: 'limited', note: '小样本 RCT 提示皮肤指标改善，不能替代防晒。', src: 'Tominaga 2012, Acta Biochim Pol' },
      { outcome: '血脂与氧化应激', dose: '12 mg/天', tag: 'limited', note: '部分研究提示甘油三酯下降，结果不一致。', src: 'Meta 分析' }
    ],
    limits: '未制定 UL；类胡萝卜素补充剂在吸烟者中的长期安全性需谨慎。',
    caution: '人体硬结局证据有限。'
  },

  lutein: {
    maintain: { value: '叶黄素 10 mg + 玉米黄质 2 mg/天', note: '这是 AREDS2 配方剂量；一般膳食补充可从 6–10 mg 开始。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '年龄相关性黄斑变性进展', dose: '叶黄素 10 mg + 玉米黄质 2 mg/天', tag: 'partial', note: 'AREDS2 显示可替代 β-胡萝卜素并降低吸烟者肺癌风险，对 AMD 进展有轻度保护。', src: 'AREDS2 2013, JAMA' },
      { outcome: '白内障', dose: '10 mg/天', tag: 'limited', note: '观察性研究提示关联，RCT 证据不足。', src: 'AREDS2 2013, JAMA（次要分析）' }
    ],
    limits: '未制定 UL；吸烟者避免含 β-胡萝卜素的配方；皮肤可能轻度黄染。',
    caution: '不能替代眼科治疗；AMD 患者应按眼科方案管理。'
  },

  lycopene: {
    maintain: { value: '10–30 mg/天', note: '番茄制品中的番茄红素与脂肪同食吸收更好；补充剂不是必需。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '前列腺癌预防', dose: '15–30 mg/天', tag: 'none', note: '剂量反应 Meta 分析与大型队列未证实番茄红素可降低前列腺癌风险。', src: 'Rowles 2018, Prostate Cancer Prostatic Dis' },
      { outcome: '血压', dose: '10–30 mg/天', tag: 'limited', note: '部分 Meta 分析提示小幅改善，临床意义有限。', src: 'Cheng 2017, Atherosclerosis' }
    ],
    limits: '未制定 UL；吸烟者高剂量类胡萝卜素补充需谨慎。',
    caution: '不能预防前列腺癌；食物优先。'
  },

  pqq: {
    maintain: { value: '10–20 mg/天', note: '研究常用 20 mg/天，较高剂量 40 mg/天；长期数据有限。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '认知', dose: '20 mg/天 × 12 周', tag: 'limited', note: '小样本 RCT 提示部分认知域改善，重复研究不足。', src: '小样本 RCT' },
      { outcome: '疲劳与睡眠', dose: '20 mg/天', tag: 'limited', note: '结果不一致，不能外推为抗衰老。', src: '小样本 RCT' }
    ],
    limits: '未制定 UL；人体安全性数据有限；动物高剂量曾观察到肾脏改变。',
    caution: '产品纯度差异大，选择有第三方检测的品牌。'
  },

  nmn: {
    maintain: { value: 'NR 250–1000 mg/天；NMN 250–600 mg/天', note: '两者都是 NAD+ 前体，不建议叠加使用。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: 'NAD+ 水平（替代终点）', dose: 'NR 250–1000 mg/天；NMN 250 mg/天', tag: 'partial', note: '可提高血液 NAD+ 水平，但这是替代终点，不等于延缓衰老。', src: 'Martens 2018, Nat Commun；Igarashi 2022, NPJ Aging' },
      { outcome: '代谢与衰老硬结局', dose: '250–1000 mg/天', tag: 'none', note: '目前没有足够证据证明可预防疾病或延长健康寿命。', src: 'Yoshino 2018, Cell Metab（综述）' }
    ],
    limits: '未制定 UL；长期安全性未知；肿瘤患者应避免自行使用。',
    caution: 'NMN 在中国尚未获批为普通食品原料，注意产品合规性。'
  },

  msm: {
    maintain: { value: '1.5–3 g/天', note: '骨关节炎研究使用 1.5–6 g/天，分次；从低剂量开始以减少胃肠不适。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '膝骨关节炎疼痛', dose: '1.5–6 g/天 × 12 周', tag: 'limited', note: '小样本 RCT 提示疼痛和功能改善，研究数量少、质量有限。', src: 'Kim 2006, BMC Complement Altern Med' },
      { outcome: '运动后肌肉酸痛', dose: '3 g/天', tag: 'limited', note: '小样本研究结果不一致。', src: '小样本 RCT' }
    ],
    limits: '未制定 UL；常见腹胀、腹泻、头痛和失眠；可能增强抗凝药效果。',
    caution: '不能替代运动、减重和骨关节炎规范治疗。'
  },

  glucosamine: {
    maintain: { value: '1500 mg/天', note: '硫酸氨基葡萄糖或盐酸氨基葡萄糖，一次或分次；疗程通常 3–6 个月评估。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '膝骨关节炎疼痛', dose: '1500 mg/天 × 6–24 个月', tag: 'none', note: 'GAIT 试验和 Cochrane 系统综述未显示整体优于安慰剂，亚组结果不稳定。', src: 'Clegg 2006, NEJM；Towheed 2005, Cochrane' },
      { outcome: '关节间隙狭窄', dose: '1500 mg/天 × 2 年', tag: 'none', note: '未证明可延缓结构进展。', src: 'Reginster 2001, Lancet' }
    ],
    limits: '未制定 UL；可能增强华法林作用；甲壳类严重过敏者慎用。',
    caution: '不能替代运动、减重和镇痛治疗。'
  },

  chondroitin: {
    maintain: { value: '800–1200 mg/天，分次', note: '硫酸软骨素研究较多；不同来源和分子量差异大。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: '膝骨关节炎疼痛', dose: '800–1200 mg/天 × 6–24 个月', tag: 'limited', note: 'Cochrane 2015 提示可能有小幅疼痛改善，但证据质量低；GAIT 试验整体无显著获益。', src: 'Singh 2015, Cochrane；Clegg 2006, NEJM' },
      { outcome: '关节结构', dose: '800 mg/天 × 2 年', tag: 'none', note: '未证明可逆转软骨损伤。', src: 'Michel 2005, Arthritis Rheum' }
    ],
    limits: '未制定 UL；可能增强抗凝药效果；常见胃部不适、腹泻和便秘。',
    caution: '单独使用证据弱，不能替代骨关节炎规范治疗。'
  },

  psyllium: {
    maintain: { value: '5–10 g/天，分 1–2 次', note: '每次至少配 250 ml 水；从 3–5 g 开始，逐步加量。' },
    correct: { value: '便秘 5–10 g/天 + 足量水', note: '起效通常需 1–3 天；顽固性便秘需就医排查病因。' },
    research: [
      { outcome: 'LDL 胆固醇', dose: '10–12 g/天 × 4–8 周', tag: 'benefit', note: 'Meta 分析显示 LDL-C 约下降 0.3 mmol/L，是证据较充分的膳食纤维之一。', src: 'Jovanovski 2018, Br J Nutr' },
      { outcome: '便秘', dose: '5–10 g/天', tag: 'benefit', note: '可增加排便频率、改善粪便性状。', src: '指南' },
      { outcome: '餐后血糖', dose: '5–10 g/餐', tag: 'partial', note: '可减缓胃排空和葡萄糖吸收，效果温和。', src: 'Gibb 2015, Diabetes Care' }
    ],
    limits: '未制定 UL；必须配足量水；与多数药物间隔至少 2 小时。',
    caution: '吞咽困难、食管狭窄或肠梗阻患者禁用；干吞可致食管梗阻。'
  },

  choline: {
    maintain: { value: '男 450 / 女 380 mg/天（总摄入）', note: '中国 DRIs 2023 成人适宜摄入量；孕期、哺乳期需要量增加。' },
    correct: { value: '不适用', note: '没有常规缺乏纠正剂量；长期肠外营养者按临床方案补充。' },
    research: [
      { outcome: '胎儿神经发育', dose: '孕期 450–930 mg/天', tag: 'limited', note: '观察性研究提示关联，RCT 证据有限。', src: 'Zeisel 2006, Annu Rev Nutr' },
      { outcome: '脂肪肝', dose: '500–1000 mg/天', tag: 'limited', note: '小样本研究提示肝脂肪含量改善，不能替代减重和病因治疗。', src: '小样本 RCT' }
    ],
    limits: 'UL 3000 mg/天；高剂量可致低血压、出汗、流涎和鱼腥味体味。',
    caution: '卵磷脂产品应按胆碱含量折算，不能只看卵磷脂重量。'
  },

  inositol: {
    maintain: { value: '2–4 g/天', note: '食物中也有肌醇；补充剂常用于 PCOS 和代谢研究。' },
    correct: { value: '不适用', note: '没有缺乏纠正剂量。' },
    research: [
      { outcome: 'PCOS 胰岛素抵抗与排卵', dose: '肌醇 2 g + D-手性肌醇 50 mg，每日 2 次', tag: 'partial', note: 'Meta 分析提示排卵率和胰岛素抵抗改善，但试验样本小、方案差异大。', src: 'Pundir 2018, BJOG' },
      { outcome: '焦虑与抑郁', dose: '4–18 g/天', tag: 'limited', note: '小样本研究结果不一致，不能替代精神科治疗。', src: 'Mukai 2014, Hum Psychopharmacol' }
    ],
    limits: '未制定 UL；常见腹胀、腹泻、恶心和头晕；可能增强抗凝或抗血小板药物效果。',
    caution: '双相障碍患者可能诱发躁狂，使用前必须咨询精神科医生。'
  },

  boron: {
    maintain: { value: '无标准推荐量（膳食约 1–3 mg/天）', note: '水果、坚果、豆类和咖啡可提供硼；补充剂不是必需。' },
    correct: { value: '不适用', note: '没有明确的缺乏纠正剂量。' },
    research: [
      { outcome: '骨代谢与雌激素', dose: '3 mg/天 × 12 周', tag: 'limited', note: '小样本研究提示尿钙和雌激素代谢改变，硬结局不足。', src: 'Nielsen 1987, FASEB J' },
      { outcome: '睾酮', dose: '6–10 mg/天', tag: 'limited', note: '小样本研究结果不一致，不能作为增睾方案。', src: 'Naghii 2011, J Trace Elem Med Biol' }
    ],
    limits: '未制定 UL；肾功能不全者排泄减慢，应避免蓄积；硼酸和硼砂有明确毒性。',
    caution: '不要用硼酸或硼砂作为补充剂；激素敏感性疾病患者避免使用。'
  },

  manganese: {
    maintain: { value: '4.5 mg/天（总摄入）', note: '中国 DRIs 2023 成人适宜摄入量；全谷物、坚果和茶是主要来源。' },
    correct: { value: '不适用', note: '锰缺乏罕见；长期肠外营养缺乏按临床方案补充。' },
    research: [
      { outcome: '骨密度', dose: '2–5 mg/天', tag: 'limited', note: '小样本研究提示与骨代谢相关，证据不足。', src: 'Strause 1994, J Nutr' },
      { outcome: '锰缺乏（罕见）', dose: '按临床方案', tag: 'limited', note: '多见于长期肠外营养或特殊代谢病。', src: '病例系列' }
    ],
    limits: 'UL 11 mg/天；肝病尤其肝硬化患者易蓄积；长期肠外营养需监测血锰。',
    caution: '过量可致神经毒性；不要额外大剂量补锰。'
  }

};
