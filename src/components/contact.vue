<template>
  <div class="d-flex p-3 m-4 justify-content-center">
   
    <div class="col-xl-10 col-md-12 col-lg-12 py-4">
      <div class="row shadow-lg rounded">
        <div class="col-lg-6 d-none d-lg-block bg-secondary">
        
          <img src="../assets/accounts.png" width="500px" alt="" />
        </div>
      
        <div class="col-lg-6 p-1">
          
          <div class="text-center">
            <h1 class="h4 text-gray-900 mb-5">Contact Us</h1>
          </div>
          <transition name="fade">
            <toast v-if="showtoast"></toast>
         </transition>
          <form @submit.prevent="Onsubmit">
          <!--  <font-awesome-icon icon="fa-solid fa-book" />-->
            <div class="mb-2">
              <input
                type="text"
                placeholder="Entrer Email name"
                v-model="name"
                class="form-control rounded-pill p-3"
                id="exampleInputEmail1"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                placeholder="Entre votre adress"
                v-model="email"
                class="form-control rounded-pill p-3"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-2 text-center">
              <textarea
                v-model="message"
                class="rounded w-100"
                placeholder="Entre votre message"
                rows="10"
              ></textarea>
            </div>
            <button
              style="font-size: 19px"
              type="submit"
              name="submit"
              class="btn btn-primary btn-block text-center w-100 rounded-pill"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toast from "@/components/toast.vue";
export default {
  name: "contact-vue",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      showtalel:false
    };
  },
  props: {
    tabcomments: Array,
    showtoast:Boolean
  },
  components:{
    toast
  },
  methods: {
    Onsubmit() {
      if (this.name == "" && this.email == "" && this.message == "") {
        this.showtoast=true;
        this.$emit("badvalue");
      }else{

      
      let comment = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      console.log(comment);
      this.$emit("addcomment", comment);
      this.name = "";
      this.email = "";
      this.message = "";
    }
    },
  },
};
</script>

<style scoped>

/*.fade-enter-from{
  opacity:0;
  transform: translateY(-60px);
}

.fade-enter-to{
  opacity:1;
  transform: translateY(0);
}*/

.fade-enter-active{
  /*transition: all 0.3s ease;*/
  transition: animate 0.8s ease-in;
}

.fade-leave-from{
  opacity:1;
  transform: translateY(0);
}

.fade-leave-to{
  opacity:0;
  transform: translateY(-60px);
}

.fade-leave-active{
  transition: all 0.3s ease;
}
@keyframes animate {
  0%{transform: translateY(-60px);opacity: 0}
  50%{transform: translateY(0);opacity: 1;}
  60%{transform:translateX(8px)}
  70%{transform:translateX(-8px)}
  80%{transform:translateX(4px)}
  90%{transform:translateX(-4px)}
  100%{transform:translateX(0)}
}

</style>