import { reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';

type TodoType = {
  id: string,
  title: string,
  finished: boolean
}

function saveLocalStorage(todos: Array<TodoType>) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getLocalStorage() {
  const todosLocal = localStorage.getItem('todos') || null;
  return todosLocal ? JSON.parse(todosLocal) : [];
}

export const store = reactive({
  todos: getLocalStorage(),
  add(title: string) {
    this.todos.push({id: uuidv4(), title, finished: false});
    saveLocalStorage(this.todos);
  },
  delete(id: string) {
    this.todos = this.todos.filter((todo: TodoType) => todo.id !== id);
    saveLocalStorage(this.todos);
  },
  update(id: string) {
    this.todos = this.todos.map((todo: TodoType) => {
      if (todo.id === id) {
        return {
          ...todo,
          finished: !todo.finished
        };
      }
    });
    saveLocalStorage(this.todos);
  } 
});
