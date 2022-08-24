<template>
  <div class="py-5 mt-5" id="hotel">
    <div class="card border-left-red shadow h-100 py-2 mt-5">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col mr-5 mx-2">
            <div>
              <img src="../../public/hammamet.png" width="100%" />
            </div>
            <div
              class="
                text-xs text-center
                font-weight-bold
                text-primary text-uppercase
                mb-1
              "
            >
              {{ name }}
              <div :class="nbr_vide > 0 ? 'text-succes' : 'text-danger'">
                nombre Vide : {{ nbr_vide > 0 ? nbr_vide : "complet" }}
              </div>
            </div>
            <span
              v-for="k in star"
              :key="k.id"
              class="
                h5
                mb-0
                font-weight-bold
                mx-4
                text-gray-800
                pt-3
                text-center
              "
            >
              <img
                class="text-warning mx-auto"
                src="../assets/images/star_black_24dp.svg"
                alt=""
              />
            </span>
            <div class="pt-4 text-center">Prix : {{ prix }}</div>
          </div>
          <div class="col-md-4 mx-2 text-center">
            <span
              style="cursor: pointer"
              v-for="(hotel, index) in hotels"
              :key="hotel.id"
              @click="updateselect(index)"
            >
              <p class="text-center">
                <button class="btn btn-outline-primary">
                  {{ hotel.name }}
                </button>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center mx-5 mt-2">
      <button
        :class="{ disabled: !plein }"
        style="font-size: 25px"
        @click="add_personne()"
        class="col-md-12 btn btn-outline-success mx-1 px-2 rounded"
      >
        Panier
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisaplayHotel",
  props: {
    hotels: Array,
  },
  data() {
    return {
      select: 0,
    };
  },
  methods: {
    updateselect(index) {
      this.select = index;
    },
    add_personne() {
      this.$emit("add_personne", this.select);
    },
  },
  computed: {
    image() {
      return this.hotels[this.select].image;
    },
    name() {
      return this.hotels[this.select].name;
    },
    star() {
      return this.hotels[this.select].star;
    },
    nbr_vide() {
      return this.hotels[this.select].nbr_valide;
    },
    plein() {
      return this.hotels[this.select].nbr_valide > 0 ? true : false;
    },
    prix() {
      return this.hotels[this.select].prix;
    },
  },
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
#hotel {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.disabled {
  cursor: not-allowed;
}
</style>