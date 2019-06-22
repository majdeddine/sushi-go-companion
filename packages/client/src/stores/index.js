import TodoStore from './todo/todo.store';
import { todoStoreProps, todoStoreDefaultProps } from './todo/todo.props';

const stores = {
  TodoStore,
};

const proptypes = {
  todoStoreProps,
  todoStoreDefaultProps,
};

export { stores, proptypes };
