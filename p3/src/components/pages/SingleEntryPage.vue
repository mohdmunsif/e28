<template>
    <router-link :to='{name: "entry", params: {id: entry.id}}'>
    <div class='entry'>
        <h1 class='entry-subject'>{{ entry.subject }}</h1>
         <p class='entry-entry'>{{ entry.entry }}</p>
         <p class='entry-author'> By: {{ entry.author}} </p>
    </div>
    </router-link>
</template>


<script>
export default {
    subject: '',
    props: ['entry'],
    data: function()   {
        return { } ;
    }
};
</script>

<style scoped>
.entry {
    border-block-color: black;
    border-style: dotted;
    text-decoration: none !important;
    margin: 5px;
}
.entry-subject {
     text-decoration: none !important;
 
}
</style>