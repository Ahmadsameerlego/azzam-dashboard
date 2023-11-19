<template>
    <!-- header  -->
    <section id="specManage" class="financial pt-3 pb-0 px-5 flex_between">
        <div>
            <h6 class="fw-bold blackColor"> ادارة الحسابات المالية والأرباح </h6>
            <p class="grayColor"> متابعة الحسابات المالية والأرباح </p>
        </div>

            <!-- search  -->
            <div class="form-group position-relative">
                <InputText v-model="filters['global'].value" placeholder="كلمات مفتاحية" />
                <span class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>

            <div class="position-relative form-group d-flex align-items-center">
                <span class="grayColor"> من </span>
                <Calendar v-model="startDate" placeholder="اختر التاريخ" class="mx-2" />
                <div class="calender">
                    <i class="fa-regular fa-calendar"></i>
                </div>
            </div>

            <div class="position-relative form-group d-flex align-items-center">
                <span class="grayColor"> الى </span>
                <Calendar v-model="endDate" placeholder="اختر التاريخ" class="mx-2" />
                <div class="calender">
                    <i class="fa-regular fa-calendar"></i>
                </div>
            </div>

            <div class="form-group d-flex align-items-center types_financial">
                <span class="grayColor"> فلتر حسب </span>
                <Dropdown v-model="selectedType" :options="types" @change="reHandleTable" optionLabel="title" placeholder="اختر النوع" class="mx-2 w-full md:w-14rem" />

            </div>
           
        
    </section>
    
    <!-- table  -->
    <div class="table">
        <DataTable 
            :value="financials" 
            v-if="isShown"
            tableStyle="min-width: 50rem" 
            paginator :rows="5"  
            :rowsPerPageOptions="[5, 10, 20, 50]" 
            sortMode="multiple"
            v-model:filters="filters"
            style="width:90%;margin:auto" 
            
        >
             
            <template #empty> No customers found. </template>

            <Column header="رقم" >
                <template #body="slotProps">
                <!-- Add row numbers to your table -->
                {{  slotProps.index + 1  }}
                </template>
            </Column>
            <Column field="orderNumber" header="رقم الطلب" sortable></Column>
            <Column field="price" header="الاجمالي" sortable></Column>
            <Column field="orderType" header="نوع الطلب" sortable></Column>
            <Column field="appPercentage" header="نسبة التطبيق" sortable ></Column>
            <Column field="appCommission" header="نسبة المركز" sortable ></Column>
            <Column field="reportNumber" header="رقم التقرير" sortable ></Column>
            <Column field="timeAdd" header="التاريخ" sortable ></Column>

            
        </DataTable>
        <Skeleton v-else style="width:90%;margin:auto" height="10rem"></Skeleton>

    </div>

    <Toast />
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { FilterMatchMode } from 'primevue/api';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';

import axios from 'axios';
import Skeleton from 'primevue/skeleton';
import Toast from 'primevue/toast';

import moment from 'moment';

export default {
    data() {
        return {
            products: null,
            visible : false,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            activeFilter : 0,
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            financials : [],
            isShown  : false,
            startDate : '',
            endDate : '',
            format_start : '',
            format_end : '',
            type : 'treatmentPlan',
            types : [
                {
                    id : 1,
                    name : 'urgentConsultation',
                    title : 'الاستشارات المباشرة'
                },
                {
                    id : 2,
                    name : 'treatmentPlan',
                    title : 'الخطط العلاجية'
                }
            ],
            selectedType : {
                    id : 1,
                    name : 'treatmentPlan',
                    title : 'الخطط العلاجية'
            },
        };
    },
    components:{
        DataTable,
        Column,
        InputText,
        Calendar,
        Dropdown,
        Skeleton,
        Toast
    },
    watch:{
        startDate(){
            this.format_start = moment(this.startDate).format('YYYY-MM-DD') ;
            // this.getFinancials();
            // this.isShown = false ;
        },
        endDate(){
            this.format_end = moment(this.endDate).format('YYYY-MM-DD') ;
            this.getFinancials();
            this.isShown = false ;
        }
    },
    methods:{
        reHandleTable(){
            this.getFinancials();
            this.isShown = false ;
        },
        click(a){
            console.log(a)
        },
        openNotiftDialog(id){
            this.visible = true ;
            console.log(id);
        },
        setActiveFilter(index) {
            this.activeFilter = index;
        },

        // get financial 
        async getFinancials(){
            await axios.get(`/financialAccountsAndProfits?startDate=${this.format_start}&endDate=${this.format_end}&type=${this.selectedType.name}`, {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.financials = res.data.data ;
                    this.isShown = true ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
            } )
        }

    },
    mounted() {
        this.getFinancials();
    }
}
</script>

<style lang="scss">
    .calender{
        position: absolute;
        left: 14px;
    }
    .p-datepicker .p-datepicker-header .p-datepicker-prev, .p-datepicker .p-datepicker-header .p-datepicker-next{
        transform: rotate(180deg);
    }
    .types_financial .p-dropdown .p-dropdown-trigger{
        width:25px;
    }
    .p-calendar{
        input{
            width:100px !important
        }
    }
    .show_more{
        color:#40a8e0 !important;
        border-bottom:1px solid #40a8e0;
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
            margin: 0px 30px;
            &.active{
                color:#4aa236;
                border-bottom: 2px solid #4aa236;
            }
        }
    }
    
    .financial{
        .p-dropdown{
            border: none;
            width: 150px;
            height: 38px;
        }
        .p-dropdown .p-dropdown-label.p-placeholder , .p-dropdown .p-dropdown-label{
            color: #bebebe;
            font-size: 12px;
        }
    }
</style>