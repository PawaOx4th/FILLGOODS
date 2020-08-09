<template>
  <div id="signout-component">
    <Button type="dashed" ghost @click="btnsignOut">Sign Out</Button>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "signout-component",
  methods: {
    btnsignOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
          this.$Message.success(" Sign Out Success!");
        })
        .catch(() => {
          this.$Message.info("Sign Out Error!");
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
