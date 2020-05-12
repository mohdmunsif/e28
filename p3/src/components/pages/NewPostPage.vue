<template>
    <div>
        <h2>Create a new blog entry</h2>

        <label for='name'>Title</label>
        <input type='text' v-model='entries.title' id='name' />

        <label for='categories'>Categories:</label>
        <input type='text' v-model='entries.categories' id='categories' />

        <label for='date'>Date:</label>
        <input type='date' v-model='entries.date' id='date' />

        <label for='author'>Author:</label>
        <input type='text' v-model='entries.author' id='author' />
 

        <label for='description'>Entry</label>
        <textarea v-model='entries.description' id='description'></textarea>

        <input type='submit' value='Add' @click="addEntry" />
    </div>
</template>





<script>
import * as app from '@/common/app.js'

export default {
  name: '',
  data: function() {
      return { entries:  {
      author: '',
      date: '',
      title: '',
      description: ' ',
      categories: [''] } 
      }

  },
  methods: {
    addEntry: function() {
      app.api.add('entries', this.entries)
    } 
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    font-size: 15pt;
}

textarea,
input[type='text'] {
    width: 50%;
}

textarea {
    height: 75px;
    display: block;
    margin: auto;
}

label {
    margin-top: 20px;
    display: block;
    font-weight: bold;
}

input[type='submit'] {
    display: inline-block;
    margin-top: 10px;
}
</style>
