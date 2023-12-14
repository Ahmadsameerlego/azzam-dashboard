<template>
    <!-- header  -->
    <section id="specManage" class="pt-3 pb-3 px-5 flex_between">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('con.title_con') }} </h6>
            <p class="grayColor"> {{ $t('con.desc_con') }} </p>
        </div>

        <!-- user interaction => search && add -->
        <div class="d-flex">
            <!-- search  -->
            <div class="form-group position-relative">
                <InputText v-model="filters['global'].value" :placeholder="$t('con.keywords')" />
                <span class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
            
        </div>
        
    </section>
    <!-- filter  -->
    <section class="table_filter" style="width:90%;margin-right:auto;margin-left:auto">
        <button class="filter_item" :class="{'active' : activeFilter === 0 }" @click="setActiveFilter(0, 'new')">
            {{ $t('common.new') }}
        </button>
        <button class="filter_item" :class="{'active' : activeFilter === 1 }" @click="setActiveFilter(1 , 'current')">
            {{ $t('common.currentAnd') }}
        </button>
        <button class="filter_item" :class="{'active' : activeFilter === 2 }" @click="setActiveFilter(2, 'finish')">
            {{ $t('common.finish') }}
        </button>
        <button class="filter_item" :class="{'active' : activeFilter === 3 }" @click="setActiveFilter(3, 'cancelled')">
            {{ $t('common.cancel')}}
        </button>
    </section>
    <!-- table  -->
    <div class="table">

        <DataTable 
            :value="consutlations" 
            tableStyle="min-width: 50rem" 
            paginator :rows="5"  
            :rowsPerPageOptions="[5, 10, 20, 50]" 
            sortMode="multiple"
            v-model:filters="filters"
            style="width:90%;margin:auto" 
            v-if="isShown"
        >
             
            <template #empty> {{ $t('con.notFound') }} </template>

            <Column  :header="$t('common.num')" >
                <template #body="slotProps">
                <!-- Add row numbers to your table -->
                {{  slotProps.index + 1  }}
                </template>
            </Column>
            <Column field="name" :header="$t('con.clientName')" sortable></Column>
            <Column field="phone" :header="$t('con.phone')" sortable></Column>
            <Column field="specialistName" :header="$t('con.specName')" sortable></Column>
            <Column field="date" :header="$t('session.appoint')" sortable ></Column>

            <Column  header="" >
                <template #body="slotProps">

                   <div class="d-flex">
                        <!-- edit  -->
                        <router-link  :to="'/center/consult/'+slotProps.data.id" class="show_more fw-6" @click="click(slotProps.data._id)">
                                {{ $t('session.details') }}
                        </router-link>
                   </div>

                </template>
            </Column>
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
import axios from 'axios';
import Toast from 'primevue/toast';
import Skeleton from 'primevue/skeleton';

export default {
    data() {
        return {
            consutlations: null,
            visible : false,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            activeFilter : 0,
            isShown : false,
            status : 'new'
        }
    },
    components:{
        DataTable,
        Column,
        InputText,
        Toast,
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
                this.getDirectConsultations();
            }, 300);
        },

        // get direct consultant 
        async getDirectConsultations(){
            await axios.get(`/urgentConsultations?status=${this.status}`, {
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.consutlations = res.data.data ;
                    this.isShown = true ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
            } )
        }

    },
    mounted() {
        // get consultations 
        this.getDirectConsultations();
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
            margin: 0px 30px !important;
            &.active{
                color:#4aa236;
                border-bottom: 2px solid #4aa236;
            }
        }
    }
</style>