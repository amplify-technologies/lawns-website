<template>
  <v-sheet
    id="bookkeeping"
    color="background_grey"
    v-scroll="revealIcons"
  >
    <v-img
      :src="require('@/assets/book_keep.png')"
      fluid
      class="pa-16"
      :max-height="$vuetify.breakpoint.lg ? 600 : 'initial'"
    >
      <v-container
        class="align-content-center fill-height"
      >

        <v-row
          class="justify-center"
        >
          <h5
            class="text-h5 mb-4 text-center font-weight-bold"
          >
            Book-Keeping made easy
          </h5>
          <v-card-text
            class="text-body-1 text-center pa-0"
          >
            Send Bills, Quote, and Pay all in one place
          </v-card-text>
        </v-row>

        <v-row
          class="justify-center my-10"
        >

        <v-card
          flat
          color="transparent"
          width="300px"
          height="160px"
          class="mx-0 my-10 d-flex justify-center"
        >
          <v-expand-transition
            origin="center center"
          >
            <v-img
              v-if="reveal"
              :src="require('@/assets/octagon.png')"
              max-width="160px"
              height="160px"
            >
              <v-icon
                class="d-flex justify-center align-content-center fill-height"
                size="60"
                color="primary"
              >
                mdi-send
              </v-icon>
            </v-img>
          </v-expand-transition>
        </v-card>

        <v-card
          flat
          color="transparent"
          width="300px"
          height="160px"
          class="mx-0 my-10 d-flex justify-center"
        >
          <v-expand-transition
            origin="center center"
          >
            <v-img
              v-if="reveal2"
              :src="require('@/assets/octagon.png')"
              max-width="160px"
              height="160px"
            >
              <v-icon
                class="d-flex justify-center align-content-center fill-height"
                size="60"
                color="primary"
              >
              mdi-currency-usd
              </v-icon>
            </v-img>
          </v-expand-transition>
        </v-card>

        <v-card
          flat
          color="transparent"
          width="300px"
          height="160px"
          class="mx-0 my-10 d-flex justify-center"
        >
          <v-expand-transition
            origin="center center"
          >
            <v-img
              v-if="reveal3"
              :src="require('@/assets/octagon.png')"
              max-width="160px"
              height="160px"
            >
              <v-icon
                class="d-flex justify-center align-content-center fill-height"
                size="60"
                color="primary"
              >
              mdi-wallet
              </v-icon>
            </v-img>
          </v-expand-transition>
        </v-card>

        </v-row>

      </v-container>
    </v-img>
  </v-sheet>
</template>

<script>
export default {
  name: "BookkeepingPage",

  data() {
    return {
      reveal: false,
      reveal2: false,
      reveal3: false,
    }
  },

  methods: {
    revealIcons() {
      var section = document.getElementById('bookkeeping');
      var windowBottom = window.scrollY + window.innerHeight;
      if(section.offsetTop + 500 < windowBottom) {
        setTimeout(() => this.reveal = true, 100);
        setTimeout(() => this.reveal2 = true, 600);
        setTimeout(() => this.reveal3 = true, 1100);
      }
    }
  },

  mounted() {
    this.revealIcons()
  }
}
</script>

<style>

</style>