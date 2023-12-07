<template>
    <div class="home">
      <!-- side bar  -->
      <sidebar />
      <!-- header  -->
      <dash_header />
  
      <section id="content">

        <section class="pt-3 pb-3 px-5 ">
                <div>
                    <h6 class="fw-bold blackColor"> {{ $t('dash.terms') }} </h6>
                    <p class="grayColor"> 
                        {{ $t('dash.termsDesc') }}
                    </p>
                </div>
        </section>

        <section class="mx-5 px-3 pt-3 pb-3 main-bg">
            <p v-html="terms" class="fs-14 fw-6"></p>
        </section>


      </section>

      
    </div>
  </template>
  
  <script>
  import sidebar from '@/components/layout/side-bar.vue';
  import dash_header from '@/components/layout/dash-header.vue';
  import axios from 'axios';
  export default {
    name: 'HomeView',
    data(){
        return{
            terms :''
        }
    },
    methods:{
        async getConditions(){
            await axios.get('/terms')
            .then((res)=>{
                this.terms = res.data.message ;
            } )
        } 
    },
    mounted(){
        this.getConditions();
    },
    components: {
      sidebar,
      dash_header,
    }
  }
 </script>
  