<template>
  <v-app>

    <app-bar />

    <router-view />
    
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';

export default {
  components: { AppBar },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
