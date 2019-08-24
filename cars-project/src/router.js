import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from '../src/components/authentication/Register.vue'
import Login from '../src/components/authentication/Login.vue'
import Logout from '../src/components/authentication/Logout.vue'
import CreateCar from '../src/components/cars/CreateCar.vue'
import AllCars from '../src/components/cars/AllCars.vue'




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name:'logout',
      component: Logout
    },
    {
      path: '/cars/create',
      name: 'createCar',
      component: CreateCar
    },
    {
      path: '/cars/all',
      name: 'allCars',
      component: AllCars
    }
  ]
})
