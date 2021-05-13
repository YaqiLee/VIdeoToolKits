import * as React from "react";
import { useState } from "react";
import "./Input.less";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (_: string) => void
}

export interface InputState {
  value: string;
  focused: boolean;
}

export class Input extends React.Component<InputProps, InputState> {

  constructor(props: InputProps) {
    super(props);

    this.state = {
      value: "",
      focused: false
    }

  }

  setValue(value: string, callback?: () => void) {
    this.setState({ value }, callback);
  }

  handleBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.props.onSearch(this.state.value);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setValue(e.target.value);
  };

  render() {
    return (
      <div className="input-group">
        <div className="input-wrapper">
          <input
            placeholder="input url text"
            onChange={this.handleChange}
          />
          <div className="input-suffix"></div>
        </div>
        <div className="input-group-addon">
          <button onClick={this.handleBtnClick}>Search</button>
        </div>
      </div>
    );
  }
}

export function Input2(prop: any) {
  const [value, setValue] = useState("");

  const onClick = (e: any) => {
    prop.onSearch(value);
  };

  const onInput = (e: any) => {
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
