<template>
  <div id="app">
       <appheader></appheader>
       <router-view v-slot="{Component}">
         <transition enter-active-class="animate__animated animate__fadeInLeft"
                     leave-active-class="animate__animated animate__fadeOutLeft"
                     mode="out-in">
          <component :is="Component"></component>
         </transition>
       </router-view>
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
.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active{
  transition: ass 0.3s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active{
  transition: all 0.3s ease-out;
}
</style>
