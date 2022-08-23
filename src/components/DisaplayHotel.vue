<template>
  <div class="py-5 mt-5" id="hotel">
    <div class="card border-left-red shadow h-100 py-2">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col mr-2">
            <div
              class="text-xs font-weight-bold text-primary text-uppercase mb-1"
            >
              nombre of all the books
            </div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">dddd</div>
          </div>
          <div class="col-auto"></div>
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
  },
};
</script>

<style scoped>
#hotel {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>