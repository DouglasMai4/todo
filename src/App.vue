<script setup lang="ts">
import Input from './components/Input.vue';
</script>

<template>
  <main>
    <section>
      <h1>Tarefas</h1>

      <form>
        <Input
          type="text"
          placeholder="Título da tarefa"
        />
      </form>
    </section>
  </main>
</template>

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
    box-shadow: 5px 5px 15px rgb(0 0 0 / 50%);
  }
}
</style>
