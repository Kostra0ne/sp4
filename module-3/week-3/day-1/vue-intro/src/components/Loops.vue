<template>
  <ul class="usernames">
    <li v-for="(name, i) in usernames" :key="i">{{name}}</li>
  </ul>
</template>

<script>
export default {
  props: ["usernames"],
};
</script>