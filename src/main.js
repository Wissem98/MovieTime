import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

import App from './App.vue'
import router from "./router";
import vuetify from './plugins/vuetify'
import VueCompositionApi from '@vue/composition-api';

Vue.config.productionTip = false
Vue.use(VueCompositionApi);
Vue.config.ignoredElements = [/^ion-/];


export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        themes: {

            dark: {
                primary: colors.blue.darken1,

            },
            light: {
                primary: colors.grey.darken1,


            },
        },
    },
});


new Vue({
    router,
    vuetify,

    render: h => h(App)
}).$mount('#app')