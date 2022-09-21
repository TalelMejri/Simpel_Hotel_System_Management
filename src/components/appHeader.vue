<template>
  <div id="appheader">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand mx-5" href="#">{{translate("Myhotel")}}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                ><router-link to="/">{{translate("home")}}</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/about">{{translate("about")}}</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/contact">{{translate("contact")}}</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/allteam">{{translate("allteam")}}</router-link></a
              >
            </li>
          </ul>
       

        
        </div>
        <span class="float-end mx-5">
          <select name="language" v-model="lang">
            <option value="ar" >arabic</option>
            <option value="en" >anglais</option>
          </select>
         </span>
      </div>

    </nav>
  </div>
</template>

<script>
import en from "@/languages/en.js";
import ar from "@/languages/ar.js";
export default {
  name: "appHeader",
  mixins:[ar,en],
  data(){
    return{
      lang:'ar'
    }
  },
  methods: {
      translate(prop){
        return (this[this.lang][prop]);
      }  
  },
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