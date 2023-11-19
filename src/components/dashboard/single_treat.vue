<template>
    <section class="pt-3 pb-3 px-5 ">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('treat.title') }} </h6>
            <p class="grayColor"> 
                {{ $t('treat.keep') }}
            </p>
        </div>
    </section>

    <!-- steps  -->
    <section class="main-bg steps flex_between pt-3 pb-3 px-5 mx-5 mb-3" v-if="isShown">
        
        <!-- single step  -->
        <div class="step d-flex align-items-center">
            <span class="step_number" :class="{active : treat.status == 'new' || treat.status == 'current' || treat.status == 'finish'||treat.status == 'cancelled'}"> 1 </span>
            <span class="step-text grayColor mx-2 " :class="{active : treat.status == 'new' || treat.status == 'current' || treat.status == 'finish' ||treat.status == 'cancelled'}"> {{ $t('common.new') }} </span>
        </div>
        <span class="line" :class="{active : treat.status == 'current' || treat.status == 'finish'||treat.status == 'cancelled'}"></span>
         <!-- single step  -->
         <div class="step d-flex align-items-center">
            <span class="step_number" :class="{active : treat.status == 'current' || treat.status == 'finish'||treat.status == 'cancelled'}"> 2 </span>
            <span class="step-text grayColor mx-2" :class="{active : treat.status == 'current' || treat.status == 'finish'||treat.status == 'cancelled'}"> {{ $t('dash.current') }} </span>
        </div>
        <span class="line" :class="{active : treat.status == 'finish'||treat.status == 'cancelled'}"></span>
         <!-- single step  -->
         <div class="step d-flex align-items-center">
            <span class="step_number" :class="{active : treat.status == 'finish'||treat.status == 'cancelled'}"> 3 </span>
            <span class="step-text grayColor mx-2" :class="{active : treat.status == 'finish'||treat.status == 'cancelled'}"> {{ $t('dash.finish') }} </span>
        </div>
        <span class="line" :class="{active : treat.status == 'cancelled'}"></span>
         <!-- single step  -->
         <div class="step d-flex align-items-center">
            <span class="step_number" :class="{active : treat.status == 'cancelled'}"> 3 </span>
            <span class="step-text grayColor mx-2" :class="{active : treat.status == 'cancelled'}"> {{ $t('dash.canceled') }} </span>
        </div>
        

    </section>
    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="4rem"></Skeleton>

    <!-- cancelled  -->
    <section class="cancelled" v-if="treat.status == 'cancelled'">
        <div class="cancel_head mt-3 mb-3">  
            {{ treat.reasonText }}
        </div>

        <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-3 text-danger"> {{ $t('treat.cancelReason') }} </h6>

        <p class="grayColor mx-5 fs-14">
            {{ treat.reason }}
        </p>
    </section>


    </section>

    <!-- order details  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ $t('treat.orderDetail') }} </h6>
        <!-- all infos  -->
        <section class="infos">
            <!-- single info -->
            <div class="white_bg pt-2 pb-2 px-5">
                <div class="single_info flex_between">
                    <span class="info_key"> {{ $t('treat.num') }} </span>
                    <span class="info_value"> {{ treat.orderNumber }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="gray-bg pt-2 pb-2 px-5">
                <div class="single_info gray-bg flex_between">
                    <span class="info_key"> {{ $t('treat.date') }} </span>
                    <span class="info_value">  {{ treat.dateOfOrder }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="white_bg pt-2 pb-2 px-5">
                <div class="single_info flex_between">
                    <span class="info_key"> {{ $t('treat.type') }} </span>
                    <span class="info_value"> {{ treat.typeOfOrder }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="gray-bg pt-2 pb-2 px-5">
                <div class="single_info gray-bg flex_between">
                    <span class="info_key"> {{ $t('treat.gender') }} </span>
                    <span class="info_value"> {{ treat.gender }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="white_bg pt-2 pb-2 px-5">
                <div class="single_info flex_between">
                    <span class="info_key"> {{ $t('treat.age') }} </span>
                    <span class="info_value"> {{ treat.age }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="gray-bg pt-2 pb-2 px-5">
                <div class="single_info gray-bg flex_between">
                    <span class="info_key"> {{ $t('treat.name') }} </span>
                    <span class="info_value"> {{ treat.name }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="white_bg pt-2 pb-2 px-5">
                <div class="single_info flex_between">
                    <span class="info_key"> {{ $t('common.addType') }} </span>
                    <span class="info_value"> {{ treat.typeOfAddiction }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="gray-bg pt-2 pb-2 px-5">
                <div class="single_info gray-bg flex_between">
                    <span class="info_key"> {{ $t('treat.social') }} </span>
                    <span class="info_value">  {{ treat.socialSituation }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="white_bg pt-2 pb-2 px-5">
                <div class="single_info flex_between">
                    <span class="info_key"> {{ $t('treat.job') }} </span>
                    <span class="info_value"> {{ treat.job }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="gray-bg pt-2 pb-2 px-5">
                <div class="single_info gray-bg flex_between">
                    <span class="info_key"> {{ $t('treat.jobType') }} </span>
                    <span class="info_value">  {{treat.typeOfJob}} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="white_bg pt-2 pb-2 px-5">
                <div class="single_info flex_between">
                    <span class="info_key">  {{ $t('treat.symp') }} ؟ </span>
                    <span class="info_value"> {{ treat.isSymptoms }} </span>
                </div>
            </div>
            <!-- single info -->
            <div class="gray-bg pt-2 pb-2 px-5">
                <div class="single_info gray-bg flex_between">
                    <span class="info_key"> {{ $t('treat.mental') }} ؟ </span>
                    <span class="info_value"> {{ treat.mentallyIll }} </span>
                </div>
            </div>
            
        </section>

    </section>

    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="15rem"></Skeleton>


    <!-- status  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-3"> {{ $t('treat.desc') }} </h6>

        <p class="grayColor mx-5 fs-14">
            {{ treat.caseDescription }}
        </p>
    </section>
    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="10rem"></Skeleton>

    <!-- status  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-3"> {{ $t('treat.freeTime') }} </h6>

        <p class="grayColor mx-5 fs-14">
            {{ treat.freeTime }}
        </p>
    </section>
    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="10rem"></Skeleton>



    <!-- status  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-3"> {{ $t('treat.timeSessions') }} </h6>

        <p class="grayColor mx-5 fs-14">
            {{ treat.timeSessions }}
        </p>
    </section>
    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="10rem"></Skeleton>


    <!-- status  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-3"> {{ $t('treat.diseases') }} </h6>

        <p class="grayColor mx-5 fs-14">
            {{ treat.diseases }}
        </p>
    </section>
    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="10rem"></Skeleton>


    <!-- client info  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ $t('treat.clientInfo') }} </h6>
        <!-- main info  -->
        <section class="client_info mx-5 d-flex align-items-center">
            <!-- client image  -->
            <div class="client_image">
                <img :src="patient.avatar" alt="client image">
            </div>
            <!-- client info  -->
            <div class="client_details mx-3">

                <div class="d-flex mb-2">
                    <span class="fw-6 fs-14 blackColor"> {{ patient.name }} </span>
                    
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

    <!-- instructions -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown&&treat.instructions">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-3">  {{ $t('treat.insts') }} </h6>

        <p class="grayColor mx-5 fs-14">
            {{ treat.instructions }}
        </p>
    </section>

    <!-- medicines  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown&&treat.medicine.length>0">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-3">  {{ $t('treat.medicines') }} </h6>

        
        <div class="row mx-5 ">
            <!-- single medicine  -->
            <div class="col-md-4 mb-3" v-for="med in treat.medicine" :key="med.id">
                <div class="single_med d-flex align-items-center justify-content-start">
                    <!-- medicine image  -->
                    <div class="medicine_img">
                        <img :src="med.image" alt="medicine image">
                    </div>
                    <!-- medicine name  -->
                    <span class="mx-3 text-black">
                        {{ med.name }}
                    </span>
                </div>
            </div>
        </div>
    </section>

    <!-- sessions  -->
    <section class="sessions pt-3 pb-3 mx-5 mb-3" v-if="isShown">
        <h4 class="text-black fw-bold fs-19"> {{ $t('treat.plan') }} </h4>
        <!-- single session  -->
        <section class="main-bg pt-3 pb-3  mb-3" v-for="session in treat.sessions" :key="session.id">
            <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ session.sessionNumber }} </h6>
            <!-- all infos  -->
            <section class="infos">
                <!-- single info -->
                <div class="white_bg pt-2 pb-2 px-5">
                    <div class="single_info flex_between">
                        <span class="info_key"> {{ $t('treat.sessionType') }} </span>
                        <span class="info_value"> {{ session.typeText }} </span>
                    </div>
                </div>
                <!-- single info -->
                <div class="gray-bg pt-2 pb-2 px-5">
                    <div class="single_info gray-bg flex_between">
                        <span class="info_key"> {{ $t('treat.sessinName') }} </span>
                        <span class="info_value">  {{ session.name }} </span>
                    </div>
                </div>
                <!-- single info -->
                <div class="white_bg pt-2 pb-2 px-5">
                    <div class="single_info flex_between">
                        <span class="info_key"> {{ $t('treat.spec') }}  </span>
                        <span class="info_value"> {{ session.specialization }} </span>
                    </div>
                </div>
                <!-- single info -->
                <div class="gray-bg pt-2 pb-2 px-5">
                    <div class="single_info gray-bg flex_between">
                        <span class="info_key"> {{ $t('treat.duration') }} </span>
                        <span class="info_value"> {{ session.duration }} </span>
                    </div>
                </div>
                 <!-- single info -->
                 <div class="gray-bg pt-2 pb-2 px-5">
                    <div class="single_info gray-bg flex_between">
                        <span class="info_key"> {{ $t('treat.appoint') }} </span>
                        <span class="info_value"> {{ session.date }} </span>
                    </div>
                </div>
                <!-- single info -->
                <div class="white_bg pt-2 pb-2 px-5">
                    <div class="single_info flex_between">
                        <span class="info_key"> {{ $t('treat.sessionInst') }} </span>
                        <span class="info_value"> {{ session.instructions }} </span>
                    </div>
                </div>
                
                
                
            </section>

            <!-- give the session  -->
            <!-- show onlu when the status is current  -->
            <div v-if="treat.status == 'current'">
                <button class="btn send_offer mx-5 mb-4 pt-2 pb-2 mt-3">
                    {{ $t('treat.addDoc') }}
                </button>
            </div>
        </section>


    </section>




    <!-- send offer  -->
    <div class="send_offer mx-5 mb-4" v-if="treat.status == 'new'">
        <router-link :to="'/priceOffer/'+treat.id">
            {{ $t('treat.sendOffer') }}
        </router-link>
    </div>
    <!-- edit offer  -->
    <div class="send_offer mx-5 mb-4" v-if="treat.status == 'cancelled'">
        <router-link to="/priceOffer">
            {{ $t('treat.editOffer') }}
        </router-link>
    </div>
    

</template>

<script>
import axios from 'axios' ;
import Skeleton from 'primevue/skeleton';

export default {
    data(){
        return{
            treat : {},
            patient : {},
            isShown : false
        }
    },
    components:{
        Skeleton
    },
    methods:{
        // get treatment 
        async getTreatment(){
            await axios.get(`/treatmentPlans-details?id=${this.$route.params.id}`, {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.treat = res.data.data ;
                    this.patient = res.data.data.patient ;
                    this.isShown = true ;
                }
            } )
            .catch( (err)=>{
                console.log(err)
            } )
        }
    },
    mounted(){
        this.getTreatment();
    }
}
</script>

<style lang="scss">
    .single_med{
        padding: 15px 9px;
        box-shadow: 0px 0px 10px #33333342;
        border-radius: 4px;
        .medicine_img{
            width: 75px;
            height: 75px;
            border-radius: 8px;
            img{
                width:100%;
                height: 100%;
                border-radius: 8px;
            }
        }
    }
    .cancel_head{
        background-color: #df342f;
        color:#fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top:15px ;
        padding-bottom:15px ;
        width: 92%;
        margin: auto;
        border-radius: 4px;
    }
    .send_offer{
        background-color: #3290d8 !important;
        border-radius: 20px !important;
        text-align: center !important;
        padding: 10px 7px !important;
        color:#fff !important;
        width: 250px;

    }
</style>