<template>
    <div class="home">
      <!-- side bar  -->
      <sidebar />
      <!-- header  -->
      <dash_header />
  
      <section id="content">
        <section class="pt-3 pb-3 px-5 ">
                <div>
                    <h6 class="fw-bold blackColor"> {{ $t('dash.fqs') }} </h6>
                    <p class="grayColor"> 
                        {{ $t('dash.fqsDesc') }}
                    </p>
                </div>
        </section>


        <div class="pt-3 pb-3 px-5 ">
            <Accordion :activeIndex="0">
                <AccordionTab class="mb-3" :header="faq.question" v-for="(faq, index) in faqs" :key="index">
                    <p class="m-0">
                      {{ faq.answer }}
                    </p>
                </AccordionTab>
                
            </Accordion>
        </div>



      </section>
    </div>
  </template>
  
  <script>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';


  import sidebar from '@/components/layout/side-bar.vue';
  import dash_header from '@/components/layout/dash-header.vue';

  import axios from 'axios';

  export default {
    name: 'HomeView',
    components: {
      sidebar,
      dash_header,
      Accordion,
      AccordionTab
    },
    data(){
        return{
            faqs : []
        }
    },
    methods:{
        async getFaqs(){
            await axios.get('/fqs')
            .then((res)=>{
                this.faqs = res.data.data ;
            } )
        } 
    },
    mounted(){
      this.getFaqs();
    }
  }
 </script>


<style >
.p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    background: #fff !important;
    border-color: #fff !important;
    color : #000 !important

}
.p-accordion .p-accordion-content {
    border:none !important
}
.p-accordion .p-accordion-header .p-accordion-header-link {
    border: 1px solid #fff !important;
    background: #fff !important;
    color : #000 !important
}
.p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
    margin-left: 0.5rem;
    margin-right: 0;
    left: 9px;
    position: absolute;
    color: #919191;
    font-size: 12px;
    width: 14px;
}
.p-accordion .p-accordion-tab {
    margin-bottom: 16px !important;
}
.p-component p {
  color:#919191 !important;
}
</style>
  