import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css'; // If using Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // If using Bootstrap
import './assets/style.css';
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
