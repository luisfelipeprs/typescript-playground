import { log } from "../log";

function set<T, U>(x: T, y: U): [T, U] {
  return [x, y];
}

type Desembrulhar<T> = T extends Promise<infer U> ? U : T;

type A = Desembrulhar<Promise<string>>; // string
type B = Desembrulhar<number>; // number

// log(set('Lois', 20))
// log(set(28, 'Small'))
// log(typeof set('Test', 2))

