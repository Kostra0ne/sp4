<template>
  <div class="names">
    {{`${name}-${lastname}`}}
    <button @click="$emit('delete-user')">-</button>
  </div>
</template>

<script>
export default {
  props: ["name", "lastname", "index"],
};
</script>

<style scoped>
.names {
  height: 32px;
  padding: 6px;
  background: crimson;
  color: white;
}
</style>