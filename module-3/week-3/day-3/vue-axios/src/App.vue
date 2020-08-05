<template>
  <div id="app">
    <h1 class="title">Cycle de vie des components Vue</h1>
    <hr />
    <p>
      <a href="https://fr.vuejs.org/v2/guide/instance.html" target="_blank">read the doc</a>
    </p>
    <hr />
    <h2 class="title">Vue et Axios</h2>
    <p>
      <a
        href="https://fr.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html"
        target="_blank"
      >read the doc</a>
    </p>
    <hr />
    <Pokemons />
  </div>
</template>

<script>
import Pokemons from "@/components/Pokemons.vue";
export default {
  components: {
    Pokemons
  },
  beforeCreate() {
    console.log("le component va bientôt être créé en mémoire", this.$el);
  },
  created() {
    console.log("le component a été créé en mémoire", this.$el);
  },
  mounted() {
    console.log("le component est accroché au DOM", this.$el);
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
