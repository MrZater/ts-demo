// 类的概念
//   class Tank {
//     name: string = '坦克'
//     protected sayHolle () {
//         console.log('hello');
//     }
//   }

//   class PlayTank extends Tank {
//     name: string = '玩家坦克'
//     say(){
//         super.sayHolle()
//     }
//   }

// class OtherTank extends Tank {
//     name: string = '其他坦克'
// }

// const tank = new PlayTank()

// tank.say()



// 抽象类 abstract

// abstract class Chess {
//     abstract x: number
//     abstract y: number
//     abstract readonly name: string
//     move(x: number, y: number): boolean {
//         console.log(this.name);
//         console.log('便捷判断');
//         console.log('判断该位置上是否有己方棋子');
//         if (this.rule(x, y)) {
//             return true
//         }
//         return false
//     }
//     abstract rule(x: number, y: number): boolean
// }


// class Horse extends Chess {
//     x: number = 1
//     y: number = 1
//     readonly name: string = '马'
//     rule(x: number, y: number): boolean {
//         return false
//     }
// }

// class Soldier extends Chess {
//     x: number = 2
//     y: number = 2
//     readonly name: string
//     constructor() {
//         super()
//         this.name = '兵'
//     }
//     rule(x: number, y: number): boolean {
//         return true
//     }
// }
// class Car extends Chess {
//     x: number = 3
//     y: number = 3
//     get name() {
//         return '车'
//     }
//     rule(x: number, y: number): boolean {
//         return false
//     }
// }

// const h = new Horse()
// const s = new Soldier()
// const c = new Car()

// h.move(1,3)
// s.move(3,4)
// c.move(4,5)
