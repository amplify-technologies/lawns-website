<template>
  <v-img id="features" :src="require('@/assets/features.png')">
    <v-container class="align-content-center fill-height">
      <v-row>
        <v-col md="8">
          <v-card flat color="transparent">
            <p class="text-h5 font-weight-bold mb-2">List of Features</p>

            <p class="text-body mb-10">
              Amplify lets you create Jobs from templates, assign clients to
              them, schedule when they happen and send invoices when they’re
              done. On top of that it comes with in-app messaging to keep in
              touch with your customers.
            </p>

            <v-row class="d-flex flex-smAndDown-column">
              <v-col v-for="(item, i) in features" :key="i">
                <v-btn
                  width="100%"
                  outlined
                  class="text-capitalize"
                  x-large
                  @click="carousel = i"
                >
                  {{ item.title }}
                  <v-spacer></v-spacer>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col md="4">
          <v-carousel
            vertical
            :show-arrows="false"
            hide-delimiter-background
            hide-delimiters
            v-model="carousel"
          >
            <v-carousel-item v-for="(item, i) in features" :key="i">
              <p class="text-h5 mb-2 font-weight-bold">{{ item.title }}</p>
              <p class="text-body-1 font-weight-medium">{{ item.desc }}</p>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: "featuresPage",
  data() {
    return {
      features: [
        {
          title: "Scheduler",
          desc: "Keep track of all jobs on a visual calendar, edit details and see who's doing what.",
          icon: "mdi-calendar-blank",
        },
        {
          title: "In App Messages",
          desc: "This allows you to communicate with customers via SMS, Email, or on-site chat",
          icon: "mdi-forum",
        },
        {
          title: "Invoicing",
          desc: "Easily send invoices to your clients, In App or, by Email",
          icon: "mdi-receipt",
        },
        {
          title: "Easy Transaction",
          desc: "Your company will have its own transaction system via Stripe API",
          icon: "mdi-credit-card",
        },
        {
          title: "Fast Collections",
          desc: "(Need a description)",
          icon: "mdi-puzzle",
        },
        {
          title: "Organize Clients",
          desc: "Our system allows you to create Clients and add all thier details and quickly make job under their name",
          icon: "mdi-clipboard-account",
        },
      ],
      carousel: 0,
    };
  },
};
</script>
