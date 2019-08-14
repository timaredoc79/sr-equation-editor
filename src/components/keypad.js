import * as React from "react";
import classNames from "classnames";
import { LETTER, NUM, MATH, WRITE } from "../config/keys";

import "./index.scss";
const MODE = {
  LETTER: 0,
  NUM: 1
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
      restrictMismatchedBrackets: false,
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
    if (/^[a-zA-Z0-9]{1}$/.test(key) || WRITE.indexOf(key) > -1) {
      this.mathField.write(key);
      return;
    }
    if (key === "Backspace") {
      this.mathField.keystroke(key);
      return;
    }
    if (["num", "math", "letter"].indexOf(key) > -1) {
      this.shiftMode();
      return;
    }
    this.mathField.cmd(key);
  };
  shiftMode = () => {
    this.setState({ mode: 1 - this.state.mode });
  };
  render() {
    const { mode } = this.state;
    return (
      <div className="keypad">
        <div ref={ref => (this.input = ref)} className="keypad__field" />
        {mode === MODE.LETTER && <LetterPad onClick={this.onClickKey} />}
        {mode === MODE.NUM && <NumPad onClick={this.onClickKey} />}
      </div>
    );
  }
}

class LetterPad extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cap: false
    };
  }
  shiftCap() {
    this.setState({ cap: !this.state.cap });
  }
  onClick(key) {
    const { cap } = this.state;
    const { onClick } = this.props;
    if (key === "shift") {
      this.setState({ cap: !cap });
    } else {
      const _k = cap && key !== "Backspace" ? key.toUpperCase() : key;
      if (onClick) onClick(_k);
    }
  }
  render() {
    const { cap } = this.state;
    return (
      <div>
        {LETTER.map((row, index) => (
          <div key={index} className="keypad__row">
            {row.map(key => (
              <span
                key={key.v}
                className={classNames(["keypad__key", key.c])}
                onClick={this.onClick.bind(this, key.v)}
              >
                {cap ? key.k.toUpperCase() : key.k}
                {!key.k && key.i}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

class NumPad extends React.PureComponent {
  onClick(key) {
    this.props.onClick(key);
  }
  render() {
    return (
      <div>
        <div className="keypad__math">
          {MATH.map(key => (
            <span
              key={key.v}
              className="keypad__key_math"
              onClick={this.onClick.bind(this, key.v)}
            >
              {key.k}
              {!key.k && key.i}
            </span>
          ))}
        </div>
        {NUM.map(key => (
          <span
            key={key.v}
            className={classNames(["keypad__key", "keypad__key_num", key.c])}
            onClick={this.onClick.bind(this, key.v)}
          >
            {key.k}
            {!key.k && key.i}
          </span>
        ))}
      </div>
    );
  }
}
