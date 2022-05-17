<template>
  <v-app>

    <app-bar />

    <router-view />

    <footer-bar />
    
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  components: { AppBar, FooterBar },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
