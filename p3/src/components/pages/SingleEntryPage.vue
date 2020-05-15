<template>
    <router-link :to='{name: "oneentry", params: {slug: entry.slug}}'>
    <div class='entry'>
        <h1 class='entry-title'>{{ entry.title }}</h1>
         <p class='entry-description'>{{ entry.description }}</p>
         <p class='entry-author'> By: {{ entry.author}} </p>
 

        <button @click='addToFavs(entry.title)' data-test='add-to-favorite-button'>Favorite this!</button>

        <transition name='fade'>
            <div
                data-test='add-to-favorite-confirmation'
                class='alert'
                v-if='addAlert'
            >Your favorite has been updated!</div>
        </transition>

    </div>
    </router-link>
</template>


<script>
import * as app from '@/common/app.js';
export default {
    name: '',
    props: ['entry'],
    data: function() {
        return {
            addAlert: false
        };
    },
    // computed: {
    //     entry() {
    //         return this.$store.getters.getEntryById(this.id);
    //     },
 
    // },
    methods: {
        addToFavs: function(id) {
            let favs = new app.Favorite();
            favs.add(id);
            this.$store.commit('updateFavorites', 1);
            this.addAlert = true;
            setTimeout(() => (this.addAlert = false), 3000);
        }
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

 