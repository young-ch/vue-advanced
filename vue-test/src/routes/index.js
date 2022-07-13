
import NewsView from '../views/NewsView.vue';
import JobView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';


export default [
    {
      //path: url 주소
      path: '/news',
      //url 주소로 갔을때 표시될 컴포넌트
      component: NewsView,

    },
    {
      //path: url 주소
      path: '/ask',
      //url 주소로 갔을때 표시될 컴포넌트
      component: JobView,
  
    },
    {
      //path: url 주소
      path: '/jobs',
      //url 주소로 갔을때 표시될 컴포넌트
      component: AskView,

    },

  ];
