<template>
    <div class="py-5">   
          <contact :tabcomments="tabcomments"  @addcomment="addcomment" @badvalue="badvalue" :showtoast:="showtoast"></contact>
          <listcomments :tabcomments="tabcomments"></listcomments>
    </div>
</template>

<script>
    import contact from "@/components/contact.vue";
    import listcomments from "@/components/listcomments.vue";
    export default{
        name:'ContactView',
        components:{
            contact,listcomments
        },
        data(){
            return{
                tabcomments:[],
                showtoast:false
            }
        },
        methods:{
            addcomment(review){
                this.tabcomments.push(review);
            },
            badvalue(){
                this.showtoast=true;
                setTimeout(()=>this.showtoast=false,2000)
            }
        }
    }
</script>

<style>


</style>