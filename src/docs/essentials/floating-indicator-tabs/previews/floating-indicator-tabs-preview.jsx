import FloatingTabs from "@/components/essentials/floating-indicator-tabs/floating-indicator-tabs";

const FloatingTabsPreview = () => {
  const tabs = [
    { id: "home", label: "Home", content: <HomeTab /> },
    { id: "location", label: "Location", content: <LocationTab /> },
    { id: "forms", label: "Forms", content: <FormsTab /> },
  ];

  return (
    <FloatingTabs
      tabs={tabs}
    />
  );
};

const HomeTab = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
};

const LocationTab = () => {
  return (
    <div>
      <h2>Location</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
};

const FormsTab = () => {
  return (
    <div>
      <h2>Forms</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
};

export default FloatingTabsPreview;