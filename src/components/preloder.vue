<template>
    <div id="pre" v-if="!isloaded">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
    </div>
</template>

<script>
    export default{
        name:'preloder',
        data(){
            return{
                isloaded:false
            }
        },
        mounted(){
           setTimeout(()=>this.isloaded=true,2000)
        }
    }
</script>

<style lang="scss" scoped>
    $colors:#8cc271,#69beeb,#f5aa39,#e9643b;
    #pre{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top:0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #333;
        z-index: 999;
    }
    .cube{
        width: 40px;
        height: 40px;
        margin-right: 10px;
        @for $i from 1 through length($colors){
            &:nth-child(#{$i}){
                background: nth($colors,$i);
            }
        }
        &:first-child{
            animation: left 1s infinite;
        }
        &:last-child{
            animation: right 1s infinite .5s;
        }
    }
    @keyframes left {
            40%{
                transform: translateX(-60px);
            }
            50%{
                transform: translateX(0);
            }
    }

    @keyframes right {
        40%{
            transform: translateX(60px);
        }
        50%{
            transform: translateX(0);
        }
}
</style>