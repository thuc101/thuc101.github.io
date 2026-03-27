import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store';

Vue.use(VueRouter)
var i = 1;
function getId() {
  let kq = i;
  i += 1;
  return kq;
}


const routes = [
  { id:getId(), label:'Môn Học', path:'/', auth: 9,
    component:() => import('../Layouts/FrontLayout.vue'), children:[
      { id:getId(), label:'Môn Toán', path: '', component: () => import('@/views/MonHoc/Toan.vue') , auth: 9 },
      { id:getId(), label:'Môn Lý', path: 'Ly', component: () => import('@/views/MonHoc/Ly.vue'), auth: 9},
      { id:getId(), label:'Môn Hóa', path: 'Hoa', component: () => import('@/views/MonHoc/Hoa.vue') , auth : 9},
    ]
  },
  { id:1, label:'root' , path:'/Admin', auth:0,
    component:() => import('../Layouts/MainLayout.vue'), children:[
      { id:getId(), label:'Home' , path: '', component: () => import('@/views/HomeView.vue') , auth:0 },
      { id:getId(), label:'About', path: 'About', component: () => import('@/views/AboutView.vue') , auth: 0},
      { id:getId(), label:'Product', path: 'Product', component: () => import('@/views/Product.vue') , auth: 0},
      { id:getId(), label:'Môn Học', path:'MonHoc', auth: 9,
        component:() => import('../Layouts/MonHocLayout.vue'), children:[
          { id:getId(), label:'Môn Toán', path: '', component: () => import('@/views/MonHoc/Toan.vue') , auth: 9 },
          { id:getId(), label:'Môn Lý', path: 'Ly', component: () => import('@/views/MonHoc/Ly.vue'), auth: 9},
          { id:getId(), label:'Môn Hóa', path: 'Hoa', component: () => import('@/views/MonHoc/Hoa.vue') , auth : 9},
        ]
      },
      { id:getId(), label:"Test", path:'Test', auth:8,
        component:() => import('../Layouts/MonHocLayout.vue'), children:[
          { id:getId(), label:'Test Vấn đề menu', path: '', component: () => import('@/views/Test/VdMenu.vue'), auth:8},
          { id:getId(), label:'UseMixin', path: 'UseMixin', component: () => import('@/views/Test/UseMixin.vue'), auth:9},
          { id:getId(), label:'Table', path: 'Table', component: () => import('@/views/Test/Table.vue'), auth:9},
          { id:getId(), label:'TestMyLib', path: 'TestMyLib', component: () => import('@/views/Test/TestMyLib.vue'), auth:9},
          
        ]
      }
    ]
  },
  { id:getId(), label:'Login', path: '/login', component: () => import('../views/Login.vue') , auth:16},
  { id:getId(), label:'ChangePass', path: '/ChangePass', component: () => import('@/views/ChangePass.vue') , auth:5 },
  { id:getId(), label:'DangKy', path: '/DangKy', component: () => import('@/views/Dangky.vue'), auth:6},
  { id:getId(),path:"*",redirect: '/'}
]

store.state.routes=routes;

const router = new VueRouter({
  //mode: 'history',
  mode: 'hash',  
  //base: process.env.BASE_URL,
  routes
})
export default router