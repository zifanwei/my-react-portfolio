import React, { useState } from "react";
import "../../style/Tooltip.css";

const Tooltip = ({ children, tip, copyTip }) => {
  const [tooltipStyle, setTooltipStyle] = useState({});
  const [tooltipText, setTooltipText] = useState(tip);

  const handleMouseMove = (e) => {
    setTooltipStyle({
      top: `${e.clientY + 10}px`,
      left: `${e.clientX + 10}px`,
    });
  };

  const handleCopy = () => {
    if (copyTip) {
      setTooltipText(copyTip);
      setTimeout(() => {
        setTooltipText(tip);
      }, 3000);
    }
  };

  return (
    <div className="tooltip-container" onMouseMove={handleMouseMove} onClick={handleCopy}>
      {children}
      <span className="tooltip-text" style={tooltipStyle}>{tooltipText}</span>
    </div>
  );
};

export default Tooltip;
