<template>
  <section class="on-sale">
    <b-container>
      <!-- <div class="title-box">
        <h2>Basket</h2>
      </div> -->
      <div>
        <b-card-group deck>
          <b-card
            v-for="item in items"
            :key="item.id"
            :title="item.title"
            :img-src="item.imageUrl"
            img-alt="Image"
            img-top
            class="items"
          >
            <b-card-text>{{item.measuringIn}}</b-card-text>
            <template v-slot:footer>
              <b-row>
                  <h5 class="pl-4">MRP: Rs&nbsp;{{ item.price }}</h5>
                  <p class="pl-4 pr-4"><font-awesome-icon icon="truck" class="mr-2"></font-awesome-icon> Express Delivery: Today 6:00PM - 8:00PM</p>
              </b-row>
              <b-row cols="2" v-if="item.isAddCart == false || item.qty == 0">
                  <b-col>
                      <b-input-group size="md" prepend="Qty">
                          <b-form-input type="number" v-model="item.qty"></b-form-input>
                      </b-input-group>
                  </b-col>
                  <b-col col="3" md="4">
                      <b-button class="cart-btn" @click="showCart(item)">
                          Add<font-awesome-icon icon="shopping-basket" class="ml-1" size="lg"></font-awesome-icon>
                      </b-button>
                  </b-col>
              </b-row>
              
              <b-input-group class="mt-3" v-else>
                  <template v-slot:prepend>
                      <b-button class="cart-dec-btn" @click="decreaseQty(item)">-</b-button>
                  </template>
                  <b-form-input type="number" v-model="item.qty" class="text-center text-justify cart-qty-counter"></b-form-input>
                  <template v-slot:append>
                      <b-button class="cart-inc-btn" @click="increaseQty(item)">+</b-button>
                  </template>
              </b-input-group>
            </template>
          </b-card>
        </b-card-group>
      </div>
    </b-container>
  </section>
</template>
<script>
export default {
  name: "OnSale",
  data() {
    return {
      items: [
        {
          id: "1",
          imageUrl:
            "https://www.bigbasket.com/media/uploads/p/s/10000148_28-fresho-onion.jpg",
          title: "Onion",
          price: "19",
          measuringIn: "1 kg",
          isAddCart: false,
          qty: 1
        },
        {
          id: "2",
          imageUrl:
            "https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg",
          title: "Potato",
          price: "42",
          measuringIn: "1 kg",
          isAddCart: false,
          qty: 1
        },
        {
          id: "3",
          imageUrl:
            "https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
          title: "Tomato-Hybrid",
          price: "26",
          measuringIn: "1 kg",
          isAddCart: false,
          qty: 1
        },
        {
          id: "4",
          imageUrl:
            "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
          title: "Capsicum - Green",
          price: "50",
          measuringIn: "500 g",
          isAddCart: false,
          qty: 1
        },
        {
          id: "5",
          imageUrl:
            "https://www.bigbasket.com/media/uploads/p/s/10000103_16-fresho-cucumber.jpg",
          title: "Cucumber",
          price: "11",
          measuringIn: "500 g",
          isAddCart: false,
          qty: 1
        }
      ]
    };
  },
  methods: {
    showCart(item) {
      item.isAddCart = true;
      this.$store.commit('addCart');
    },
    increaseQty(item) {
      item.qty++;
    },
    decreaseQty(item) {
      item.qty--;
    }
  }
};
</script>
<style lang="css">
.items:hover {
    border-radius: 0;
    box-shadow: 0 1px 0 1px rgb(156, 156, 156);
}
.items .cart-btn {
    text-transform: uppercase;
    width: 70px;
    border-radius: 4px;
    border: 1px solid #fee67c;
    background: #fee67c;
    color: #000;
}
.items .cart-btn:hover {
    background: linear-gradient(180deg,#fee67c 0,#f2cb76);
}
.items input::-webkit-outer-spin-button,
.items input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.items .cart-qty-counter {
    background: #fee67c;
}
.items .cart-inc-btn {
    border: 1px solid #dedede;
    /* border-color: grey; */
    color: #000;
    padding: 0 4px;
    background: linear-gradient(180deg,#fff 0,#eaeaea 99%) repeat scroll 0 0 transparent;
    width: 20px;
}
.items .cart-dec-btn {
    border: 1px solid #dedede;
    color: #000;
    padding: 0 4px;
    background: linear-gradient(180deg,#fff 0,#eaeaea 99%) repeat scroll 0 0 transparent;
    width: 20px;
}
</style>