import "./style.css";

function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

let isDone: boolean = false;

let decimal: number = 6; // десяткові
let float: number = 3.14; // речові або число з плаваючою крапкою
let hex: number = 0xf00d; // шістнадцяткове
let binary: number = 0b1010; // двійкове
let octal: number = 0o744; // вісімкове

let color: string = "blue";

let empty: null = null;
let noParam: undefined = undefined;

console.log(decimal, float, hex, binary, octal, isDone);

function foo(num = 10, str = "Some string", bool = true, empty = null) {
  // Some logic
}

const obj: object = {};

interface User {
  name: string;
  age: number;
}

let users: User[] = [
  {
    name: "tom",
    age: 20,
  },
  {
    name: "tom",
    age: 20,
  },
];

let arrString: any[];

arrString = [1, "two"];
