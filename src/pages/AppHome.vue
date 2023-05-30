<script>
export default {
    name: 'AppHome',

}

</script>

<template>

<div class="container">
    <h1>Sei nella Homepage</h1>

    <hr>

    <router-link :to="{name: 'about'}">Vai alla pagina di about</router-link>
</div>

</template>

<style lang="scss" scoped>

</style>