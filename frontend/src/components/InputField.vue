<template>
  <input
    type="text"
    @input="onChange"
    :class="className"
    :value="value"
    :readonly="readonly"
  />
</template>

<script>
export default {
  name: "InputField",
  props: {
    className: String,
    value: String,
    placeholder: String,
    readonly: Boolean,
    onChange: Function,
  },
};
</script>

<style scoped>
input {
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  width: 180px;
}
</style>
