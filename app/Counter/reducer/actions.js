export const INCREMENT = "INCREMENT";
export const INCREMENT_IF_ODD = "INCREMENT_IF_ODD";
export const INCREMENT_ASYNC = "INCREMENT_ASYNC";
export const DECREMENT = "DECREMENT";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });
export const incrementAsync = () => ({ type: INCREMENT_ASYNC });
