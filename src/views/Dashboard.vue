<template>
  <div>
    <Coursal></Coursal>
    <Categories></Categories>
    <OnSale></OnSale>
    <WebsiteFeature></WebsiteFeature>
    <Footer></Footer>
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
    components: {
      Categories,
      OnSale,
      WebsiteFeature,
      Footer,
      Coursal
    }
}
</script>