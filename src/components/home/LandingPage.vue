<template>
  <v-main>

    <v-img
      fluid
      class="pl-0"
      :src="require('@/assets/landing.jpeg')"
      max-height="100vh"
      min-height="400"
    >
      <v-card
        height="100%"
        id="gradient"
        color="transparent"
        flat
      >

        <v-container
         class="align-content-center fill-height pt-xs-16 pt-0"
        >
          <v-card
            tile
            color="transparent"
            elevation=0
            class="text-body-1 text-md-h5 font-weight-bold grey--text text--lighten-5 pl-3 pl-sm-16 pl-md-0"
          >

            <p
              class="text-h5 text-md-h3"
            >Job Management for Pros</p>

            <p>No matter the business, <br class="d-block d-sm-none">Amplify will get you there</p>

            <v-btn
              color="white"
              class="mr-5 text-capitalize"
              width="140"
            >
              Open Amplify
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>

            <v-btn
              color="white"
              outlined
              class="text-capitalize"
              width="140"
            >Pricing</v-btn>
            
          </v-card>
        </v-container>
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

<style>
  #gradient {
    background: linear-gradient(0deg, rgba(34,41,40,.5) 0%, rgba(1,1,1,0) 50%);
  }
</style>
