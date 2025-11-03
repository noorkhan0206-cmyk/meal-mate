/** Typical component style function type that takes the `theme` argument and zero or more other arguments,
 * then returns a computed style. */
export type BuildStylesCallback<T, Args extends any[]> = (...deps: Args) => T;

/** High order function type that returns a function, which turns arguments into computed style. */
export type MakeStyles<T, Args extends any[]> = (...deps: Args) => T;
