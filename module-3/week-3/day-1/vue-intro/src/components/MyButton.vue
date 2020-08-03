<template>
  <!-- v-bind: ou simplement : signifie lier l'interpreteur JS au contenu de ton attribut. ici on rend le background dynmaique en fonction de la prop passée  -->
  <button :style="{background: background}" class="btn">
      <span style="font-weight: bold">{{text}}</span>
  </button>
</template>

<script>
export default {
  props: ["background", "text"],
};
</script>

<style scoped>
.btn {
  border: 1px solid;
  border-radius: 0.3rem;
  width: 120px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
}
</style>
