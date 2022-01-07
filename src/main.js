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
import VueTailwind from 'vue-tailwind'
import TPagination from 'vue-tailwind/dist/t-pagination'

const settings = {
  't-pagination': {
    component: TPagination,
    props: {
      classes: {
        wrapper: 'table border-collapse text-center bg-white mx-auto shadow-sm',
        element: 'w-8 h-8 border border-gray-200 table-cell hover:border-blue-100',
        activeElement: 'w-8 h-8 border border-gray-200 border-blue-500 table-cell hover:border-blue-600',
        disabledElement: 'w-8 h-8 border border-gray-200 table-cell',
        ellipsisElement: 'w-8 h-8 border border-gray-200 hidden md:table-cell',
        activeButton: 'bg-green-500 w-full h-full text-white hover:bg-green-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-opacity-50',
        disabledButton: 'opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out',
        button: 'hover:bg-blue-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
        ellipsis: ''
      },
      variants: {
        rounded: {
          wrapper: 'bg-white mx-auto text-center flex space-x-2',
          element: 'w-8 h-8 rounded-full',
          activeElement: 'w-8 h-8 rounded-full',
          disabledElement: 'w-8 h-8 rounded-full',
          ellipsisElement: 'w-8 h-8 rounded-full hidden md:inline',
          activeButton: 'border border-blue-500 bg-green-500 w-full h-full rounded-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
          disabledButton: 'border border-gray-200  opacity-25 w-full h-full rounded-full cursor-not-allowed transition duration-100 ease-in-out',
          button: 'border border-gray-200 hover:bg-blue-100 hover:border-blue-100 rounded-full w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
          ellipsis: ''
        }
      }
    }
  }
}

Vue.use(VueTailwind, settings)
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