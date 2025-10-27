// Extração condicional
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>; // string
type B = UnwrapPromise<number>; // number

// Tipos distributivos
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArray = ToArray<string | number>; // string[] | number[]

// NonNullable customizado
type NonNullableProps<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};