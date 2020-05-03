<template>
    <div id='product-page'>
        <h1>Product {{ id }}</h1>
    </div>
</template>

<script>
export default {
    name: 'ProductPage',
    props: ['id'],
    data: function() {
        return {
            // id: this.$route.params.id
        };
    }
};
</script>