<template>
  <div id="navber-component">
    <Layout>
      <Header :style="{ position: 'fixed', width: '100%' }" class="navber">
        <Row type="flex" justify="end" align="middle" class="nav__row">
          <Col :xs="18" :md="6" :lg="24">
            <p>{{ userLogin }}</p>
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
  text-align: end;
  width: 90%;
  margin: 0 auto;
}
</style>
