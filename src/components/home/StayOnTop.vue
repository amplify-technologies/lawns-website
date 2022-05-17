<template>
  <v-img
    :src="require('@/assets/stay_on.png')"
    fluid
    class="pa-2"
    :max-height="$vuetify.breakpoint.lg ? 700 : 'initial'"
  >
    <v-container
      fluid
      class="align-content-center fill-height"
    >
      <v-row
        no-gutters
        class="offset-lg-1"
      >
        <v-col
          class="pa-6 col-md-7 col-lg-6"
        >
          <v-img
            :src="require('@/assets/browsers.png')"
          ></v-img>
        </v-col>
        <v-col
          class="pa-6 col-md-5 col-lg-4 d-flex flex-column justify-center"
          order="first"
          order-md="last"
        >

          <p
            class="text-h5 font-weight-bold"
          >
            Stay on top of what matters to you.
          </p>

          <p
            class="text-body-1 font-weight-medium"
          >
            Managing Customers and keeping track of jobs is super easy to do
          </p>

        </v-col>
      </v-row>
    </v-container>
    
  </v-img>
</template>

<script>
export default {
  name: "StayOnTop"
}
</script>

<style>

</style>