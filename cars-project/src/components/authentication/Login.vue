<template>
  <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="onLoginClick">
        <label for="login">Username</label>
        <input type="text" required v-model="username" id="login" placeholder="Ivan Ivanov" />
        <label for="password">Password</label>
        <input type="password" required v-model="password" id="password" placeholder="******" />
        <button class="btn btn-info my-4 btn-block"  type="submit">Sign in</button>
      </form>
    </div>
</template>

<script>
/* eslint-disable */
import { authenticate } from '../../services/authService';
import {required, minLength, maxLength} from 'vuelidate/lib/validators'

export default {
    data() {
      return {
          username: 'Peshko',
          password: '123123',
      }
    },
    mixins: [authenticate],
    methods: {
      onLoginClick() {
          this.loginUser(this.username, this.password)
          .then(user => {
            console.log(user);
                this.$root.$emit('logged-in', user.authtoken);
                this.$router.push('/');
          })
      }
    },
    validations: {
      username: {
        required
      },
      password: {
        required
      }
    }
}
</script>

<style>
.login form {
  display: grid;
  width: 25%;
  margin: 0 auto;
}

.login input {
  padding: 10px;
  margin-bottom: 20px;
}

.login input[type="submit"] {
  width: 25%;
  margin: 0 auto;
  border: 2px solid dodgerblue;
  text-align: center;
  font-size: 14px;
  background: dodgerblue;
  color: white;
  border-radius: 7px;
  margin-top: 20px;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.5);
}

.login input[type="submit"]:hover {
  color: dodgerblue;
  background: transparent;
}
</style>