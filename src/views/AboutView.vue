<template>
  <div class="about">
    <DisaplayHotel
      :hotels="hotels"
      @add_personne="add_personne"
    ></DisaplayHotel>
  </div>
</template>

<script>
import DisaplayHotel from "@/components/DisaplayHotel.vue";
export default {
  name: "AboutView",
  components: {
    DisaplayHotel,
  },
  data() {
    return {
      hotels: [
        {
          id: 0,
          name: "hamamet",
          star: 5,
          nbr_valide: 8,
          client: 0,
          max_persone: 50,
          chambre: 50,
          image: "/hammamet.png",
          prix: 2000,
        },
        {
          id: 1,
          name: "gammaret",
          star: 4,
          chambre: 40,
          max_persone: 40,
          nbr_valide: 11,
          client: 0,
          image: "/h=gamaaret.png",
          prix: 1500,
        },
        {
          id: 2,
          name: "tbarka",
          star: 4,
          max_persone: 30,
          client: 0,
          chambre: 30,
          nbr_valide: 11,
          image: "/tbarka.jpg",
          prix: 1000,
        },
        {
          id: 3,
          name: "sousse",
          client: 0,
          star: 3,
          chambre: 30,
          max_persone: 30,
          nbr_valide: 1,
          image: "/sousse.jpg",
          prix: 1800,
        },
      ],
    };
  },
  methods: {
    add_personne(index) {
      this.hotels[index].nbr_valide -= 1;
      this.hotels[index].client += 1;
    },
  },
};
</script>

<style>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
</style>
