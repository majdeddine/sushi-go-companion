import { shape, number, string, bool, arrayOf } from "prop-types";

const todoStoreProps = {
  todos: arrayOf(
    shape({
      id: number,
      title: string,
      done: bool,
    }),
  ),
  remaining: number,
};

const todoStoreDefaultProps = {
  todos: [],
  remaining: undefined,
};

export { todoStoreProps, todoStoreDefaultProps };
