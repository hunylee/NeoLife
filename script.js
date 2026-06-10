const tabGroups = document.querySelectorAll("[data-tabs]");

tabGroups.forEach((group) => {
  const tabs = Array.from(group.querySelectorAll("[role='tab']"));
  const panels = Array.from(group.querySelectorAll("[role='tabpanel']"));

  const activateTab = (selectedTab) => {
    tabs.forEach((tab) => {
      const isActive = tab === selectedTab;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.id === selectedTab.getAttribute("aria-controls");
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab));

    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        return;
      }

      event.preventDefault();
      const lastIndex = tabs.length - 1;
      let nextIndex = index;

      if (event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
      if (event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = lastIndex;

      tabs[nextIndex].focus();
      activateTab(tabs[nextIndex]);
    });
  });
});
