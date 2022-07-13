import { createApp } from 'vue'
import App from './App.vue'
import  router  from './routes';


const app = createApp(App);

//createApp(App).mount('#app')
app.use(router);
app.mount('#app');

// import Vue from 'vue'
// import App from './App.vue'



// Vue.config.productionTip = false



// new Vue({
    
//   render: h => h(App)
// }).$mount('#app')


