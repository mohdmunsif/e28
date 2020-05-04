<template>
    <router-link :to='{subject: "post", params: {id: post.id}}'>
    <div class='post'>
        <div class='post-subject'>{{ post.subject }}</div>
         <p class='post-entry'>{{ post.entry }}</p>
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
</style>