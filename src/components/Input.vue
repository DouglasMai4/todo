<template>
  <label>
    <input :type="type" :placeholder="placeholder">
  </label>
</template>

<script lang="ts">
export default {
  props: {
    type: String,
    placeholder: String
  }
};
</script>