<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/register">Register</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/login">Login</router-link></a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
.navbar-nav > li{
  padding: left 30px;;
  padding: right 30px;;
}
</style>