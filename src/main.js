import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import VueWow from 'vue-wow' 
// import VueLazyload from 'vue-lazyload'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faArrowLeft, faTimes, faSearch, faCheckCircle, faQuestionCircle, faDownload, faTimesCircle, faMapMarker, faBriefcase, faPlayCircle, faAngleDown, faAngleUp, faCircle, faArrowRight, faCalendar} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookSquare, faInstagram, faTwitter, faLinkedin, faBars, faArrowLeft, faTimes, faSearch, faCheckCircle, faQuestionCircle,faDownload, faTimesCircle, faAngleUp, faBriefcase,faMapMarker, faPlayCircle, faAngleDown, faCircle, faArrowRight, faCalendar)

Vue.use(VueWow)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.use(VueLazyload)

Vue.config.productionTip = false
const baseURL = "https://api.xpatag.com/v1"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default baseURL