// 类和继承

// type Color = 'Black' | 'White'
// type F = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
// type R = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
// class Position {
//     constructor(private file: F, private rank: R) {
//     }
//     distanceFrom(position: Position) {
//         return {
//             rank: Math.abs(position.rank - this.rank),
//             file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
//         }
//     }
// }
// // abstract 不允许直接使用该类
// abstract class Piece {
//     protected position: Position
//     constructor(
//         private readonly color: Color,
//         file: F,
//         rank: R
//     ) {
//         this.position = new Position(file, rank)
//     }
//     take(){
//         console.log(123);
//     }
//     moveTo(position: Position) {
//         this.position = position
//     }
//     // 抽象类 子类需要提供该方法
//     abstract canMoveTo(position: Position): boolean
// }
// // 王
// class King extends Piece {
//     constructor(color:Color,file:F,rank:R){
//         super(color,file,rank)
//         super.take()
//     }
//     canMoveTo(position: Position): boolean {
//         let distance = this.position.distanceFrom(position)
//         return distance.rank < 2 && distance.file < 2
//     }
// }
// // 后
// class Queen extends Piece {
//     canMoveTo(position: Position): boolean {
//         let distance = this.position.distanceFrom(position)
//         return distance.rank < 2 && distance.file < 2
//     }
// }
// const king = new King('White', 'E', 1)
// const queen = new Queen('White', 'D', 1)

// super
// class TestF {
//     constructor(public a: number, public b: string) {
//     }
//     public console() {
//         console.log(this.a, this.b);
//     }
// }

// class TestS extends TestF {
//     constructor(a: number, b: string) {
//         super(a, b)
//     }
// }
// const test = new TestS(3, 'abc')
// test.console()

// 以this为返回类型

// class Test1 {
//     constructor(public value: number[]) {
//     }
//     add(value: number): this {
//         return this
//     }
//     delete() {
//         this.value.splice(this.value.length - 1, 1)
//         return this
//     }
// }
// class Test2 extends Test1 {
//     add(value: number): this {
//         this.value.push(value)
//         return this
//     }
// }
// const test = new Test2([1])
// test.add(3).add(10).delete()
// console.log(test);

// 接口

