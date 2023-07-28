// 超类型
// class A {
//     test1(): void { }
// }
// class B extends A {
//     test2(): void {
//     }
// }
// const a: A = new B()
// // A 是 B 的超类型
// // B 是 A 的子类型
// console.log(a instanceof A);


// const test = function <T>(a: Array<T>): Array<T> {
//     return a
// }

// test([12, 33, 3])
// test([])


// function take<T>(arr: T[], n): T[] {
//     if (n >= arr.length) {
//         return arr
//     }
//     return arr.slice(0, n)
// }
// const newArr = take<number | string>([1, '2', 3, 4, 5], 2)
// console.log(newArr);


// type callback<T> = (item: T, n: number) => boolean
// // interface callback<T>  {
// //     (item: T, n: number): boolean
// // }

// function filter<T>(arr: T[], callback: callback<T>): T[] {
//     const newArr: T[] = []
//     arr.forEach((item, index) => {
//         if (callback(item, index)) {
//             newArr.push(item)
//         }
//     })
//     return newArr
// }
// const arr = [1, 23, 4, 5, 6, 8]
// console.log(filter(arr, n => n % 2 === 0));