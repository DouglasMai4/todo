<script setup lang="ts">
import { store } from '../store';

import Modal from './components/Modal.vue';
import Input from './components/Input.vue';
import Task from './components/Task.vue';
</script>

<template>
  <main>
    <section>
      <h1>Tarefas</h1>

      <hr />

      <h2
        v-if="!store.todos.length"
      >
        Nenhuma tarefa adicionada
      </h2>

      <div v-else class="tasks-container">
        <Task
          v-for="task in store.todos"
          :key="task.id"
          :id="task.id"
          :title="task.title"
          :finished="task.finished"
        />
      </div>
    </section>
  </main>

  <Modal>
    <h1>Adicionar Tarefa</h1>
    <form @submit="handleSubmit">
      <Input
        type="text"
        placeholder="Título da tarefa"
        v-model="title"
      />

      <span v-if="msg">{{ msg }}</span>

      <button type="submit">
        Adicionar
      </button>
    </form>
  </Modal>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: '',
      msg: ''
    };
  },
  methods: {
    handleSubmit(e: Event) {
      e.preventDefault();

      if (!this.title) {
        this.msg = 'O título não pode ficar vazio';
        return;
      }

      store.add(this.title);
      this.title = '';
      this.msg = 'Tarefa adicionada';
    }
  }
};
</script>

<style scoped lang="scss">
@import './assets/colors.scss';

main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;

  section {
    padding: 1rem;
    border-radius: 1rem;
    background-color: $bg-color-s;
    border: 1px solid $c-primary;
    margin: 1rem;
    text-align: center;
    min-width: 25rem;
    box-shadow: 5px 5px 15px rgb(0 0 0 / 50%);

    .tasks-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }
  }
}

form {
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    padding: 0.2rem;
    background-color: $bg-color-s;
    margin-top: 1rem;
    border-radius: 1rem;
  }

  button {
    background-color: $c-secondary;
    font-size: 2rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
    transition: filter 300ms ease;

    &:hover {
      filter: brightness(0.85);
    }
  }
}
</style>
