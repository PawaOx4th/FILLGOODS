<template>
  <div id="home-page" class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ Profile.email }}</p>
    <br />
    <Button type="success" @click="testDB">test save</Button>
    <Button type="error" @click="testGetDB">test save</Button>
  </div>
</template>

<script>
// import { db } from "firebase/firebase-firestore";
import db from "@/db";
import data from "@/mockdata.json";

// const dbDATA = db.collection("users");

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
    async testDB() {
      // db.collection("users")
      //   .add(mockData)
      //   .then(() => {
      //     console.log("testDB -> this.Profile", this.Profile);
      //   })
      //   .catch(err => {
      //     console.log("testDB -> err", err);
      //   });
      await Object.keys(data).forEach(dockey => {
        db.collection("users")
          .doc(data[dockey].id)
          .set(data[dockey])
          .then(() => {
            console.log("testDB -> this.Profile", data[dockey].id);
          })
          .catch(err => {
            console.log("testDB -> err", err);
          });
      });
    },
    async testGetDB() {
      const snapshot = await db.collection("users").get();
      console.log(snapshot.docs.map(doc => doc.data()));
    }
  }
};
</script>
