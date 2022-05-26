<template>
  <v-app-bar absolute color="transparent" elevation="0" class="pt-5 px-sm-16">
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
      @click="$vuetify.goTo('#features', scrollOptions)"
      >Features</v-btn
    >

    <v-btn
      x-large
      text
      color="white"
      class="text-capitalize ma-2 d-none d-md-block"
      width="120px"
      @click="$vuetify.goTo('#pricing', scrollOptions)"
      >Pricing</v-btn
    >

    <v-btn
      x-large
      text
      color="white"
      class="text-capitalize ma-2 d-none d-sm-flex"
      width="120px"
      href="https://prod-lawns.web.app/"
      >Sign In</v-btn
    >

    <v-btn class="text-capitalize ma-2" href="https://prod-lawns.web.app/"
      >Try for free</v-btn
    >
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",

  data() {
    return {
      scrollOptions: {
        duration: 500,
        offset: 0,
        easing: "easeInOutCubic",
      },
    };
  },
};
</script>
