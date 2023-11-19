import { createRouter, createWebHistory } from 'vue-router'
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
import consult from '@/views/consultDetails.vue';
import treat from '@/views/treatView.vue';
import priceOffer from '@/views/priceOffer.vue';
import supportManage from '@/views/supportManage.vue';
import wallet from '@/views/walletView.vue';
import contactMessages from '@/views/contactMessages.vue';
import profile from '@/views/profileView.vue';
import changePhone from '@/views/changePhone.vue';
import contact from '@/views/contactUs.vue';
import editDoctor from '@/views/editDoctor.vue';
import addGroup from '@/views/addGroup.vue'
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
  },
  {
    path : '/treat/:id',
    name : 'treat',
    component : treat
  },
  {
    path : '/priceOffer/:id',
    name : 'priceOffer',
    component : priceOffer
  },
  {
    path : '/supportManage/:id',
    name : 'supportManage',
    component : supportManage
  },
  {
    path : '/contactMessages',
    name : 'contactMessages',
    component : contactMessages
  },
  {
    path : '/wallet',
    name : 'wallet',
    component : wallet
  },
  {
    path : '/profile',
    name : 'profile',
    component : profile 
  },
  {
    path : '/changePhone',
    component : changePhone,
    name : 'changePhone'
  },
  {
    path : '/contact',
    name : 'contact',
    component : contact
  },
  {
    path : '/editDoctor/:id',
    name : 'editDoctor',
    component : editDoctor
  },
  {
    path : '/addGroup',
    name : 'addGroup',
    component :addGroup 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
