<template>
 <div class="register">
      <h1>Register</h1>
      <form>
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Ivan Ivanov" />
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="ivan@gmail.com" />
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="******" />
        <button class="btn btn-info my-4 btn-block" type="submit">Sign up</button>
      </form>
    </div>
    <!-- Sign up button -->

<!-- Default form register -->
</template>

<script>
export default {

}
</script>

<style>
.register {
  padding-top: 2em;
}

.register form {
  display: grid;
  width: 25%;
  margin: 0 auto;
}

.register input {
  padding: 10px;
  margin-bottom: 20px;
}

.register input[type="submit"] {
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

.register input[type="submit"]:hover {
  color: dodgerblue;
  background: transparent;
}

</style>