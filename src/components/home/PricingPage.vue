<template>
  <v-sheet color="background_dark">
    <v-img
      id="pricing"
      :src="require('@/assets/pricing.png')"
      class="py-16"
      fluid
      :max-height="$vuetify.breakpoint.lg ? 800 : 'initial'"
    >
      <v-container class="align-content-center fill-height">
        <v-row class="justify-center mb-10">
          <p class="text-h4 px-4 text-center white--text font-weight-bold">
            Get up and running real fast
          </p>
        </v-row>
        <v-row class="justify-center">
          <v-card
            class="ma-2 pa-3 d-flex flex-column"
            max-width="350px"
            min-height="500px"
          >
            <v-card-title class="justify-center font-weight-bold">
              Free Trial
              <v-chip label class="ml-2" color="secondary">In Beta</v-chip>
            </v-card-title>

            <v-card-text
              class="text-h5 justify-center text-center black--text font-weight-bold"
            >
              <span class="text-h4 font-weight-medium">$0</span> for 30 days
            </v-card-text>

            <v-card-text class="px-9 text-body-1">
              Gain access to the full amplify project with the acception that
              amplify is in beta
              <v-chip label x-small>awaiting copywork</v-chip>
            </v-card-text>

            <v-spacer />

            <v-card-subtitle>
              Stripe API will take a 2.9% and 30 cents from transactions within
              the app
              <v-chip label x-small>awaiting copywork</v-chip>
            </v-card-subtitle>

            <v-card-actions class="justify-center">
              <v-btn
                x-large
                color="primary"
                width="100%"
                href="https://prod-lawns.web.app/"
              >
                Get Started
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-card
            class="ma-2 pa-3 d-flex flex-column"
            max-width="350px"
            min-height="550px"
          >
            <v-card-title class="justify-center font-weight-bold">
              All Features
              <v-chip label class="ml-2" color="secondary">In Beta</v-chip>
            </v-card-title>

            <v-card-text
              class="text-h5 justify-center text-center black--text font-weight-bold"
            >
              <span class="text-h4 font-weight-medium">$11</span> /month
            </v-card-text>

            <v-card-text class="px-9 text-body-1">
              Gain access to the full amplify project with the acception that
              amplify is in beta
              <v-chip label x-small>awaiting copywork</v-chip>
            </v-card-text>

            <v-spacer></v-spacer>

            <v-card-actions class="justify-center">
              <v-btn
                x-large
                color="primary"
                width="100%"
                href="https://prod-lawns.web.app/"
              >
                Get Started
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </v-img>
  </v-sheet>
</template>

<script>
export default {
  name: "pricingPage",
};
</script>
