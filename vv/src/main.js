import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//注入cordova
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  window.console.log('start install cordova.js')
  var cordovaScript = document.createElement('script');
  cordovaScript.setAttribute('type', 'text/javascript');
  cordovaScript.setAttribute('src', 'cordova.js');
  document.body.appendChild(cordovaScript);
  window.console.log('install cordova.js finished')
}


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
