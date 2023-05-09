// let a = 3 + 1;
// let b = 3 + 3;
// const obj = {
//   bar: a,
//   foo: b,
// };
// function squareOf(n: number): number {
//   return n * n;
// }
// console.log(squareOf(3));

// function test(n: number | string) {
//   return n;
// }
// console.log(test(3));

// any
// const a: any = 3;
// const b: any = [123, 555];
// const c = a + b;
// console.log(c);

// unknown
// const a: unknown = 30;
// const b: boolean = a === 30;
// if (typeof a === "number") {
//   const d = a + 10;
//   console.log(d);
// }

// boolean
// let a: true = true;
// let b: boolean = false;

// number
// let a: 123 = 123;
// let b: number = 123;

// bigint
// let a = 313123n;
// let b: bigint = 3n;

// object
// const a: { test: number; c: string } = {
//   test: 123,
//   c: "123",
// };
// console.log(a.test);
class Person {
  constructor(public name: string, public age: number) {}
}
const xiaomin = new Person("xiaomin", 18);
console.log(xiaomin)
