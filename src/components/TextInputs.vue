<template>
  <div class="">
    <label :for="$attrs.name">{{ placeholder }}</label>
    <input v-bind="$attrs" v-on:input="$emit('input', $event.target.value)" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: "TextInputs",
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      required: true
    },
  },
  mounted() {
    console.log(this.$attrs)
  }
};
</script>
