<template>
  <div id="app">
    <header id="header-main">
      <nav id="nav-main">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/contact">Contact</router-link>|
      </nav>
    </header>
    <!-- ci-dessous, router view est obligatoire pour avoir l'affichage du component associé à la route actuelle -->
    <main id="content-main">
      <!-- souvenez-vous de {{{body}}} dans les app hbs -->
      <router-view />
    </main>
    <footer id="footer-main">vue rock @ 2020</footer>
  </div>
</template>

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
