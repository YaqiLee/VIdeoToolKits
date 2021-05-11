import React from "react";
import "./Input.less";

function Input(prop) {
  return (
    <div className="input-group">
      <div className="input-wrapper">
        <input placeholder="input url text" onClick={prop.onSearch} />
        <div className="input-suffix"></div>
      </div>
      <div className="input-group-addon">
        <button>Search</button>
      </div>
    </div>
  );
}
export default Input;