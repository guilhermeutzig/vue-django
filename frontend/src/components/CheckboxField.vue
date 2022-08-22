<template>
  <input type="checkbox" :checked="isChecked" @change="onChange" />
</template>

<script>
export default {
  name: "CheckboxField",
  props: {
    isChecked: Boolean,
    onChange: Function,
  },
};
</script>

<style scoped>
input {
  height: 20px;
  width: 20px;
}
</style>
