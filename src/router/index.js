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
import terms from '@/views/conditionsView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/specialistsManage',
    name :'specialistsManage',
    component : specialistsManage,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/addSpecialist',
    name : 'addSpecialist',
    component : addSpecialist,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/directConsultaions',
    name : 'directConsultaions',
    component : directConsultaions,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/treatManage',
    name : 'treatManage',
    component : treatManage,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/support',
    name : 'support',
    component : support,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/financial',
    name : 'financial',
    component : financial,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
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
    component : rates,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/consult/:id',
    name : 'consult',
    component : consult,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/activeCode',
    name : 'activeCode',
    component : activeCode
  },
  {
    path : '/treat/:id',
    name : 'treat',
    component : treat,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/priceOffer/:id',
    name : 'priceOffer',
    component : priceOffer,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/editPriceOffer/:id',
    name : 'editPriceOffer',
    component : editPriceOffer,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/supportManage/:id',
    name : 'supportManage',
    component : supportManage,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/contactMessages',
    name : 'contactMessages',
    component : contactMessages,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/wallet',
    name : 'wallet',
    component : wallet,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/profile',
    name : 'profile',
    component : profile ,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/changePhone',
    component : changePhone,
    name : 'changePhone',
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/contact',
    name : 'contact',
    component : contact,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/editDoctor/:id',
    name : 'editDoctor',
    component : editDoctor,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/addGroup',
    name : 'addGroup',
    component :addGroup ,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/addSession/:id',
    name : 'addSession',
    component :addSession ,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/notification',
    name : 'notification',
    component : notification,
    meta : {
      title : 'الرئيسية',
      requiresAuth : true
    }
  },
  {
    path : '/about',
    name : 'about',
    component : about
  },
  {
    path : '/faqs',
    name : 'faqs',
    component : faqs
  },
  {
    path : '/terms',
    name : 'terms',
    component :terms
  }
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
