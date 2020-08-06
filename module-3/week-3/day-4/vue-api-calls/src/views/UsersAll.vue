<template>
  <div>
    <p>une liste d'users venant de la bdd...</p>
    <p>cliquez pour accéder au détails d'un user</p>
    <hr />
    <UserList />
  </div>
</template>

<script>
import UserList from "@/components/UserList";

export default {
  name: "UserAll",
  components: {
    UserList
  }
};
</script>
