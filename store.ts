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
  return JSON.parse(localStorage.getItem('todos') || '') || [];
}

export const store = reactive({
  todos: getLocalStorage(),
  add(todo: TodoType) {
    this.todos.push({...todo, id: uuidv4()});
    saveLocalStorage(this.todos);
  },
  delete(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    saveLocalStorage(this.todos);
  },
  update(id: string) {
    this.todos = this.todos.map((todo) => {
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
