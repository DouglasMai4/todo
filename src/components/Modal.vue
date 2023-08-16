<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const open = ref(false);
</script>

<template>
  <button
    class="open-btn"
    @click="open = true"
  >
    <Icon icon="fa6-solid:plus" />
  </button>

  <teleport to="body">
    <dialog v-if="open">
      <div class="content">
        <slot />

        <button
          class="close-btn"
          @click="open = false"
        >
          <Icon icon="fa6-solid:xmark" />
        </button>
      </div>
    </dialog>
  </teleport>
</template>

<style scoped lang="scss">
@import '../assets/colors.scss';

.open-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $bg-color;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  aspect-ratio: 1 / 1;
  width: 3rem;
  font-size: 2rem;
  background-color: $c-secondary;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 15px rgb(0 0 0 / 50%);
  cursor: pointer;
  transition: filter 300ms ease;

  &:hover {
    filter: brightness(0.85);
  }
}

dialog {
  position: fixed;
  width: 100%;
  height: 100dvh;
  background-color: transparent;
  border: none;
  backdrop-filter: blur(8px);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    position: relative;
    padding: 1rem;
    border: 1px solid $c-primary;
    border-radius: 1rem;
    background-color: $bg-color;
    color: $c-text;
    margin: 1rem;
    box-shadow: 5px 5px 15px rgb(0 0 0 / 50%);

    .close-btn {
      position: absolute;
      top: -1.25rem;
      right: -1.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      aspect-ratio: 1 / 1;
      width: 2.5rem;
      font-size: 2rem;
      border-radius: 50%;
      border: none;
      background-color: $c-error;
      color: $bg-color;
      cursor: pointer;
      transition: filter 300ms ease;

      &:hover {
        filter: brightness(0.85);
      }
    }
  }
}
</style>