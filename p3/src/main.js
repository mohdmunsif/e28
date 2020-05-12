import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import EntriesPage from './components/pages/EntriesPage.vue'; 
import CategoriesPage from './components/pages/CategoriesPage.vue';
import HomePage from './components/pages/HomePage.vue'; 
import NewPostPage from './components/pages/NewPostPage.vue';


Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage, name: 'home'},
  { path: '/entries', component: EntriesPage, name: 'entries'},
  { path: '/categories', component: CategoriesPage, name: 'categories'},
  { path: '/newentry', component: NewPostPage, name: 'newentry'},  
  { path: '/post/:id', component: NewPostPage, name: 'post', props: true}, 
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
