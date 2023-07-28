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

// class
// class Person {
//   constructor(public name: string, public age: number, public email?: string) { }
// }
// const xiaomin = new Person("xiaomin", 18, 'mrzater@163.com');
// console.log(xiaomin)

// [key: T]:U 索引签名
// const a: {
//   b: string
//   c?: number
//   [key: number]: number
// } = {
//   b: 'test',
//   c: 1,
//   4: 3
// }
// console.log(a);

// readonly 只读
// const a: {
//   readonly b: string
// } = {
//   b: 'test'
// }
// console.log(a);


// 类型别名
// type Age = number
// type Name = string
// type Person = {
//   name: Name,
//   age: Age
// }

// let driver: Person = {
//   name: 'jack',
//   age: 18
// }

// // 并集类型和交集类型
// type Person1 = {
//   name: string,
//   age: number,
//   email: string
// }
// type Person2 = {
//   name: string,
//   age: number,
//   address: string
// }
// // User中兼合Person1 Person2
// type User1 = Person1 & Person2
// // User中兼合Person1 Person2共有部分
// type User2 = Person1 | Person2
// const user1: User1 = {
//   name: 'jack',
//   age: 18,
//   email: 'mrzater@163.com',
//   address: '北京'
// } 
// const user2: User2 = {
//   name: 'jack',
//   age: 18,
//   email: 'mrzater@163.com',
//   address: '北京',

// } 
// console.log(user1, user2);


// type Returns = true | null
// function trueOrNull(isTrue: boolean): Returns {
//   if (isTrue) {
//     return true
//   }
//   return null
// }

// 数组
// const a: number[] = [1, 2, 3]
// const b = [123]
// b.push(1)
// let c: number[] = []
// function getArray() {
//   const arr = [] // any
//   arr.push(1)
//   arr.push('test')
//   return arr
// }
// const newarr = getArray() // (number | stringß)[]


// // 元组
// // 数组固定长度，每项类型
// const a: [string] = ['abc']
// const b: [string, number] = ['abc', 1]
// // 可选
// const c: [string, number?] = ['abc']
// // 嵌套数组
// const d: [string, number][] = [['abc', 13], ['test', 1]]
// // 支持剩余参数
// const e: [string, ...number[]] = ['abc', 3]


// // 只读数组的三种写法
// type A = readonly string[]
// type B = ReadonlyArray<string>
// type C = Readonly<string[]>


// // 枚举
// enum Student {
//   Jack, // 0
//   Mary, // 1
//   Tom, // 2
//   Jarry = 100, // 100 下一项 +1 
//   Mark, // 101
//   Anna = '102' // string和number混用
// }

// const Jack = Student[0]
// const Tom = Student.Tom
// const Mark = Student.Mark
// const Anna = Student['Anna'] // 通过键访问
// console.log(Tom, Mark, Anna);

// // const enum
// // const enum 不允许获取不存在的项，不允许反向查找
// const enum Person {
//   Jack,
//   Mary,
//   Tom,
//   Jarry,
//   Mark,
//   Anna
// }
// function getUser(uid: Person) {
//   return uid
// }
// const u = getUser(Person.Jack)
// console.log(u)  


