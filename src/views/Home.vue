<template>
  <div id="home-page" class="home">
    <Layout>
      <Header class="navber"><Navber /></Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "home-page",
  components: {
    Navber: () => import("@/components/Navber.vue")
  },
  data() {
    return {
      Profile: {
        email: ""
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
.navber {
  background-color: #1a936f;
  width: 100%;
  padding: 0 0;
}
</style>
