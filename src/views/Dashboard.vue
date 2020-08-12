<template>
  <div>
    <Coursal />

    <div class="categories-component mt-5">
        <div class="section-title-wrap">
            <h2 class="section-title">Categories</h2>
            <hr class="section-title-hr" />
        </div>
        <Categories />
    </div>

    <div class="smart-basket">
        <div class="section-title-wrap">
            <h2 class="section-title">My Smart Basket</h2>
            <hr class="section-title-hr" />
        </div>
        <OnSale />
    </div>

    <Content />

    <WebsiteFeature />

    <Footer />

    <router-view />
  </div>
</template>
<script>
import Categories from "../components/Categories";
import OnSale from "../components/OnSale";
import WebsiteFeature from "../components/WebsiteFeature";
import Footer from "../components/Footer";
import Coursal from "../components/Coursal";
import Content from "../components/content";
export default {
  title: "Online Grocery Food Delivery",
  components: {
    Categories,
    OnSale,
    WebsiteFeature,
    Footer,
    Coursal,
    Content
  },
  created() {
    const title = this.getTitle(this);
    if (title) {
      document.title = title;
    }
  }
};
</script>
<style lang="css">
.section-title {
    color: rgb(68, 68, 68); 
    text-align: center; 
    font: 29px ProximaNovaA-Regular;
}
.section-title-hr {
    margin-left: 120px;
    margin-right: 120px;
}
</style>