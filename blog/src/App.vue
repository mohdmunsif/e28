<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
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
 
export default {
  name: 'App',
  components: {
 
  },
  data: function() {
    return {
      posts: [],
      links: ['home', 'posts','categories'],
 
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
