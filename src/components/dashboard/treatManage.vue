<template>
    <!-- header  -->
    <section id="specManage" class="pt-3 pb-0 px-5 flex_between">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('treat.title') }} </h6>
            <p class="grayColor"> {{ $t('treat.keep') }} </p>
        </div>

        <!-- user interaction => search && add -->
        <div class="d-flex">
            <!-- search  -->
            <div class="form-group position-relative">
                <InputText v-model="filters['global'].value" :placeholder="$t('treat.keys')" />
                <span class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
            
        </div>
        
    </section>
    <!-- filter  -->
    <section class="table_filter" style="width:90%;margin-right:auto;margin-left:auto">
        <button class="filter_item" :class="{'active' : activeFilter === 0 }" @click="setActiveFilter(0 , 'new')">
            {{ $t('common.new') }}
        </button>
        <button class="filter_item" :class="{'active' : activeFilter === 1 }" @click="setActiveFilter(1 , 'current')">
            {{ $t('common.current')  }}  
        </button>
        <button class="filter_item" :class="{'active' : activeFilter === 3 }" @click="setActiveFilter(3, 'finish')">
            {{ $t('common.finish') }}
        </button>
        <!-- <button class="filter_item" :class="{'active' : activeFilter === 4 }" @click="setActiveFilter(4, 'cancelled')">
            {{ $t('common.cancel') }}
        </button> -->
    </section>
    <!-- table  -->
    <div class="table">
        <DataTable 
            :value="treats" 
            tableStyle="min-width: 50rem" 
            paginator :rows="5"  
            :rowsPerPageOptions="[5, 10, 20, 50]" 
            sortMode="multiple"
            v-model:filters="filters"
            style="width:90%;margin:auto" 
            v-if="isShown"
        >
             
            <template #empty> No treatments found. </template>

            <Column  :header="$t('common.num')" >
                <template #body="slotProps">
                <!-- Add row numbers to your table -->
                {{  slotProps.index + 1  }}
                </template>
            </Column>
            <Column field="name" :header="$t('common.clientName')" sortable></Column>
            <Column field="phone" :header="$t('common.phone')" sortable></Column>
            <Column field="typeOfAddiction" :header="$t('common.addType')" sortable></Column>
            <Column field="therapeuticPlanFor" :header="$t('common.orderType')" sortable></Column>

            <Column  header="" >
                <template #body="slotProps">

                   <div class="d-flex">
                        <!-- edit  -->
                        <router-link  :to="'/center/treat/'+slotProps.data.id" class="show_more fw-6" @click="click(slotProps.data.id)">
                            {{ $t('session.details') }}
                        </router-link>
                   </div>

                </template>
            </Column>
        </DataTable>
        <Skeleton v-else style="width:90%;margin:auto" height="10rem"></Skeleton>
    </div>

</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { FilterMatchMode } from 'primevue/api';
import InputText from 'primevue/inputtext';
import axios from 'axios';
import Skeleton from 'primevue/skeleton';

export default {
    data() {
        return {
            products: null,
            visible : false,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            activeFilter : 0,
            treats : [],
            isShown : false,
            status : 'new',
            

        };
    },
    components:{
        DataTable,
        Column,
        InputText,
        Skeleton
    },
    methods:{
        click(a){
            console.log(a)
        },
        openNotiftDialog(id){
            this.visible = true ;
            console.log(id);
        },
        setActiveFilter(index, status) {
            this.activeFilter = index;
            this.status = status;
            this.isShown = false ;
            setTimeout(() => {
                this.getTreats();
            }, 500);
        },
        // get doctors 
        async getTreats(){
            await axios.get(`/treatmentPlans?status=${this.status}`, {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.treats = res.data.data ;
                    this.isShown = true ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
            } )
        }

    },
    mounted() {
        this.getTreats();
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