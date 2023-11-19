<template>
    <section id="statistics" class="pt-3 pb-3 px-5">
        <h6 class="fw-bold blackColor"> {{ $t('home.dash') }} </h6>
        <!-- statistics cards  -->
        <section class="cards">
            <div class="row" v-if="isShow">
                <!-- single card  -->
                <div class="col-md-3 mb-3" v-for="sta in statistics" :key="sta.id">
                    <section class="single_card  px-3 pt-4 pb-3 flex_between" 
                    :class="{
                        dark:sta.key==$t('home.docNum')
                        ||sta.key==$t('home.supportNum'), green : sta.key==$t('home.total')
                        ||sta.key==$t('home.urgentNum')
                        ||sta.key==$t('home.personsNum'), blue:sta.key==$t('home.treatNum')
                    }">
                        <div>
                            <h4 class="fw-bold whiteColor"> {{ sta.count }} </h4>
                            <p class="whiteColor"> {{ sta.key }} </p>
                        </div>
                        <div class="card_icon" v-if="sta.key==$t('home.docNum')||sta.key==$t('home.supportNum')">
                            <img :src="require('@/assets/imgs/rotate.png')" alt="">
                        </div>
                        <div class="card_icon" v-if="sta.key==$t('home.total')||sta.key==$t('home.personsNum')">
                            <img :src="require('@/assets/imgs/check.png')" alt="">
                        </div>
                        <div class="card_icon" v-if="sta.key==$t('home.treatNum')">
                            <img :src="require('@/assets/imgs/check.png')" alt="">
                        </div>
                        <div class="card_icon" v-if="sta.key==$t('home.urgentNum')">
                            <img :src="require('@/assets/imgs/circle.png')" alt="">
                        </div>
                    </section>
                </div>
            </div>

            <div class="row" v-else>
                <div class="col-md-3 mb-3">
                    <Skeleton  height="9rem"></Skeleton>
                </div>
                <div class="col-md-3 mb-3">
                    <Skeleton  height="9rem"></Skeleton>
                </div>
                <div class="col-md-3 mb-3">
                    <Skeleton  height="9rem"></Skeleton>
                </div>
                <div class="col-md-3 mb-3">
                    <Skeleton  height="9rem"></Skeleton>
                </div>
                <div class="col-md-3 mb-3">
                    <Skeleton  height="9rem"></Skeleton>
                </div>
                <div class="col-md-3 mb-3">
                    <Skeleton  height="9rem"></Skeleton>
                </div>
            </div>
        </section>

        <!-- chart & client opinios  -->
        <section class="chart_opinions mt-3"> 

            <div class="row" v-if="isShow">
                <!-- chart  -->
                <div class="col-md-6 mb-3">
                    <section class="chart">
                        <div class="chart_header borderBottom">
                            <p class="fw-6 blackColor"> {{ $t('home.profits') }} </p>
                        </div>
                        <div class="position-relative">
                                <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />

                                <h6 class="total sec-color"> {{ managementProfitStatistics.total }}  </h6>
                        </div>
                    </section>
                </div>
                
                <!-- client opinions  -->
                <div class="col-md-6 mb-3" >
                    <section class="chart">
                        <div class="chart_header borderBottom">
                            <p class="fw-6 blackColor"> {{ $t('home.opinions') }} </p>
                        </div>
                        
                        <!-- all opinions  -->
                        <sections class="opinions">
                            <!-- single opinion  -->
                            <div class="opinion d-flex borderBottom pt-2 pb-2" v-for="review in reviews" :key="review.id">
                                <!-- client image  -->
                                <div class="client_image">
                                    <img :src="review.image" alt="client image">
                                </div>
                                <!-- opinion details  -->
                                <div class="opinion_details flex_column align-items-start mx-3">

                                    <span class="fw-6 blackColor mb-2"> {{ review.name }} </span>

                                    <div class="d-flex timming mb-2">
                                        <div class="d-flex align-items-center">
                                            <i class="fa-regular fa-clock"></i>
                                            <span class="mx-1"> {{ review.timeAdd }} </span>
                                        </div>

                                        <!-- starts  -->
                                        <Rating v-model="review.rate" readonly :cancel="false" class="mx-3" />
                                    </div>

                                    <!-- comment  -->
                                    <span class="comment">
                                        {{ review.comment }}
                                    </span>
                                </div>
                            </div>
                        </sections>
                    </section>
                </div>
            </div>

            <div class="row" v-else>
                <div class="col-md-6 mb-3">
                    <Skeleton  height="23rem"></Skeleton>
                </div>
                <div class="col-md-6 mb-3">
                    <Skeleton  height="23rem"></Skeleton>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import Chart from 'primevue/chart';
import Rating from 'primevue/rating';
import axios from 'axios';
import Skeleton from 'primevue/skeleton';

export default {
    data(){
        return{
            chartData: null,
            chartOptions: null,
            rate : 5,
            statistics : [],
            managementProfitStatistics : {},
            reviews : [],
            profits : [],
            isShow : false
        }
    },
    components:{
        Chart,
        Rating,
        Skeleton
    },
    methods:{
        setChartData() {
            // const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'sep', 'oct', 'nov','dec'],
                datasets: [
                    
                    {
                        label: 'احصائيات الارباح',
                        data: this.profits , 
                        fill: true,
                        borderColor: '#3290d8',
                        tension: 0.4,
                        backgroundColor: '#3290d861'
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
        },
        // get home 
        async getHome(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            await axios.get('/home-center', {headers})
            .then( (res)=>{
                this.statistics = res.data.data.statistics ;
                this.managementProfitStatistics = res.data.data.managementProfitStatistics ;
                this.profits = res.data.data.managementProfitStatistics.profits ;
                this.reviews = res.data.data.reviews.results ;
                this.chartData = this.setChartData();
                this.chartOptions = this.setChartOptions();
                this.isShow = true ;
            } )
        }
    },
    mounted() {
        
        
        this.getHome();
    },

}
</script>

<style lang="scss">

    .total{
        position: absolute;
        top: 5px;
        right: 22px;
    }
    .opinions{
        max-height: 350px;
        overflow-y: auto;
        display: block;
        .opinion{
            .client_image{
                width:70px;
                height: 70px;
                border-radius: 4px;
                img{
                    width:100%;
                    height: 100%;
                    object-fit: contain;
                    border-radius: 4px;
                }
            }
            .timming{
                color:#d9d9d9;
                font-size: 11px;
            }
            .comment{
                color:#b0b0b0;
                font-size: 13px;
            }
        }
    }
    .cards{
        .single_card{
            position: relative;
            min-height: 140px;
            border-radius: 4px;
            &.blue{
                background-color: #3290d8;
            }
            &.dark{
                background-color: #c09434;
            }
            &.green{
                background-color: #4aa236;
            }

            &::before{
                content: "";
                position: absolute;
                width: 44px;
                height: 40px;
                left: 9px;
                bottom: 57px;
                z-index: 0;
                transition: .3s all;
                background: linear-gradient(90deg, rgb(255 255 255 / 1%) 0%, rgb(255 255 255 / 24%) 38%);
                border-radius: 8px;
            }
            &:hover{
                &::before{
                    width: 100%;
                    height: 100%;
                    bottom:0;
                    left:0;
                }
            }
        }
    }
    .chart{
        min-height: 410px;
        background-color: #fff;
        padding: 10px;
        border-radius: 3px;
        box-shadow: 0px 0px 7px #25436f31;
        transition: .3s all;
        &:hover{
            box-shadow: 0px 0px 15px #25436f68;
        }
    }
    .p-chart{
        height: 350px   ;
    }
    .p-rating .p-rating-item.p-rating-item-active .p-rating-icon{
        color:#f9c446 !important;
        width: 12px !important;
    }
</style>