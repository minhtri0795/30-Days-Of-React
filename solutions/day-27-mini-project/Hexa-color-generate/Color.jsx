import React, { useRef, useState } from "react";
import { FaClipboard } from "react-icons/fa";
import color from "./color.scss";
function GenaratorColor({ color }) {
  const ref = useRef(null);
  const [className, setClassName] = useState("coppy-icon");
  const coppyColor = () => {
    const myColor = ref.current.textContent;
    navigator.clipboard.writeText(myColor);
    setClassName("coppy-icon copied");
    setTimeout(() => {
      setClassName("coppy-icon");
    }, 1500);
  };
  return (
    <>
      <div className="bg-block" style={{ background: color }}>
        <p ref={ref}>{color}</p>
        <i onClick={coppyColor} className={className}>
          <FaClipboard />
        </i>
      </div>
    </>
  );
}
export default GenaratorColor;
