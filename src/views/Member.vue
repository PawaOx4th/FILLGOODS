<template>
  <div id="mamber">
    <Row type="flex" justify="end" align="middle" class="row__btn">
      <Col span="24" type="flex">
        <ButtonInsert />
      </Col>
    </Row>
    <Row :gutter="16" type="flex" justify="start" align="middle" class-name="row__card">
      <Col :xs="24" :sm="6" :md="6" :lg="4" v-for="(member, index) in members" :key="index">
        <Card
          :name="member.first_name"
          :lastName="member.last_name"
          :phone="member.phone"
          :age="member.age"
          :address="member.address"
          :id="member.id"
          :email="member.email"
          :index="index"
          @updateCard="updateCard"
        />
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "member",
  components: {
    Card: () => import("@/components/Card.vue"),
    ButtonInsert: () => import("@/components/ModalInsert.vue")
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    members() {
      this.$Loading.finish();
      return this.$store.getters.getMembers;
    }
  },
  mounted() {
    this.$Loading.start();
  },
  methods: {
    //   Up date Member data in Card
    updateCard() {
      this.$forceUpdate();
    }
  }
};
</script>

<style lang="scss" scoped>
.row__btn {
  margin: 1rem 0 0 0;
  padding: 0.5rem;
}
.row__card {
  padding: 2rem;
}
</style>
