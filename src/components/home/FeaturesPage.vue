<template>
  <v-img
    id="features" :src="require('@/assets/features.png')"
    :max-height="$vuetify.breakpoint.mdAndUp ? 700 : 'initial'"
  >
    <v-container class="align-content-center fill-height">
      <v-card-title class="text-h5 font-weight-bold mb-2"
        >List of Features</v-card-title
      >
      <v-card-text class="text-body mb-10 text-justify">
        Amplify lets you create Jobs from templates, assign clients to them,
        schedule when they happen, and send invoices when they’re done. On top of
        that it comes with in-app messaging to keep in touch with your
        customers.
      </v-card-text>
      <v-row fluid>
        <v-col cols="6" md="8" class="d-none d-sm-flex flex-column justify-center">
          <v-row no-gutters>
            <v-col
              v-for="(item, i) in features"
              :key="i"
              class="mb-0 px-4 py-0"
              cols="6"
              sm="12"
            >
              <v-btn
                block
                outlined
                class="text-capitalize mb-3 py-4"
                @click="carousel = i"
                :large="$vuetify.breakpoint.smAndUp"
                :x-small="$vuetify.breakpoint.xs"
              >
                {{ item.title }}
                <v-spacer></v-spacer>
                <v-icon>{{ item.icon }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
          class="mb-0 px-6 px-sm-3 py-0 py-sm-3 align-center order-first order-sm-last"
          :height="$vuetify.breakpoint.xs ? '500px' : 'initial'"
        >
          <v-carousel
            :vertical="!$vuetify.breakpoint.xs"
            :show-arrows="false"
            :hide-delimiters="!$vuetify.breakpoint.xs"
            hide-delimiter-background
            light
            v-model="carousel"
            :height="$vuetify.breakpoint.xs ? '250px' : '100%'"
          >
            <v-carousel-item v-for="(item, i) in features" :key="i" width="100%">
              <v-card
                class="d-flex flex-column align-center justify-start justify-sm-center"
                :outlined="!$vuetify.breakpoint.xs"
                height="100%"
                width="100%"
              >
                <h4 class="text-h6 mb-4 text-center font-weight-bold">
                  {{ item.title }}
                </h4>
                <v-icon>{{ item.icon }}</v-icon>
                <v-card-text class="text-body-1 text-center">
                  {{ item.desc }}
                </v-card-text>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row class="justify-center justify-sm-start">
        <v-card-subtitle class="text-no-wrap">
          <v-icon>mdi-gesture-tap</v-icon>
          {{$vuetify.breakpoint.xs ? 'Swipe to view features' : 'Click feature for more info'}}
        </v-card-subtitle>
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
          desc: "Keep track of all jobs, edit details and see who's doing what.",
          icon: "mdi-calendar-blank",
        },
        {
          title: "In App Messages",
          desc: "Allows you to communicate with customers via SMS, Email, or on-site chat",
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
          desc: "Our system allows you to create Clients, add all thier details, and quickly make jobs under their name",
          icon: "mdi-clipboard-account",
        },
      ],
      carousel: 0,
    };
  },
};
</script>
