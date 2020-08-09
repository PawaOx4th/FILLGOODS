<template>
  <div id="login-page">
    <Button type="success" ghost @click="setData">Dashed</Button>
    <Layout>
      <Content>
        <Row type="flex" justify="center" align="middle" class-name="row">
          <Col :xs="16" :md="6">
            <Form ref="formInline" :model="formValidate" :rules="ruleInline">
              <FormItem prop="mail">
                <Input v-model="formValidate.mail" placeholder="Enter your e-mail">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input
                  type="password"
                  v-model="formValidate.password"
                  placeholder="Password"
                  maxlength="12"
                  on-enter="loginWithEmail"
                >
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="loginWithEmail" class="btn">
                  Signin
                </Button>
              </FormItem>
            </Form></Col
          >
        </Row>
      </Content>
    </Layout>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import db from "@/db";

export default {
  name: "login-page",
  data() {
    return {
      formValidate: {
        mail: "",
        password: ""
      },
      ruleInline: {
        mail: [
          { required: true, message: "Mailbox cannot be empty", trigger: "blur" },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        password: [
          { required: true, message: "Please fill in the password.", trigger: "blur" },
          {
            type: "string",
            min: 6,
            max: 12,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    setData() {
      this.formValidate.mail = "a@gmail.com";
      this.formValidate.password = "123456";
    },
    loginWithEmail() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.formValidate.mail, this.formValidate.password)
        .then(data => {
          this.fetchData();
          this.$store.dispatch("setProfileEmail", data.user.email);
          this.$Message.success("Sign in Success!");
          this.$router.replace({ name: "Home" });
        })
        .catch(error => {
          this.$Message.error("Fail!");
          this.error = error;
        });
    },
    async fetchData() {
      const snapshot = await db.collection("users").get();
      const collection = snapshot.docs.map(doc => doc.data());
      this.$store.dispatch("setUsers", collection);
    }
  }
};
</script>

<style lang="scss" scoped>
.ivu-layout-content {
  height: 100vh !important;

  .row {
    height: 100%;

    .btn {
      margin: 0.8rem 0 0 0;
      width: 100%;
      min-height: 2.2rem;
    }
  }
}
</style>
