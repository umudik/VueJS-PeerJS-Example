import Vue from 'vue'
import App from './App.vue'
import router from './router'
//Boostrap
import { store } from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


//Clipboard
import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true // add this line


//VUue Use
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueClipboard)

//Vue config
Vue.config.productionTip = false

//Component registration
import comps from "./components/_globalComponentRegistirations";
for (let comp in comps) Vue.component(comp, comps[comp])


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')