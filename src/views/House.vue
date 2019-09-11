<template>
  <div class="house">
    house Deets
    <h1>{{house.make}}</h1>
    <h5>{{house.model}}</h5>
    <h5>{{house.year}}</h5>
    <h5>{{house.price}}</h5>
    <img :src="house.imgUrl" alt />
    <h5>{{house.description}}</h5>
    <button class="btn btn-danger" @click="delort">Delort</button>
  </div>
</template>


<script>
export default {
  name: "house",
  data() {
    return {};
  },
  mounted() {
    let payload = {
      houseId: this.$route.params.houseId
    };
    this.$store.dispatch("getHouseById", payload);
  },
  computed: {
    house() {
      return this.$store.state.activeHouse;
    }
  },
  methods: {
    delort() {
      this.$store.dispatch("delortHouse", this.house._id);
    }
  },
  components: {}
};
</script>


<style scoped>
img {
  height: 500px;
}
</style>