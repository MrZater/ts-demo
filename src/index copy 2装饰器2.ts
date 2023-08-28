// import "reflect-metadata"
// @Reflect.metadata("a", "类a")
// class A {
//     @Reflect.metadata("prop", "属性1")
//     prop1: string
// }

// const a = new A()

// const obj1 = Reflect.getMetadata('a', Object.getPrototypeOf(a).constructor)
// const obj2 = Reflect.getMetadata('a', A)
// console.log(obj1, obj2);

// const obj3 = Reflect.getMetadata('prop', a, 'prop1')
// console.log(obj3);



// const key = Symbol.for('key')
// @Descriptor('用户')
// class User {
//     @Descriptor("账号")
//     loginId: string

//     @Descriptor("密码")
//     loginPwd: string

//     @Descriptor("年龄")
//     age: number
// }
// const u = new User()
// u.loginId = '123'
// u.loginPwd = '321'
// u.age = 18
// printObj(u)

// function Descriptor(description: string) {
//     return Reflect.metadata(key, description)
// }
// function printObj(obj: any) {
//     const cons = Object.getPrototypeOf(obj).constructor
//     if (Reflect.hasMetadata(key, cons)) {
//         console.log(Reflect.getMetadata(key, cons));
//     } else {
//         console.log(cons.name);
//     }
//     for (const k in obj) {
//         if (Reflect.hasMetadata(key, obj, k)) {
//             console.log(`\t${Reflect.getMetadata(key, obj, k)}:${obj[k]}`);
//         } else {
//             console.log(`\t${k}:${obj[k]}`);
//         }
//     }
// }
