<template>
  <div>
    <div class="container mb-2 mt-2 default-layout">
      <b-row cols="2" class="row1">
            <b-img src="https://entrackr.com/wp-content/uploads/2018/01/bigbasket-image-1-1200x600.jpg"></b-img>  
            <b-row class="p-5">
                  <b-form-input size="lg" placeholder="Search for Products..." type="search" class="search-input" aria-label="Text input with checkbox"></b-form-input>
            </b-row>
      </b-row>
      <b-row class="border">
          <b-button size="lg" class="font-weight-bold">SHOP BY CATEGORY<font-awesome-icon icon="angle-down" class="ml-5"></font-awesome-icon></b-button>
          <span class="p-3 offers border-0"><font-awesome-icon icon="tag" class="mr-3"></font-awesome-icon>OFFERS</span>
      </b-row>
    </div>
    <router-view/>
  </div>
</template>
<style lang="css">
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
    border-radius: 0;
    border-color: #000;
    margin-left: 80px;
  }
</style>