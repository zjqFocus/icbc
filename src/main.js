// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Vue.component("zjq",{
//   template:'<h1>{{ msg }}</h1>',
//   data(){
//     return {
//       msg:'没有工作呀'
//     }
//   }
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

