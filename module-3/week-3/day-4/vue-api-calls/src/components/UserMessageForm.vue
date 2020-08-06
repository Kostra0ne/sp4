<template>
  <!-- vue met à disposition des raccourçis utiles https://fr.vuejs.org/v2/guide/events.html -->
  <!-- ex: @submit.prevent va effecture un evt.preventDefault() pour éviter le rechargement de l'app -->
  <form @submit.prevent="postMessage" class="form">
    <h1 class="title">Envoyer un message</h1>
    <label class="label" for="to">Destinataire</label>
    <select v-model="to" id="to" class="input">
      <option
        v-for="(user, i) in allUsers"
        :key="i"
        :selected="i === 1 ? true : false"
        :value="user._id"
      >{{ user.first_name }} - {{ user.last_name }}</option>
    </select>
    <label for="message" class="label">message</label>
    <textarea id="message" class="input" v-model="message"></textarea>
    <button class="btn">ok</button>
  </form>
</template>

<script>
import axios from "axios";
import "@/styles/mod.form.css";

export default {
  name: "UserMessageForm",
  data() {
    return {
      allUsers: [],
      to: null,
      from: null,
      message: "test message foo bar baz"
    };
  },
  created() {
    try {
      this.from = this.$route.params.id; // une autre façon plus courte d'accéder aux infos de l'URL exposées automatiquement par Vue
      this.getAllUsers();
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    async getAllUsers() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/api/users"
      );
      this.allUsers = apiRes.data;
      this.to = this.allUsers[0];
    },
    async postMessage() {
      const { to, from, message } = this.$data; // this.$data représente tout l'objet retourné par la fonction data()
      try {
        const apiRes = await axios.post(
          process.env.VUE_APP_BACKEND_URL + "/api/messages",
          {
            to,
            from,
            message
          }
        );
        console.log(apiRes);
      } catch (apiErr) {
        console.error(apiErr);
      }
    }
  }
};
</script>
