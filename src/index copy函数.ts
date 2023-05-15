// // 函数
// function getA(a: number) {
//   return a
// }
// const getB = function (b: number) {
//   return b
// }
// const getC = (c: number) => {
//   return c
// }
// const getD = (d: number) => d

// // 可选和默认传参
// function test1(a: number, b?: string) {
// }
// test1(1, 'a')
// function test2(a: number, b: string = 'abc') {

// }
// test2(1)
// type Content = {
//   text1?: string,
//   text2?: string
// }
// function test3(a: number, content: Content = {}) {

// }
// test3(1, { text1: 'a', text2: 'b' })


// // 剩余参数
// // 数组传参
// function sum1(numbers: number[]): number {
//   return numbers.reduce((sum, item) => sum + item)
// }
// console.log(sum1([1, 2, 3, 4, 5, 6, 7]));

// // 非数组传参
// function sum2(...numbers: number[]) {
//   return numbers.reduce((sum, item) => sum + item)
// }
// console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8));

// // call apply bind
// function add(a: number, b: number) {
//   return a + b
// }
// console.log(add(1, 2));
// console.log(add.apply(null, [1, 2]));
// console.log(add.call(null, 1, 2));
// console.log(add.bind(null, 1, 2)());

// // 注解this的类型
// function fancyDate(this:Date) {
//   return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
// }

// console.log(fancyDate.call(new Date()));

// 调用签名
// type Sum = (a: number, b: number) => number
// const sum: Sum = (c, d) => {
//   return c + d
// }
// console.log(sum(1, 9));


// 上下文类型推导
// function times(
//   func: (index: number) => void,
//   number: number
// ) {
//   for (let i = 0; i < number; i++) {
//     func(i)
//   }
// }

// times((i) => console.log(i), 10)

// 函数类型重载
// type Reserve = {
//     (from: Date, to: Date, destination: string): void
//     (from: Date, destination: string): void
// }

// const reserve: Reserve = (
//     from: Date,
//     toOrDestination: Date | string,
//     destination?: string
// ) => {
//     // ...
// }


// type User = {
//     name: string,
//     age: number,
//     email: string,
//     address: string
//     sex?: boolean
// }
// type Person = {
//     (name: string, age: number, email: string, address: string): User
//     (name: string, age: number, email: string, address: string, boolean?: boolean): User
// }
// const person: Person = (
//     name,
//     age,
//     email,
//     address,
//     sex?: boolean
// ) => {
//     return {
//         name, age, email, address, sex
//     }
// }



// type WarnUser = {
//     // 函数传参
//     (warning: string): void,
//     // 函数属性
//     wasCalled: boolean
// }

// const warnUser: WarnUser = (warning: string) => {
//     if (warnUser.wasCalled) {
//         return
//     }
//     warnUser.wasCalled = true
//     alert(true)
// }
// warnUser.wasCalled = false
// warnUser('warning')


// 泛型
// type Filter = {
//     (arr: number[], func: (item: number, i?: number) => boolean): number[]
//     (arr: string[], func: (item: string, i?: number) => boolean): string[]
//     (arr: object[], func: (item: object, i?: number) => boolean): object[]
// }
// type Filter = {
//     <T>(arr: T[], func: (item: T, i?: number) => boolean): T[]
// }
// const myFilter: Filter = (arr, func) => {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i]
//         if (func(item, i)) {
//             result.push(item)
//         }
//     }
//     return result
// }
// const newArr1 = myFilter([1, 2, 4, 5, 6, 67], (item) => item > 5)
// const newArr2 = myFilter(['1', 'abc', 'ccc', 'as', 'js', 'ts', 6], (item) => item === 'js')
// console.log(newArr1, newArr2);

// 泛型的使用
// type User = {
//     <T>(name: T, age: number, email: T): void
// }
// const user: User = (name, age, email) => {
// }
// user('jack', 18, 'www.baidu.com')

// type MyMap = {
//     <T, U>(arr: T[], func: (item: T, index?: number) => U): U[]
// }
// const myMap: MyMap = (arr, func) => {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i]
//         result[i] = func(item, i)
//     }
//     return result
// }
// const newArr1 = myMap([1, 2, 3, 4], (item, i) => item + 3)
// console.log(newArr1);

// 泛型推导
// type MyMap = {
//     <T, U>(arr: T[], func: (item: T, index?: number) => U): U[]
// }
// const myMap: MyMap = (arr, func) => {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i]
//         result[i] = func(item, i)
//     }
//     return result
// }

// const newArr1 = myMap<number, number>([1, 2, 3, 4], (item, i) => item + 3)// 泛型传参
// console.log(newArr1);


// // 多态

// class Person {
//     name: string
//     constructor(name: string) {
//         this.name = name

//     }
//     say() {
//         console.log(`姓名：${this.name}`);
//     }
// }
// class Student extends Person {
//     age: number
//     constructor(name: string, age: number) {
//         super(name)
//         this.age = age
//     }
//     say() {
//         console.log(`姓名：${this.name}，年龄：${this.age}`);
//     }
// }
// class Teacher extends Person {
//     grade: number
//     constructor(name: string, grade: number) {
//         super(name)
//         this.grade = grade
//     }
//     say() {
//         console.log(`姓名：${this.name}，班级：${this.grade}`);
//     }
// }
// const person:Person = new Person('jack')
// const student:Student = new Student('xiaowang', 18)
// const teacher:Teacher = new Teacher('zhou', 3)
// // 多态
// function youSay(p:Person){
//     p.say()
// }
// youSay(person)
// youSay(student)
// youSay(teacher)


// const is = <T>(a: T, ...b: [T, ...T[]]) => {
//     return b.every(_ => a === _)
// }
// console.log(is(true, true));
// console.log(is(123, 333));
// console.log(is('123', '321'));
// console.log(is('123', '123'));
// console.log(is(1, 3, 4, 5));
// console.log(is(1, 1, 1, 1));