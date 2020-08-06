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
  created() {
    console.log(process.env);
  },
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

a,
.link {
  color: darkorange;
}

hr {
  margin: 20px 0;
}

#main-content {
  position: relative;
  top: 90px;
  padding: 40px 20px 60px;
}
</style>
