import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import specialistsManage from '@/views/specificationsManage.vue';
import addSpecialist from '@/views/addSpecialist.vue';
import directConsultaions from '@/views/directConsultaions.vue';
import treatManage from '@/views/treatManage.vue';
import support from '@/views/supportGroup.vue';
import financial from '@/views/financialAccount.vue';
import login from '@/views/loginView.vue';
import register from '@/views/registerView.vue';
import rates from '@/views/specialistRates.vue';
import activeCode from '@/views/otpView.vue';
import consult from '@/views/consultDetails.vue'
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
  },
  {
    path : '/rates/:id',
    name : 'rate',
    component : rates
  },
  {
    path : '/consult/:id',
    name : 'consult',
    component : consult
  },
  {
    path : '/activeCode',
    name : 'activeCode',
    component : activeCode
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
