<template>
  <v-app-bar
    absolute
    color="transparent"
    elevation=0
    hide-on-scroll
    class="pt-5 px-sm-16"
  >

    <v-img
      :src="require('@/assets/amplify_logo.svg')"
      max-height="40"
      max-width="150"
      contain
      position="left"
    />
    
    <v-spacer></v-spacer>

    <v-btn
      x-large
      text
      color="white"
      class="text-capitalize ma-2 d-none d-md-block"
      width="120px"
      @click="$vuetify.goTo('#features', {duration: 0})"
    >Features</v-btn>

    <v-btn
      x-large
      text
      color="white"
      class="text-capitalize ma-2 d-none d-md-block"
      width="120px"
      @click="$vuetify.goTo('#pricing', {duration: 0})"
    >Pricing</v-btn>

    <v-btn
      x-large
      text
      color="white"
      class="text-capitalize ma-2 d-none d-sm-block"
      width="120px"
    >Sign In</v-btn>

    <v-btn
      class="text-capitalize ma-2"
    >Try for free</v-btn>

  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
}
</script>