<template>
    <div id='posts'>
        <h2>All Blog Posts</h2>
        <single-post
            v-for='post in posts'
            :key='post.id'
            :post='post'
        ></single-post>
    </div>
</template>


<script>
import SinglePostPage from './SinglePostPage.vue';
const axios = require('axios');
 

export default {
    name: '',
    components: { 
        'single-post': SinglePostPage
    },
    props: [ ],
    data: function()   {
        return { posts: []  } ;
    },
    mounted() {
    this.posts = axios
        .get(
            'https://my-json-server.typicode.com/mohdmunsif/e28-blog-api/entries'
        )
        .then(response => {
            this.posts = response.data;
        });
    }

};
</script>

<style scoped>



</style>