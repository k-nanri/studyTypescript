import {MyInterface, MyClass} from '../lib/mylib';

/**
 * xxx
 * @param {string} name
 */
function hello(name: string): void {
  console.log('Hello ' + name + '!');
}

const your_name: string = 'Yamada';
hello(your_name);

const v_bool: boolean = true;
console.log(v_bool);

enum Color {Red, Green, Blue};
const v_enm: Color = Color.Blue;
console.log(v_enm);

class MyClass2 {
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

const myClass: MyClass2 = new MyClass2('hoge');
console.log(myClass.getName());
func('aaaa');
func(12345);

interface Test {
    foo: number;
}

const test = {} as Test;
test.foo = 123;
console.log(test.foo);

const obj: MyInterface = new MyClass('test');
console.log(obj.name);
