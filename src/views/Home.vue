<template>
  <div id="home-page" class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ Profile.email }}</p>
    <br />
  </div>
</template>

<script>
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
    }
  }
};
</script>
