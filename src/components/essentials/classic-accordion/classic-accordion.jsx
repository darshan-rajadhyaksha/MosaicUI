import { memo, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import styles from "./classic-accordion.module.css";

const AccordionItem = (props) => {
  const {
    accordionGroupId,
    item,
    onToggle,
    open,
  } = props;

  const panelRef = useRef(null);

  const accordionHeaderId = useMemo((id) => (
    `${accordionGroupId}-header-${id}`
  ), [accordionGroupId]);

  const accordionPanelId = useMemo((id) => (
    `${accordionGroupId}-panel-${id}`
  ), [accordionGroupId]);

  useLayoutEffect(() => {
    const height = open ? panelRef.current.scrollHeight : 0;
    panelRef.current?.style.setProperty("--panel-height", `${height}px`);
  }, [open]);

  return (
    <div className={styles["accordion-item"]}>
      <div className={styles["header"]}>
        <button
          aria-controls={accordionPanelId}
          aria-expanded={open}
          id={accordionHeaderId}
          onClick={() => onToggle(item.id)}
        >
          <span
            className={styles["title"]}
            title={item.title}
          >
            {item.title}
          </span>
          <span className={styles["icon"]}>
          </span>
        </button>
      </div>
      <div
        aria-labelledby={accordionHeaderId}
        className={styles["panel"]}
        id={accordionPanelId}
        ref={panelRef}
        role="region"
      >
        <div className={styles["panel-content-wrapper"]}>
          {item.content}
        </div>
      </div>
    </div>
  );
};

const ClassicAccordion = (props) => {
  const {
    items = [],
    multiple = false,
    defaultOpen,
  } = props;

  const [openAccordionIds, setOpenAccordionIds] = useState(() => {
    if (multiple) {
      if(Array.isArray(defaultOpen)) {
        return [...defaultOpen];
      }
    } else if(
      typeof defaultOpen === "string" &&
      items.some(item => item.id === defaultOpen)
    ) {
      return [defaultOpen];
    }
    return [];
  });

  const accordionGroupId = useMemo(() => (
    `accordion-group-${Math.random().toString(36).substring(2)}`
  ), []);

  const handleAccordionToggle = useCallback((accordionId) => {
    setOpenAccordionIds((prev) => {
      const isOpen = prev.includes(accordionId);
      if (isOpen) { 
        return prev.filter(item => item !== accordionId);
      } else if (multiple) {
        return [...prev, accordionId];
      } else {
        return [accordionId];
      }
    });
  }, []);

  if(
    !Array.isArray(items) || 
    items.length === 0
  ) {
    return null;
  }

  return (
    <div className={styles["accordion-group"]}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id ?? index}
          accordionGroupId={accordionGroupId}
          item={item}
          open={openAccordionIds.includes(item.id)}
          onToggle={handleAccordionToggle}
        />
      ))}
    </div>
  );
};

export default memo(ClassicAccordion);