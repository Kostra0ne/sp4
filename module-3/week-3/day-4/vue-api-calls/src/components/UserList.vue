<template>
  <ul class="users">
    <li class="user" v-if="!users.length">...loading</li>
    <li v-for="(user, i) in users" :key="i" class="user">
      <p>{{ user.first_name }} {{ user.last_name }}</p>
      <p>
        <router-link class="link" :to="'/users/' + user._id"
          >see details...
        </router-link>
      </p>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    async getUsers() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/api/users"
      );
      this.users = apiRes.data; // axios retourne TJS les results sous la clé data
    }
  },
  created() {
    try {
      this.getUsers();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style scoped>
.users {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  grid-auto-rows: 100px;
}
.user {
  border: 1px solid;
  border-radius: 0.3rem;
  list-style: none;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
