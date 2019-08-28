<template>
  <div>
    
    <div class="header" @click="greet">
      Danny
    </div>

    <div class="body">
      
      <div class="flex l">
        <div class="bot message">
          <p>Bot</p>
          Lo 
        </div>
      </div>
     
      <div class="flex r">
        <div class="you message">
          <p>You</p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ad debitis magni illum doloremque, nulla provident placeat quisquam, sapiente iure maxime quaerat eaque, blanditiis dicta. Voluptates laudantium fugiat quasi nemo.
        </div>
      </div>

      <div class="flex l">
        <div class="bot message">
          <p>Bot</p>
          Lo 
        </div>
      </div>


    </div>

    <div class="footer">
      
      <form>
      
        <input type="text" v-model="message">
        <button type="submit">SEND</button>
      
      </form>

    </div>

  </div>
</template>


<script>

import rive from 'rivescript'
//import "../rive/hello.rive"

let bot 

export default {
  data() {
    return {
      message: ""
    }
  },

  async created() {

    bot = new rive()

    bot.loadFile('hello.rive').then(async () => {
      
      await bot.sortReplies()          

    }).catch(err => {
      console.log(err)
    })

  },

  methods: {

    greet() {
       bot.reply("d", "hello").then()
    }

  }

}
</script>


<style>

  .header {
    background: #09f;
    margin: 0;
    padding: 10px;
    position: fixed;
    width: 100vw;
    top:0;
    left:0;
  }

  .footer {
    background: #09f;
    margin: 0;
    padding: 10px;
    position: fixed;
    width: 100vw;
    bottom:0;
    left:0;
  }

  button {
    background: rgb(79, 185, 255);
    padding: 5px;
    border: #fff 1px solid;
    color: #fff;
    width: 80px;
  }

  input {
    width: calc(92%-80px);
    padding: 5.2px;
    color: #09f;
  }

  .body {
    margin: 50px 0;
  }

  .message {
    max-width: 80%;
    margin-left: 10px;
    padding: 10px;
    background: #09f;
    display: inline-block;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  .message p {
    padding: 0;
    color: #333;
    font-weight: bold;
    margin: 0;
  }

 

  .bot {
    margin-left: 10px;   
  }

  .you {
    margin-right: 10px;
  }

  .flex {
    display: flex;
  }

  .r {
    justify-content: flex-end;
  }

</style>