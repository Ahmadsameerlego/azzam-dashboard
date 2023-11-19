<template>
    <section class="pt-3 pb-3 px-5 ">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('dash.direct') }} </h6>
            <p class="grayColor"> 
                {{ $t('dash.directPlc') }}
            </p>
        </div>
    </section>

    <!-- steps  -->
    <section class="main-bg steps flex_between pt-3 pb-3 px-5 mx-5 mb-3" v-if="isShown">

        <!-- single step  -->
        <div class="step d-flex align-items-center">
            <span class="step_number" :class="{active : consult.status == 'new' || consult.status == 'current' || consult.status == 'finish'||consult.status == 'cancelled'}"> 1 </span>
            <span class="step-text grayColor mx-2 " :class="{active : consult.status == 'new' || consult.status == 'current' || consult.status == 'finish'||consult.status == 'cancelled' }"> {{ $t('dash.confirm') }} </span>
        </div>
        <span class="line" :class="{active : consult.status == 'current' || consult.status == 'finish'||consult.status == 'cancelled'}"></span>
         <!-- single step  -->
         <div class="step d-flex align-items-center">
            <span class="step_number" :class="{active : consult.status == 'current' || consult.status == 'finish'||consult.status == 'cancelled'}"> 2 </span>
            <span class="step-text grayColor mx-2" :class="{active : consult.status == 'current' || consult.status == 'finish'||consult.status == 'cancelled'}"> {{ $t('dash.current') }} </span>
        </div>
        <span class="line" :class="{active : consult.status == 'finish'||consult.status == 'cancelled'}"></span>
         <!-- single step  -->
         <div class="step d-flex align-items-center">
            <span class="step_number" :class="{active : consult.status == 'finish'||consult.status == 'cancelled'}"> 3 </span>
            <span class="step-text grayColor mx-2" :class="{active : consult.status == 'finish'||consult.status == 'cancelled'}"> {{ $t('dash.finish') }} </span>
        </div>
        <span class="line" :class="{active : consult.status == 'cancelled'}"></span>
         <!-- single step  -->
         <div class="step d-flex align-items-center">
            <span class="step_number" :class="{active : consult.status == 'cancelled'}"> 4 </span>
            <span class="step-text grayColor mx-2" :class="{active : consult.status == 'cancelled'}"> {{ $t('dash.canceled') }} </span>
        </div>
    </section>

    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="4rem"></Skeleton>
    
    <!-- order details  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ $t('dash.orderInfo') }} </h6>
        <!-- all infos  -->
        <section class="infos">
            <!-- single info -->
            <div class="white_bg pt-2 pb-2 px-5">
                <div class="single_info flex_between">
                    <span class="info_key"> {{ $t('dash.orderNum') }} </span>
                    <span class="info_value"> {{ consult.orderNumber }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="gray-bg pt-2 pb-2 px-5">
                <div class="single_info gray-bg flex_between">
                    <span class="info_key"> {{ $t('dash.orderDate') }} </span>
                    <span class="info_value"> {{ consult.date }}</span>
                </div>
            </div>
            <!-- single info -->
            <div class="white_bg pt-2 pb-2 px-5">
                <div class="single_info flex_between">
                    <span class="info_key"> {{ $t('dash.type') }} </span>
                    <span class="info_value"> {{ consult.typeText }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="gray-bg pt-2 pb-2 px-5">
                <div class="single_info gray-bg flex_between">
                    <span class="info_key"> {{ $t('dash.gender') }} </span>
                    <span class="info_value"> {{ consult.gender }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="white_bg pt-2 pb-2 px-5">
                <div class="single_info flex_between">
                    <span class="info_key"> {{ $t('dash.age') }} </span>
                    <span class="info_value"> {{ consult.age }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="gray-bg pt-2 pb-2 px-5">
                <div class="single_info gray-bg flex_between">
                    <span class="info_key"> {{ $t('dash.asked') }} </span>
                    <span class="info_value"> {{ consult.specialization }}</span>
                </div>
            </div>
            <!-- single info -->
            <div class="white_bg pt-2 pb-2 px-5">
                <div class="single_info flex_between">
                    <span class="info_key"> {{ $t('dash.way') }} </span>
                    <span class="info_value"> {{ consult.paymentMethod }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="gray-bg pt-2 pb-2 px-5">
                <div class="single_info gray-bg flex_between">
                    <span class="info_key"> {{ $t('dash.date') }} </span>
                    <span class="info_value"> {{ consult.consultationDate }}</span>
                </div>
            </div>
            <!-- single info -->
            <div class="white_bg pt-2 pb-2 px-5">
                <div class="single_info flex_between">
                    <span class="info_key"> {{ $t('dash.appoint') }} </span>
                    <span class="info_value"> {{ consult.consultationAppointment }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="gray-bg pt-2 pb-2 px-5">
                <div class="single_info gray-bg flex_between">
                    <span class="info_key"> {{ $t('dash.duration') }} </span>
                    <span class="info_value"> {{ consult.duration }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="white_bg pt-2 pb-2 px-5">
                <div class="single_info flex_between">
                    <span class="info_key"> {{ $t('dash.value') }} </span>
                    <span class="info_value"> {{ consult.priceText }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="gray-bg pt-2 pb-2 px-5">
                <div class="single_info gray-bg flex_between">
                    <span class="info_key"> {{ $t('dash.tax') }} </span>
                    <span class="info_value"> {{ consult.vatPriceText }}</span>
                </div>
            </div>
            <!-- total info -->
            <div class="white_bg pt-2 pb-2 px-5">
                <div class="single_info flex_between">
                    <span class="main-color"> {{ $t('dash.total') }} </span>
                    <span class="main-color fw-6"> {{ consult.totalText }}</span>
                </div>
            </div>
        </section>

    </section>

    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="15rem"></Skeleton>

    <!-- status  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
        <h6 class="main-color fs-17 fw-6 px-5 mb-3"> {{ $t('dash.desc') }} </h6>

        <p class="grayColor mx-5 fs-14">
            {{ consult.caseDescription }}
        </p>
    </section>

    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="10rem"></Skeleton>


    <!-- client info  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> بيانات العميل </h6>
        <!-- main info  -->
        <section class="client_info mx-5 d-flex align-items-center">
            <!-- client image  -->
            <div class="client_image">
                <img :src="patient.avatar" alt="client image">
            </div>
            <!-- client info  -->
            <div class="client_details mx-3">

                <div class="d-flex mb-2">
                    <span class="fw-6 fs-14 blackColor"> {{ patient.name }}  </span>
                    <!-- rate  -->
                    <div class="rate d-flex mx-4 align-items-center">
                        <i class="fa-solid fa-star"></i>
                        <span class="mx-1"> {{ patient.rate }} </span>
                    </div>
                </div>

                <!-- phone  -->
                <div class="phone d-flex ">
                    <span class="phone_icon flex_center">
                        <i class="fa-solid fa-phone-flip sec-color fs-10"></i>
                    </span>
                    <span class="phone_num fs-13 mx-3"> {{ patient.phone }} </span>
                </div>
            </div>
        </section>
    </section>

    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="6rem"></Skeleton>

    <!-- spcialist info  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> بيانات الاخصائي </h6>
        <!-- main info  -->
        <section class="client_info mx-5 d-flex mt-3">
            <!-- client image  -->
            <div class="client_image">
                <img :src="doctor.avatar" alt="client image">
            </div>
            <!-- client info  -->
            <div class="client_details mx-3">

                <div class="d-flex mb-2">
                    <span class="fw-6 fs-14 blackColor"> {{ doctor.name }} </span>
                    <!-- rate  -->
                    <div class="rate d-flex mx-4 align-items-center">
                        <i class="fa-solid fa-star"></i>
                        <span class="mx-1"> {{ doctor.rate }} </span>
                    </div>
                </div>

                <!-- title  -->
                <div class="title whiteColor">
                    {{ doctor.specialization }}
                </div>

                <!-- desc  -->
                <p class="grayColor fs-14 mt-2">
                    {{ doctor.description }}
                </p>
            </div>
        </section>
    </section>

    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="6rem"></Skeleton>


    <!-- report  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isReported==true">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-3"> تقرير الاستشارة </h6>

        <p class="grayColor mx-5 fs-14">
            {{ report.note }}
        </p>

        <div class="pdf_link mx-5">
            <a :href="report.file" target="_blank">
                <img :src="require('@/assets/imgs/pdf.png')" alt="">
            </a>
        </div>
    </section>
    <!-- v-if="consult.isReported === true" -->
    <!-- <Skeleton v-else-if="" class="px-5 mb-3 mx-auto" style="width:90%" height="6rem"></Skeleton> -->

    <Toast />

</template>

<script>
import axios from 'axios';
import Toast from 'primevue/toast';
import Skeleton from 'primevue/skeleton';

export default {
    data(){
        return{
            consult : null ,
            isShown : false,
            patient : null,
            doctor : null,
            report : null,
            isReported : null
        }
    },
    components:{
        Toast,
        Skeleton
    },
    methods:{
        // get consultaion details 
        async getConsultaion(){
            await axios.get(`/urgentConsultations-details?id=${this.$route.params.id}` , {
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.consult = res.data.data ;
                    this.patient = res.data.data.patient ;
                    this.isReported = res.data.data.isReported ;
                    this.doctor = res.data.data.doctor ;
                    this.report = res.data.data.report ;
                    this.isShown = true ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
            } )
        }
    },
    mounted(){
        
        this.getConsultaion();
    }
}
</script>

<style lang="scss">
    .pdf_link{
        width: 60px;
        height: 60px;
        background-color:#f5f5f5;
        border-radius:9px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 35px;
            height:35px;
        }
    }
    .client_info{
        .client_image{
            width:70px;
            height:70px;
            border-radius: 50%;
            img{
                width:100%;
                height:100%;
                object-fit: contain;
                border-radius: 50%;
            }
        }
        .rate{
            background-color: #fafafa;
            border-radius: 4px;
            font-size: 12px;
            padding: 4px 10px;
            svg{
                color:#f6b343;
            }
        }
        .phone_icon{
            width:22px;
            height: 22px;
            border-radius: 50%;
            background-color: #4aa23632;
        }
        .title{
            background-color: #3290d8;
            border-radius: 15px;
            padding: 3px 10px;
            font-size: 11px;
            min-width: 120px;
            max-width: fit-content;
            text-align: center;
        }
    }
    .main-bg{
        background-color: #fff;
        border-radius: 4px;
        transition: .3s all;
        &:hover{
            box-shadow: 0px 0px 10px #0c0c0c16;
        }
    }
    .steps{
        
        .step{
            position: relative;
            .step_number{
                width:20px;
                height: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                border: 1px solid #bbbbbb;
                color: #bbbbbb ;
                font-size: 12px;
                &.active{
                    color: #3290d8;
                    border: 1px solid #3290d8;
                    background-color: #3290d830;
                }
            }
            .step-text{
                &.active{
                    color: #333 !important;
                }
            }
        }
        .line{
            width:210px;
            height: 2px;
            background-color:#bbbbbb ;
            &.active{
                background-color: #3290d8;
            }
        }
    }
    .gray-bg{
        background-color: #fafafa;
    }
    .single_info{
        width:50%;
        .info_key{
            color:#a6a6a6 ;
            font-size: 13px;
        }
        .info_value{
            color:#3c3b3c ;
            font-weight: 600;
            font-size: 14px;
        }
    }
</style>