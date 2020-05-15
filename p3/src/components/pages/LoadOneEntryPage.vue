<template>
 
    <div class='post'>
        <h1 class='post-subject'>{{ entry.title }}</h1>
         <p class='post-entry'>{{ entry.description }}</p>
         <p class='post-entry'>{{ entry.author }}</p>
    </div>
 
</template>

 
<script>
 
export default {
    props: ['slug'],
    data: function()   {
        return {   } ;
    },
    computed: {
        entry() {
            return this.$store.getters.getEntryById(this.slug);
        },
 
    },    
 
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