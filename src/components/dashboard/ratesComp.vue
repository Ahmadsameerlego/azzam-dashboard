<template>
    <section class="pt-3 pb-3 px-5">
        <div>
            <h6 class="fw-bold blackColor"> تقييمات الاخصائي </h6>
            <p class="grayColor"> يمكنك استعراض تقييمات الاخصائي من هنا </p>
        </div>
        <!-- rates  -->
        <section class="rates">
            <h6 class="fw-bold blackColor border-bottom pb-3 fs-14 px-3 pt-3"> تقييمات الاخصائي </h6>
            <div class="row mx-3">
                <!-- single rate  -->
                <div class="col-md-6 mb-3">
                    <section class="rate d-flex border-bottom">
                        <!-- rate image  -->
                        <div class="rate_image">
                            <img :src="require('@/assets/imgs/logo.png')" alt="rate image">
                        </div>
                        <!-- rate details  -->
                        <div class="rate_details mx-3 flex_column align-items-start">
                            <span class="fw-bold fs-13 blackColor"> ahmed samer </span>

                            <div class="d-flex">
                               <div class="timming">
                                    <i class="fa-regular fa-clock"></i>
                                    <span class="mx-1"> منذ ساعة </span>
                               </div>
                               <div class="mx-3">
                                    <Rating v-model="rate" :cancel="false" disabled />
                               </div>
                            </div>

                            <p class="description grayColor">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, aspernatur.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import Rating from 'primevue/rating';

export default {
    data(){
        return{
            rate : 4
        }
    },
    components:{
        Rating
    }
}
</script>

<style lang="scss">
    .rates{
        background-color: #fff;
        border-radius: 5px;
        .rate{
            position: relative;
            .rate_image{
                width: 70px;
                height: 100%;
                border-radius: 6px;
                img{
                    width:100%;
                    height: 100%;
                    border-radius: 6px;
                    object-fit: contain;
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