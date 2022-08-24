<template>
  <div class="py-5 mt-5" id="hotel">
    <div class="card border-left-red shadow h-100 py-2 mt-5">
      <div
        style="margin-left: 40rem; margin-top: 35px"
        class="position-absolute"
      >
        <!-- Button trigger modal -->
        <button
          :disabled="client == 0"
          type="button"
          class="btn btn-outline-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          magasin
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">All Shop</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div
                  v-for="hotel in hotels"
                  :key="hotel.id"
                  class="card shadow"
                >
                  <div v-if="hotel.client > 0">
                    <div class="card-header">
                      {{ hotel.name }}
                    </div>
                    <div class="card-body">
                      Personne :{{ hotel.client }} <br />
                      Prix :{{ hotel.client * hotel.prix }}
                    </div>
                  </div>
                </div>
                Prix Total {{ prix_total }}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col mr-5 mx-2">
            <div>
              <img
                :class="{ dispbledimgae: !plein }"
                src="../../public/hammamet.png"
                width="100%"
              />
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
            <div class="pt-4 text-center row">
              <p class="col-md-4">
                <button type="button" class="btn btn-warning">
                  Prix :<br />
                  <span class="badge bg-info">{{ prix }}</span>
                </button>
              </p>
              <p class="col-md-3">
                <button type="button" class="btn btn-primary">
                  Chambre :
                  <span class="badge bg-info">{{ Chambre }}</span>
                </button>
              </p>
              <p class="col-md-4">
                <button type="button" class="btn btn-success">
                  Max personne :
                  <span class="badge bg-info">{{ max_persone }}</span>
                </button>
              </p>
            </div>
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
    max_persone() {
      return this.hotels[this.select].max_persone;
    },
    Chambre() {
      return this.hotels[this.select].chambre;
    },
    client() {
      let count = 0;
      this.hotels.forEach((h) => {
        count += h.client;
      });
      return count;
    },
    prix_total() {
      let price = 0;
      this.hotels.forEach((h) => {
        price += h.client * h.prix;
      });
      return price;
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
.dispbledimgae {
  filter: grayscale(1000);
}
.modal {
  z-index: 10000;
}
</style>