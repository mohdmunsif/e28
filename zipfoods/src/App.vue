<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/zipfoods-logo.png" id="logo">

    <nav>
        <ul>
            <li v-for= 'link in links' :key='link'>
              <router-link v-bind:to='link' exact> {{ link }}</router-link>
            </li>
        </ul>
    </nav>

      <router-view></router-view>

  </div>
</template>

<script>

import { products } from './products.js'; 
 
 
export default {
  name: 'App',
  components: {
 
  },
  data: function() {
    return {
      products: products,
      links: ['home', 'products','categories'],
      // paths: {
      //   home: '/',
      //   products: '/products',
      //   categories: '/categories'
      // }
    };
  }
}
</script>

<style lang='scss'>
 @import './assets/scss/zipfoods.scss';
</style>
