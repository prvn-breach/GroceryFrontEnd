<template>
  <div>
    <div class="slider">
      <marquee
        direction="left"
      >We are temporarily suspending services. Your needs remain our priority, and we're working on delivering them to you as soon as we can. And we will get through. Together.</marquee>
      <b-carousel
        id="carousel-fade"
        class="caursol"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="396"
        img-height="114"
      >
        <b-carousel-slide
          class="image"
          caption="First slide"
          img-src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
        ></b-carousel-slide>
        <b-carousel-slide
          class="image"
          caption="Second Slide"
          img-src="https://cdn1.epicgames.com/ue/product/Screenshot/Supermarket_UE4_Screen_02-1920x1080-40f0c90bb0fa816f4d33a9db7358f134.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          class="image"
          caption="Third Slide"
          img-src="https://www.brightscout.com/wp-content/uploads/2018/02/2a7tkiu8st8-1080x675.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>

    <!----------------featured categories-------------->

    <section class="featured-categories">
      <b-container>
        <b-row>
          <b-col md="4">
            <img src="https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"/>
          </b-col>
          <b-col md="4">
            <img src="https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg"/>
          </b-col>
          <b-col md="4">
            <img src="https://previews.123rf.com/images/utima/utima1311/utima131100146/24077398-orange-fruit-isolated-on-white-background.jpg"/>
          </b-col>
        </b-row>
      </b-container>
    </section>


    <!---------On Sale Product-------------->
    <section class="on-sale">
      <b-container>
        <div class="title-box">
          <h2>Basket</h2>
        </div>
        <b-row>
          <b-col md="3">
            <div class="product-top">
              <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3424674.jpg">
              <div class="overlay-right">
                <button class="btn btn-secondary" title="Quick Shop">
                  <font-awesome-icon icon="eye" class="fa"></font-awesome-icon>
                </button>
                <button class="btn btn-secondary" title="Add to Wishlist">
                  <font-awesome-icon icon="heart" class="fa"></font-awesome-icon>
                </button>
                <button class="btn btn-secondary" title="Add to Cart">
                  <font-awesome-icon icon="shopping-cart" class="fa"></font-awesome-icon>
                </button>
              </div>
            </div>
            <div class="product-bottom text-center">
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star-half"></font-awesome-icon>
              <h5>Pineapple</h5>
              <h4>Rs.100</h4>
            </div>
          </b-col>

          <b-col md="3">
            <div class="product-top">
              <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3424674.jpg">
              <div class="overlay-right">
                <button class="btn btn-secondary" title="Quick Shop">
                  <font-awesome-icon icon="eye" class="fa"></font-awesome-icon>
                </button>
                <button class="btn btn-secondary" title="Add to Wishlist">
                  <font-awesome-icon icon="heart" class="fa"></font-awesome-icon>
                </button>
                <button class="btn btn-secondary" title="Add to Cart">
                  <font-awesome-icon icon="shopping-cart" class="fa"></font-awesome-icon>
                </button>
              </div>
            </div>
            <div class="product-bottom text-center">
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star-half"></font-awesome-icon>
              <h5>Pineapple</h5>
              <h4>Rs.100</h4>
            </div>
          </b-col>

          <b-col md="3">
            <div class="product-top">
              <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3424674.jpg">
              <div class="overlay-right">
                <button class="btn btn-secondary" title="Quick Shop">
                  <font-awesome-icon icon="eye" class="fa"></font-awesome-icon>
                </button>
                <button class="btn btn-secondary" title="Add to Wishlist">
                  <font-awesome-icon icon="heart" class="fa"></font-awesome-icon>
                </button>
                <button class="btn btn-secondary" title="Add to Cart">
                  <font-awesome-icon icon="shopping-cart" class="fa"></font-awesome-icon>
                </button>
              </div>
            </div>
            <div class="product-bottom text-center">
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star-half"></font-awesome-icon>
              <h5>Pineapple</h5>
              <h4>Rs.100</h4>
            </div>
          </b-col>

          <b-col md="3">
            <div class="product-top">
              <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3424674.jpg">
              <div class="overlay-right">
                <button class="btn btn-secondary" title="Quick Shop">
                  <font-awesome-icon icon="eye" class="fa"></font-awesome-icon>
                </button>
                <button class="btn btn-secondary" title="Add to Wishlist">
                  <font-awesome-icon icon="heart" class="fa"></font-awesome-icon>
                </button>
                <button class="btn btn-secondary" title="Add to Cart">
                  <font-awesome-icon icon="shopping-cart" class="fa"></font-awesome-icon>
                </button>
              </div>
            </div>
            <div class="product-bottom text-center">
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star-half"></font-awesome-icon>
              <h5>Pineapple</h5>
              <h4>Rs.100</h4>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>


    <!-----------------------Webiste-featured------------------------>

    <section class="website-features">
      <b-container>
        <b-row>
          <b-col md="3" class="feature-box">
            <img src="https://i.dlpng.com/static/png/6541467_preview.png"/>
            <div class="feature-text">
              <p><b>100% original items </b>are available at company.</p>
            </div>
          </b-col>
          <b-col md="3" class="feature-box">
            <img src="https://static.thenounproject.com/png/461631-200.png"/>
            <div class="feature-text">
              <p><b>Return within 30 days </b>of recieved your order.</p>
            </div>
          </b-col>
          <b-col md="3" class="feature-box">
            <img src="https://image.flaticon.com/icons/png/512/45/45880.png"/>
            <div class="feature-text">
              <p><b>Get free delivery for every </b>order on more than price.</p>
            </div>
          </b-col>
          <b-col md="3" class="feature-box">
            <img src="https://www.clipartmax.com/png/middle/193-1930576_credit-card-atm-card-payment-bank-computer-icons-payment-icon-png.png"/>
            <div class="feature-text">
              <p><b>Pay online through multiple </b>options(card-payment/Net banking).</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <router-view />
  </div>
</template>