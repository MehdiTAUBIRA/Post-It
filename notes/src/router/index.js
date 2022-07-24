import { createRouter, createWebHistory } from 'vue-router'
import Notes from '../components/Notes.vue'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'home'
    }
  },

  {
    name: 'Notes',
    path: '/Notes/:name',
    component: Notes,
    props: true,
    meta: {
      title: 'Notes'
    }
  },

  {
    name: 'NotFound',
    path: '/:pathMatch(.*)',
    component: NotFound,
    meta: {
      title: "404 you have made a mistake."
    }
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
});

export default router
