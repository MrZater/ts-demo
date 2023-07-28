// type Callback<T, U> = (key: T, val: U) => void

// class Dictionary<K, V> {
//     private keys: K[] = []
//     private vals: V[] = []
//     get size() {
//         return this.keys.length
//     }
//     set(key: K, val: V) {
//         const index = this.keys.indexOf(key)
//         if (index === -1) {
//             this.keys.push(key)
//             this.vals.push(val)
//         } else {
//             this.vals[index] = val
//         }
//     }
//     forEach(callback: Callback<K, V>) {
//         for (let i = 0; i < this.keys.length; i++) {
//             const key = this.keys[i]
//             const val = this.vals[i]
//             callback(key, val)
//         }
//     }
//     has(key: K) {
//         return this.keys.includes(key)
//     }
//     delete(key: K) {
//         const index = this.keys.indexOf(key)
//         if (index === -1) {
//             return;
//         } else {
//             this.keys.splice(index, 1)
//             this.vals.splice(index, 1)
//         }
//     }
// }
// const dictionary = new Dictionary<string, number | string>()
// console.log('添加');
// dictionary.set('name', 'Tom')
// dictionary.set('age', 3)
// console.log('循环遍历');
// dictionary.forEach((key, val) => {
//     console.log(key, val);
// })
// console.log('判断是否存在');
// console.log(dictionary.has('name'));
// console.log('删除');
// dictionary.delete('name')
// console.log('长度');
// console.log(dictionary.size);
// console.log(dictionary);
