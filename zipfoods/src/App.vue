<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/zipfoods-logo.png" id="logo">
    
    <p>
      ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.
      </p>

      <show-featured :category='"snacks"'></show-featured>
      <show-products></show-products>

  </div>
</template>

<script>

import ShowProducts from './components/ShowProducts.vue';
import ShowFeatured from './components/ShowFeatured.vue';
 
export default {
  name: 'App',
  components: {
    'show-products': ShowProducts,
    'show-featured': ShowFeatured,
     
  }
}
</script>

<style lang='scss'>
 @import './assets/scss/zipfoods.scss';
</style>
