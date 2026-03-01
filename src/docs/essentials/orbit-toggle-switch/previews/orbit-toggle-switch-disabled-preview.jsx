import OrbitToggleSwitch from "@/components/essentials/orbit-toggle-switch/orbit-toggle-switch";

const OrbitToggleSwitchDisabledPreview = () => {
  return (
    <div>
      <OrbitToggleSwitch 
        defaultChecked={false}
        disabled
      />
    </div>
  );
}

export default OrbitToggleSwitchDisabledPreview;