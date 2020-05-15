<template>
    <div>
        <h2>Create a new blog entry</h2>

        <form>
          <div class='form-group'>
            <label for='name'>Title</label>
            <input type='text' v-model='$v.entries.title.$model'  id='name' />
          </div>

            <div v-if='$v.entries.title.$error'>
                <div
                    class='form-feedback-error'
                    v-if='!$v.entries.slug.required'
                >Title is required.</div>
 
            </div>          

          <div class='form-group'>  
            <label for='slug'>Slugs:</label>
            <input type='text' v-model='$v.entries.slug.$model' id='slug'
            :class='{ "form-group has-error has-feedback": $v.entries.slug.$error }'
             />
          </div>

            <div v-if='$v.entries.slug.$error'>
                <div
                    class='form-feedback-error'
                    v-if='!$v.entries.slug.required'
                >URL identifier is required.</div>

                <div
                    class='form-feedback-error'
                    v-if='!$v.entries.slug.minLength'
                >URL identifier must be at least 4 characters long.</div>
 
            </div>

          <div class='form-group'>
            <label for='description'>Entry</label>
            <textarea class='form-control' v-model='entries.description' id='description' rows='3'>
            </textarea>
          </div>


            <div v-if='$v.entries.description.$error'>
                <div
                    class='form-feedback-error'
                    v-if='!$v.entries.description.required'
                >Entry is required.</div>
 
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
          slug: '',
          date: '',
          title: '',
          description: ' ',
          categories: [''] } 
      }

  },
  methods: {
    addEntry: function() {

            // Invoke this touch method to force the validation system to register errors even if the user hasn't interacted with any of the fields yet.
            this.$v.$touch();

            // Only add the product if we don't have any errors
            if (this.$v.$anyError == false) {

              app.api.add('entries', this.entries).then(response => {
                  if (response.includes('Error')) {
                      alert(response);
                  }
                  else {
                    console.log(response);
                    this.added =  true;
                    // this.$v.$reset();
                  }
              } )

            }
      
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
