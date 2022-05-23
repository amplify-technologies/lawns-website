<template>
  <v-container fluid class="pa-0">
    <v-img
      :src="require('@/assets/organize.png')"
      :max-height="$vuetify.breakpoint.mdAndUp ? 1200 : 'initial'"
    >
      <v-row no-gutters class="flex-column flex-md-row align-content-center">
        <v-col
          cols-md="6"
          class="d-flex flex-column align-start justify-center align-md-center"
          order="1"
        >
          <div :class="$vuetify.breakpoint.mdAndDown ? 'px-6 py-16' : 'px-16'">
            <p class="px-4 mb-0 text-h5 font-weight-bold">
              Organize and Schedule
            </p>
            <v-card-text>
              Write out and complete all your Jobs from start to finish
            </v-card-text>
          </div>
        </v-col>
        <v-col
          cols-md="6"
          class="d-flex flex-column justify-center align-center"
          order="2"
        >
          <v-img
            :src="require('@/assets/browser_angled.svg')"
            width="400"
            max-width="100%"
            :style="`transform: ${
              $vuetify.breakpoint.mdAndDown
                ? 'translate(20px, 0px) scale(1.2);'
                : 'translate(0px, 100px) scale(1.4);'
            }`"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-sheet height="50" color="transparent" />
        </v-col>
      </v-row>
      <v-row no-gutters class="flex-column flex-md-row align-content-center">
        <v-col
          cols-md="6"
          class="d-flex flex-column justify-center align-center"
          order="4"
          order-md="3"
        >
          <v-img
            :src="require('@/assets/phone.svg')"
            width="400"
            :style="`transform: ${
              $vuetify.breakpoint.mdAndDown
                ? 'translate(-10px, -30px) scale(1.1);'
                : 'translate(0px, -100px) scale(1.2);'
            }`"
          />
        </v-col>
        <v-col
          cols-md="6"
          class="d-flex flex-column justify-center align-center"
          order="3"
          order-md="4"
        >
          <div :class="$vuetify.breakpoint.mdAndDown ? 'px-6 py-16' : 'px-16'">
            <p class="px-4 mb-0 text-h5 font-weight-bold">
              Customer Service at its best.
            </p>
            <v-card-text>
              Our system manages client to client messages so your customers
              won't ever be left uninformed. Amplify comes with email
              notifications to keep everyone on track
            </v-card-text>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-sheet height="50" color="transparent" />
        </v-col>
      </v-row>
    </v-img>
  </v-container>
</template>

<script>
export default {};
</script>
