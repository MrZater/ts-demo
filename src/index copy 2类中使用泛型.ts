// class ArrayHelper<T> {
//     constructor(private arr: T[]) {

//     }
//     private getRandom(min: number, max: number): number {
//         const num = max - min
//         return Math.floor(num * Math.random())
//     }
//     shuffle() {
//         for (let i = 0; i < this.arr.length; i++) {
//             const num = this.getRandom(0, this.arr.length)
//             const temp = this.arr[num]
//             this.arr[num] = this.arr[i]
//             this.arr[i] = temp
//         }
//     }
//     take(n) {
//         if (n > this.arr.length) {
//             return this.arr
//         }
//         return this.arr.slice(0, n)
//     }
// }
// const arr = new ArrayHelper([1, 2, 3, 4, 5])
// arr.shuffle()
// console.log(arr, arr.take(4));