export type OptionalProps<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>] : T[P]
} & {
  [Q in K]? : T[Q]
}

export type RequiredProps<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>] : T[P]
} & {
  [Q in K]-?: T[Q]
}

export type ReadOnlyProps<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>] : T[P]
} & {
  readonly [Q in K]: T[Q]
}

export type Valueof<T> = T[keyof T]
