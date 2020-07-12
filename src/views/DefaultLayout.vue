<template>
  <div>
    <div class="header">
      <b-container>
        <b-row class="justify-content-md-end">
          <b-col lg="2"><font-awesome-icon icon="phone-alt" class="fa-phone-alt mr-2"></font-awesome-icon>0891 8977425125</b-col>
          <b-col lg="3"><font-awesome-icon icon="map-marked-alt" class="mr-2"></font-awesome-icon>Jubilee Hills Checkpost, Hyderabad</b-col>
        </b-row>
      </b-container>
    </div>
    
    <div class="top-nav-bar">
      <div class="search-box">
        <router-link :to="{name:'Dashboard'}">
          <h3 class="logo">Grocery</h3>
        </router-link>
        <!-- <b-img  alt="no image"  class="logo"></b-img> -->

        <!--categories-->
        <div class="dropdown">
          <button
            class="categories dropdown-toggle"
            id="dropDownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Categories</button>
          <ul class="dropdown-menu cats" aria-labelledby="dropDownMenuButton">
            <li class="dropdown-submenu" v-for="category in categories" :key="category.id">
              <span tabindex="-1">
                {{ category.category_name }}
                <font-awesome-icon
                  icon="angle-right"
                  class="fa-angle-right"
                  v-if="category.sub_categories.length > 0"
                ></font-awesome-icon>
              </span>
              <div class="dropdown-divider"></div>
              <ul class="dropdown-menu subcats1">
                <li v-for="sub_category in category.sub_categories" :key="sub_category.id">
                  <span tabindex="-1">
                    {{
                    sub_category.sub_category_name
                    }}
                  </span>
                  <div class="dropdown-divider"></div>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <input type="text" placeholder="Search for Products.." class="form-control" />
        <span class="input-group-text">
          <font-awesome-icon icon="search" class="fa-search" style="cursor:pointer"></font-awesome-icon>
        </span>
      </div>
      <div class="menu-bar">
        <ul>
          <li>
            <router-link :to="{name:'Cart'}">
                <font-awesome-icon icon="cart-plus" class="shopping-basket"></font-awesome-icon>cart
                <span class="badge badge-light ml-2">3</span>
            </router-link>
          </li>
          <li v-if="!userDetails">
            <a @click="$bvModal.show('sign-modal')">Sign Up</a>
          </li>
          <li v-if="!userDetails">
            <router-link :to="{name:'Auth'}">
              <a>Login</a>
            </router-link>
          </li>
          <li class="dropdown" v-else>
            <a
              id="usermenu"
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <b-avatar size="sm"></b-avatar>
              <!-- &nbsp;{{userDetails.user_details.first_name}} -->
            </a>
            <div class="dropdown-menu usermenu" aria-labelledby="usermenu">
              <span class="dropdown-menu-item" @click="logout">
                Logout
                <font-awesome-icon icon="sign-out-alt" class="faSignOutAlt"></font-awesome-icon>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>


    <!--loginModal-->
    <b-modal id="login-modal" hide-header hide-footer centered>
      <div class="loginmodal-container">
        <h1>Login to Your Account</h1>
        <br />
        <form>
          <input type="text" v-model="loginDetails.username" placeholder="username" />
          <input type="password" v-model="loginDetails.password" placeholder="password" />
          <button type="button" @click="login">Login</button>
        </form>
        <div class="login-help">
          <a href="#">Register</a> -
          <a href="#">Forgot Password</a>
        </div>
      </div>
    </b-modal>

    <!--signUpModal-->
    <b-modal id="sign-modal" hide-header hide-footer centered>
      <div class="signmodal-container">
        <h1>Create Your Account</h1>
        <br />
        <form>
          <b-container>
            <b-row>
              <b-col md="4">
                <input type="text" v-model="signUpDetails.first_name" placeholder="First Name" />
              </b-col>
              <b-col>
                <input type="text" v-model="signUpDetails.last_name" placeholder="Last Name" />
              </b-col>
            </b-row>
            <b-row>
              <b-col md="4">
                <input type="text" v-model="signUpDetails.username" placeholder="Username" />
              </b-col>
              <b-col>
                <input type="email" v-model="signUpDetails.email" placeholder="Email" />
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <input type="password" v-model="signUpDetails.password" placeholder="Password" />
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <input
                  type="password"
                  v-model="signUpDetails.password_confirmation"
                  placeholder="RepeatPassword"
                />
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <button type="button">SignUp</button>
              </b-col>
            </b-row>
          </b-container>
        </form>

        <div class="sign-help">
          <a href="#">Login</a> -
          <a @click="$bvModal.show('login-modal')">if you have already account?</a>
        </div>
      </div>
    </b-modal>
    <router-view />
  </div>
</template>
<script>
const $cookies = window.$cookies;
export default {
  data() {
    return {
      categories: [],
      loginDetails: {
        username: "",
        password: ""
      },
      signUpDetails: {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      userDetails: []
    };
  },
  mounted() {
    this.userDetails = this.getUserData();
    this.getCategories();
  },
  methods: {
    getCategories: function() {
      this.axios
        .get(this.$api.get_categories)
        .then(response => {
          let result = response.data.data;
          this.categories = result;
        })
        .catch(err => {
          console.error(err);
        });
    },
    login: function() {
      this.axios
        .post(this.$api.login, this.loginDetails)
        .then(response => {
          let data = response.data.data[0];
          $cookies.set("user", data, 0);
          this.userDetails = data;
          this.$bvModal.hide("login-modal");
        })
        .catch(err => {
          console.error(err);
        });
    },
    signUp: function() {
      this.axios
        .post(this.$api.sign_up, this.signUpDetails, this.getAuthHeaders())
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.error(err);
        });
    },
    logout: function() {
      const username = {
        username: this.userDetails.user_details.username
      };
      console.log(username);
      this.axios
        .post(this.$api.logout, username, this.getAuthHeaders())
        .then(response => {
          this.userDetails = "";
          $cookies.remove("user");
          console.log(response);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>