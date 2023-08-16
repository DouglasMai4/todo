<template>
  <label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
    >
  </label>
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