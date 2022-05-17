<template>
  <div>

    <v-navigation-drawer
      class="d-block d-md-none"
      absolute
      v-model="drawer"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Features</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Pricing</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Sign In</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Try For Free</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      absolute
      color="transparent"
      elevation=0
      hide-on-scroll
      class="pt-5 px-16"
    >

      <v-app-bar-nav-icon
        color="white"
        @click.stop="drawer = !drawer"
        class="d-block d-md-none"
      ></v-app-bar-nav-icon>

      <v-spacer class="d-block d-md-none"></v-spacer>

      <v-img
        :src="require('@/assets/amplify_logo.svg')"
        max-height="40"
        max-width="150"
        contain
        position="left"
      />
      
      <v-spacer class="d-none d-md-block"></v-spacer>

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
        class="text-capitalize ma-2 d-none d-md-block"
        width="120px"
      >Sign In</v-btn>

      <v-btn
        class="text-capitalize ma-2 d-none d-md-block"
      >Try for free</v-btn>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppBar",

    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>