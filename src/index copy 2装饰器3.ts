import "reflect-metadata"
// import { IsNotEmpty, MinLength, MaxLength, Min, Max, validate } from 'class-validator'
// import { plainToClass, Type } from 'class-transformer'
// 1
// class RegUser {
//     @IsNotEmpty({ message: '账号不能为空' })
//     @MinLength(6, { message: '账号长度不能小于6位' })
//     @MaxLength(16, {message: "账号长度不能大于16位"})
//     loginId: string

//     loginPwd: string

//     @IsNotEmpty({ message: '年龄不能为空' })
//     @Min(0, { message: '年龄不能小于0' })
//     @Max(100, { message: '年龄不能大于100' })
//     age: number
//     gender: "🚹" | "🚺"
// }


// const user = new RegUser()
// user.loginId = "12312412423"
// user.age = 14
// validate(user).then(errors => {
//     console.log(errors);
// })


// 2
// class User {
//     firstName: string
//     lastName: string
//     @Type(() => Number)
//     age: number
//     gender: "🚹" | "🚺"
//     getName() {
//         return this.firstName + '-' + this.lastName
//     }
//     isAdult() {
//         return this.age >= 18
//     }
// }


// const u = {
//     firstName: "john",
//     lastName: "doe",
//     age: '18',
//     gender: "🚹"
// }
// const newUser = plainToClass(User, u)
// console.log(newUser.age);
// 注解会出现在编译后
// 只有能出现在编译后的代码才会有元数据

// class MyMath {
//     sum(a: number, @test b: number) {
//         return a + b
//     }
// }

// function test(target: any, method: string, index: number) {
//     console.log(target, method, index);
// }

// class User {
//     @Reflect.metadata('user', '账号')
//     loginId: string

//     @Reflect.metadata('password', '密码')
//     loginPwd: string
// }


// class RegUser {
//     loginId: string
//     loginPwd: string
//     age: number
//     pid: string
//     /**
//      * 将用户保存到数据库
//      */
//     save() {
//         // 验证处理
//         // 通过后保存到数据库
//     }
// }