import { useState, useRef, useLayoutEffect, useMemo, memo } from "react";
import styles from "./floating-indicator-tabs.module.css";

const FloatingIndicatorTabs = (props) => {
  const {
    tabs,
    activeTab,
    defaultTab,
    onTabChange,
    renderOnlyActiveTab = false,
  } = props;

  const isControlled = activeTab !== undefined;
  const tabsRef = useRef([]);
  const indicatorRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [currentTab, setCurrentTab] = useState(() => {
    if (isControlled) return;
    if (defaultTab) return defaultTab;
    return tabs?.[0].id;
  });

  const selectedTab = isControlled ? activeTab : currentTab;

  const tabListId = useMemo(() => (
    `tab-list-${Math.random().toString(36).substring(2)}`
  ), []);

  const getTabId = (tabId) => `${tabListId}-${tabId}-tab`;

  const getTabPanelId = (tabId) => `${tabListId}-${tabId}-panel`;
  
  const handleTabClick = (tab) => {
    if(!isControlled) {
      setCurrentTab(tab.id);
    }
    onTabChange?.(tab.id);
  };

  const handleKeyDown = (e, index) => {
    let newIndex = index;
    switch (e.key) {
      case "ArrowRight":
        newIndex = (index + 1) % tabs.length;
        break;
      case "ArrowLeft":
        newIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    const nextTabId = tabs[newIndex].id;
    if(!isControlled) {
      setCurrentTab(nextTabId);
    }
    onTabChange?.(nextTabId);    
  };

  useLayoutEffect(() => {
    if(!mounted) {
      setMounted(true);
    }
    const selectedTabIndex = tabs.findIndex(tab => tab.id === selectedTab);
    if (selectedTabIndex < 0) {
      return;
    }
    const selectedTabRef = tabsRef.current[selectedTabIndex];
    const { offsetLeft, offsetWidth } = selectedTabRef;
    indicatorRef.current.style.left = `${offsetLeft}px`;
    indicatorRef.current.style.width = `${offsetWidth}px`;
    if(mounted) {
      selectedTabRef.focus();
    }
  }, [selectedTab]);

  return (
    <div className={styles["floating-indicator-tabs"]}>
      <div
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <button
            type="button"
            role="tab"
            key={tab.id}
            ref={(el) => (tabsRef.current[index] = el)}
            aria-selected={tab.id === selectedTab}
            aria-controls={tab.content ? getTabPanelId(tab.id) : undefined}
            id={getTabId(tab.id)}
            onClick={() => handleTabClick(tab)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.label}
          </button>
        ))}
        <div
          aria-hidden="true"
          data-tab-indicator="true"
          ref={indicatorRef}
        ></div>
      </div>
      {tabs.map((tab) => {
        const isActive = tab.id === selectedTab;
        if (!isActive) {
          if (renderOnlyActiveTab) {
            return null;
          }
        }
        if (!tab.content) {
          return null;
        }
        return (
          <div
            key={`${tab.id}-panel`}
            role="tabpanel"
            aria-labelledby={getTabId(tab.id)}
            id={getTabPanelId(tab.id)}
            hidden={!isActive}
            className={styles["tab-panel"]}
          >
            {tab.content}
          </div>
        )
      })}
    </div>
  );
};

export default memo(FloatingIndicatorTabs);