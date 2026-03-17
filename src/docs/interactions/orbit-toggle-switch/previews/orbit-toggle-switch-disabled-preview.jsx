import OrbitToggleSwitch from "@/components/interactions/orbit-toggle-switch/orbit-toggle-switch";

const OrbitToggleSwitchDisabledPreview = () => {
  return (
    <div>
      <OrbitToggleSwitch
        aria-label="example"
        defaultChecked={false}
        disabled
      />
    </div>
  );
}

export default OrbitToggleSwitchDisabledPreview;