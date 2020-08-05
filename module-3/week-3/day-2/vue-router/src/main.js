import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// on créé l'application (SPA: Single Page Application)
// avec ce constructeur (Vue)
// la new Vue() cad l'app complète est créée avec un router importé plus haut
// le component App importé plus sera render (générée) par Vue
// et sera attaché dans l'index.html du dossier public dans l'élément avec l'id #app

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
