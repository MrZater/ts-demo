// // 类和继承


// // type Color = 'Black' | 'White'
// // type F = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
// // type R = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
// // class Position {
// //     constructor(private file: F, private rank: R) {
// //     }
// //     distanceFrom(position: Position) {
// //         return {
// //             rank: Math.abs(position.rank - this.rank),
// //             file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
// //         }
// //     }
// // }
// // // abstract 不允许直接使用该类
// // abstract class Piece {
// //     protected position: Position
// //     constructor(
// //         private readonly color: Color,
// //         file: F,
// //         rank: R
// //     ) {
// //         this.position = new Position(file, rank)
// //     }
// //     take(){
// //         console.log(123);
// //     }
// //     moveTo(position: Position) {
// //         this.position = position
// //     }
// //     // 抽象类 子类需要提供该方法
// //     abstract canMoveTo(position: Position): boolean
// // }
// // // 王
// // class King extends Piece {
// //     constructor(color:Color,file:F,rank:R){
// //         super(color,file,rank)
// //         super.take()
// //     }
// //     canMoveTo(position: Position): boolean {
// //         let distance = this.position.distanceFrom(position)
// //         return distance.rank < 2 && distance.file < 2
// //     }
// // }
// // // 后
// // class Queen extends Piece {
// //     canMoveTo(position: Position): boolean {
// //         let distance = this.position.distanceFrom(position)
// //         return distance.rank < 2 && distance.file < 2
// //     }
// // }
// // const king = new King('White', 'E', 1)
// // const queen = new Queen('White', 'D', 1)

// // super
// // class TestF {
// //     constructor(public a: number, public b: string) {
// //     }
// //     public console() {
// //         console.log(this.a, this.b);
// //     }
// // }

// // class TestS extends TestF {
// //     constructor(a: number, b: string) {
// //         super(a, b)
// //     }
// // }
// // const test = new TestS(3, 'abc')
// // test.console()

// // 以this为返回类型

// // class Test1 {
// //     constructor(public value: number[]) {
// //     }
// //     add(value: number): this {
// //         return this
// //     }
// //     delete() {
// //         this.value.splice(this.value.length - 1, 1)
// //         return this
// //     }
// // }
// // class Test2 extends Test1 {
// //     add(value: number): this {
// //         this.value.push(value)
// //         return this
// //     }
// // }
// // const test = new Test2([1])
// // test.add(3).add(10).delete()
// // console.log(test);

// // 接口
// // type A = {
// //     a: number
// // }
// // enum B {
// //     b = 0
// // }
// // interface C {
// //     c: number
// // }

// // interface D extends C {
// //     d(test: number): number
// //     dd(): boolean
// // }

// // const d: D = {
// //     c: 4,
// //     d(test: number) {
// //         return test
// //     },
// //     dd() { return false }
// // }

// // 声明合并
// // interface Test {
// //     a: number
// // }
// // // 不允许声明相同的属性
// // interface Test {
// //     b: string
// // }

// // const a: Test = {
// //     a: 3,
// //     b: 'abc'
// // }

// // 实现
// // interface Animal {
// //     readonly name: string,
// //     readonly age: number,
// //     eat(): void
// // }

// // class Dog implements Animal {
// //     constructor(public name: string, public age: number) {
// //     }
// //     eat(): void {
// //         console.log('汪汪汪');
// //     }
// // }
// // const dog: Animal = new Dog('wangwang', 12) 
// // dog.eat()

// // interface Inter {
// //     name: string,
// //     age: number,
// // }

// // class A implements Inter {
// //     constructor(public name: string, public age: number) {

// //     }
// //     static createA(name: string, age: number) {
// //         return new A(name, age)
// //     }
// // }

// // const a = A.createA('xiaowang', 18)
// // console.log(a);



// // 类是结构化类型

// // class A {
// //     say() {
// //         console.log('a');
// //     }
// // }
// // class B {
// //     say() {
// //         console.log('b');
// //     }
// // }

// // function toSay(obj: A): void {
// //     obj.say()
// // }
// // const a = new A()
// // const b = new B()
// // toSay(a)
// // toSay(b)

// // class Test<T, U>{
// //     constructor(public a: T, public b: U) { }
// //     get(a: T): T {
// //         return a
// //     }
// //     set(b: U): U {
// //         return b
// //     }
// //     of<T1, U1>(a: T1, b: U1): Test<T | T1, U | U1> {
// //         return new Test(a, b)
// //     }

// // }
// // const test = new Test('abc', 123)
// // const get = test.get('abc')
// // const set = test.set(123)
// // console.log(test, get, set);
// // test.of(123,123)

// // 模拟final类
// class Test<T, U> {
//     private constructor(public a: T, public c: U) { }
//     static createTest(a: any, b: any) {
//         return new Test(a, b)
//     }
//     setTest(a: T, b: U) {
//         return new Test(a, b)
//     }
// }
// const test = Test.createTest('abc', 123)
// const testTmp = test.setTest('aaa', 1)
// console.log(test, testTmp);

// 设计模式  工厂模式

// type Person = {
//     say(): void
// }

// class Teacher implements Person {
//     say(): void { }
// }

// class Student implements Person {
//     say(): void {

//     }
// }

// let Person = {
//     create(type: 'teacher' | 'student'): Person {
//         switch (type) {
//             case 'teacher': return new Teacher()
//             case 'student': return new Student()
//         }
//     }
// }
// const teacher = Person.create('teacher')
// const student = Person.create('student')


// 设计模式 建造者模式

// class RequestBuilder {
//     private url: string | null = null
//     private method: 'get' | 'post' | null = null
//     private data: object | null = null
//     setUrl(url: string): this {
//         this.url = url
//         return this
//     }
//     setMethod(method: 'post' | 'get'): this {
//         this.method = method
//         return this
//     }
//     setData(data: object): this {
//         this.data = data
//         return this
//     }
//     send(): void { }
// }
// const request = new RequestBuilder()
// request
//     .setUrl('/home')
//     .setData({
//         name: 'jack'
//     })
//     .setMethod('get')
//     .send()