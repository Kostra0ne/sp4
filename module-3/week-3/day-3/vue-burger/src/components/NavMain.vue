<template>
  <nav id="nav-main">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <IconBurger />
  </nav>
</template>

<script>
import IconBurger from "@/components/IconBurger";

export default {
  components: {
    IconBurger
  }
};
</script>

<style></style>
