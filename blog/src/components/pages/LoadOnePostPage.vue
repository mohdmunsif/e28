<template>
 
    <div class='post'>
        <h1 class='post-subject'>{{ post.subject }}</h1>
         <p class='post-entry'>{{ post.entry }}</p>
    </div>
 
</template>


<script>
const axios = require('axios');
 

export default {
    props: ['id'],
    data: function()   {
        return { post: ''  } ;
    },
    mounted() {
    this.post = axios
        .get(
            'https://my-json-server.typicode.com/mohdmunsif/e28-blog-api/entries/' + this.id
        )
        .then(response => {
            this.post = response.data;
        });
    }
};
</script>

<style scoped>
.post {
    border-block-color: black;
    border-style: dotted;
    text-decoration: none;
}
.post-subject {
     text-decoration: none;
 
}
</style>