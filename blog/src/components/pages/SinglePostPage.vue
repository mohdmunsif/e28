<template>
    <router-link :to='{name: "post", params: {id: post.id}}'>
    <div class='post'>
        <h1 class='post-subject'>{{ post.subject }}</h1>
         <p class='post-entry'>{{ post.entry }}</p>
         <p class='post-author'> By: {{ post.author}} </p>
    </div>
    </router-link>
</template>


<script>
export default {
    subject: '',
    props: ['post'],
    data: function()   {
        return { } ;
    }
};
</script>

<style scoped>
.post {
    border-block-color: black;
    border-style: dotted;
    text-decoration: none !important;
    margin: 5px;
}
.post-subject {
     text-decoration: none !important;
 
}
</style>