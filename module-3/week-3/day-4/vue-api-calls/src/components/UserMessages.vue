<template>
  <div>
    <h1 class="title">My messages</h1>
    <ul>
      <li v-for="(msg, i) in messages" :key="i">
        <h2 v-if="msg.from" :title="msg.from.email" class="title">{{ msg.from.first_name }} - {{ msg.from.last_name }}</h2>
        <p>
          {{ msg.message }}
        </p>
        <span>{{ msg.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      from: null,
      messages: []
    };
  },
  methods: {
    async getUserMessages() {
      const URL =
        process.env.VUE_APP_BACKEND_URL +
        "/api/messages/to/" +
        this.$route.params.id;

      const apiRes = await axios.get(URL);

      this.messages = apiRes.data;
    },
    async checkMessages() {
      setInterval(this.getUserMessages, 20000)
    }
  },
  created() {
    try {
      this.getUserMessages();
      this.checkMessages();
    } catch (err) {
      console.error(err, axios);
    }
  }
};
</script>

<style>
</style>