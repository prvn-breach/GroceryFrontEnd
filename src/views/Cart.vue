<template>
  <div>
      <b-container class="cart ml-5">
        <b-row>
          <b-col class="cart-product" md="8">
            <div class="cart-header">
              <div class="row">
                <div class="col-md-3">
                  <label>MyCart(3)</label>
                </div>
                <div class="col-md-2">

                </div>
              </div>
            </div>
            <hr class="mt-0">
            <b-card
              img-src="https://placekitten.com/300/300"
              img-alt="Card image"
              img-left
              class="mb-3 border-0"
            >
              <b-card-text>Some quick example text to fgbgfd on the card and make up the bulk of the card's content.</b-card-text>
            </b-card>
          </b-col>
          <b-col class="price border">
            <label class="label1">PRICE DETAILS</label>
            <hr class="mt-0">
            <div class="row">
              <div class="col-md-6">
                <label>Price (2 items)</label>
              </div>
               <div class="col-md-4" style="text-align:right;">
                <label>Rs. 700</label>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
   <router-view />
  </div>
</template>