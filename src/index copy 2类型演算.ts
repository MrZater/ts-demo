// const a: any[] = []
// const b: typeof a = [1, 2]
// console.log(typeof b);

// import { type } from "os"


/**
 * typeof
 */
// class User {
//     loginId: string
//     loginPwd: string
// }


// function createUser(cls: typeof User): User {
//     return new cls()
// }


// const u = createUser(User)


/**
 * keyof
 */
// interface User {
//     loginId: string
//     loginPwd: string
//     age: number
// }


// function printUserProperty(obj: User, prop: keyof User) {
//     console.log(obj[prop])
// }

// const u: User = {
//     loginId: '123',
//     loginPwd: '456',
//     age: 18
// }

// printUserProperty(u, 'age')



/**
 * in
 */

// interface User {
//     loginId: string
//     loginPwd: string
//     age: number
// }

// type UserReadonly = {
//     readonly [p in keyof User]: User[p]
// }
// type Test<T> = {
//     readonly [p in keyof T]: T[p]
// }

// const u1: UserReadonly = {
//     loginId: '1',
//     loginPwd: '2',
//     age: 12
// }

// const u2: Test<User> = {
//     loginId: '1',
//     loginPwd: '2',
//     age: 12
// }



// interface User {
//     loginId: string
//     loginPwd: string
//     age: number
// }

// // 可选
// const p: Partial<User> = {
//     loginId: '123',
//     loginPwd: '456',
//     age: 1
// }

// // 必填
// const r1: Required<User> = {
//     loginId: '123',
//     loginPwd: '456',
//     age: 1
// }

// // 只读
// const r2: Readonly<User> = {
//     loginId: '123',
//     loginPwd: '456',
//     age: 1
// }

// // 剔除
// // 剔除掉后者没有的，只要已有的
// type sex = '男' | '女' | undefined | null
// type noSex = '女'
// const e1: Exclude<sex, noSex> = '男'

// // 保留
// // 保留后者也有的，剔除掉后者没有的
// const e2: Extract<sex, noSex> = undefined


// // 去除 undefined 和 null
// type noNullSex = NonNullable<sex>


// // 得到函数的返回类型
// function test(num: number): number {
//     return num
// }
// type func = () => number

// type a = ReturnType<typeof test>
// type b = ReturnType<func>

// // InstanceType 获取构造函数类型的实例类型。

// class A {

// }


// let obj: InstanceType<typeof A>