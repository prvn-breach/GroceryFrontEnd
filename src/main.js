import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/style.css";
import jQuery from "jquery";
import BootstrapVue from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faUserSecret,
    faHome,
    faEllipsisV,
    faBars,
    faCartPlus,
    faShoppingCart,
    faUsers,
    faCaretDown,
    faFile,
    faPen,
    faTrashAlt,
    faPlus,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faSpinner,
    faTasks,
    faUser,
    faEye,
    faAngleDown,
    faAngleRight,
    faTable,
    faPlayCircle,
    faThLarge,
    faSearch,
    faHeart,
    faStar,
    faStarHalf
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
    faUserSecret,
    faHome,
    faSearch,
    faEllipsisV,
    faBars,
    faCartPlus,
    faShoppingCart,
    faUsers,
    faCaretDown,
    faFile,
    faPen,
    faTrashAlt,
    faPlus,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faSpinner,
    faTasks,
    faUser,
    faEye,
    faAngleDown,
    faAngleRight,
    faTable,
    faPlayCircle,
    faThLarge,
    faHeart,
    faStar,
    faStarHalf
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue);

const $ = jQuery;
window.$ = $;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
