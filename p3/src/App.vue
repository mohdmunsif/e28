<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
 
        <nav>
            <ul v-if='user'>
                <li v-for='link in links' :key='link'>
                    <router-link :to='{ name: link }' :data-test='link + "-nav-link"' exact>
                        {{ link }}
                        <span
                            data-test='cart-count'
                            v-if='link == "cart"'
                        >({{ cartCount }})</span>
                    </router-link>
                </li>
                <li>
                    <a
                        @click.prevent='logout'
                        href='#'
                        data-test='logout-link'
                    >Logout {{ user.email }}</a>
                </li>
            </ul>
            <ul else>
                <li v-if='!user'>
                    <router-link :to='{ name: "login" }' exact>Login</router-link>
                    <router-link :to='{ name: "register" }' exact>Register</router-link>
                </li>
            </ul>
        </nav>

    <router-view></router-view>
  </div>
</template>

<script> 
// import * as firebase from 'firebase/app'

// import 'firebase/firestore';
 
export default {
  name: 'App',
  components: {
 

  },
  data: function() {
    return {
      links: ['home','entries','categories','favorites']
    }
  },
  mounted: function() {
        // Initialize firebase
    // let projectId = 'e28-blog-p3';
    // firebase.initializeApp({
    //     apiKey: 'AIzaSyAqAho2z7JxQkAukKGv7yRlFZDCD06RVBY',
    //     authDomain: projectId + '.firebaseapp.com',
    //     databaseURL: 'https://' + projectId + '.firebaseio.com',
    //     projectId: projectId,
    // })
    

    // // Initialize firestore
    // let api = firebase.firestore();
    

    //   api.collection('entries').add({
    //   author: 'munsif',
    //   category: ['funny', 'sad'],
    //   date: '',
    //   title: 'This is a new blog entry',
    //   description: 'Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.',
    //   categories: ['produce', 'fruits']
    //   })
    //   .then(function (docRef) {
    //       console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function (error) {
    //       console.error("Error adding document: ", error);
    //   });

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
</style>
