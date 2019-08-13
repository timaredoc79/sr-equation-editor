import * as img from "./images";
export const ENG = {
  letter: [
    [
      { k: "q", v: "q", t: false },
      { k: "w", v: "w", t: false },
      { k: "e", v: "e", t: false },
      { k: "r", v: "r", t: false },
      { k: "t", v: "t", t: false },
      { k: "y", v: "y", t: false },
      { k: "u", v: "u", t: false },
      { k: "i", v: "i", t: false },
      { k: "o", v: "o", t: false },
      { k: "p", v: "p", t: false }
    ],
    [
      { k: "a", v: "a", t: false },
      { k: "s", v: "s", t: false },
      { k: "d", v: "d", t: false },
      { k: "f", v: "f", t: false },
      { k: "g", v: "g", t: false },
      { k: "h", v: "h", t: false },
      { k: "j", v: "j", t: false },
      { k: "k", v: "k", t: false },
      { k: "l", v: "l", t: false }
    ],
    [
      { k: "", v: "shift", i: img.shift, s: false },
      { k: "z", v: "z", t: false },
      { k: "x", v: "x", t: false },
      { k: "c", v: "c", t: false },
      { k: "v", v: "v", t: false },
      { k: "b", v: "b", t: false },
      { k: "n", v: "n", t: false },
      { k: "m", v: "m", t: false },
      { k: "", v: "Backspace", i: img.back, t: false }
    ]
  ],
  caps: [
    [
      { k: "Q", v: "Q", t: false },
      { k: "W", v: "W", t: false },
      { k: "E", v: "E", t: false },
      { k: "R", v: "R", t: false },
      { k: "T", v: "T", t: false },
      { k: "Y", v: "Y", t: false },
      { k: "U", v: "U", t: false },
      { k: "I", v: "I", t: false },
      { k: "O", v: "O", t: false },
      { k: "P", v: "P", t: false }
    ],
    [
      { k: "A", v: "A", t: false },
      { k: "S", v: "S", t: false },
      { k: "D", v: "D", t: false },
      { k: "F", v: "F", t: false },
      { k: "G", v: "G", t: false },
      { k: "H", v: "H", t: false },
      { k: "J", v: "J", t: false },
      { k: "K", v: "K", t: false },
      { k: "L", v: "L", t: false }
    ],
    [
      { k: "", v: "shift", i: img.shift, s: true },
      { k: "Z", v: "Z", t: false },
      { k: "X", v: "X", t: false },
      { k: "C", v: "C", t: false },
      { k: "V", v: "V", t: false },
      { k: "B", v: "B", t: false },
      { k: "N", v: "N", t: false },
      { k: "M", v: "M", t: false },
      { k: "", v: "Backspace", i: img.back, t: false }
    ]
  ]
};

export const NUM = [
  { k: "1", v: "1", t: false },
  { k: "2", v: "2", t: false },
  { k: "3", v: "3", t: false },
  { k: "4", v: "4", t: false },
  { k: "5", v: "5", t: false },
  { k: "6", v: "6", t: false },
  { k: "7", v: "7", t: false },
  { k: "8", v: "8", t: false },
  { k: "9", v: "9", t: false },
  { k: "0", v: "0", t: false },
  { k: ".", v: ".", t: false }
];

export const MATH = [
  { k: "", v: "^2", i: img.cuadrado },
  { k: "", v: "^3", i: img.tercera },
  { k: "", v: "/", i: img.fraccion },
  { k: "", v: "^", i: img.potencia },
  { k: "", v: "\\sqrt", i: img.raiz2 },
  { k: "", v: "\\nthroot", i: img.raiz },
  { k: "(", v: "(", i: "" },
  { k: ")", v: ")", i: "" },
  { k: "[", v: "[", i: "" },
  { k: "]", v: "]", i: "" },
  { k: "sin", v: "\\sin", i: "" },
  { k: "cos", v: "\\cos", i: "" },
  { k: "tan", v: "\\tan", i: "" },
  { k: "π", v: "\\pi", i: "" },
  { k: "", v: "|", i: img.abs },
  { k: "≈", v: "\\approx", i: "" },
  { k: "≠", v: "\\neq", i: "" },
  { k: "%", v: "%", i: "" },
  { k: "+", v: "+", i: "" },
  { k: "-", v: "-", i: "" },
  { k: "×", v: "\\times", i: "" },
  { k: "÷", v: "\\div", i: "" },
  { k: "±", v: "±", i: "" },
  { k: ">", v: ">", i: "" },
  { k: "<", v: "<", i: "" },
  { k: "≥", v: "\\geq", i: "" },
  { k: "≤", v: "\\leq", i: "" },
  { k: ",", v: ",", i: "" },
  { k: ":", v: ":", i: "" },
  { k: "°", v: "\\degree", i: "" },
  { k: "或", v: "或", i: "" },
  { k: "且", v: "且", i: "" },
  { k: "非", v: "非", i: "" },
  { k: "x", v: "x", i: "" },
  { k: "y", v: "y", i: "" },
  { k: "∑", v: "\\sum", i: "" },
  { k: "向量", v: "\\overrightarrow", i: "" },
  { k: "∠", v: "∠", i: "" },
  { k: "∵", v: "\\because", i: "" },
  { k: "∴", v: "\\therefore", i: "" },
  { k: "∈", v: "\\in", i: "" },
  { k: "∉", v: "\\notin", i: "" },
  { k: "∩", v: "\\intersection", i: "" },
  { k: "∪", v: "\\cup", i: "" },
  { k: "⊂", v: "\\subset", i: "" },
  { k: "⊃", v: "\\superset", i: "" },
  { k: "∞", v: "\\infty", i: "" },
  { k: "log", v: "\\log", i: "" },
  { k: "←", v: "\\leftarrow", i: "" },
  { k: "→", v: "\\rightarrow", i: "" },
  { k: "⇔", v: "\\iff", i: "" }
];
