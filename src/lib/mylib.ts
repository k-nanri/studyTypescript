export interface MyInterface {
    name: string;
}

/**
 * xxxx
 */
export class MyClass implements MyInterface {
  /**
   * aaa
   * @param {string} name
   */
  constructor(public name: string) {
    this.name = name;
  }
}
