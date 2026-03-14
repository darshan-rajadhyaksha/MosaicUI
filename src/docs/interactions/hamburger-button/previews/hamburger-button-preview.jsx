import HamburgerButton from "@/components/interactions/hamburger-button/hamburger-button";
import { useState } from "react";

const HamburgerButtonPreview = () => {
  const [active, setActive] = useState(false);

  return (
    <HamburgerButton
      size={48}
      active={active}
      onClick={() => setActive(!active)}
    />
  )
};

export default HamburgerButtonPreview;