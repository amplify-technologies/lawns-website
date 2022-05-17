<template>
  <v-container>
      <v-img :src="require('@/assets/bubbles_1.png')">
        <v-row>
            <v-col cols="6">
                <v-card-title>
                    Organize, and Schedule
                </v-card-title>
                <v-card-text>
                    Write out and complete all your Jobs from start to finish
                </v-card-text>
            </v-col>
            <v-col cols="6">
                <v-img :src="require('@/assets/browser_angled.png')" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-img :src="require('@/assets/phone.png')" />
            </v-col>
            <v-col cols="6">
                <v-card-title>
                    Customer Service at its best.
                </v-card-title>
                <v-card-text>
                    our system manages client to client messages so your customers wont ever be left uninformed. Amplify comes with email notifications to keep every one on track
                </v-card-text>
            </v-col>
        </v-row>
      </v-img>
  </v-container>
</template>

<script>
export default {

}
</script>
