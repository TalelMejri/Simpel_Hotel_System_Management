<template>
    <div class="py-5">   
        <contact :tabcomments="tabcomments" @addcomment="addcomment"></contact>
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
                tabcomments:[]
            }
        },
        methods:{
            addcomment(review){
                this.tabcomments.push(review);
            }
        }
    }
</script>

<style>


</style>