<template>
  <div id="app">
       <appheader></appheader>
       <router-view/>
  </div>
</template>

<script>
 import 'animate.css';
 import appheader from "@/components/appHeader.vue";
  export default{
    name:"App",
    components:{
      appheader
    }
  }
</script>
<style>


</style>
