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
            <router-link class="router_link" to="/center/home" v-if="!not.key=='admin'"></router-link>
            <!-- consultations  -->
            <router-link class="router_link" :to="'/center/consult/'+not.sessionId" v-if="not.key=='urgentConsultation'"></router-link>
            <!-- treatments  -->
            <router-link class="router_link" :to="'/center/treat/'+not.sessionId" v-if="not.key=='treatmentPlan'"></router-link>
            <!-- support group  -->
            <router-link class="router_link" :to="'/center/supportManage/'+not.sessionId" v-if="not.key=='supportGroup'"></router-link>
            <!-- messages  -->
            <router-link class="router_link" to="'/center/contactMessages" v-if="not.key=='contact'"></router-link>
        </div>
    </section>
    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="10rem"></Skeleton>

    
    <!-- pagination  -->
    <paginate
        v-model="currentPageP"
        :page-count="totalPagesP"
        :click-handler="page => pageClickHandler(page)"
        :prev-text="$t('common.prev')"
        :next-text="$t('common.next')"
        :container-class="'pagination'"
        :page-class="'page-item'"    
        :no-li-surround="true"   
        v-if="notifications.length>0"        
    >
    </paginate>


</template>

<script>
import axios from 'axios';
import Skeleton from 'primevue/skeleton';
import Paginate from 'vuejs-paginate-next';

import { ref , onMounted} from 'vue';
export default {
    setup(){
        const notifications = ref([])
        const currentPageP = ref(1)
        const perPageP = ref(10)
        const totalPagesP = ref(1)
        const totalItems = ref(1)
        const isShown = ref(false)

        // methods 
        const getMessages = async ()=>{
            await axios.get(`/notifications-center?page=${currentPageP.value}`, {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    notifications.value = res.data.data ;

                    totalItems.value = res.data.paginate.total ;
                    
                    perPageP.value = res.data.paginate.perPage ;
                    currentPageP.value = res.data.paginate.currentPage ;

                    totalPagesP.value = Math.ceil(totalItems.value / perPageP.value) ;

                    isShown.value = true ;

                    window.scrollTo({
                        top : 0 ,
                        behavior : 'smooth'
                    })
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
            isShown,
            currentPageP,
            perPageP,
            totalPagesP,
            totalItems
        }
    },
    data(){
        return{
            
            
        }
    },
    components:{
        Skeleton,
        Paginate
    },
    created() {
        // this.totalPagesP = Math.ceil(this.notifications.length / this.perPageP)
    },
    methods:{
        pageClickHandler(page) {
            this.currentPageP = page
            this.getMessages();

        },
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
    .pagination{
        display: flex;
        justify-content: center;
        margin:auto;
        margin-bottom: 35px;
    }
    .active>.page-link, .page-link.active {
        background-color: #3290d8 !important;
        border-color: #3290d8 !important;
        color: #fff !important;
    }
    .page-link{
        cursor: pointer;
    }
</style>