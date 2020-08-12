<template>
  <section class="featured-categories">
    <b-container>
      <!-- <div class="title-box">
        <h2>Categories</h2>
      </div> -->
      <b-row>
        <b-col md="2" v-for="image in images" :key="image.id">
          <img :src="image.url" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  name: "Categories",
  data() {
    return {
      images: [
        {
          id: "1",
          url:
            "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/23dbb0fa-291d-4436-a7e5-c2fb265f53e9/2007025_tea_360.jpg"
        },
        {
          id: "2",
          url:
            "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/23dbb0fa-291d-4436-a7e5-c2fb265f53e9/2007026_coffee_360.jpg"
        },
        {
          id: "3",
          url:
            "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/23dbb0fa-291d-4436-a7e5-c2fb265f53e9/2007027_health-drinks_360.jpg"
        },
        {
          id: "4",
          url:
            "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/23dbb0fa-291d-4436-a7e5-c2fb265f53e9/2007028_juices_360.jpg"
        },
        {
          id: "5",
          url:
            "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/23dbb0fa-291d-4436-a7e5-c2fb265f53e9/2007029_cold-drinks_360.jpg"
        },
        {
          id: "6",
          url:
            "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/23dbb0fa-291d-4436-a7e5-c2fb265f53e9/2007030_syrups-concentrate_360.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="css">
  .featured-categories
  {
    margin-bottom: 50px;
  }
  .featured-categories img
  {
    width: 100%;
    height: 100%;
    /* transition: 1s; */
    cursor: pointer;
    box-shadow: 0px 0px 1px 1px #666;
  }
  .featured-categories img:hover
  {
    /* transform: scale(1.1); */
    box-shadow: 1px 1px 2px 3px rgb(156, 156, 156);
  }

  .title-box
  {
    background: green;
    color: #fff;
    width: 180px;
    padding: 4px 10px;
    height: 40px;
    margin-bottom: 30px;
    display: flex;
  }
  .title-box h2
  {
    font-size: 24px;
  }
  .title-box::after
  {
    content: '';
    border-top: 40px solid green;
    border-right: 50px solid transparent;
    position: absolute;
    display: flex;
    margin-top: -4px;
    margin-left: 170px;
  }
</style>