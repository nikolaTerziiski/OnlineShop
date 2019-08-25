<template>
  <ul class="list-group list-group-flush">
  <li class="list-group-item" v-for="car in cars" :key=car._id>{{car.carBrand}} |  {{car.carModel}} | Price: {{car.price}} EUR |  More information -->
    <a href><router-link :to="{name: 'carDetails', params: {id: car._id}}">Details</router-link></a>
  </li>
</ul>
</template>

<script>
import { carService } from '../../services/carServices';
//import config from '@/config/config'

export default {
    data() {
     return { 
       cars: []
     }
    },
    mixins: [carService],
    mounted() {
       this.getAllCars()
       .then(({data}) => this.cars = data)
    }
}
</script>

<style>

</style>