<template>
  <ul class="list-group list-group-flush">
  <li class="list-group-item" v-for="car in cars" :key=car._id>Car brand: {{car.carBrand}} |  Car model: {{car.carModel}} | Car price: {{car.price}} EUR | for more information click on -->
    <a href><router-link to="/car/details">Details</router-link></a>
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