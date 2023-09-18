<template>
    <!-- header  -->
    <section id="specManage" class="pt-3 pb-3 px-5 flex_between">
        <div>
            <h6 class="fw-bold blackColor"> ادارة الاستشارات المباشرة </h6>
            <p class="grayColor"> متابعة الاستشارات المباشرة </p>
        </div>

        <!-- user interaction => search && add -->
        <div class="d-flex">
            <!-- search  -->
            <div class="form-group position-relative">
                <InputText v-model="filters['global'].value" placeholder="كلمات مفتاحية" />
                <span class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
            
        </div>
        
    </section>
    <!-- filter  -->
    <section class="table_filter" style="width:90%;margin-right:auto;margin-left:auto">
        <button class="filter_item" :class="{'active' : activeFilter === 0 }" @click="setActiveFilter(0)">
            جديدة
        </button>
        <button class="filter_item" :class="{'active' : activeFilter === 1 }" @click="setActiveFilter(1)">
            حالية او قادمة
        </button>
        <button class="filter_item" :class="{'active' : activeFilter === 2 }" @click="setActiveFilter(2)">
            منتهية
        </button>
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
            <Column field="name" header="اسم العميل" sortable></Column>
            <Column field="phone" header="رقم الجوال" sortable></Column>
            <Column field="email" header="اسم الاخصائي المطلوب" sortable></Column>
            <Column field="sessionCount" header="الموعد" sortable ></Column>

            <Column  header="" >
                <template #body="slotProps">

                   <div class="d-flex">
                        <!-- edit  -->
                        <router-link  to="/consult/1" class="show_more fw-6" @click="click(slotProps.data._id)">
                                عرض التفاصيل
                        </router-link>
                   </div>

                </template>
            </Column>
        </DataTable>
    </div>

</template>

<script>
import { ProductService } from '@/services/customerServices';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { FilterMatchMode } from 'primevue/api';
import InputText from 'primevue/inputtext';

export default {
    data() {
        return {
            products: null,
            visible : false,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            activeFilter : 0

        };
    },
    components:{
        DataTable,
        Column,
        InputText
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
</style>