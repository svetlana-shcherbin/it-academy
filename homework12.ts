// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.
interface User {
  name: string;
  age: number;
  occupation: string;
  car?: string;
  children?: number;
}
const man: User = {
  name: "Max Mustermann",
  age: 25,
  occupation: "Chimney sweep",
  car: "VW",
};
const woman: User = {
  name: "Kate Müller",
  age: 23,
  occupation: "Astronaut",
  children: 2,
};
const users: object[] = [man, woman];
// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфейc Person, который будет соответствовать массиву

interface Users {
  name: string;
  age: number;
  occupation: string;
}
interface Admin {
  name: string;
  age: number;
  role: string;
}
type Person = Users | Admin;
const person1: Person = {
  name: "Max Mustermann",
  age: 25,
  occupation: "Chimney sweep",
};
const person2: Person = {
  name: "Jane Doe",
  age: 32,
  role: "Administrator",
};
const person3: Person = {
  name: "Kate Müller",
  age: 23,
  occupation: "Astronaut",
};
const person4: Person = {
  name: "Bruce Willis",
  age: 64,
  role: "World saver",
};
const persons: object[] = [person1, person2, person3, person4];

// 3. Напишите анотации типов к этому классу.
export class ObjectManipulator <T>{

  constructor(protected obj:T) {}

  public set<K extends keyof T, V>(key: K, value: V): object{
      return new ObjectManipulator({...this.obj, [key]: value});
  }

  public get<K extends keyof T>(key: K): T[K] {
      return this.obj[key];
  }

  public delete<K extends keyof T>(key: K ): object {
      const newObj = {...this.obj};
      delete newObj[key];
      return new ObjectManipulator(newObj);
  }

  public getObject():T {
      return this.obj;
  }
}

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter<E>(filterer: Function, input: E[] | any) {
  if (arguments.length === 0) {
    return filter;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput: E[] | Function | any) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.filter(filterer);
    };
  }
  return input.filter(filterer);
}

/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a: number, b: number): number | Function {
  if (arguments.length === 0) {
    return add;
  }
  if (arguments.length === 1) {
    return function subFunction(subB: number): number | Function {
      if (arguments.length === 0) {
        return subFunction;
      }
      return a + subB;
    };
  }
  return a + b;
}
