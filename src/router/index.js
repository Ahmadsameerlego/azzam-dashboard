import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import specialistsManage from '@/views/specificationsManage.vue';
import addSpecialist from '@/views/addSpecialist.vue';
import directConsultaions from '@/views/directConsultaions.vue';
import treatManage from '@/views/treatManage.vue';
import support from '@/views/supportGroup.vue';
import financial from '@/views/financialAccount.vue';
import login from '@/views/loginView.vue';
import register from '@/views/registerView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/specialistsManage',
    name :'specialistsManage',
    component : specialistsManage
  },
  {
    path : '/addSpecialist',
    name : 'addSpecialist',
    component : addSpecialist
  },
  {
    path : '/directConsultaions',
    name : 'directConsultaions',
    component : directConsultaions
  },
  {
    path : '/treatManage',
    name : 'treatManage',
    component : treatManage
  },
  {
    path : '/support',
    name : 'support',
    component : support
  },
  {
    path : '/financial',
    name : 'financial',
    component : financial
  },
  {
    path : '/login',
    name : 'login',
    component : login
  },
  {
    path : '/register',
    name : 'register',
    component : register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
