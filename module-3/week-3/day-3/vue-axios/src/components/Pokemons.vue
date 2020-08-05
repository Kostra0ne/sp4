<template>
  <ul>
    <li v-for="(pok, i) in pokemons" :key="i">{{pok.name}}</li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemons: []
    };
  },
  methods: {
    async getPokemons() {
      const apiRes = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      console.log(apiRes.data);
      this.pokemons = apiRes.data.results;
    }
  },
  mounted() {
    try {
      this.getPokemons();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style>
</style>

