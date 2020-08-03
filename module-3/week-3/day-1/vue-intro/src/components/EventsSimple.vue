<template>
  <div>
      <button v-on:click="action1">A</button>
      <button @click="action2">B</button>
      <!-- $event (et toutes les valeurs préfixées par $ dans vue) font référence à des valeurs système ... tu dois l'appeller $event -->
      <button @click="action3($event, 'toto')">C</button>
  </div>
</template>

<script>
export default {
  methods: { /* on définit dans méthodes, toutes les méthodes d'une instance de component ... vue fera le new Vue({...}) pour vous, avec l'objet exporté ci-dessus */
    action1: function (evt) {
      console.log("action 1", evt);
    },
    action2(evt) {
      console.log("action 2", evt);
    },
    action3(e, value) {
      console.log("action 3", e, value);
      // on accéde aux autres méthodes de cette instance à travers "this"
      this.action1("je viens d'action 3");
    },
  },
};
</script>

<style>
</style>