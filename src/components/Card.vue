<template>
  <div id="card-component">
    <Card class="card">
      <p>{{ name }}</p>
      <p>{{ lastName }}</p>
      <p>{{ phone }}</p>
      <p>{{ age }}</p>
      <p>{{ address }}</p>
    </Card>
  </div>
</template>

<script>
export default {
  name: "card-component",
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
    age: {
      type: String
    },
    address: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 0.5rem 0 0 0;
}
</style>
