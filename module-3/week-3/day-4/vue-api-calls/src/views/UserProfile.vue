<template>
  <div>
    <h1 class="title">User profile</h1>
    <p v-if="user">{{ user.first_name }} - {{ user.last_name }} - {{ user.email }}</p>
    <p v-else>..loading</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: null
    };
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
    const currentUserId = this.$router.history.current.params.id;
    try {
      this.getUser(currentUserId);
    } catch (err) {
      console.error(err);
    }
  }
};
</script>
