<template>
  <div>
      <h1 class="title">Events callback</h1>
      <input type="range" v-on:input="$emit('messageDuChild', $event.target.value)">
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>