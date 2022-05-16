<template>
  <v-main>

    <v-img
      fluid
      class="pl-0 d-flex"
      :src="require('@/assets/splash.jpeg')"
    >

      <v-card
        tile
        class="text-h4 font-weight-bold pa-2 pl-16 ml-0 grey--text text--lighten-5"
        color="transparent"
        elevation=0
      >
        Job Management for Pros
      </v-card>

    </v-img>

  </v-main>
</template>

<script>
  export default {
    name: 'SplashPage',

    data: () => ({}),
  }
</script>
