import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#2C73FF",
                background_grey: "#F2F2F2",
                background_dark: "#393939"
            },
            dark: {
            }
        }
    }
});
