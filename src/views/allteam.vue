<template>
    <div id="team">
         <h1 class="text-center py-4 mb-3">contact</h1>
         <transition-group   
                tag="ul"
                name="list"
                appear
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
              
                mode="out-in">
             <li v-for="(icon,index) in icons" :key="icon.name" :data-index="index">
                <span class="material-icons">{{icon.name}}</span>
                <div>{{icon.text}}</div>
             </li>
         </transition-group>
    </div>
</template>

<script>
    import phone from "vue-material-design-icons/Phone.vue";
    //import {ref} from 'vue';
     import gsap from "gsap";
    export default{
        data(){
            return{
                icons:[
                    {name:'alternate_email',text:'by email'},
                    {name:'local_phone',text:'by phone'},
                    {name:'local_post_office',text:'by post'},
                    {name:'local_fire_department',text:'by smoke signal'},
                ],
               
                
            }
        },
        setup(){
            const beforeEnter=(el)=>{
                el.style.opacity=0;
                el.style.transform='translateY(100px)';
            }
            const enter=(el,done)=>{
              gsap.to(el,{
                opacity:1,
                y:0,
                duration:0.8,
                onComplete:done,
                delay:el.dataset.index * 0.2
              })
            }

            /*const afterEnter=(el)=>{
                console.log("after enter",el);
             
            }*/

            return{beforeEnter,enter}//afterEnter}
        },
components:{
    phone
  }
    }
</script>

<style scoped>
    ul{
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        max-width: 400px;
        margin: 60px auto;
    }
    li{
        list-style-type: none;
        background: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        cursor: pointer;
        line-height: 1.5em;
       text-align: center;
    }
    .list-enter-from{
        opacity: 0;
        transform:translateY(-60px) ;
    }
    .list-enter-to{
        opacity: 1;
        transform:translateY(0) ;
    }
    .list-enter-active{
        transition: all 0.3s ease;
    }
  
</style>