document.querySelectorAll(".article-tabs, .article-code-group").forEach((group, groupIndex) => {
  const panels = [...group.querySelectorAll(":scope > .article-tab")];
  if (panels.length < 2) return;
  const list = document.createElement("div");
  list.setAttribute("role", "tablist");
  list.setAttribute("aria-label", "Sections");
  const buttons = panels.map((panel, panelIndex) => {
    const heading = panel.querySelector(":scope > h3");
    const button = document.createElement("button");
    button.type = "button";
    button.id = `tab-${groupIndex}-${panelIndex}`;
    button.textContent = heading?.textContent ?? `Section ${panelIndex + 1}`;
    panel.id ||= `panel-${groupIndex}-${panelIndex}`;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", button.id);
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", panel.id);
    if (heading) heading.hidden = true;
    list.append(button);
    return button;
  });
  function activate(selected) {
    panels.forEach((panel, index) => {
      panel.hidden = index !== selected;
      buttons[index].setAttribute("aria-selected", String(index === selected));
      buttons[index].tabIndex = index === selected ? 0 : -1;
    });
  }
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => activate(index));
    button.addEventListener("keydown", event => {
      const targets = {
        ArrowRight: (index + 1) % buttons.length,
        ArrowLeft: (index + buttons.length - 1) % buttons.length,
        Home: 0,
        End: buttons.length - 1,
      };
      if (!(event.key in targets)) return;
      event.preventDefault();
      activate(targets[event.key]);
      buttons[targets[event.key]].focus();
    });
  });
  function revealAnchor() {
    let target;
    try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch { return; }
    const selected = panels.findIndex(panel => panel === target || panel.contains(target));
    if (selected >= 0) activate(selected);
  }
  group.prepend(list);
  activate(0);
  revealAnchor();
  addEventListener("hashchange", revealAnchor);
});
