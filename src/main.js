// import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import './vuetify-overrides.scss'

import Vue from 'vue'
import Layout from './layout'

import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.prototype.log = console.log

/* eslint-disable no-new */
new Vue({
    el: '#app',
    vuetify: new Vuetify({}),
    render: h => h(Layout)
})
