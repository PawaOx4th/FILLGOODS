<template>
  <div id="card-component">
    <Card class="card" style="height: 100%">
      <p><strong>Frist Name: </strong>{{ name }}</p>
      <p><strong>Last Name:</strong> {{ lastName }}</p>
      <p><strong>Phone:</strong> {{ phone }}</p>
      <p><strong>Age:</strong> {{ age }}</p>
      <p><strong>Address:</strong> {{ address }}</p>
      <br />

      <ButtonEdit
        :name="name"
        :lastName="lastName"
        :phone="phone"
        :age="age"
        :address="address"
        :id="id"
        :email="email"
        :index="index"
        @updateCard="updateCard"
      />
    </Card>
  </div>
</template>

<script>
export default {
  name: "card-component",
  components: {
    ButtonEdit: () => import("@/components/ModalEdit.vue")
  },
  props: {
    name: {
      type: String
    },
    lastName: {
      type: String
    },
    phone: {
      type: String
    },
    age: {},
    address: {
      type: String
    },
    id: {
      type: String
    },
    email: {
      type: String
    },
    index: {
      type: Number
    }
  },
  methods: {
    updateCard() {
      this.$emit("updateCard");
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 2rem 0 0 0;
  height: 100% !important;
}
</style>
