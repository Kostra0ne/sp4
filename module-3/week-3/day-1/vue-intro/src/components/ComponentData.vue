<template>
  <ul>
    <li v-for="(n, i) in usernames" 
    :key="i" @click="displayNameLength(n)">{{n}}</li>
  </ul>
</template>

<script>
export default {
  props: ["usernames"],
  methods: {
    displayNameLength(name) {
      console.log(`${name} a une longueur de ${name.length}`);
    },
  },
};
</script>
