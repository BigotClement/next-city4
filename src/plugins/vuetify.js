import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#7520FF',
                secondary: '#FF206E',
                tertiary: '#FFAE12',
                accent: '#41EAD4',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                white: '#FFFFFF'
            },
        },
    },
});
