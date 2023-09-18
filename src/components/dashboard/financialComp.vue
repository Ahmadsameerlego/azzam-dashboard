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

            <div class="form-group d-flex align-items-center">
                <span class="grayColor"> من </span>
                <Calendar v-model="date" placeholder="اختر التاريخ" class="mx-2" />
            </div>

            <div class="form-group d-flex align-items-center">
                <span class="grayColor"> الى </span>
                <Calendar v-model="date" placeholder="اختر التاريخ" class="mx-2" />
            </div>

            <div class="form-group d-flex align-items-center">
                <span class="grayColor"> فلتر حسب </span>
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="mx-2 w-full md:w-14rem" />

            </div>
           
        
    </section>
    
    <!-- table  -->
    <div class="table">
        <DataTable 
            :value="products" 
            tableStyle="min-width: 50rem" 
            paginator :rows="5"  
            :rowsPerPageOptions="[5, 10, 20, 50]" 
            sortMode="multiple"
            v-model:filters="filters"
            style="width:90%;margin:auto" 
        >
             
            <template #empty> No customers found. </template>

            <Column field="_id.$oid" header="رقم" ></Column>
            <Column field="name" header="رقم الطلب" sortable></Column>
            <Column field="phone" header="الاجمالي" sortable></Column>
            <Column field="email" header="نوع الطلب" sortable></Column>
            <Column field="sessionCount" header="نسبة التطبيق" sortable ></Column>
            <Column field="sessionCount" header="نسبة المركز" sortable ></Column>
            <Column field="sessionCount" header="رقم التقرير" sortable ></Column>
            <Column field="sessionCount" header="التاريخ" sortable ></Column>

            
        </DataTable>
    </div>

</template>

<script>
import { ProductService } from '@/services/customerServices';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { FilterMatchMode } from 'primevue/api';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';

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
            ]


        };
    },
    components:{
        DataTable,
        Column,
        InputText,
        Calendar,
        Dropdown
    },
    methods:{
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

    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
}
</script>

<style lang="scss">
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