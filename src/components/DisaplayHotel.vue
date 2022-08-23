<template>
  <div class="py-5 mt-5" id="hotel">
    <div class="card border-left-red shadow h-100 py-2">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col mr-2">
            <div>
              <img :src="image" />
            </div>
            <div
              class="text-xs font-weight-bold text-primary text-uppercase mb-1"
            >
              {{ name }}
              <div :class="nbr_vide > 0 ? 'text-succes' : 'text-danger'">
                nombre Vide : {{ nbr_vide > 0 ? nbr_vide : "complet" }}
              </div>
            </div>
            <span
              v-for="k in star"
              :key="k.id"
              class="h5 mb-0 font-weight-bold text-gray-800"
            >
              <i class="material-icons mx-2">Star</i>
            </span>
          </div>
          <div class="col-auto">
            <div
              style="cursor: pointer"
              v-for="(hotel, index) in hotels"
              :key="hotel.id"
              @click="updateselect(index)"
            >
              <p>
                <button class="btn btn-outline-primary">
                  {{ hotel.name }}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
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
      select: 1,
    };
  },
  methods: {
    updateselect(index) {
      this.select = index;
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
</style>