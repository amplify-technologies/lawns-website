<template>
    <v-container
    fluid
    class="pa-0"
    >

        <v-img
            :src="require('@/assets/organize.png')"
            max-height="1200"
        >
            <v-row no-gutters>
                <v-col
                    cols="6"
                    class="d-flex flex-column justify-center align-center"
                >   
                    <div :class="$vuetify.breakpoint.mdAndDown? 'pl-6' : 'pl-16'">
                        <v-card-title class="text-h5 font-weight-bold">
                            Organize, and Schedule
                        </v-card-title>
                        <v-card-text>
                            Write out and complete all your Jobs from start to finish
                        </v-card-text>
                    </div>
                </v-col>
                <v-col
                    cols="6"
                    class="d-flex flex-column align-center"
                >
                    <v-img
                        :src="require('@/assets/browser_angled.png')"
                        width="400"
                        :style="`transform: ${$vuetify.breakpoint.mdAndDown? 'translate(20px, 0px) scale(1.2);' : 'translate(0px, 100px) scale(1.4);'}`"
                    />
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col
                    cols="6"
                    class="d-flex flex-column align-center"
                >
                    <v-img
                        :src="require('@/assets/phone.png')"
                        width="400"
                        :style="`transform: ${$vuetify.breakpoint.mdAndDown? 'translate(-10px, -30px) scale(1.1);' : 'translate(0px, 0px) scale(1.2);'}`"

                    />
                </v-col>
                <v-col
                    cols="6"
                    class="d-flex flex-column justify-center"
                >
                    <div :class="$vuetify.breakpoint.mdAndDown? 'pr-6' : 'pr-16'">
                        <v-card-title class="text-h5 font-weight-bold">
                            Customer Service at its best.
                        </v-card-title>
                        <v-card-text>
                            our system manages client to client messages so your customers wont ever be left uninformed. Amplify comes with email notifications to keep every one on track
                        </v-card-text>
                    </div>
                </v-col>
            </v-row>
        </v-img>    
    </v-container>
</template>

<script>
export default {

}
</script>
