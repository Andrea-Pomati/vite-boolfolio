<script>

import axios from 'axios';

import ProjectCard from './components/ProjectCard.vue';



export default {
  name:'App',

  data() {
    return {

      projects: [],

    }
  },

  components: {
    ProjectCard,

  },

  created() {
    this.getProjects();
  },

  methods: {
    getProjects() {

      axios.get('http://127.0.0.1:8000/api/projects').then(response => {
        console.log(response.data.results);
        this.projects = response.data.results;
      });
    
    }
  },
}
</script>

<template>
<div class="container pt-5">
  <h1>Tutti i progetti del mio portfolio</h1>

  <hr>

  <div class="row">
    <div class="col-4">
      <ProjectCard></ProjectCard>
    </div>
  </div>

  
</div>
</template>

<style scoped>

</style>
