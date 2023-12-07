<template>
    <section class="pt-3 pb-3 px-5 ">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('not.title') }} </h6>
        </div>
    </section>

    <!-- notification items  -->
    <section id="notifications" class="pt-3 pb-3 px-5 mx-5" v-if="isShown">
        <!-- single notification  -->
        <div class="single_not mb-3 px-4 pt-3 pb-3 main-bg d-flex align-items-center" v-for="( not , index) in notifications" :key="index">
            <!-- icon  -->
            <div class="icon flex_center">
                <i class="fa-solid fa-bell whiteColor"></i>
            </div>
            <!-- content  -->
            <div class="content mx-4 ">
                <div class="mb-2">
                    <span class="fw-6 fs-16 blackColor"> {{  not. message}} </span>
                </div>
                <div class="time fs-13 d-flex align-items-center">
                    <span class="time_icon">
                        <i class="fa-regular fa-clock"></i>
                    </span>
                    <span class="mx-2">
                        {{ not.timeAdd }}
                    </span>
                </div>
            </div>

            <!-- router links  -->

            <!-- admin  -->
            <router-link class="router_link" to="/" v-if="!not.key=='admin'"></router-link>
            <!-- consultations  -->
            <router-link class="router_link" :to="'/consult/'+not.sessionId" v-if="not.key=='urgentConsultation'"></router-link>
            <!-- treatments  -->
            <router-link class="router_link" :to="'/treat/'+not.sessionId" v-if="not.key=='treatmentPlan'"></router-link>
            <!-- support group  -->
            <router-link class="router_link" :to="'/supportManage/'+not.sessionId" v-if="not.key=='supportGroup'"></router-link>
            <!-- messages  -->
            <router-link class="router_link" to="'contactMessages" v-if="not.key=='contact'"></router-link>
        </div>
    </section>
    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="10rem"></Skeleton>


</template>

<script>
import axios from 'axios';
import Skeleton from 'primevue/skeleton';

import { ref , onMounted} from 'vue';
export default {
    setup(){
        const notifications = ref([])
        const isShown = ref(false)

        // methods 
        const getMessages = async ()=>{
            await axios.get('/notifications-center', {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    notifications.value = res.data.data ;
                    isShown.value = true ;
                }
            } )
        }

        // mounted
        onMounted( ()=>{
            getMessages() ;
        } )

        return{
            notifications,
            getMessages,
            isShown
        }
    },
    components:{
        Skeleton
    }
}
</script>

<style lang="scss">
    .single_not{
        position: relative;
        .icon{
            background-color: #3290d8;
            width:55px;
            height:55px;
            border-radius: 50%;
            svg{
                font-size: 30px;
            }
        }
    }
    .router_link{
        position: absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
    }
</style>