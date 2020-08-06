<template>
  <div>
    <h1 class="title">User profile</h1>
    <p v-if="user">{{ user.first_name }} - {{ user.last_name }} - {{ user.email }}</p>
    <p v-else>..loading</p>
    <hr />
    <nav>
      <router-link :to="`/users/${userId}/send-message`">
        <IconPen />
      </router-link>
      <router-link :to="`/users/${userId}/my-messages`">
        <IconMessage />
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import IconMessage from "@/components/IconMessage";
import IconPen from "@/components/IconPen";

export default {
  data() {
    return {
      userId: null,
      user: null
    };
  },
  components: {
    IconMessage,
    IconPen
  },
  methods: {
    async getUser(id) {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/api/users/" + id
      );
      this.user = apiRes.data;
    }
  },
  created() {
    console.log(">>>>", this.$router); // accessible partout dans ton app
    this.userId = this.$route.params.id;
    try {
      this.getUser(this.userId);
    } catch (err) {
      console.error(err);
    }
  }
};
</script>
