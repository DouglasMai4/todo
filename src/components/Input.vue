<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="handleInput"
  >
</template>

<script lang="ts">
export default {
  props: {
    type: String,
    placeholder: String,
    modelValue: String
  },
  emits: ['update:modelValue'],
  methods: {
    handleInput(event: Event) {
      const target = event.target as HTMLInputElement;
      this.$emit('update:modelValue', target.value);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/colors.scss';

input {
  padding: 0.2rem ;
  font-size: 2rem;
  background-color: $bg-color-s;
  border: none;
  color: $c-text;
  border-radius: 1rem;
  outline: 2px dotted transparent;
  outline-offset: 2px;
  caret-color: $c-secondary;
  transition: outline 300ms ease;

  &:focus {
    outline-color: $c-secondary;
  }
}
</style>