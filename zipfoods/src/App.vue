<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/zipfoods-logo.png" id="logo">


      <show-home></show-home>
      <show-featured :category='"snacks"'></show-featured>
      <show-products></show-products>
      <show-categories></show-categories>

      <router-view></router-view>

  </div>
</template>

<script>

import { products } from './products.js'; 
import ShowProducts from './components/ShowProducts.vue'; 
import ShowCategories from './components/ShowCategories.vue';
import ShowHome from './components/ShowHome.vue';


 
export default {
  name: 'App',
  components: {
    'show-products': ShowProducts,
    'show-categories': ShowCategories,
    'show-home': ShowHome,    
 
  },
  data: function() {
    return {
      products: products
    };
  }
}
</script>

<style lang='scss'>
 @import './assets/scss/zipfoods.scss';
</style>
