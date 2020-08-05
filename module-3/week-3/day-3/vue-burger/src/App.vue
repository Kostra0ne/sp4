<template>
  <div id="app">
    <NavMain />
    <NavMobile />
    <main id="main-content">
      <router-view />
    </main>
  </div>
</template>
<script>
import NavMain from "@/components/NavMain";
import NavMobile from "@/components/NavMobile";
export default {
  components: {
    NavMain,
    NavMobile
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
