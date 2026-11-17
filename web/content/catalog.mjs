export const notesIntroduction = "Study notes, translations, and code in statistics, mathematics, logic, and programming.";
export const writingIntroduction = "Essays and reading guides on programming, logic, and mathematical writing.";

const entry = (url, title, description) => ({ url, title, ...(description ? { description } : {}) });

export const noteSections = [
  { id: "statistics", title: "Probability and statistics", entries: [
    entry("probstat.html", "概率与统计：PDF 笔记"),
  ] },
  { id: "mathematics", title: "Mathematics", entries: [
    entry("hoffman.html", "Linear Algebra — Hoffman and Kunze"),
    entry("analysis_notes.html", "分析：微积分、复分析与级数"),
    entry("measure.html", "测度论"),
    entry("combinatorics_notes.html", "组合学笔记"),
    entry("lattice_theory_notes.html", "格与序"),
    entry("cat_awodey.html", "范畴论笔记"),
  ], groups: [{ title: "Computational mathematics", entries: [
    entry("sicm.html", "古典力学的结构和解释"),
    entry("tg.html", "乌龟几何"),
    entry("cad.html", "计算机辅助设计的几何编程"),
  ] }] },
  { id: "logic", title: "Logic and type theory", entries: [
    entry("curry-howard.html", "Curry–Howard 同构讲义"),
    entry("prot.html", "证明与类型"),
    entry("spt.html", "结构证明论"),
    entry("little_typer.html", "The Little Typer"),
    entry("hott.html", "同伦类型论"),
    entry("topos.html", "Topos：逻辑的范畴分析"),
  ] },
  { id: "programming", title: "Programming languages", entries: [
    entry("denotational_semantics_notes.html", "指称语义学讲义：域与不动点"),
    entry("ds.html", "指称语义学：书籍笔记"),
    entry("timp.html", "Scheme 的三种实现模型"),
    entry("p423.html", "P423：编译器构造"),
    entry("macro_notes.html", "宏与 DSL"),
    entry("brzozowski.html", "Brzozowski 导数"),
    entry("pe_jones.html", "部分求值"),
    entry("clos.html", "Common Lisp 面向对象编程"),
    entry("zil.html", "Learning ZIL"),
  ] },
  { id: "computation", title: "Computation and tools", entries: [
    entry("jones.html", "可计算性和计算复杂度"),
    entry("cmu15210.html", "并行和顺序算法"),
    entry("some_programs.html", "程序示例"),
    entry("maxima.html", "理解 Maxima"),
    entry("lem_editor.html", "Lem 编辑器使用笔记"),
    entry("smathml_everything.html", "SMathML 文档"),
  ], groups: [{ id: "materials", title: "Reference files", entries: [
    entry("notes/pl.pdf", "编程语言资料包（PDF）"),
    entry("notes/pl.zip", "编程语言代码集（ZIP）"),
  ] }] },
];

export const writingSections = [
  { id: "essays", title: "Essays", entries: [
    entry("programming.html", "关于程序设计的思考", "Abstraction and composition, with examples from Lisp and Scheme."),
    entry("classical_ai.html", "古典 AI 笔记", "Representation, pattern matching, and Lisp in classical AI."),
    entry("smathml_comments.html", "SMathML 注记", "Extensible rendering, cross-references, numbering, and code display in SMathML."),
  ] },
  { id: "reading-guides", title: "Reading guides", entries: [
    entry("logic.html", "逻辑学习指南", "Set theory reading from Peter Smith’s guide."),
  ] },
  { id: "tools", title: "Tools", entries: [
    entry("nutrition/", "补剂参考", "Reference tables for supplement doses, forms, food sources, and tests."),
  ] },
];

// A route can remain published without being offered as a separate article.
export const searchExclusions = {
  "index.html": "Homepage",
  "notes.html": "Subject navigation",
  "blog.html": "Writing navigation",
  "search.html": "Search interface",
  "research.html": "Profile navigation",
  "teaching.html": "Profile navigation",
  "contact.html": "Contact information",
  "cv.html": "Paused CV entry",
  "connections.html": "Links directory",
  "links.html": "Links directory",
  "ilinks.html": "Links directory",
  "intro.html": "Site information",
  "books.html": "External reading directory",
  "archive/index.html": "Archive navigation",
  "nutrition_by_sby.html": "Previous tool entry",
  "nutrition/index.html": "Interactive tool",
  "huyan.html": "Quotation collection",
  "linear_algebra.html": "Full volume duplicates the chapter pages",
  "linear_algebra_contents.html": "Chapter navigation",
  "linear_algebra_notes.html": "Subject navigation",
  "analysis_notes.html": "Subject navigation",
  "lattice_theory_notes.html": "Subject navigation",
  "macro_notes.html": "Subject navigation",
  "shufengaodai.html": "Alias of smathml_everything.html",
  "corewar.html": "Title without article content",
  "pointless.html": "Title without article content",
  "hocl.html": "Outline without article content",
  "sewpr.html": "Outline without article content",
  "macro.html": "Unfinished opening and outline",
  "mop.html": "Unfinished opening and outline",
  "oplss.html": "Opening question without an answer",
  "blind.html": "Book introduction and outline",
  "monad.html": "Source introduction without worked material",
  "polynomial_computation.html": "Book introduction and outline",
  "cltt.html": "Unfinished opening",
  "induc.html": "Unfinished opening",
  "hoffman_ch10.html": "Chapter introduction and empty sections",
};

const writingDescriptions = Object.fromEntries(writingSections.flatMap(section => section.entries)
  .filter(item => item.description).map(item => [item.url, { description: item.description }]));

export function searchMetadata(filename) {
  if (/^hoffman_(ch\d+|preface|appendix)\.html$/.test(filename)) {
    return { description: "Hoffman and Kunze, Linear Algebra. 线性代数译读。" };
  }
  if (filename === "probstat.html") {
    return { title: "概率与统计：PDF 笔记", description: "Probability and statistics. PDF notes on models, distributions, estimation, and inference.", summaryOnly: true };
  }
  return writingDescriptions[filename] ?? {};
}
