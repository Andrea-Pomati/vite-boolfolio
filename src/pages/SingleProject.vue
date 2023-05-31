<script>
export default {
    name: 'SingleProject',

    data() {
        return {
            projectSlug: ''
        }
    },

    mounted() {
        console.log(this.$route);
        this.projectSlug = this.$route.params.slug
    }
}
</script>

<template>
    <div class="container py-5">
        <h1>Progetto singolo</h1>
    </div>
</template>