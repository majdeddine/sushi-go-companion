import { observable, action, computed } from 'mobx';

class Store {
  @observable todos = [
    {
      id: '1',
      title: 'todo or not todo',
      done: false,
    },
  ];

  @action addTodo = todo => {
    this.todos.push({
      id: Math.random() * 9999,
      ...todo,
    });
  };

  @computed get remaining() {
    return this.todos.filter(todo => !todo.done);
  }
}

const TodoStore = new Store();
export default TodoStore;
