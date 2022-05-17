<template>
  <v-sheet
    color="background_grey"
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

          <p
            class="text-h4 text-center font-weight-bold"
          >
            Book-Keeping made easy
          </p>

        </v-row>
        <v-row
          class="justify-center mb-10"
        >

          <p
            class="text-h5 text-center font-weight-bold"
          >
            Send Bills, Quote, and Pay all in one place
          </p>

        </v-row>
        <v-row
          class="justify-center mb-10"
        >

          <v-img
            :src="require('@/assets/octagon.png')"
            max-width="160px"
            max-height="160px"
            class="mx-11 my-7"
          >
            <v-icon
              class="d-flex justify-center align-content-center fill-height"
              size="60"
              color="primary"
            >
              mdi-send
            </v-icon>
          </v-img>

          <v-img
            :src="require('@/assets/octagon.png')"
            max-width="160px"
            max-height="160px"
            class="mx-11 my-7"
          >
            <v-icon
              class="d-flex justify-center align-content-center fill-height"
              size="60"
              color="primary"
            >
              mdi-baguette
            </v-icon>
          </v-img>

          <v-img
            :src="require('@/assets/octagon.png')"
            max-width="160px"
            max-height="160px"
            class="mx-11 my-7"
          >
            <v-icon
              class="d-flex justify-center align-content-center fill-height"
              size="60"
              color="primary"
            >
              mdi-card-multiple-outline
            </v-icon>
          </v-img>

        </v-row>


      </v-container>
    </v-img>
  </v-sheet>
</template>

<script>
export default {
  name: "BookkeepingPage"
}
</script>

<style>

</style>