import Hello from '../components/HelloWorld.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import Bottom from '../components/Bottom.vue'
import list from '../pages/list'
import commodit from '../pages/commodit'
import pay from '../pages/pay'
import order from '../pages/order'
import mine from '../pages/mine'
import home from '../pages/home'
import serch from '../pages/serch'
import distory from '../pages/distory'
export default [
{
    name:'/',
    path:'/',
    component:home
  },
  {
    name:'/login',
    path:'/login',
    component:login
  },
  {
    name:'/register',
    path:'/register',
    component:register
  },
  {
    name:'/serch',
    path:'/serch',
    component:serch
  },
  {
    name:'/commodit',
    path:'/commodit',
    component:commodit
  },
  {
    name:'/list',
    path:'/list',
    component:list
  },
  {
    name:'/pay',
    path:'/pay',
    component:pay
  },
  {
    name:'/distory',
    path:'/distory',
    component:distory
  },
  {
    name:'/mine',
    path:'/mine',
    component:mine
  },
  {
    name:'/order',
    path:'/order',
    component:order
  },
  {
    path:'/admin',
    component:{
    	template:'<div>欢迎来到个人中心界面，你将享受尊贵服务，<router-link to="register">退出</router-link></div>'
    }
  },
]
