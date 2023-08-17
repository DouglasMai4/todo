<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { store } from '../../store';
</script>

<template>
  <div class="task-container">
    <span :class="`title ${finished ? 'finished' : ''}`">
      {{ title }}
    </span>

    <button
      class="check-btn"
      @click="store.update(id || '')"
    >
      <Icon icon="fa6-solid:check" />
    </button>
    <button
      class="delete-btn"
      @click="store.delete(id || '')"
    >
      <Icon icon="fa6-solid:trash-can" />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    id: String,
    title: String,
    finished: Boolean,
  }
};
</script>

<style lang="scss">
@import '../assets/colors.scss';

.task-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3rem;
  background-color: $bg-color;
  font-size: 2rem;
  border-radius: 1rem;

  .title {
    word-wrap: break-word;
    grid-column: 1 / 3;
    grid-row: 1;

    &.finished {
      text-decoration: line-through;
      text-decoration-color: $c-primary;
    }
  }

  button {
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
      filter: brightness(0.85);
    }

    &.check-btn {
      border-bottom-left-radius: 1rem;
      background-color: $c-secondary;
    }

    &.delete-btn {
      border-bottom-right-radius: 1rem;
      background-color: $c-error;
    }
  }
}
</style>