<template>
  <div>
    <div class="top-nav-bar">
      <div class="search-box">
        <h3 class="logo">Grocery</h3>
        <!-- <b-img  alt="no image"  class="logo"></b-img> -->

        <!--categories--->
        <div class="dropdown">
          <button
            class="categories dropdown-toggle"
            id="dropDownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Categories</button>
          <ul class="dropdown-menu cats" aria-labelledby="dropDownMenuButton">
            <li class="dropdown-submenu">
              <span tabindex="-1">Bakery<font-awesome-icon icon="angle-right" class="fa-angle-right"></font-awesome-icon></span>
              <ul class="dropdown-menu subcats1">
                <li><span tabindex="-1">Cakes</span></li>
                <li><span tabindex="-1">Burgers</span></li>
                <li><span tabindex="-1">Pizzas</span></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <span tabindex="-1">Fruits<font-awesome-icon icon="angle-right" class="fa-angle-right"></font-awesome-icon></span>
              <ul class="dropdown-menu subcats2">
                <li><span tabindex="-1">Oranges</span></li>
                <li><span tabindex="-1">Apples</span></li>
                <li><span tabindex="-1">Bananas</span></li>
              </ul>
            </li>
          </ul>
        </div>

        <input type="text" class="form-control" />
        <span class="input-group-text">
          <font-awesome-icon icon="search" class="fa-search" style="cursor:pointer"></font-awesome-icon>
        </span>
      </div>
      <div class="menu-bar">
        <ul>
          <li>
            <a href="#">
              <font-awesome-icon icon="cart-plus" class="shopping-basket"></font-awesome-icon>cart
            </a>
          </li>
          <li>
            <a @click="$bvModal.show('sign-modal')">Sign Up</a>
          </li>
          <li>
            <a @click="$bvModal.show('login-modal')">Login</a>
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
          <input type="text" name="user" placeholder="Username" />
          <input type="password" name="pass" placeholder="Password" />
          <input type="submit" name="login" class="login loginmodal-submit" value="Login" />
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
          <input type="text" name="user" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="pass" placeholder="Password" />
          <input type="password" name="repeat-pass" placeholder="RepeatPassword" />
          <input type="submit" name="signup" class="sign signmodal-submit" value="SignUp" />
        </form>

        <div class="sign-help">
          <a href="#">Login</a> -
          <a href="#">if you have already account?</a>
        </div>
      </div>
    </b-modal>
    <router-view />
  </div>
</template>