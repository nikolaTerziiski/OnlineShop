<template>
  <!-- Default form contact -->
<form class="text-center border border-light p-5" @submit.prevent="onCreateCar">
    <p class="h4 mb-4">Create Car</p>

    <!-- Name -->
    <div class="row">
        <div class="col">
         <input type="text" id="defaultContactFormName" v-model="$v.carBrand.$model" class="form-control mb-4 col-sm-12" placeholder="Car brand">
        </div>
        <div class="col">
         <input type="text" id="defaultContactFormName" v-model="$v.carModel.$model" class="form-control mb-4 col-sm-12" placeholder="Car model">
        </div>
    </div>

    <div class="row">
        <div class="col">
            <input type="currency" id="defaultContactFormEmail" v-model="$v.price.$model" class="form-control mb-4 col-sm-12" placeholder="Price in EUR">
        </div>
    </div>
    <div class="row">
        <div class="col">
            <input type="imageURl" id="defaultContactFormEmail" v-model="$v.carImage.$model" class="form-control mb-4 col-sm-12" placeholder="Image URL of the car">
        </div>
    </div>

    <!-- Message -->
    <div class="form-group">
        <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" v-model="$v.description.$model" rows="6" placeholder="Description of the car"></textarea>
    </div>

    <!-- Send button -->
    <button class="btn btn-info btn-block col-sm-12" type="submit">Register Car</button>

</form>
<!-- Default form contact -->
</template>
<script>
/* eslint-disable */
import { carService } from '../../services/carServices';
import { authenticate } from '../../services/authService';

import {required, minLength, maxLength, email} from 'vuelidate/lib/validators'
export default {
    data() {
        return {
        carBrand: "Audi",
        carModel: "A3",
        price : "2000",
        carImage: "https://www.google.bg/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwidiu6I8JvkAhWKK1AKHTTJDUYQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.otomoto.pl%2Foferta%2Faudi-a3-audi-a3-97-silnik-1-6-ID6BvbmX.html&psig=AOvVaw1Nw4upZnxS70d2xMvG2MIp&ust=1566748748390118",
        description: "Very fast and good car"
        }
    },
    methods:{
        onCreateCar() {
            this.createCar(this.carBrand, this.carModel, this.price, this.carImage, this.description)
            .then(res => this.$router.push('/'))
        }
    },
    mixins: [carService, authenticate],
    validations: {
        carBrand: {
            minLength: minLength(2),
            maxLength: maxLength(20)
        },
        carModel: {
          required,
        },
        price: {
          required
        },
        carImage: {
            required
        },
        description: {
          required
        }
  }
  
}
</script>

<style>
form {
  margin: 0 auto;
  width: 700px
}
</style>