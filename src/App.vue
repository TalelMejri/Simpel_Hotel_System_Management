<template>
  <div id="app">
      <!--  <preloder/>-->
       <appheader></appheader>
       <transition name="fade" mode="out-in">
         <router-view/>
       </transition>
      
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
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
  #app{
    overflow: hidden;
    width: 100vw;
  }
.fade-enter,.fade-leave-to{
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active,.fade-leave-active{
  transition: all .3s ease;
}

</style>
