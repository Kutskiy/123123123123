import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter.js'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({ apiKey: "AIzaSyDhKcWT1YKd4jBvArLN2zRK3WmKDdQB050",
  authDomain: "myproject-b7a2e.firebaseapp.com",
  databaseURL: "https://myproject-b7a2e.firebaseio.com",
  projectId: "myproject-b7a2e",
  storageBucket: "myproject-b7a2e.appspot.com",
  messagingSenderId: "84577983340",
  appId: "1:84577983340:web:8ce8b39a6adc7d23563149",
  measurementId: "G-RTPPWTNX62"})

let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

})


