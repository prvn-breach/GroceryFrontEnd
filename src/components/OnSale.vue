<template>
  <section class="on-sale">
    <b-container>
      <div class="title-box">
        <h2>Basket</h2>
      </div>
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
              <b-row cols="2" v-if="item.isAddCart == false">
                <b-col col="3" md="4">
                  <b-button variant="warning" @click="showCart(item)">Add Cart</b-button>
                </b-col>
                <b-col>
                  <b-form-input type="number"></b-form-input>
                </b-col>
              </b-row>
              
              <b-input-group class="mt-3" v-else>
                <template v-slot:prepend>
                  <b-button variant="success" @click="increaseQty(item)">+</b-button>
                </template>
                <b-form-input type="number" v-model="item.qty" class="text-center text-justify"></b-form-input>
                <template v-slot:append>
                  <b-button variant="success" @click="decreaseQty(item)">-</b-button>
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
          qty: 0
        },
        {
          id: "2",
          imageUrl:
            "https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg",
          title: "Potato",
          price: "42",
          measuringIn: "1 kg",
          isAddCart: false,
          qty: 0
        },
        {
          id: "3",
          imageUrl:
            "https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
          title: "Tomato-Hybrid",
          price: "26",
          measuringIn: "1 kg",
          isAddCart: false,
          qty: 0
        },
        {
          id: "4",
          imageUrl:
            "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
          title: "Capsicum - Green",
          price: "50",
          measuringIn: "500 g",
          isAddCart: false,
          qty: 0
        },
        {
          id: "5",
          imageUrl:
            "https://www.bigbasket.com/media/uploads/p/s/10000103_16-fresho-cucumber.jpg",
          title: "Cucumber",
          price: "11",
          measuringIn: "500 g",
          isAddCart: false,
          qty: 0
        }
      ],
      // isAddCart: false,
      // qty: 0
    };
  },
  methods: {
    showCart(item) {
      item.isAddCart = true;
      this.$store.commit('addCart');
      console.log(this.$store.getters.items);
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
</style>