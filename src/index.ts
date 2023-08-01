class A {
    name: string = '132'
    sayHello() {
        console.log(this);
    }
}
const obj = new A()
obj.sayHello()
const sayHello = obj.sayHello
sayHello()
