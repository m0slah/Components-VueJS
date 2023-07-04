<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
    name: 'Greeting',
    data() {
        return {
            message:'Hello Vue!'
        }
    }
}
</script>

<style scoped>
h1{
    color: red;
}
</style>