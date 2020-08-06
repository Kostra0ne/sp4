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

<style lang="scss" scoped>
#nav-main {
  position: fixed;
  display: flex;
  align-items: center;
  height: 90px;
  justify-content: center;
  background: black;
  color: white;
  right: 0;
  left: 0;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
