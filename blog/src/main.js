import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import PostsPage from './components/pages/PostsPage.vue'; 
import CategoriesPage from './components/pages/CategoriesPage.vue';
import HomePage from './components/pages/HomePage.vue'; 
import LoadOnePostPage from './components/pages/LoadOnePostPage.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false
 
const routes = [
  { path: '/', component: HomePage, name: 'home'},
  { path: '/posts', component: PostsPage, name: 'posts'},
  { path: '/categories', component: CategoriesPage, name: 'categories'},
  { path: '/post/:id', component: LoadOnePostPage, name: 'post', props: true},
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({ 
  router: router,
  render: h => h(App),
}).$mount('#app')