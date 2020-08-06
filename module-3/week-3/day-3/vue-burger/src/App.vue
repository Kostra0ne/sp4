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
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
