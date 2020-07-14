<template>
  <div>
    <div class="container mb-2 mt-2 default-layout">
      <b-row class="text-center justify-content-end head">
        <b-list-group horizontal="md">
          <b-list-group-item><font-awesome-icon icon="phone-alt" class="phone mr-2" size="lg"></font-awesome-icon>8977425125</b-list-group-item>
          <b-list-group-item><font-awesome-icon icon="map-marker" class="map mr-2" size="lg"></font-awesome-icon>marikavalasa</b-list-group-item>
          <b-list-group-item>
            <a href="/auth"><font-awesome-icon icon="user" class="user mr-2" size="lg"></font-awesome-icon>Login</a>
          </b-list-group-item>
        </b-list-group>
      </b-row>
      <b-row cols="2" class="row1">
            <b-img src="https://entrackr.com/wp-content/uploads/2018/01/bigbasket-image-1-1200x600.jpg"></b-img>  

            <b-form-input 
              size="lg" 
              placeholder="Search for Products..." 
              onfocus="this.placeholder = ''" 
              onblur="this.placeholder = 'Search for Products...'" 
              type="search" 
              class="search-input" 
              aria-label="Text input with checkbox">
            </b-form-input>

            <b-row cols="1" class="basket">
              <b-col>
                <font-awesome-icon icon="shopping-basket" class="basket-icon mt-4 ml-3"></font-awesome-icon>
              </b-col>
              <span class="mt-2 ml-5">0 items</span>
            </b-row>
      </b-row>

      <b-row class="border">
          <b-button size="lg" class="font-weight-bold">SHOP BY CATEGORY<font-awesome-icon icon="angle-down" class="ml-5"></font-awesome-icon></b-button>
          <span class="p-3 offers"><font-awesome-icon icon="tag" class="mr-3"></font-awesome-icon>OFFERS</span>
      </b-row>
    </div>
    <router-view/>
  </div>
</template>
<style lang="css">
  .default-layout {
    font: 13px ProximaNovaA-Regular
  }
  .default-layout button {
    border-radius: 0;
    background-color: #0bb513;
  }
  .default-layout button:hover {
    transition: 0;
    background-color: #0bb513;
  }
  .default-layout .offers svg {
    color: #bd171c;
  }
  .default-layout .offers:hover {
    background-color: #0bb513;
    transition: 1s;
    color: #fff;
    cursor: pointer;
  }
  .default-layout .row1 img {
    height: 80px;
    max-width: 17%;
  }
  .default-layout .row1 .search-input {
    border-radius: 16px;
    border-color: #000;
    margin-left: 14px;
    margin-top: 20px;
  }
  .default-layout .row1 .basket {
    margin-left: 190px;
    height: 80px;
    max-width: 14%;
    background-color: #dbdbdb;
  }
  .default-layout .row1 .basket .basket-icon {
    height: 40px;
    width: 40px;
    color: red
  }
  .default-layout .head .list-group .list-group-item {
    background-color: #f1f3f4;
    border: 0;
  }
</style>