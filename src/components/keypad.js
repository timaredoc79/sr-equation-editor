import * as React from "react";
import classNames from 'classnames';
import { LETTER, NUM, MATH } from "../config/keys";

import "./index.css";
const MODE = {
  LETTER: 0,
  NUM: 1
}
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

  onClickKey = key => {
    const { mode } = this.state;
    switch (key) {
      case "Backspace":
        this.mathField.keystroke(key);
        break;
      case "shift":
        this.shiftMode(1 - mode);
        break;
      case "num":
        this.shiftMode(MODE.NUM);

      case 'math':
        this.shiftMode(MODE.MATH);
        break;
      default:
        const _k = mode === MODE.CAP_LETTER ? key.toUpperCase() : key
        this.mathField.cmd(_k);
        break;
    }
  };
  shiftMode = mode => {
    this.setState({ mode });
  };
  render() {
    const {mode} = this.state
    return (
      <div className="keypad">
        <div ref={ref => (this.input = ref)} className="keypad__field" />
        {LETTER.map((row, index) => (
          <div key={index} className="keypad__row">
            {row.map(key => (
              <span
                key={key.v}
                className={classNames(["keypad__key", key.c])}
                onClick={this.onClickKey.bind(this, key.v)}
              >
                {mode === MODE.CAP_LETTER ? key.k.toUpperCase() : key.k}
                {!key.k && key.i}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
class LetterPad extends React.PureComponent {
  
}

class NumPad extends React.PureComponent {

}
