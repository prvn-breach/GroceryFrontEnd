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
                <span class="mt-2 ml-5">{{ $store.getters.items }} items</span>
            </b-row>
      </b-row>

      <b-row class="border">
        <div class="dropdown">
          <b-button 
            size="lg" 
          class="font-weight-bold"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            SHOP BY CATEGORY<font-awesome-icon icon="angle-down" class="ml-5"></font-awesome-icon>
          </b-button>
          <ul class="dropdown-menu categories">
              <li class="dropdown-submenu menu" v-for="category in categories" :key="category.id">
                    <span tabindex="-1">
                        {{ category.name }}
                        <font-awesome-icon
                            icon="angle-right"
                            class="fa-angle-right icon"
                            v-if="category.sub_categories.length > 0"
                        ></font-awesome-icon>
                    </span>
                  <div class="dropdown-divider"></div>
                    <ul class="dropdown-menu submenu" v-if="category.sub_categories.length > 0">
                        <li v-for="sub_category in category.sub_categories" :key="sub_category.id">
                            <span tabindex="-1">{{ sub_category.name }}</span>
                            <div class="dropdown-divider"></div>
                        </li>
                    </ul>
              </li>
          </ul>
        </div>
        <span class="p-3 offers"><font-awesome-icon icon="tag" class="mr-3"></font-awesome-icon>OFFERS</span>
      </b-row>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
    data () {
        return {
            categories: [
                {
                    id: '1',
                    name: 'Bakery',
                    sub_categories: [
                        { id: '1', name: 'Choclate Cake' },
                        { id: '2', name: 'Cherries' },
                        { id: '3', name: "Fruit Biscuits" }
                    ]
                },
                {
                    id: '2',
                    name: 'Vegetables',
                    sub_categories: [
                        { id: '1', name: 'Brinjal' },
                        { id: '2', name: 'Papaya' }
                    ]
                },
                {
                    id: '3',
                    name: 'Tiffins',
                    sub_categories: [
                        { id: '1', name: 'Chapathi' },
                        { id: '2', name: 'Idli' },
                        { id: '3', name: 'Bonda' }
                    ]
                }
            ]
        }
    }
}
</script>>
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
    border: 0;
  }
  .dropdown:hover .categories {
    display: block;    
    border-radius: 0;  
  }
  .menu:hover .submenu {
    display: block;
    border-radius: 0;
    top: 0;
    left: 100%;
    width: 100%;
  }
  .btn-secondary:focus, .btn-secondary.focus {
      background-color: #0bb513 !important;
      border-color: none !important;
  }
  .btn-secondary:not(:disabled):not(.disabled):active {
      color: #fff;
      background-color: #0bb513 !important;
      border-color: none !important;
  }
  .categories {
      width: 190px;
      border-radius: 0;
  }
  .categories .menu span {
      cursor: pointer;
      font: 13px ProximaNovaA-Semibold;
      padding-left: 15px;
  }
  .categories .menu .dropdown-divider {
      padding: 0;
  } 
  .categories .menu:hover {
      background-color: rgb(207, 203, 203);
  }
  .submenu > li:hover {
    background-color: rgb(207, 203, 203);
  }
</style>