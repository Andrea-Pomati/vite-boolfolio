<script>
import axios from 'axios';

export default {
    name: 'SingleProject',

    data() {
        return {
            project: {},

            isLoading: true,
            projectFound: false,

            projectSlug: '',

            baseUrl: 'http://127.0.0.1:8000/',
        }
    },

    mounted() {
        console.log(this.$route);
        this.projectSlug = this.$route.params.slug;

        this.getProject();
    },

    computed: {
        projectImage() {
            return this.baseUrl + 'storage/' + this.project.cover_image;
        }
    },

    methods: {
        getProject() {
            axios.get(this.baseUrl + 'api/projects/' + this.projectSlug).then(response => {
                
                this.isLoading = false;

                if(response.data.success) {

                    this.project = response.data.project;
                    // this.isLoading = false;
                    this.projectFound = true;

                } else {


                    this.projectFound = false;

                }

            });
        }
    }
}
</script>

<template>
    <div v-if="isLoading" id="spinner-container">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else class="container py-5">
        <div v-if="projectFound">
            <div class="project-image text-center">
                <img :src="projectImage" alt="">
            </div>

            <h1>{{ project.title }}</h1>
            <hr>
            <p>
                {{ project.content }}
            </p>


        </div>
        <div v-else>    
            <div class="alert alert-danger" role="alert">
                 Nessun progetto trovato
            </div>
        </div>
    </div>

</template>

<style lang="scss">
#spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
}

.project-image img {
    max-height: 400px;
    object-fit: cover;
}
</style>