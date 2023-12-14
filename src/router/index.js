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
import addSession from '@/views/addSession.vue';
import addGroup from '@/views/addGroup.vue'
import editPriceOffer from '@/views/editPriceOffer.vue';

import notification from '@/views/notificationView.vue';
import about from '@/views/aboutView.vue';
import faqs from '@/views/faqsView.vue';
import terms from '@/views/conditionsView.vue';

import notFound from '@/views/notFound.vue'
const routes = [
  {
    path: '/center/home',
    name: 'home',
    component: HomeView,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/specialistsManage',
    name :'specialistsManage',
    component : specialistsManage,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/addSpecialist',
    name : 'addSpecialist',
    component : addSpecialist,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/directConsultaions',
    name : 'directConsultaions',
    component : directConsultaions,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/treatManage',
    name : 'treatManage',
    component : treatManage,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/support',
    name : 'support',
    component : support,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/financial',
    name : 'financial',
    component : financial,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/login',
    name : 'login',
    component : login
  },
  {
    path : '/center/register',
    name : 'register',
    component : register
  },
  {
    path : '/center/rates/:id',
    name : 'rate',
    component : rates,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/consult/:id',
    name : 'consult',
    component : consult,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/activeCode',
    name : 'activeCode',
    component : activeCode
  },
  {
    path : '/center/treat/:id',
    name : 'treat',
    component : treat,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/priceOffer/:id',
    name : 'priceOffer',
    component : priceOffer,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/editPriceOffer/:id',
    name : 'editPriceOffer',
    component : editPriceOffer,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/supportManage/:id',
    name : 'supportManage',
    component : supportManage,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/contactMessages',
    name : 'contactMessages',
    component : contactMessages,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/wallet',
    name : 'wallet',
    component : wallet,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/profile',
    name : 'profile',
    component : profile ,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/changePhone',
    component : changePhone,
    name : 'changePhone',
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/contact',
    name : 'contact',
    component : contact,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/editDoctor/:id',
    name : 'editDoctor',
    component : editDoctor,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/addGroup',
    name : 'addGroup',
    component :addGroup ,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/addSession/:id',
    name : 'addSession',
    component :addSession ,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/notification',
    name : 'notification',
    component : notification,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/center/about',
    name : 'about',
    component : about
  },
  {
    path : '/center/faqs',
    name : 'faqs',
    component : faqs
  },
  {
    path : '/center/terms',
    name : 'terms',
    component :terms
  },
  {
    path: '/:catchAll(.*)*',
    name: "notFound",
    component: notFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if ( !localStorage.getItem('token')  ) {
      next({ name: 'login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }

})

export default router