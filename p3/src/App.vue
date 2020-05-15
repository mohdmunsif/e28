<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
 
        <nav>
  
        <ul id='menu'>
            <li v-for= 'link in links' :key='link'>
              <router-link v-bind:to='link' exact> {{ link }}
                <span v-if='link == "favs"'>{{ favoritesNum }}</span>
              </router-link>
            </li>
        </ul>            
        </nav>

    <router-view></router-view>
  </div>
</template>

<script> 
import * as app from '@/common/app.js';

export default {
  name: 'App',
  components: {
 

  },
  data: function() {
    return {// let 
      favs: null,
      links: ['home','entries','categories', 'newentry', 'favs']
    }
  },
  mounted: function() {
      this.favs = new app.Favorite();
      this.$store.dispatch('setEntries');
 
    },
  computed: {
    favoritesNum: function() {
      return this.$store.state.favoritesNum;
    }
  }
  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  list-style-type: none;
   display: inline-block;
  margin: 5px;
}

</style>
