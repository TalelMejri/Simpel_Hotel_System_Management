<template>
  <div class="py-5" id="home">
    <div class="my-5 py-5 text-center">
      <div class="row py-5 mt-3">
        <div class="col-md-4">
          <img src="../assets/accounts.png" width="70%" alt="" />
        </div>
        <div class="col-md-4 py-2">
          <div class="card shadow p-1">
            <div class="card-header">
               Our Hotel
            </div>
            <p class="text-muted p-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
              vitae.
            </p>
            <div>
              <button class="btn btn-outline-info">
                <router-link to="/about" class="text-decoration-none text-dark"
                  >Magasin</router-link
                >
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="../assets/marketing _ promotion, protest, megaphone, woman, event, city@2x.png"
            width="70%"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "homepage",
  }

</script>

<style>
#home {
  background-image: linear-gradient(to right, #83a4d4, #b6fbff);
  height: 95vh;
  width: 100%;
}
</style>