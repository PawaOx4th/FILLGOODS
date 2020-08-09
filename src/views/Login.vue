<template>
  <div id="login-page">
    <Layout>
      <Content>
        <Row type="flex" justify="center" align="middle" class-name="row">
          <Col :xs="12" :md="12" :xl="12">
            <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
              <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
              </FormItem>
            </Form></Col
          >
        </Row>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "login-page",
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [{ required: true, message: "Please fill in the user name", trigger: "blur" }],
        password: [
          { required: true, message: "Please fill in the password.", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.ivu-layout-content {
  height: 100vh !important;

  .row {
    height: 100%;
  }
}
</style>
