<template>
  <div>
    <h1 class="title">2-way Binding</h1>
    <p>{{uneString}}</p>
    <p>{{unNombre}}</p>
    <p>{{unBoolean}}</p>
    <hr />
    <p>
      <label for>changer la valeur de la string</label>
      <input type="text" v-model="uneString" />
    </p>
    <p>
      <label for>changer la valeur du number</label>
      <input type="range" v-model="unNombre" />
    </p>
    <h2>changer la valeur du booléen</h2>
    <p>
      <label for>no sorry</label>
      <input type="radio" v-model="unBoolean" :value="false" />
      <label for>yes sir</label>
      <input type="radio" v-model="unBoolean" :value="true" />
    </p>
  </div>
</template>
<script>
export default {
  data() {
    // data est une fonction qui return un object (OBLIGATOIRE)
    return {
      uneString: "",
      unNombre: 100,
      unBoolean: true,
    };
  },
};
</script>
