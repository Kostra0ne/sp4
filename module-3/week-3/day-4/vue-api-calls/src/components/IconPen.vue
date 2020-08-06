<template>
  <font-awesome-icon class="link" id="burger" icon="pen" />
</template>

<script>
// https://github.com/FortAwesome/vue-fontawesome
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPen);

Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {};
</script>


