function hello(name: string): void {
    console.log("Hello " + name + "!");
}

let your_name: string = "Yamada";
hello(your_name);

let v_bool: boolean = true;
console.log(v_bool);

enum Color {Red, Green, Blue};
let v_enm: Color = Color.Blue;
console.log(v_enm);

class MyClass {
    private name:string;

    constructor(name:string) {
        this.name = name;
    }

    public getName() : string {
        return this.name;
    }
}

function func(arg: string | number) : void {
    console.log(arg);
}

var myClass: MyClass = new MyClass("hoge");
console.log(myClass.getName());
func("aaaa");
func(12345);

interface Test {
    foo: number;
}

const test = {} as Test;
test.foo = 123;
console.log(test.foo);

