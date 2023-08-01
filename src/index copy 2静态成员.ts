// class User {
//     // 用户列表
//     static userList: User[] = []
//     constructor(public name: string, public pwd: string, public age: number) {
//         // 添加用户
//         User.userList.push(this)
//     }
//     sayHello() {
//         console.log(`大家好，我叫${this.name},今年${this.age}岁`);
//     }
//     // 登录方法 静态
//     static login(name: string, pwd: string): undefined | User {
//         return User.userList.find(item => item.name === name && item.pwd === pwd)
//     }
// }

// new User("user1", "password1", 18);
// new User("user2", "password2", 19);
// new User("user3", "password3", 20);

// const u = User.login('user1', 'password1')
// u.sayHello()


// class Board {
//     private static _board: Board;
//     private constructor() {
//     }
//     static createBoard() {
//         if (!this._board) {
//             this._board = new Board()
//         }
//         return this._board
//     }
// }

// const b1 = Board.createBoard()
// const b2 = Board.createBoard()
// const b3 = Board.createBoard()
// console.log(b1 === b2, b2 === b3);