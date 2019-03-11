import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '@/components/Home/Home'
import Course from '@/components/Course/Course'
import LightCourse from '@/components/LightCourse/LightCourse'
import Micro from '@/components/Micro/Micro'
import CourseDetail from '@/components/Course/CourseDetail'
import Login from '@/components/Login/Login'
import ShopCart from '@/components/Cart/ShopCart'

export default new Router({
  linkActiveClass:'is-active',
  mode:'history',

  //1.创建匹配路由组件  2、配置路由信息  3.在router-link中使用
  routes: [
    {
      path:'/',
      redirect:{name:"Home"}
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/Course',
      name:'Course',
      component:Course
    },
    {
      path:'/home/light-course',
      name:'LightCourse',
      component:LightCourse
    },
    {
      path:'/micro',
      name:'Micro',
      component:Micro
    },
    {
      path:'/course/detail/web/:courseId',
      name:'course_detail',
      component:CourseDetail
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:"/purchase/shopping_cart",
      name:'shop_cart',
      component:ShopCart
    }
    

  ]
})
