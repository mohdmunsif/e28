<template>
    <div>
        <h2>Create a new blog entry</h2>

        <form>
          <div class='form-group'>
            <label for='name'>Title</label>
            <input type='text' v-model='$v.entries.title.$model'  id='name' />
          </div>

          <div class='form-group'>  
            <label for='slugs'>Slugs:</label>
            <input type='text' v-model='$v.entries.slugs.$model' id='slugs'
            :class='{ "form-group has-error has-feedback": $v.entries.slug.$error }'
             />
          </div>

          <div class='form-group'>
            <label for='description'>Entry</label>
            <textarea class='form-control' v-model='$v.entries.description.$model' id='description' rows='3'>
            </textarea>
          </div>

          <div class='form-group'>
          <label for='date'>Date:</label>
          <input type='date' v-model='entries.date' id='date' />
          </div>

          <div class='form-group'>
          <label for='author'>Author:</label>
          <input type='text' v-model='entries.author' id='author' />
          </div>

          <div class='form-group'>
          <label for='categories'>Categories:</label>
          <input type='text' v-model='entries.categories' id='categories' />
          </div>

          <button type='submit' class='btn btn-primary' @click='addEntry'>Submit</button>
  
        </form>

        <div class='alert alert-success alert-dismissible fade show' role='alert' v-if='added'>
         Post submitted successfully </div>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: '',
  data: function() {
      return { 
      added: false,  
      entries:  {
          author: '',
          slugs: '',
          date: '',
          title: '',
          description: ' ',
          categories: [''] } 
      }

  },
  methods: {
    addEntry: function() {
      app.api.add('entries', this.entries).then(response => {
          if (response.includes('Error')) {
              alert(response);
          }
           else {
             console.log(response);
            this.added =  true;
           }
      } )
    } 
  },
  validations: {
    entries: {
      slug: {
        required, minLength: minLength(6)
      },
      description: {
        required
      },
      title: {
        required
      }
    }

  },
  props: {
    msg: String
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
