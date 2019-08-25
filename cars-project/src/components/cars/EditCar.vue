<template>
  <!-- Default form contact -->
<form class="text-center border border-light p-5" @submit.prevent="onEditCar">
    <p class="h4 mb-4">Edit Car</p>

    <!-- Name -->
    <div class="row">
        <div class="col">
         <input type="text" id="defaultContactFormName" required v-model="$v.carBrand.$model" class="form-control mb-4 col-sm-12" :placeholder="this.car.carBrand">
        </div>
        <div class="col">
         <input type="text" id="defaultContactFormName" required v-model="$v.carModel.$model" class="form-control mb-4 col-sm-12" :placeholder="this.car.carModel">
        </div>
    </div>

    <div class="row">
        <div class="col">
            <input type="currency" id="defaultContactFormEmail" required v-model="$v.price.$model" class="form-control mb-4 col-sm-12" :placeholder="this.car.price">
        </div>
    </div>
    <div class="row">
        <div class="col">
            <input type="imageURl" id="defaultContactFormEmail" required v-model="$v.carImage.$model" class="form-control mb-4 col-sm-12" :placeholder="this.car.carImage">
        </div>
    </div>

    <!-- Message -->
    <div class="form-group">
        <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" required v-model="$v.description.$model" rows="6" :placeholder="this.car.description"></textarea>
    </div>

    <!-- Send button -->
    <button class="btn btn-info btn-block col-sm-12" type="submit" :disabled="$v.$error">Edit Car</button>

</form>
<!-- Default form contact -->
</template>
<script>
/* eslint-disable */
import {required, minLength, maxLength, email} from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
        carBrand: "",
        carModel: "",
        price : "",
        carImage: "",
        description: ""
        }
    },
    computed: {
      ...mapGetters(['getOneCar']),
      car() {
        return this.getOneCar(this.$route.params.id)
      }
    },
    methods: {
        onEditCar(){
            console.log('edited')
        }
    },
    validations: {
        carBrand: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(20)
        },
        carModel: {
          required,
          minLength: minLength(2),
            maxLength: maxLength(20)
        },
        price: {
          required,
          minLength: minLength(2),
            maxLength: maxLength(20)
        },
        carImage: {
            required
        },
        description: {
          required,
          minLength: minLength(2),
            maxLength: maxLength(500)
        }
  },
}
</script>

<style>
form {
  margin: 0 auto;
  width: 700px
}
</style>