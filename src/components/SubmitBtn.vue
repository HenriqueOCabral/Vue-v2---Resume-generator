<template>
  <button type="submit">{{ msg }}</button>
</template>

<script>
export default {
  name: "SubmitBtn",
  props: {
    msg: String,
  },
};
</script>