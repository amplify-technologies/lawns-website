<template>
  <v-footer color="transparent" absolute class="px-16">
    <v-card
      color="transparent"
      flat
      dark
      class="text-body-1 font-weight-bold mb-3"
    >
      {{ year }} - Amplify
    </v-card>

    <v-spacer></v-spacer>

    <v-card color="transparent" flat dark class="text-body-1 font-weight-bold">
      <!-- <v-btn icon x-large>
        <v-icon dark>mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon x-large>
        <v-icon dark>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon x-large>
        <v-icon dark>mdi-twitter</v-icon>
      </v-btn> -->
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBar",

  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style></style>
