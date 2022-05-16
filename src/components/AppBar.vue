<template>
  <v-app-bar
        absolute
        color="transparent"
        elevation=0
        hide-on-scroll
        class="pt-5 px-16"
      >
        <v-img
          :src="require('@/assets/logo.jpg')"
          max-height="60"
          contain
          position="left"
        ></v-img>
        
        <v-spacer></v-spacer>

        <v-btn
          x-large
          text
          color="white"
          class="text-capitalize ma-2"
          width="120px"
        >Features</v-btn>

        <v-btn
          x-large
          text
          color="white"
          class="text-capitalize ma-2"
          width="120px"
        >Pricing</v-btn>

        <v-btn
          x-large
          text
          color="white"
          class="text-capitalize ma-2"
          width="120px"
        >Sign In</v-btn>

        <v-btn
          class="text-capitalize ma-2"
        >Try for free</v-btn>

      </v-app-bar>
</template>

<script>
export default {

}
</script>