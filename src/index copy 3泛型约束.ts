
// type Person = {
//     name: string
//     age: number
// }

// function changeAge<T extends Person>(user: T): T {
//     if (user.age < 18) {
//         user.age = 18
//     }
//     return user
// }
// const person = {
//     name: 'Tom',
//     age: 12
// }
// const newPerson = changeAge(person)
// console.log(newPerson);