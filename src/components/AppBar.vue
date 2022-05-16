<template>
  <v-app-bar
        absolute
        color="transparent"
        elevation=0
      >
        <v-img
          :src="require('@/assets/logo.jpg')"
          max-height="60"
          contain
          position="left"
        ></v-img>
        
        <v-spacer></v-spacer>

        <v-btn
          text
          color="white"
          class="text-capitalize"
        >Features</v-btn>

        <v-btn
          text
          color="white"
          class="text-capitalize"
        >Pricing</v-btn>

        <v-btn
          text
          color="white"
          class="text-capitalize"
        >Sign In</v-btn>

        <v-btn
          class="text-capitalize"
        >Try for free</v-btn>

      </v-app-bar>
</template>

<script>
export default {

}
</script>