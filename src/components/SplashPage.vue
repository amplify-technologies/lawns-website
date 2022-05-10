<template>
  <v-main>

    <v-container
      id="lawn"
      fluid
      class="fill-height pl-0"
    >
      <v-app-bar
        absolute
        color="transparent"
        elevation=0
      >
        
        <v-toolbar-title
          class=" grey--text text--lighten-5"
        >
          Amplify Lawns
        </v-toolbar-title>
        
        <v-spacer></v-spacer>

        <v-btn>Try for free</v-btn>

      </v-app-bar>

      <v-card
        tile
        class="text-h4 font-weight-bold pa-2 pl-16 ml-0 grey--text text--lighten-5"
        color="transparent"
        elevation=0
      >
        Job Management for Pros
      </v-card>

    </v-container>

  </v-main>
</template>

<script>
  export default {
    name: 'SplashPage',

    data: () => ({}),
  }
</script>

<style>
  #lawn {
    background: url('../assets/fairway.jpg');
    background-size: cover;
  }
</style>
