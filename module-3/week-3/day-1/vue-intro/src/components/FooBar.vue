<template>
  <p class="foo-bar">Foo Bar !!!</p>
</template>

<style lang="scss" scoped>
$color1: dodgerblue;
.foo-bar {
  border: 1px solid $color1;
  border-radius: 0.3rem;
  max-width: 120px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
// pour utiliser sass :
// npm i sass sass-loader
</style>

