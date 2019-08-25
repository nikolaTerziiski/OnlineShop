<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul v-if="!isAuthenticated" class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link"><router-link to="/">Home</router-link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/register">Register</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/login">Login</router-link></a>
      </li>
    </ul>
    <ul v-else class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link"><router-link to="/">Home</router-link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/cars/create">Create Car</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/cars/all">All Cars</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/login">Logout</router-link></a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    methods: {
      
    }
}
</script>

<style>
.navbar-nav > li{
  padding: left 30px;;
  padding: right 30px;;
}
html,
body,
header,
.view {
  height: 100%;
}

@media (max-width: 740px) {
  html,
  body,
  header,
  .view {
    height: 1000px;
  }
}
@media (min-width: 800px) and (max-width: 850px) {
  html,
  body,
  header,
  .view {
    height: 600px;
  }
}

.btn .fa {
  margin-left: 3px;
}

.top-nav-collapse {
  background-color: #424f95 !important;
}

.navbar:not(.top-nav-collapse) {
  background: transparent !important;
}

@media (max-width: 991px) {
  .navbar:not(.top-nav-collapse) {
    background: #424f95 !important;
  }
}

.btn-white {
  color: black !important;
}

h6 {
  line-height: 1.7;
}

.rgba-gradient {
  background: -moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)));
  background: -o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: linear-gradient(to 45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
}
</style>