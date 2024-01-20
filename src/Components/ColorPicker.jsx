import { useState } from "react";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  let [color, SetColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    SetColor(event.target.value);
  }
  return (
    <div className={styles.color_picker_container}>
      <div className={styles.color_picker_box}>
        <h1>Color Picker</h1>
        <div className={styles.color_box} style={{ background: color }}>
          Selected color: {color}
        </div>
        <label>Select a color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </div>
  );
}

export default ColorPicker;
