<template>
  <v-main>

    <v-container
      id="fairway"
      fluid
      class="fill-height pl-0"
    >
      <v-app-bar
        absolute
        color="teal darken-1"
      >
        
        <v-toolbar-title
          class=" grey--text text--lighten-5"
        >
          Charity Golf Solutions
        </v-toolbar-title>
        
        <v-spacer></v-spacer>

        <v-btn>Contact Us!</v-btn>

      </v-app-bar>

      <v-card
        tile
        class="text-h4 font-weight-bold pa-2 pl-16 ml-0 grey--text text--lighten-5"
        color="teal darken-1"
      >
        Your fairway to fundraising
      </v-card>

    </v-container>

    <v-container>

      <div class="mb-12 text-h4 text-center">Who We Are</div>

      <div class="mb-6 text-body-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>

      <div class="mb-6 text-body-1">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>

      <div class="mb-6 text-body-1">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>

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
  #fairway {
    background: url('../assets/fairway.jpg');
    background-size: cover;
  }
</style>
