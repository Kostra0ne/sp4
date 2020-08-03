<template>
  <div id="condition">
      <span v-if="score < 5">wax on, wax off !</span>
      <span v-else-if="score <= 10">wax on !</span>
      <span v-else>good job !!!</span>
  </div>
</template>

<script>
export default {
  props: ["score"]
}
</script>

<style>

</style>