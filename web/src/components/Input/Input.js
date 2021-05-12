import React, { useState } from "react";
import "./Input.less";

function Input(prop) {
  const [value, setValue] = useState("");

  const onClick = (e) => {
    prop.onSearch(value);
  };

  const onInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-group">
      <div className="input-wrapper">
        <input
          placeholder="input url text"
          value={value}
          onInput={(e) => onInput(e)}
        />
        <div className="input-suffix"></div>
      </div>
      <div className="input-group-addon">
        <button onClick={(e) => onClick(e)}>Search</button>
      </div>
    </div>
  );
}
export default Input;
