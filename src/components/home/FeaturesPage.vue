<template>
  <v-img
    id="features"
    :src="require('@/assets/features.jpg')"
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
                  >
                    Invoicing
                    <v-spacer></v-spacer>
                    <v-icon>mdi-receipt</v-icon>
                  </v-btn>
                </v-col>

              </v-row>
              <v-row>

                <v-col>
                  <v-btn
                    width="100%"
                    outlined
                    class="text-capitalize"
                    x-large
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
          <v-card
            flat
            color="transparent"
            class="pt-16 text-center"
          >

            <p
              class="text-h5 mb-2 font-weight-bold"
            >
              Scheduler
            </p>

            <p
              class="text-body-1 font-weight-medium"
            >
              Keep track of all jobs on a visual calendar, edit details and see who's doing what.
            </p>


          </v-card>
        </v-col>

      </v-row>
      <v-row>
        <v-col
          offset-md="8"
          justify="center"
        >
          <v-card
            class="text-center"
            flat
            color="transparent"
          >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="grey lighten-1"
                class="white--text text-caption font-weight-bold text-capitalize"
              >
                Hover to read about each feature
                <v-icon>mdi-gesture-tap</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: "featuresPage"
}
</script>