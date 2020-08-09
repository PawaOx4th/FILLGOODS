<template>
  <div id="home-page" class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ Profile.email }}</p>
    <br />
    <Button type="success" @click="testDB">test save</Button>
  </div>
</template>

<script>
// import { db } from "firebase/firebase-firestore";
import db from "@/db";

export default {
  name: "home-page",
  components: {},
  data() {
    return {
      Profile: {
        email: ""
      }
    };
  },
  mounted() {
    //   แสดง E-mail
    this.Profile.email = this.$store.getters.getProfileEmail;
  },
  methods: {
    //  addReptile() {
    //    this.$firestore.reptiles.add({
    //      name: this.newReptile,
    //      timestamp: new Date()
    //    });
    //    this.newReptile = "";
    //  }
    testDB() {
      db.collection("users")
        .doc(this.Profile.email)
        .set(this.Profile)
        .then(() => {
          console.log("testDB -> this.Profile", this.Profile);
        })
        .catch(err => {
          console.log("testDB -> err", err);
        });
    }
  }
};
</script>
