<template>
  <div class="likes">
    <span>
      <span>nb likes:</span>
      <b>{{likes}}</b>
    </span>
    <button class="btn" @click="() => likes++">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
    };
  },
};
</script>

<style lang="css" scoped>
.likes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120px;
  border: 2px solid;
  border-radius: 0.3rem;
  padding: 6px;
  margin-bottom: 10px;
}

.btn {
  border: 2px solid;
  height: 32px;
  padding: 5px;
  background: tomato;
  color: whitesmoke;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.btn:hover {
  color: tomato;
  background: whitesmoke;
}
</style>