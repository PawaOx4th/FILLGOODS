import Vue from "vue";
import firebase from "firebase/app";
import VueFirestore from "vue-firestore";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./plugins/iview";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUSKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINSENDERID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
Vue.use(VueFirestore);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
