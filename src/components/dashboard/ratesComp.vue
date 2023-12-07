<template>
    <section class="pt-3 pb-3 px-5">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('rate.title') }} </h6>
            <p class="grayColor"> {{ $t('rate.desc') }} </p>
        </div>
        <!-- rates  -->
        <section class="rates">
            <h6 class="fw-bold blackColor border-bottom pb-3 fs-14 px-3 pt-3"> {{ $t('rate.specTitle') }} </h6>
            
            <!-- if length  -->
            <!-- <section v-if="islength"> -->
                <div class="row mx-3" v-if="isShown==true">
                    <!-- single rate  -->
                    <div class="col-md-6 mb-3" v-for="single in rates" :key="single.id">
                        <section class="rate d-flex border-bottom">
                            <!-- rate image  -->
                            <div class="rate_image">
                                <img :src="single.avatar" alt="rate image">
                            </div>
                            <!-- rate details  -->
                            <div class="rate_details mx-3 flex_column align-items-start">
                                <span class="fw-bold fs-13 blackColor"> {{ single.name }} </span>

                                <div class="d-flex">
                                <div class="timming">
                                        <i class="fa-regular fa-clock"></i>
                                        <span class="mx-1"> {{ single.time }} </span>
                                </div>
                                <div class="mx-3">
                                        <Rating v-model="single.rate" :cancel="false" disabled />
                                </div>
                                </div>

                                <p class="description grayColor">
                                    {{ single.comment }}
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="row mb-3 pb-3 px-4" v-else>
                    <div class="col-md-6">
                        <Skeleton style="width:100%" height="5rem"></Skeleton>
                    </div>
                    <div class="col-md-6">
                        <Skeleton  style="width:100%" height="5rem"></Skeleton>
                    </div>
                </div>
            <!-- </section> -->
            
            <div class="mb-3 pb-3 px-4" v-if="islength">
                
                <Message severity="error">
                    {{ $t('rate.not') }}
                </Message>
            </div>
            

        </section>
    </section>
</template>

<script>
import Rating from 'primevue/rating';
import axios from 'axios';
import Skeleton from 'primevue/skeleton';
import Message from 'primevue/message';

export default {
    data(){
        return{
            rate : 4,
            rates : [],
            isShown : false,
            islength : false
        }
    },
    methods:{
        // get rates 
        async getRates(){
            await axios.get(`/reviews?id=${this.$route.params.id}`, {
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.rates = res.data.data ;
                    this.isShown = true ;
                    
                    if( res.data.data.length === 0 ){
                        this.islength = true ;
                    }else{
                        this.islength = false ;
                    }
                }
            } )
        }
    },
    components:{
        Rating,
        Skeleton ,
        Message
    },
    mounted(){
        this.getRates();
    }
}
</script>

<style lang="scss">
    .p-message-close.p-link{
        margin-right: auto !important;
        margin-left: 0 !important;
    }
    .p-message .p-message-icon{
        margin-left: .5rem !important;
        margin-right: 0 !important;
    }
    .rates{
        background-color: #fff;
        border-radius: 5px;
        .rate{
            position: relative;
            .rate_image{
                width: 70px;
                height: 70px;
                border-radius: 6px;
                img{
                    width:100%;
                    height: 100%;
                    border-radius: 6px;
                    object-fit: cover;
                }
            }
            .timming{
                color: #d7d7d7;
                font-size: 11px;
            }
        }
    }
    .p-rating .p-rating-item .p-rating-icon.p-icon{width:13px !important}
</style>