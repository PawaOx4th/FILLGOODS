<template>
  <div id="navber-component">
    <Layout>
      <Header :style="{ position: 'fixed', width: '100%' }" class="navber">
        <Row type="flex" justify="end" align="middle" class="nav__row">
          <Col :xs="18" :md="6" :lg="12" class="nav__user">
            <p>{{ userLogin }}</p>
          </Col>
          <Col :xs="18" :md="6" :lg="12" class="nav__btn">
            <p>Sign out</p>
          </Col>
        </Row>
      </Header>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "navber-component",
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
