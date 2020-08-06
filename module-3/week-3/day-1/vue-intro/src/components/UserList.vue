<template>
  <span>
    <UserInput @add-new-user="pushNewUser" />
    <!-- ci-dessus add-new-user est l' event-listener et pushNewUser est l'event handler !!! -->
    <UserDetails
      @delete-user="removeUser(i)"
      v-for="(user,i) in users"
      :key="i"
      :name="user.name"
      :lastname="user.lastname"
    />
  </span>
</template>

<script>
import UserInput from "@/components/UserInput";
import UserDetails from "@/components/UserDetails";
export default {
  components: { UserInput, UserDetails },
  data() {
    return {
      users: [
        { name: "Jane", lastname: "Doe" },
        { name: "Joe", lastname: "Dalton" },
        { name: "Luke", lastname: "Skywalker" },
        { name: "Bruce", lastname: "Willis" },
      ],
    };
  },
  methods: {
    pushNewUser(infos) {
      this.users.push(infos);
    },
    removeUser(index) {
      this.users.splice(index, 1);
    },
  },
};
</script>


<style>
</style>