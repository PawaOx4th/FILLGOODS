import Vue from "vue";
import firebase from "firebase/app";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./plugins/iview";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCbRo2VfrAOg01a5KVpconZAR_ncbRGzWs",
  authDomain: "fillgoods-test.firebaseapp.com",
  databaseURL: "https://fillgoods-test.firebaseio.com",
  projectId: "fillgoods-test",
  storageBucket: "fillgoods-test.appspot.com",
  messagingSenderId: "420960601389",
  appId: "1:420960601389:web:1abbafd5d07c2279c73fa4",
  measurementId: "G-3W841JHWG2"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
