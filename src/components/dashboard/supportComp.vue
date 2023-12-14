<template>
    <!-- header  -->
    <section id="specManage" class="pt-3 pb-0 px-5 flex_between">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('support.title') }} </h6>
            <p class="grayColor"> {{ $t('support.desc') }} </p>
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
            <!-- add  -->
            <div class="add">
                <router-link to="/center/addGroup" class="add_doctor">
                    <i class="fa-solid fa-plus"></i>
                </router-link>
            </div>
        </div>
        
    </section>
    
    <!-- table  -->
    <div class="table">
        <DataTable 
            :value="groups" 
            v-if="isShown"
            tableStyle="min-width: 50rem" 
            paginator :rows="5"  
            :rowsPerPageOptions="[5, 10, 20, 50]" 
            sortMode="multiple"
            v-model:filters="filters"
            style="width:90%;margin:auto" 

        >
             
            <template #empty> No customers found. </template>

            <Column :header="$t('common.num')" >
                <template #body="slotProps">
                <!-- Add row numbers to your table -->
                {{  slotProps.index + 1  }}
                </template>
            </Column>
            <Column field="name" :header="$t('support.name')" sortable></Column>
            <Column field="seats" :header="$t('group.seats')" sortable></Column>
            <Column :header="$t('support.reserved')" sortable>
                <template #body="slotProps">
                    <span v-if="slotProps.data.reservedSeats !== $t('common.reserved') "> {{ slotProps.data.reservedSeats }} </span>
                    <!-- <span v-if="slotProps.data.reservedSeats=='تم حجز جميع المقاعد' || slotProps.data.reservedSeats == 'All seats have been reserved'" class="reservedSeats"> {{ slotProps.data.reservedSeats }} </span> -->
                    <span v-if="slotProps.data.reservedSeats ===  $t('common.reserved') "  class="reservedSeats"> {{ slotProps.data.reservedSeats }} </span>
                </template>

                <!-- field="reservedSeats" -->
            </Column>
            <Column field="sessionsCount" :header="$t('offer.num')" sortable></Column>
            <Column field="price" :header="$t('group.price')" sortable ></Column>

            <Column  header="" >
                <template #body="slotProps">

                   <div class="d-flex">
                        <!-- edit  -->
                        <router-link  :to="'/center/supportManage/'+slotProps.data.id" class="show_more fw-6" @click="click(slotProps.data.id)">
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
import Skeleton from 'primevue/skeleton';
import Toast from 'primevue/toast';

export default {
    data() {
        return {
            products: null,
            visible : false,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            activeFilter : 0,
            groups : [],
            isShown : false
        };
    },
    components:{
        DataTable,
        Column,
        InputText,
        Skeleton,
        Toast
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
        // get doctors 
        async getGroups(){
            await axios.get('/support-groups-center', {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.groups = res.data.data ;
                    this.isShown = true ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
            } )
        }

    },
    mounted() {
        this.getGroups();
    }
}
</script>

<style lang="scss">
    .reservedSeats{
        color: #4aa236;
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
</style>