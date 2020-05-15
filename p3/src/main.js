import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import EntriesPage from './components/pages/EntriesPage.vue'; 
import CategoriesPage from './components/pages/CategoriesPage.vue';
import HomePage from './components/pages/HomePage.vue'; 
import NewPostPage from './components/pages/NewPostPage.vue';
import LoadOneEntryPage from './components/pages/LoadOneEntryPage.vue';
import FavoritesPage from './components/pages/FavoritesPage.vue';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './common/store.js'
import Vuelidate from 'vuelidate'

Vue.use(VueRouter);
Vue.use(Vuelidate);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage, name: 'home'},
  { path: '/entries', component: EntriesPage, name: 'entries'},
  { path: '/entry/:id', component: LoadOneEntryPage, name: 'oneentry', props: true}, 
  { path: '/categories', component: CategoriesPage, name: 'categories'},
  { path: '/newentry', component: NewPostPage, name: 'newentry'},   
  { path: '/favs', component: FavoritesPage, name: 'favs'},   
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
