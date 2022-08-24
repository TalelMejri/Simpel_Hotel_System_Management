import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/alert";
import "bootstrap/js/dist/modal";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPhone);
library.add(faBook);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
