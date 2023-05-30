<script>




import AppHeader from './components/AppHeader.vue';
// import AppFooter from './components/AppFooter.vue';
// import AppMain from './components/AppMain.vue';



export default {
  name:'App',

  data() {
    return {};
  },
  components: {
    // AppMain,
    AppHeader,
    // AppFooter,
  }
 
}
</script>

<template>
<!-- <AppHeader></AppHeader>

<AppMain></AppMain>

<AppFooter></AppFooter> -->
<AppHeader></AppHeader>
<router-view></router-view>
</template>

<style scoped>

</style>
