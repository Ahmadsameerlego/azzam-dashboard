<template>
  <section id="sidebar">
    <!-- logo  -->
    <section class="logo">
        <img :src="require('@/assets/imgs/logo.png')" alt="logo">
        <button class="btn close_nav" @click="closeSide">
          <i class="fas fa-x"></i>
        </button>
    </section>

    <!-- navigation  -->
    <nav class="sidebar_nav mt-4">
      <ul class="list">

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/center/home" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-desktop"></i>
              </span>

              <span class="nav_name mx-2 nav_name">
                {{  $t('nav.main') }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/center/specialistsManage" class="flex_between" :class="{'router-link-active':$route.fullPath.includes('addSpecialist')||$route.fullPath.includes('editDoctor')}">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-users"></i>
              </span>

              <span class="mx-2 nav_name">
                {{  $t('nav.spec')  }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/center/directConsultaions" class="flex_between" :class="{'router-link-active' : $route.fullPath.includes('consult')}">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-wifi"></i>
              </span>

              <span class="nav_name mx-2 nav_name">
                {{ $t('nav.direct')  }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/center/treatManage" class="flex_between" :class="{'router-link-active': $route.fullPath.includes('treat') ||$route.fullPath.includes('priceOffer')||$route.fullPath.includes('addSession')||$route.fullPath.includes('editPriceOffer') }">  
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-desktop"></i>
              </span>

              <span class="mx-2 nav_name">
                {{  $t('nav.treat')  }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/center/support" class="flex_between" :class="{'router-link-active': $route.fullPath.includes('addGroup')||$route.fullPath.includes('supportManage')}">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-users"></i>
              </span>

              <span class="mx-2 nav_name">
                {{  $t('nav.support')  }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/center/financial" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-coins"></i>
              </span>

              <span class="mx-2 nav_name">
                {{  $t('nav.earn')  }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>


        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/center/contactMessages" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-regular fa-comments"></i>
              </span>

              <span class="mx-2 nav_name">
                {{  $t('nav.messages')  }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/center/wallet" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-wallet"></i>
              </span>

              <span class="mx-2 nav_name">
                {{  $t('nav.wallet')  }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/center/profile" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-regular fa-user"></i>
              </span>

              <span class="mx-2 nav_name">
                {{  $t('nav.profile')  }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <router-link to="/center/contact" class="flex_between">
            <div class="d-flex align-items-center">
              <span class="icon">
                <i class="fa-solid fa-phone-volume"></i>
              </span>

              <span class="mx-2 nav_name">
                {{  $t('nav.contact')  }}
              </span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </router-link>

        </li>

        <!-- single nav item  -->
        <li class="nav_item">
          <button @click="signOut" class="btn flex_between px-0 pt-0 pb-0" :disabled="disabled" style="color: inherit !important;">
            <div class="d-flex align-items-center">
              <span class="icon logout">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </span>

              <span class="mx-2 nav_name">
                {{  $t('nav.logout')  }}
              </span>
            </div>

            <div class="spinner-border" role="status" v-if="disabled">
                <span class="visually-hidden">Loading...</span>
            </div>

            <span class="left">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
          </button>

        </li>
        
      </ul>
    </nav>
  </section>
  <Toast />
</template>

<script>
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
  data(){
    return{
      disabled : false
    }
  },
  components:{
    Toast
  },
  methods:{
    closeSide(){
      document.querySelector('#sidebar').classList.remove('active');
      // document.querySelector('#header').classList.remove('active');
      // document.querySelector('#content').classList.remove('active');
    },
    async signOut(){
      const fd = new FormData;
      this.disabled = true ;
      fd.append('deviceId', localStorage.getItem('device_id'));
      const token = localStorage.getItem('token');
      const headers = {
          Authorization: `Bearer ${token}`,
      };

      await axios.post('/sign-out-center', fd , {headers})
      .then( (res)=>{
        if( res.data.key === 'success' ){
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
          setTimeout(() => {
            this.$router.push('/center/login')
          }, 1000);
          this.disabled = false ;
        }else{
          this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
          this.disabled = false ;
        }
      } )
      .catch( (err)=>{
          this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
          this.disabled = false ;
      } )
    }
  }
}
</script>

<style  scoped>
  .close_nav{
    display: none;
    
  }
  .spinner-border{
    position: absolute;
    top: 19%;
    left: 49%;
    width: 25px;
    height: 25px;
  }
</style>

