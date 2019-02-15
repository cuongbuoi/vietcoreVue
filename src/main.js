import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueHeadful from 'vue-headful'
import Paginate from 'vuejs-paginate'
import JQuery from 'jquery'
let $ = JQuery;
window.$ = require('jquery')
window.JQuery = require('jquery')
Vue.config.productionTip = false;
import Axios from './Axios';

const config = require('./config');
Vue.component('paginate', Paginate);
Vue.use({
    install: function (Vue, options) {
        Vue.prototype.$BaseUrl = config.BaseUrl;
        Vue.prototype.$BaseUrlApi = config.BaseUrlApi;
        Vue.prototype.$UrlImageBlog  = config.UrlImageBlog;
        Vue.prototype.$UrlImageProduct  = config.UrlImageProduct;
        Vue.prototype.$WebsiteName  = config.WebsiteName;
        Vue.prototype.$Http = Axios;
    }
});

Vue.component('vue-headful', vueHeadful);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
