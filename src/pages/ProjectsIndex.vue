<script>
import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectsIndex',

    data() {
    return {

      apiURL: 'http://127.0.0.1:8000/api/projects',

      projects: [],

      pagination: {}, 


    }
  },

  components: {
    ProjectCard,
},  

  mounted() {
    this.getProjects(this.apiURL);
  },

  methods: {
    getProjects(apiURL) {
      axios.get(apiURL).then(response => {
        console.log(response.data.results);
        
        this.projects = response.data.results;
        

        this.pagination = response.data.results;
      });
    },
  }
}
</script>

<template>
 <div class="container py-5">

    <h1>Boolfolio</h1>



    <div class="row">
        <div v-for="project in projects" class="col-md-6 col-lg-4 mb-3">
            <ProjectCard :project="project"></ProjectCard>
        </div>
    </div>

    <hr>

    <div class="projects-navigation">

  <button v-for="link in pagination.links"
    class="btn" 
    :class="link.active ? 'btn-primary' : 'btn-outline-secondary'" 
    v-html="link.label" 
    :disabled="link.url == null ? true : false" 
    @click="getProjects(link.url)">
    
  </button>

    </div>
</div>
</template>

<style lang="scss" scoped>
  .projects-navigation {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
</style>