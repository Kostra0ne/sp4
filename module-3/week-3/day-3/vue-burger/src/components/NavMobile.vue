<template>
  <nav id="nav-mobile" :class="isActive && 'is-active'">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  created() {
    // $on prend un event-custom en param 1 (string)
    // et exécute un callback (param2) quand l'event survient...
    this.$ebus.$on("toggle-nav-mobile", () => {
      console.log("hey : je suis nav mobile et je réagis à l'event custom <<toggle-nav-mobile>>");
      this.isActive = !this.isActive;
    });
  }
};
</script>

<style></style>
