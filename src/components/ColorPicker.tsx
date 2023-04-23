import React, { useState } from "react";
import styled from "styled-components";

const ColorPicking = styled.div`
  font-family: monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 40px;
  background-color: #222222;
  color: deeppink;
`;

const ColorPickerInput = styled.input`
  width: 50px;
  height: 50px;
  padding: 0;
  margin-top: 10px;
`;

const ColorPicker = () => {
  const [color, setColor] = useState("cyan");

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const Square = styled.div`
    width: 150px;
    height 150px;
    background-color: ${color};
    `;

  return (
    <ColorPicking>
      <h1>Pick a Color, Any Color!</h1>
      <ColorPickerInput
        type="color"
        value={color}
        onChange={handleColorChange}
      />
      <br />
      {color && <Square />}
    </ColorPicking>
  );
};

export default ColorPicker;
