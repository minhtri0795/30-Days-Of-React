import React, { useRef, useState } from "react";
import GenaratorColor from "./Color";
function HexaColor() {
  const ref = useRef(null);
  const [value, setValue] = useState(5);
  const onClick = () => {
    let value = ref.current.value;
    setValue(Number(value));
    setColorList(renderColor(value));
  };
  const randomColor = () => {
    let str = "123456abcdef";
    let color = "#";
    for (let i = 0; i < 6; ++i) {
      const index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return color;
  };
  let renderColor = (number) => {
    let List = [];
    for (let i = 0; i < number; ++i) {
      List.push(randomColor());
    }
    return List;
  };
  const [colorList, setColorList] = useState(renderColor(value));
  return (
    <div className="App">
      <div className="generator-number">
        <input type="number" placeholder="number generator color" ref={ref} />
        <button onClick={onClick}>Generate</button>
      </div>
      <div className="color-wrap">
        {colorList.map((color) => (
          <GenaratorColor color={color} />
        ))}
      </div>
    </div>
  );
}
export default HexaColor;
