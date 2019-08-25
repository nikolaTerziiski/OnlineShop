<template>
  <ul class="list-group list-group-flush">
  <li class="list-group-item" v-for="car in cars" :key=car._id><img class="resize" :src="car.carImage"> {{car.carBrand}} |  {{car.carModel}} | Price: {{car.price}} EUR |  More information -->
    <a href><router-link :to="{name: 'carDetails', params: {id: car._id}}">Details</router-link></a>
  </li>
</ul>
</template>

<script>
//import config from '@/config/config'
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
      ...mapGetters({
        cars: 'getAllCars'
      })
  },
  methods: {
    ...mapActions(['getAll'])
  },
  created() {
      this.getAll();
  }
}
</script>

<style>
.resize {
    width: 200px;
    height: auto;
}
</style>