import { Fragment, useCallback, useEffect, useState } from "react";
import type { ReactElement } from "react"; 
import unique from "@/utils/unique";

const ComponentRefresh = ({
  children,
}: {
  children: ReactElement
}) => {
  const [id, setId] = useState(() => (
    `component-${unique()}`
  ));

  const handleComponentRefreshEvent = useCallback(() => {
    setId(`component-${unique()}`);
  }, []);

  useEffect(() => {
    document.documentElement.addEventListener(
      "component-refresh",
      handleComponentRefreshEvent
    );
    return () => {
      document.documentElement.removeEventListener(
        "component-refresh",
        handleComponentRefreshEvent
      );
    };
  }, [handleComponentRefreshEvent]);

  return (
    <Fragment key={id}>
      {children}
    </Fragment>
  );
};

export default ComponentRefresh;