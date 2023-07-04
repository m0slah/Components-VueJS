<template>
  <div>
    <button type="button" @click="onClickAge">Update Age</button>
    <p>The User is {{ age }} years old</p>
    <p>{{ AgeDoubled }}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
  emits: ["age-change"],
  computed: {
    AgeDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
};
</script>
