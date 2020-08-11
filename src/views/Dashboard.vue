<template>
  <div>
    <Coursal />

    <Categories />

    <OnSale />

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
export default {
  title: "Online Grocery Food Delivery",
  components: {
    Categories,
    OnSale,
    WebsiteFeature,
    Footer,
    Coursal
  },
  created() {
    const title = this.getTitle(this);
    if (title) {
      document.title = title;
    }
  }
};
</script>