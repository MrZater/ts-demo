// @test('test', 123)
// class A {
//     public prop1: string;
//     constructor(public prop2: string, public prop3: string) {

//     }
// }


// function test(...args: any[]) {
//     console.log(args);
//     return (target: new (...args: any[]) => object) => {

//     }
// }



// type constructor = new (...args: any[]) => object
// @test('test', 123)
// class A {
//     public prop1: string;
//     constructor(public prop2: string, public prop3: string) {

//     }
// }


// function test(...args: any[]) {
//     console.log(args);
//     return (target: constructor) => {

//     }
// }



// function test (target:any,key:string){
//     if(!target._props){
//         target._props = [];
//     }
//     target._props.push(key);
// }

// class A {
//     @test
//     public prop1:string

//     @test
//     public prop2:string
// }
// console.log((A.prototype as any)._props);






// function test (target:any,key:string){
//     console.log(target, key);
//     if(!target._props){
//         target._props = [];
//     }
//     target._props.push(key);
// }

// class A {
//     @test
//     public prop1:string

//     @test
//     static prop2:string
// }
// console.log((<any>A.prototype)._props);
// console.log((A as any)._props);





// function enumerable(target: any, key: string, descriptor: PropertyDescriptor) {
//     console.log(target, key, descriptor);
//     descriptor.enumerable = true
// }
// function useless(target: object, key: string, descriptor: PropertyDescriptor) {
//     descriptor.value = function () {
//         console.log('方法已过期！');
//     }
// }

// class A {
//     @useless
//     @enumerable
//     method() { }
// }

// const a = new A();

// for (const key in a) {
//     console.log(key);
// }

// a.method();


// @classDescriptor('用户')
// class User {
//     @propDescriptor("账号")
//     loginId: string

//     @propDescriptor("密码")
//     loginPwd: string

//     @propDescriptor("年龄")
//     age: number
// }

// const u = new User()
// u.loginId = '123'
// u.loginPwd = '321'
// u.age = 18
// printObj(u)

// function classDescriptor(description: string) {
//     return function (target: Function) {
//         target.prototype.$classDescription = description;
//     }
// }

// function propDescriptor(description: string) {
//     return function (target: any, propName: string) {
//         if (!target.$propDescriptions) {
//             target.$propDescriptions = []
//         }
//         target.$propDescriptions.push({ propName, description })
//     }
// }


// function printObj(obj: any) {
//     if (obj.$classDescription) {
//         console.log(obj.$classDescription);
//     } else {
//         console.log(Object.getPrototypeOf(obj).constructor.name);
//         // console.log(obj.__proto__.constructor.name);
//     }
//     // console.log(obj.$propDescriptions);
//     if (!obj.$propDescriptions) {
//         obj.$propDescriptions = []
//     }
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const prop = obj.$propDescriptions.find((item: any) => item.propName === key)
//             if(prop){
//                 console.log(`\t${prop.description}:${obj[key]}`);
//             }else{
//                 console.log(`\t${key}:${obj[key]}`);
//             }
//         }
//     }
// }

