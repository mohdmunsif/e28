import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ShowProducts from './components/ShowProducts.vue'; 
import ShowCategories from './components/ShowCategories.vue';
import ShowHome from './components/ShowHome.vue';
import ProductPage from './components/pages/ProductPage.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false
 
const routes = [
  { path: '/', component: ShowHome, name: 'home'},
  { path: '/products', component: ShowProducts, name: 'products'},
  { path: '/categories', component: ShowCategories, name: 'categories'},
  { path: '/product/:id', component: ProductPage, name: 'product', props: true},
]

const router = new VueRouter({
  routes: routes
})

new Vue({ 
  router: router,
  render: h => h(App),
}).$mount('#app')
