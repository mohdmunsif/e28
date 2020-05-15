<template>
    <div id='entries'>
        <h2>All Blog Posts</h2>
        <single-entry
            v-for='entry in entries'
            :key='entry.slug'
            :entry='entry'
        ></single-entry>
    </div>
</template>

<script>
// import * as app from '@/common/app.js'

import SingleEntryPage from './SingleEntryPage.vue';
 
 
export default {
    name: '',
    components: { 
        'single-entry': SingleEntryPage
    },
    props: [ ],
    data: function()   {
        return {   } ;
    },
    computed: {
        entries: function() {
            return this.$store.state.entries;
        }
    }    

};
</script>

<style scoped>
</style>