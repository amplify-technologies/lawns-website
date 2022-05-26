<template>
  <v-sheet color="primary">
    <v-img
      :src="require('@/assets/runs_on.png')"
      fluid
      class="pa-16"
      :max-height="$vuetify.breakpoint.lg ? 700 : 'initial'"
    >
      <v-container fluid class="pb-16 align-content-center fill-height">
        <v-row class="justify-center">
          <p class="text-h4 white--text text-center font-weight-bold">
            Yep. Runs on everything
          </p>
        </v-row>

        <v-row class="justify-center">
          <v-btn
            outlined
            class="text-capitalize"
            color="white"
            href="https://prod-lawns.web.app/"
          >
            Open Amplify
            <v-icon class="ml-2">mdi-open-in-new</v-icon>
          </v-btn>
        </v-row>

        <v-row class="mt-10 mb-16 justify-center">
          <v-img
            :src="require('@/assets/devices_wireframe.png')"
            width="100%"
            max-width="622px"
          >
          </v-img>
        </v-row>
      </v-container>
    </v-img>
  </v-sheet>
</template>

<script>
export default {
  name: "RunsOnEverything",
};
</script>
