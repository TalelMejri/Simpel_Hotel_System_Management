<template>
  <div id="app">
        <preloder/>
       <appheader></appheader>
       <router-view/>
  </div>
</template>

<script>
 import 'animate.css';
 import appheader from "@/components/appHeader.vue";
 import preloder from "@/components/preloder.vue";
  export default{
    name:"App",
    components:{
      appheader,preloder
    }
  }
</script>
<style>


</style>
