<template>
  <div id="appheader">
    <nav class="navbar navbar-expand-lg text-center fixed-top">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="d-flex justify-content-center p-2">
          <li>
            <a class="mx-5" href="/"><router-link to="/">Home</router-link> </a>
          </li>
          <li>
            <a class="mx-5" href="/"
              ><router-link to="/about">about</router-link></a
            >
          </li>
          <li>
            <a class="mx-5" href="/"
              ><router-link to="/contact">contact</router-link></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "appHeader",
};
</script>

<style scoped>
nav li {
  list-style-type: none;
}
nav a {
  text-decoration: none;
  font-size: 20px;
  color: #000;
  font-weight: 600;
}
nav a.router-link-exact-active {
  color: red;
}
.navbar {
  background-image: linear-gradient(to right, #83a4d4, #b6fbff);
}
</style>