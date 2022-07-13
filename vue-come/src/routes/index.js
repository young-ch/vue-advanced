import { createWebHistory, createRouter } from 'vue-router'
import NewsView from '../views/NewsView.vue';
import JobView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';


//import VueRouter from 'vue-router';

const routes = [
    {
      //path: url 주소
      path: '/',
      //url 주소로 갔을때 표시될 컴포넌트
      redirect: '/news',

    },
    {
      //path: url 주소
      path: '/news',
      //url 주소로 갔을때 표시될 컴포넌트
      component: NewsView,

    },
    {
      //path: url 주소
      path: '/jobs',
      //url 주소로 갔을때 표시될 컴포넌트
      component: JobView,
  
    },
    {
      //path: url 주소
      path: '/ask',
      //url 주소로 갔을때 표시될 컴포넌트
      component: AskView,

    },
    {
      //path: url 주소
      path: '/user',
      //url 주소로 갔을때 표시될 컴포넌트
      component: UserView,

    },
    {
      //path: url 주소
      path: '/item',
      //url 주소로 갔을때 표시될 컴포넌트
      component: ItemView,

    },

  ]

  const router = createRouter({
    history : createWebHistory(),
    routes

  })

 export default router
