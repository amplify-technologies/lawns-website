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
          class="justify-center mb-10"
        >

          <v-img
            v-if="!reveal"
            width="160px"
            height="160px"
            class="mx-11 my-7"
          ></v-img>

          <v-img
            v-if="reveal2"
            :src="require('@/assets/octagon.png')"
            max-width="160px"
            height="160px"
            class="mx-11 my-7"
          >
            <v-expand-transition
              origin="center center"
            >
              <v-icon
                class="d-flex justify-center align-content-center fill-height"
                size="60"
                color="primary"
              >
                mdi-send
              </v-icon>
            </v-expand-transition>
          </v-img>

          <v-img
            v-if="reveal"
            :src="require('@/assets/octagon.png')"
            max-width="160px"
            height="160px"
            class="mx-11 my-7"
          >
            <v-expand-transition
              origin="center center"
            >
              <v-icon
                class="d-flex justify-center align-content-center fill-height"
                size="60"
                color="primary"
              >
              mdi-currency-usd
              </v-icon>
            </v-expand-transition>
          </v-img>

          <v-img
            v-if="reveal3"
            :src="require('@/assets/octagon.png')"
            max-width="160px"
            height="160px"
            class="mx-11 my-7"
          >
            <v-expand-transition
              origin="center center"
            >
              <v-icon
                class="d-flex justify-center align-content-center fill-height"
                size="60"
                color="primary"
              >
              mdi-wallet
              </v-icon>
            </v-expand-transition>
          </v-img>

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
      if(section.offsetTop < window.scrollY + section.scrollHeight) {
        this.reveal = true;
        setTimeout(() => this.reveal2 = true, 300);
        setTimeout(() => this.reveal3 = true, 600);
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