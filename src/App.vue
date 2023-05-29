<script>

import axios from 'axios';

export default {
  name:'App',

  data() {
    return {

      projects: [],

    }
  },

  created() {
    this.getProjects();
  },

  methods: {
    getProjects() {

      axios.get('http://127.0.0.1:8000/api/projects').then(Response => {
        console.log(Response);
      });
    
    }
  },
}
</script>

<template>
<div class="container pt-5">
  <h1>Tutti i progetti del mio portfolio</h1>

  <hr>


</div>
</template>

<style scoped>

</style>
