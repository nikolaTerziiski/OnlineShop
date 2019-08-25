<template>
<div class="container">

  <div class="row">
    <div class="col-md-8">
      <img class="img-fluid" :src="this.car.carImage" alt="">
    </div>

    <div class="col-md-4">
      <h3 class="my-3">{{this.car.carBrand}}</h3>
      <p>{{this.car.description}}</p>
      <br>
      <br>
      <br>
      <h3 class="my-3">Car spec details</h3>
      <ul>
        <li>{{this.car.carModel}}</li>
        <li>{{this.car.price}}.00 EUR</li>
      </ul>
      <button class="btn btn-warning my-4" type="submit"><router-link :to="{name: 'editCar', params: {id: this.car._id}}">Edit car</router-link></button>
    </div>

  </div>
  <!-- /.row -->
  

</div>
<!-- /.container -->
</template>

<script>
/* eslint-disable */ 
import { mapGetters } from 'vuex';
export default {
    computed: {
      ...mapGetters(['getOneCar']),
      car() {
        return this.getOneCar(this.$route.params.id)
      }
    },
}
</script>

<style>

</style>