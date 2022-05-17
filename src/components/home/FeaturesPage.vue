<template>
  <v-img
    id="features"
    :src="require('@/assets/features.png')"
  >
    <v-container
      class="align-content-center fill-height"
    >
      <v-row>
      
        <v-col
          md=8
        >  
          <v-card
            flat
            color="transparent"
          >
            <p
              class="text-h5 font-weight-bold mb-2"
            >
              List of Features
            </p>

            <p
              class="text-body mb-10"
            >
              Amplify lets you create Jobs from templates, assign clients to them, schedule when they happen and send invoices when they’re done. On top of that it comes with in-app messaging to keep in touch with your customers.
            </p>

              <v-row>

                <v-col>
                  <v-btn
                    width="100%"
                    outlined
                    class="text-capitalize"
                    x-large
                    @click="carousel=0"
                  >
                    Job Scheduler
                    <v-spacer></v-spacer>
                    <v-icon>mdi-calendar-blank</v-icon>
                  </v-btn>
                </v-col>

                <v-col>
                  <v-btn
                    width="100%"
                    outlined
                    class="text-capitalize"
                    x-large
                    @click="carousel=1"
                  >
                    In App Messages
                    <v-spacer></v-spacer>
                    <v-icon>mdi-forum</v-icon>
                  </v-btn>
                </v-col>

                <v-col>
                  <v-btn
                    width="100%"
                    outlined
                    class="text-capitalize"
                    x-large
                    @click="carousel=2"
                  >
                    Invoicing
                    <v-spacer></v-spacer>
                    <v-icon>mdi-receipt</v-icon>
                  </v-btn>
                </v-col>

                <v-col>
                  <v-btn
                    width="100%"
                    outlined
                    class="text-capitalize"
                    x-large
                    @click="carousel=3"
                  >
                    Easy Transaction
                    <v-spacer></v-spacer>
                    <v-icon>mdi-credit-card</v-icon>
                  </v-btn>
                </v-col>

                <v-col>
                  <v-btn
                    width="100%"
                    outlined
                    class="text-capitalize"
                    x-large
                    @click="carousel=4"
                  >
                    Fast Collections
                    <v-spacer></v-spacer>
                    <v-icon>mdi-puzzle</v-icon>
                  </v-btn>
                </v-col>

                <v-col>
                  <v-btn
                    width="100%"
                    outlined
                    class="text-capitalize"
                    x-large
                    @click="carousel=5"
                  >
                    Organize Clients
                    <v-spacer></v-spacer>
                    <v-icon>mdi-clipboard-account</v-icon>
                  </v-btn>
                </v-col>

              </v-row>

          </v-card>
        </v-col>

        <v-col
          md="4"
        >
          <v-carousel
            vertical
            :show-arrows="false"
            hide-delimiter-background
            hide-delimiters
            v-model="carousel"
          >

            <v-carousel-item
              v-for="(item, i) in features"
              :key="i"
            >
              <p class="text-h5 mb-2 font-weight-bold">
                {{ item.title }}
              </p>
              <p class="text-body-1 font-weight-medium">
                {{ item.desc }}
              </p>
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
      features: {
        scheduler: {
          title: "Scheduler",
          desc: "Keep track of all jobs on a visual calendar, edit details and see who's doing what."
        },
        in_app_msg: {
          title: "In App Messages",
          desc: "s"
        },
        invoicing: {
          title: "Invoicing",
          desc: "a"
        },
        easy_trans: {
          title: "Easy Transaction",
          desc: "f"
        },
        fast_col: {
          title: "Fast Collections",
          desc: "e"
        },
        organize: {
          title: "Organize Clients",
          desc: "4"
        }  
      },
      carousel: 0
    }
  }
}
</script>