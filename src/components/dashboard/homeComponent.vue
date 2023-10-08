<template>
    <section id="statistics" class="pt-3 pb-3 px-5">
        <h6 class="fw-bold blackColor"> لوحة التحكم </h6>
        <!-- statistics cards  -->
        <section class="cards">
            <div class="row">
                <!-- single card  -->
                <div class="col-md-3 mb-3" v-for="sta in statistics" :key="sta.id">
                    <section class="single_card  px-3 pt-4 pb-3 flex_between" 
                    :class="{dark:sta.key=='عدد الاخصائيين'||sta.key=='عدد جلسات الدعم', green : sta.key=='عدد الحالات الكلي'||sta.key=='عدد الاستشارات الفورية'||sta.key=='عدد الحاضرين لجلسات الدعم', blue:sta.key=='عدد الخطط العلاجية'}">
                        <div>
                            <h4 class="fw-bold whiteColor"> {{ sta.count }} </h4>
                            <p class="whiteColor"> {{ sta.key }} </p>
                        </div>
                        <div class="card_icon">
                            <img :src="require('@/assets/imgs/plus.png')" alt="">
                        </div>
                    </section>
                </div>
            </div>
        </section>

        <!-- chart & client opinios  -->
        <section class="chart_opinions mt-3"> 
            <div class="row">
                <!-- chart  -->
                <div class="col-md-6 mb-3">
                    <section class="chart">
                        <div class="chart_header borderBottom">
                            <p class="fw-6 blackColor"> احصائيات الارباح </p>
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
                            <p class="fw-6 blackColor"> أراء العملاء </p>
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
        </section>
    </section>
</template>

<script>
import Chart from 'primevue/chart';
import Rating from 'primevue/rating';
import axios from 'axios';

export default {
    data(){
        return{
            chartData: null,
            chartOptions: null,
            rate : 5,
            statistics : [],
            managementProfitStatistics : {},
            reviews : [],
            profits : []
        }
    },
    components:{
        Chart,
        Rating
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
        }
    }
    .chart{
        min-height: 410px;
        background-color: #fff;
        padding: 10px;
        border-radius: 3px;
        box-shadow: 0px 0px 7px #25436f31;;
    }
    .p-chart{
        height: 350px   ;
    }
    .p-rating .p-rating-item.p-rating-item-active .p-rating-icon{
        color:#f9c446 !important;
        width: 12px !important;
    }
</style>