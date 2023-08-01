// class Animals {
//     name: string
// }

// interface IDance {
//     dance(): void
// }
// interface IFire {
//     fire(): void
// }

// class Dog extends Animals implements IDance {
//     name = 'dog'
//     dance() {
//         console.log('dance')
//     }
// }

// class Cat extends Animals implements IFire {
//     name = 'cat'
//     fire(): void {

//     }
// }
// const dog = new Dog()
// const cat = new Cat()
// const animals = [dog, cat]

// function hasFireShow(ani: object): ani is IFire {
//     if ((ani as unknown as IFire).fire) {
//         return true
//     }
//     return false
// }

// function hasDanceShow(ani: object): ani is IDance {
//     if ((ani as unknown as IDance).dance) {
//         return true
//     }
//     return false
// }

// animals.forEach(animal => {
//     if (hasFireShow(animal)) {
//         console.log(animal.name, 'it can fire show');
//     }
//     if (hasDanceShow(animal)) {
//         console.log(animal.name, 'it can dance show');
//     }
// })




// // 接口继承类

// class A {
//     a1: string = ''
//     a2: string = ''
//     a3: string = ''
// }
// class B {
//     b1: string = ''
//     b2: string = ''
//     b3: string = ''
// }
// interface C extends A, B {
// }
// const c: C = {
//     a1: 'a1',
//     a2: 'a2',
//     a3: 'a3',
//     b1: 'b1',
//     b2: 'b2',
//     b3: 'b3'
// }