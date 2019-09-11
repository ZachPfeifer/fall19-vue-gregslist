<template>
  <div class="house col-3 border rounded" @click="viewHouse()">
    <h4>
      <b>House Listing:</b>
    </h4>
    <h5>Bedrooms: {{houseProp.bedrooms}}</h5>
    <h5>Bathrooms: {{houseProp.bathrooms}}</h5>
    <img :src="houseProp.imgUrl" alt="House Image" />
    <h5>Floors: {{houseProp.levels}}</h5>
    <h5>Year Built: {{houseProp.year}}</h5>
    <h5>Price: ${{houseProp.price}}</h5>
    <h5>{{houseProp.description}}</h5>
  </div>

  <!-- this._id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.levels = data.levels
    this.price = data.price
  this.description = data.description-->
</template>


<script>
export default {
  name: "house",
  props: ["houseProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewHouse() {
      this.$router.push({
        name: "house",
        params: { houseId: this.houseProp._id }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
img {
  height: 22vh;
}
</style>