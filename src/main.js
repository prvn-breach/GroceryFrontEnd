import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/style.css";
import globalVariables from "./assets/js/global.js";
import methods from "./mixins.js";
import apiEndPoints from "./assets/js/apiEndPoints.js";
import jQuery from "jquery";
import BootstrapVue from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartPlus,
  faShoppingCart,
  faPlus,
  faEye,
  faAngleDown,
  faAngleRight,
  faSearch,
  faHeart,
  faStar,
  faStarHalf,
  faShoppingBasket,
  faSignOutAlt,
  faPhoneAlt,
  faMapMarkedAlt,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faSearch,
  faCartPlus,
  faShoppingCart,
  faPlus,
  faEye,
  faAngleDown,
  faAngleRight,
  faHeart,
  faStar,
  faStarHalf,
  faShoppingBasket,
  faSignOutAlt,
  faPhoneAlt,
  faMapMarkedAlt,
  faTag
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueAxios, axios, VueCookies);
Vue.use(BootstrapVue);

const $ = jQuery;
window.$ = $;

Vue.config.productionTip = false;

// api endpoints and headers
Vue.prototype.$api = apiEndPoints;
Vue.prototype.$apiHeaders = globalVariables.headers;

Vue.mixin({ methods });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
