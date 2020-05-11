<template>
    <div id='entries'>
        <h2>All Blog Posts</h2>
        <single-entry
            v-for='entry in entries'
            :key='entry.id'
            :entry='entry'
        ></single-entry>
    </div>
</template>

<script>
import SingleEntryPage from './SingleEntryPage.vue';
// const axios = require('axios');
 
export default {
    name: '',
    components: { 
        'single-entry': SingleEntryPage
    },
    props: [ ],
    data: function()   {
        return { entries: []  } ;
    },
    mounted() {
    // this.entries = axios
    //     .get(
    //         'https://my-json-server.typicode.com/mohdmunsif/e28-blog-api/entries'
    //     )
    //     .then(response => {
    //         this.entries = response.data;
    //     });
    }
};
</script>

<style scoped>
</style>