<template>
  
  <div @click="chat">
  
    Chat !

  </div>

</template>

<script>
export default {
  
  methods: {
    chat() {
      this.$router.push("/chat")
    }
  }

}
</script>

<style scoped>

  div {
    padding: 30px;
    background-color: #09f;
    display: inline;
    position: fixed;
    top: 45vh;
    left: 45vw;
    color: #fff;
    font-weight: bold;
    font-family: sans-serif, arial;
    border-radius: 5px;
    cursor: pointer;
    margin: 0;
  }

</style>

