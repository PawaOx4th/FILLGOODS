<template>
  <div id="mamber">
    <Row :gutter="16" type="flex" justify="start" align="middle" class-name="row__card">
      <Col span="4" v-for="(member, index) in members" :key="index">
        <Card
          :name="member.first_name"
          :lastName="member.last_name"
          :phone="member.phone"
          :age="member.age"
          :address="member.address"
        />
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "member",
  components: {
    Card: () => import("@/components/Card.vue")
  },
  computed: {
    members() {
      return this.$store.getters.getMembers;
    }
  }
};
</script>

<style lang="scss" scoped>
.row__card {
  padding: 2rem;
}
</style>
