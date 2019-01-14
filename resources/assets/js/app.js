
require('./bootstrap');

window.Vue = require('vue');

import { router } from './router/routes';
import { store } from './vuex/store';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.use(Vuetify)

Vue.component('navbar-component', require('./components/layout/navbar.vue'));
Vue.component('toolbar', require('./components/layout/toolbar.vue'));
Vue.component('take-leave-dataTable', require('./components/take-leave/listDataTable.vue'));
Vue.component('passport-clients', require('./components/passport/Clients.vue'));
Vue.component('passport-authorized-clients', require('./components/passport/AuthorizedClients.vue'));
Vue.component('passport-personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue'));

const app = new Vue({
    el: '#app',
    created(){        
        if (this.$store.getters.isAuthenticated) {
            this.$store.dispatch('userRequest');
        }
    },
    store,
    router
});
