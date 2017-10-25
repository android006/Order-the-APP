import App from './App'
import routes from './router/index'
import Vue from 'vue';
import vuex from 'vuex';
import VueRouter from 'vue-router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/style.css'
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);

Vue.use(MintUI)

Vue.use(VueRouter)
Vue.use(vuex)


const router=new VueRouter({
  routes
})
router.beforeEach(function(to,from,next){
  if(store.state.logined && to.path=='/order'){
    next('/login')
  }else{
    next()
  }
})
router.afterEach(function(to,from){
})


//将store, router加入并生成应用
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
