<template>
  <div id="navber-component">
    <Layout>
      <Header :style="{ position: 'fixed', width: '100%', zIndex: '1' }" class="navber">
        <Row type="flex" justify="end" align="middle" class="nav__row">
          <Col :xs="18" :md="6" :lg="12" class="nav__user">
            <p>{{ userLogin }}</p>
          </Col>
          <Col :xs="18" :md="6" :lg="12" class="nav__btn">
            <SignOut />
          </Col>
        </Row>
      </Header>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "navber-component",
  components: {
    SignOut: () => import("@/components/SignOut.vue")
  },
  computed: {
    userLogin() {
      return this.$store.getters.getProfileEmail;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav__row {
  color: aliceblue;
  width: 90%;
  margin: 0 auto;

  .nav__user {
    text-align: start;
  }

  .nav__btn {
    text-align: end;
  }
}
</style>
