import * as React from "react";
import { ENG, NUM, MATH } from "../config/keys";

import "./index.css";
const MODE = {
  LETTER: 0,
  CAP_LETTER: 1,
  NUM: 2,
  MATH: 3
};
export default class Keypad extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mode: MODE.LETTER
    };
  }
  componentDidMount() {
    const MQ = MathQuill.getInterface(2);
    const { onChange } = this.props;
    this.mathField = MQ.MathField(this.input, {
      spaceBehavesLikeTab: true,
      leftRightIntoCmdGoes: "up",
      restrictMismatchedBrackets: true,
      sumStartsWithNEquals: true,
      supSubsRequireOperand: true,
      //charsThatBreakOutOfSupSub: '+-=<>',
      autoSubscriptNumerals: true,
      autoOperatorNames: "sin COMMA",
      handlers: {
        edit: function(mathField) {
          onChange(mathField.latex());
          const controller = mathField.__controller;
          controller.cursor.show();
          controller.blurred = false;
        }
      }
    });
  }
  get keys() {
    const { mode } = this.state;
    if (mode === MODE.NUM) return NUM;
    if (mode === MODE.CAP_LETTER) return ENG.caps;
    if (mode === MODE.MATH) return MATH;
    return ENG.letter;
  }
  onClickKey = key => {
    const { mode } = this.state;
    switch (key) {
      case "Backspace":
        this.mathField.keystroke(key);
        break;
      case "shift":
        this.shiftMode({ mode: 1 - mode });
        break;
      default:
        this.mathField.cmd(key);
        break;
    }
  };
  shiftMode = mode => {
    this.setState({ mode });
  };
  render() {
    return (
      <div className="keypad">
        <div ref={ref => (this.input = ref)} className="keypad__field" />
        {this.keys.map((row, index) => (
          <div key={index} className="keypad__row">
            {row.map(key => (
              <span
                key={key.v}
                className="keypad__key"
                onClick={this.onClickKey.bind(this, key.v)}
              >
                {key.k}
                {!key.k && key.i}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
