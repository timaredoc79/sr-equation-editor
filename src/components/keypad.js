import * as React from "react";
import classNames from "classnames";
import { MATH } from "../config/keys";

import "./index.scss";

export default class Keypad extends React.PureComponent {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    const MQ = MathQuill.getInterface(2);
    const { onChange } = this.props;
    this.mathField = MQ.MathField(this.input, {
      spaceBehavesLikeTab: true,
      restrictMismatchedBrackets: true,
      sumStartsWithNEquals: true,
      supSubsRequireOperand: true,
      //charsThatBreakOutOfSupSub: '+-=<>',
      //autoSubscriptNumerals: true,
      autoOperatorNames: "sin COMMA",
      handlers: {
        edit: function (mathField) {
          onChange(mathField.latex());
          mathField.focus();
        }
      }
    });
  }

  onClickKey = key => {
    this.mathField.cmd(key);
    this.mathField.focus();
  };
  render() {
    return (
      <div className="keypad">
        <div ref={ref => (this.input = ref)} className="keypad__field" />
        <div>
          {MATH.map(key => (
            <span
              key={key.v}
              className={classNames(["keypad__key", "keypad__key_num", key.c])}
              onClick={this.onClickKey.bind(this, key.v)}
            >
              {key.k}
              {!key.k && key.i}
            </span>
          ))}
        </div>
      </div>
    );
  }
}