import * as React from "react";
import * as ReactDOM from "react-dom";

import Keypad from "./components/keypad";

import "mathquill/build/mathquill";
import style from "mathquill/build/mathquill.css";


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    return (
      <div>
        <Keypad latex={value} onChange={this.onChange} />
      </div>
    );
  }
}
//ReactDOM.render(<App />, document.getElementById("root"));

export default Keypad;