<template>
  <div class="about">
    <DisaplayHotel :hotels="hotels"></DisaplayHotel>
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
          star: 4,
          nbr_valide: 8,
          image: "../public/logo.png",
        },
        {
          id: 1,
          name: "gammaret",
          star: 4,
          chambre: 50,
          nbr_valide: 11,
          image: "../assets/logo.png",
        },
        {
          id: 2,
          name: "tbarka",
          star: 4,
          chambre: 20,
          nbr_valide: 11,
          image: "../assets/logo.png",
        },
        {
          id: 3,
          name: "sousse",
          star: 4,
          chambre: 20,
          nbr_valide: 0,
          image: "../assets/logo.png",
        },
      ],
    };
  },
};
</script>
