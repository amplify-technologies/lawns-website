<template>
  <v-sheet
    color="background_dark"
  >
    <v-img
      id="pricing"
      :src="require('@/assets/pricing.png')"
      class="py-16"
      fluid
      :max-height="$vuetify.breakpoint.lg ? 800 : 'initial'"
    >
      <v-container
        class="align-content-center fill-height"
      >
        <v-row
          class="justify-center mb-10"
        >

          <p
            class="text-h4 text-center white--text font-weight-bold"
          >
            Get up and running real fast
          </p>

        </v-row>
        <v-row
          class="justify-center"
        >

          <v-card
            class="ma-2 pa-3 d-flex flex-column"
            max-width="350px"
            min-height="500px"
          >

            <v-card-title
              class="justify-center font-weight-bold"
            >
              Free Trial
            </v-card-title>

            <v-card-text
              class="text-h5 justify-center text-center black--text font-weight-bold"
            >
              <span class="text-h4 font-weight-medium">$0</span> for 30 days
            </v-card-text>

            <v-card-text
              class="px-9 text-body-1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </v-card-text>

            <v-spacer></v-spacer>

            <v-card-actions
              class="justify-center"
            >
              <v-btn
                x-large
                color="primary"
                width="100%"
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

            <v-card-title
              class="justify-center font-weight-bold"
            >
              All Features
            </v-card-title>

            <v-card-text
              class="text-h5 justify-center text-center black--text font-weight-bold"
            >
              <span class="text-h4 font-weight-medium">$11</span> /month
            </v-card-text>

            <v-card-text
              class="px-9 text-body-1"
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-spacer></v-spacer>

            <v-card-actions
              class="justify-center"
            >
              <v-btn
                x-large
                color="primary"
                width="100%"
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
name: "pricingPage"
}
</script>
