window.initStaticTabs = (tabId) => {
  const tabs = document.querySelector(`#${tabId}`);
  const tabHeaders = tabs?.querySelectorAll("& > .head > .tab");
  const tabPanels = tabs?.querySelectorAll("& > .body > .tab-panel");
  tabHeaders?.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      const activeTab = tabs.querySelector("& > .head > .active");
      activeTab?.classList.remove("active");
      const activePanel = tabs.querySelector("& > .body > .active");
      activePanel?.classList.remove("active");
      tab.classList.add("active");
      tabPanels?.[index].classList.add("active");
    });
  });
};