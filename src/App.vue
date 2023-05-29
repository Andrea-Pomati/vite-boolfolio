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

  <table class="table table-striped">
    <thead>
      <th>Titolo</th>
      <th>Slug</th>
      <th>Contenuto</th>
    </thead>

    <tbody>

      <tr v-for="project in projects">
        <td>{{ project.title }}</td>
        <td>{{ project.slug }}</td>
        <td>{{ project.content}}</td>
      </tr>

    </tbody>
  </table>
</div>
</template>

<style scoped>

</style>
