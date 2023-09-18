<template>
    <section id="statistics" class="pt-3 pb-3 px-5">
        <h6 class="fw-bold blackColor"> لوحة التحكم </h6>
        <!-- statistics cards  -->
        <section class="cards">
            <div class="row">
                <!-- single card  -->
                <div class="col-md-3 mb-3">
                    <section class="single_card blue px-3 pt-4 pb-3 flex_between">
                        <div>
                            <h4 class="fw-bold whiteColor">500</h4>
                            <p class="whiteColor"> عدد العملاء </p>
                        </div>
                        <div class="card_icon">
                            <img :src="require('@/assets/imgs/plus.png')" alt="">
                        </div>
                    </section>
                </div>
                <!-- single card  -->
                <div class="col-md-3 mb-3">
                    <section class="single_card dark px-3 pt-4 pb-3 flex_between">
                        <div>
                            <h4 class="fw-bold whiteColor">500</h4>
                            <p class="whiteColor"> عدد الاخصائيين </p>
                        </div>
                        <div class="card_icon">
                            <img :src="require('@/assets/imgs/rotate.png')" alt="">
                        </div>
                    </section>
                </div>
                <!-- single card  -->
                <div class="col-md-3 mb-3">
                    <section class="single_card green px-3 pt-4 pb-3 flex_between">
                        <div>
                            <h4 class="fw-bold whiteColor">500</h4>
                            <p class="whiteColor"> عدد الحالات الكلي </p>
                        </div>
                        <div class="card_icon">
                            <img :src="require('@/assets/imgs/check.png')" alt="">
                        </div>
                    </section>
                </div>
                <!-- single card  -->
                <div class="col-md-3 mb-3">
                    <section class="single_card green px-3 pt-4 pb-3 flex_between">
                        <div>
                            <h4 class="fw-bold whiteColor">500</h4>
                            <p class="whiteColor"> عدد الاستشارات الفورية </p>
                        </div>
                        <div class="card_icon">
                            <img :src="require('@/assets/imgs/circle.png')" alt="">
                        </div>
                    </section>
                </div>
                <!-- single card  -->
                <div class="col-md-3 mb-3">
                    <section class="single_card blue px-3 pt-4 pb-3 flex_between">
                        <div>
                            <h4 class="fw-bold whiteColor">500</h4>
                            <p class="whiteColor"> عدد الخطط العلاجية </p>
                        </div>
                        <div class="card_icon">
                            <img :src="require('@/assets/imgs/plus.png')" alt="">
                        </div>
                    </section>
                </div>
                <!-- single card  -->
                <div class="col-md-3 mb-3">
                    <section class="single_card dark px-3 pt-4 pb-3 flex_between">
                        <div>
                            <h4 class="fw-bold whiteColor">500</h4>
                            <p class="whiteColor"> عدد جلسات الدعم </p>
                        </div>
                        <div class="card_icon">
                            <img :src="require('@/assets/imgs/rotate.png')" alt="">
                        </div>
                    </section>
                </div>
                <!-- single card  -->
                <div class="col-md-3 mb-3">
                    <section class="single_card green px-3 pt-4 pb-3 flex_between">
                        <div>
                            <h4 class="fw-bold whiteColor">500</h4>
                            <p class="whiteColor"> عدد الحاضريين لجلسات الدعم </p>
                        </div>
                        <div class="card_icon">
                            <img :src="require('@/assets/imgs/check.png')" alt="">
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
                        <div class="">
                                <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
                        </div>
                    </section>
                </div>

                <!-- client opinions  -->
                <div class="col-md-6 mb-3">
                    <section class="chart">
                        <div class="chart_header borderBottom">
                            <p class="fw-6 blackColor"> أراء العملاء </p>
                        </div>
                        
                        <!-- all opinions  -->
                        <sections class="opinions">
                            <!-- single opinion  -->
                            <div class="opinion d-flex borderBottom pt-2 pb-2">
                                <!-- client image  -->
                                <div class="client_image">
                                    <img :src="require('@/assets/imgs/logo.png')" alt="client image">
                                </div>
                                <!-- opinion details  -->
                                <div class="opinion_details flex_column align-items-start mx-3">

                                    <span class="fw-6 blackColor mb-2"> Ahmed samer </span>

                                    <div class="d-flex timming mb-2">
                                        <div class="d-flex align-items-center">
                                            <i class="fa-regular fa-clock"></i>
                                            <span class="mx-1"> منذ ساعة </span>
                                        </div>

                                        <!-- starts  -->
                                        <Rating v-model="rate" readonly :cancel="false" class="mx-3" />
                                    </div>

                                    <!-- comment  -->
                                    <span class="comment">
                                        Lorem ipsum dolor sit amet consectetur.
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

export default {
    data(){
        return{
            chartData: null,
            chartOptions: null,
            rate : 5

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
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    
                    {
                        label: 'Third Dataset',
                        data: [12, 51, 62, 33, 21, 62, 45],
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
        }
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },

}
</script>

<style lang="scss">
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