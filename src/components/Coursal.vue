<template>
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
</template>
<script>
    export default {
        name: "Coursal"
    }
</script>