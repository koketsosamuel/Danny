import Vue from "vue";
import Router from "vue-router";
import Home from "./components/home.vue";
import chat from "./components/chat.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/chat",
      name: "chat",
      component: chat
    }
  ]
});
