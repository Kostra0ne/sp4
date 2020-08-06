<template>
  <div class="user-input">
    <input v-model="name" type="text" placeholder="enter name here" />
    <input v-model="lastname" type="text" placeholder="enter lastname here" />
    <button @click="sendFullName">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      lastname: "",
    };
  },
  methods: {
    sendFullName() {
      if (this.name && this.lastname) {
        this.$emit("add-new-user", {
          name: this.name,
          lastname: this.lastname,
        });
        this.name = "";
        this.lastname = "";
      }
    },
  },
};
</script>

<style scoped>
.user-input {
  background: lightblue;
  color: khaki;
  padding: 2rem;
}
</style>