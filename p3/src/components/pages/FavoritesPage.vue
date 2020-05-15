<template>
    <div id='favorite-page'>
        <h1>Your Favorite Entries</h1>

        <div v-if='favs.length == 0'>No favs</div>

        <ul class='cleanList' v-if='Object.keys(entries).length > 0' data-test='favorite-contents'>
            <li v-for='item in favs' :key='item.slug'>
                <button
                    data-test='remove-from-favorite-button'
                    @click='removeFromFavorite(item.slug, item.quantity)'
                >Remove</button>
                {{ item.quantity }} x {{ getEntryDetails(item.slug).author }}
            </li>
        </ul>
    </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
    data: function() {
        return {
            favs: [],
            favoriteInst: null
        };
    },
    mounted() {
        // Making Favorite instantce a data property so we can use it later in a removeFromFavorite method
        this.favoriteInst = new app.Favorite();
        this.favs = this.favoriteInst.getFavEntries();
    },
    methods: {
        getEntryDetails(slug) {
            for (let key of Object.keys(this.entries)) {
                if (this.entries[key].slug == slug) {
                    return this.entries[key];
                }
            }
        },
        removeFromFavorite(slug, quantity) {
            this.favoriteInst.remove(slug);
            this.$store.commit('updateFavoriteCount', -quantity);
        }
    },
    computed: {
        entries: function() {
            return this.$store.state.entries;
        }
    }
};
</script>

<style  scoped> 
button {
    /* background-color: $red; */
    font-size: 10px;
    padding: 5px;
}

button:hover {
    /* background-color: darken($red, 10%); */
}
</style>