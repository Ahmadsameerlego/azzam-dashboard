<template>
    <!-- filter  -->
    <section class="table_filter mt-5" style="width:90%;margin-right:auto;margin-left:auto;margin-top: 125px !important;">
        <button class="filter_item" :class="{'active' : activeFilter === 0 }" @click="setActiveFilter(0, 'doctor', $t('message.specMessage'))">
            {{ $t('message.specMessage') }}
        </button>
        <button class="filter_item" :class="{'active' : activeFilter === 1 }" @click="setActiveFilter(1, 'patient', $t('message.clientMessage'))">
            {{ $t('message.clientMessage') }}
        </button>
    </section>

    <section class="main-bg pt-3 pb-3 mb-3" style="width:90%;margin-right:auto;margin-left:auto" v-if="isShown">
        <h6 class="fw-6 border-bottom blackColor px-4 pb-2"> {{ title }} </h6>

        <!-- single message  -->
        <section class="single_message position-relative px-4 mt-4 border-bottom" v-for="message in messages" :key="message.id">
            <p class="blackColor fw-bold fs-13 mb-2">
                {{ message.name }}
            </p>

            <p class="fs-13 fw-6 mb-2">
                {{ $t('message.phone') }}  : {{ message.phone }}
            </p>

            <p class="fs-13 fw-6 mb-2">
                {{ $t('message.title') }}  : {{ message.title }}
            </p>

            <p class="fs-13 fw-6 mb-1">
                {{ $t('message.sub') }} : 
            </p>

            <p class="fs-12 fw-6 mb-2">
                {{ message.message }}
            </p>

            <div class="time_date position-absolute d-flex align-items-center fs-13">
                <i class="fa-regular fa-clock"></i>
                <span class="mx-1">
                    {{ message.time }}
                </span>
            </div>
        </section>
    </section>
    <Skeleton v-else style="width:90%;margin:auto" height="10rem"></Skeleton>


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
        v-if="messages.length>0"        
    >
    </paginate>
    <Toast />
</template>

<script>
import axios from 'axios';
import Skeleton from 'primevue/skeleton';
import Toast from 'primevue/toast';
import Paginate from 'vuejs-paginate-next';


export default {
    data(){
        return{
            activeFilter : 0,
            type : 'doctor',
            isShown : false ,
            title : this.$t('message.specMessage'),
            messages : [],
            currentPageP : 1 ,
            totalPagesP : 0,
            perPageP : 0,
            totalItems : 0

        }
    },
    components:{
        Skeleton,
        Toast,
        Paginate
    },
    methods:{
        setActiveFilter(index, type, title) {
            this.activeFilter = index;
            this.type = type ;
            this.title = title ;
            this.isShown = false ;
            this.currentPageP = 1 ;
            this.getMessages();
        },
        // get messages 
        async getMessages(){
            await axios.get(`/messages?type=${this.type}&page=${this.currentPageP}&limit=10`, {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.messages = res.data.data ;
                    this.isShown  = true ;
                    this.totalItems = res.data.paginate.total ;
                    this.perPageP = res.data.paginate.perPage ;
                    this.currentPageP = res.data.paginate.currentPage ;
                    this.totalPagesP = Math.ceil( this.totalItems / this.perPageP ) ;

                    window.scrollTo({
                        top : 0 ,
                        behavior : 'smooth'
                    })
                    
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
            } )

        },
        pageClickHandler(page) {
            this.currentPageP = page
            this.getMessages();
        },
    },
    mounted(){
        this.getMessages();
    },
    created() {
        this.totalPagesP = Math.ceil(this.messages.length / this.perPageP)
    },
}
</script>

<style lang="scss">
    .time_date{
        left:10px;
        top:10px;
        color: #9e9e9e9e;
    }
    .table_filter{
        background-color: #fff;
        border-radius: 3px;
        margin-bottom:12px;
        padding: 10px 25px 10px 25px;
        .filter_item{
            border: none;
            background: transparent;
            color:#ababab;
            margin: 0px 0px;
            &.active{
                color:#4aa236;
                border-bottom: 2px solid #4aa236;
            }
        }
    }
</style>