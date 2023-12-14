<template>
    <section id="specManage" class="pt-3 pb-3 px-5 flex_between">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('spec.title') }} </h6>
            <p class="grayColor"> {{ $t('spec.desc') }} </p>
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
                <router-link to="/center/addSpecialist" class="add_doctor">
                    <i class="fa-solid fa-plus"></i>
                </router-link>
            </div>
        </div>
        
    </section>

    <!-- table  -->
    <div class="specialist">

        <DataTable 
            :value="doctors" 
            tableStyle="min-width: 50rem" 
            paginator :rows="5"  
            :rowsPerPageOptions="[5, 10, 20, 50]" 
            sortMode="multiple"
            v-model:filters="filters"
            style="width:90%;margin:auto" 
            v-if="isShown"
        >
             
            <template #empty> {{ $t('spec.not') }} </template>

            <Column  :header="$t('common.num')" >
                <template #body="slotProps">
                <!-- Add row numbers to your table -->
                {{  slotProps.index + 1  }}
                </template>
            </Column>
            <Column field="name" :header="$t('common.specName')" sortable></Column>
            <Column field="phone" :header="$t('auth.phone')" sortable></Column>
            <Column field="email" :header="$t('auth.email')" sortable></Column>
            <Column field="specialization" :header="$t('common.special')" sortable></Column>
            <Column field="sessionCount" :header="$t('spec.sessionNum')" sortable class="sessions"></Column>
            <Column field="averageRating" :header="$t('spec.rate')" sortable class="rate">
                <template #body="slotProps">

                    <div class="d-flex">
                        <!-- edit  -->
                        <router-link  :to="'/center/rates/'+slotProps.data.id" class="" >
                            {{ $t('spec.showRate') }}
                        </router-link>
                       
                    </div>
                </template>
            </Column>

            <Column  header="" >
                <template #body="slotProps">

                   <div class="">
                        <button class="btn deactivate" :disabled="disabledActive[slotProps.index]" v-if="slotProps.data.isApproved== true" @click="deactive(slotProps.data.id,  slotProps.index)"> 
                            {{ $t('spec.deactive') }} 

                        </button>
                        <button class="btn activate"  :disabled="disabledActive[slotProps.index]" v-if="slotProps.data.isApproved== false" @click="deactive(slotProps.data.id, slotProps.index)">  
                            {{ $t('spec.active') }} 
                        </button>
                   </div>
                </template>
            </Column>

            
            <Column  header="" >
                <template #body="slotProps">

                   <div class="d-flex">
                        <!-- edit  -->
                        <router-link  :to="'/center/editDoctor/'+slotProps.data.id" class="edit_doctor">
                                <i class="fa-solid fa-pen-to-square" ></i>
                        </router-link>
                        <!-- notify  -->
                        <span class="notify mx-2" @click="openNotiftDialog(slotProps.data.id)">
                            <i class="fa-regular fa-bell"></i>
                        </span>
                        <!-- delete  -->
                        <span class="delete" @click="deleteDoctor(slotProps.data.id, slotProps.index)">
                            <i class="fa-regular fa-trash-can" v-if="!showDeleted[slotProps.index]"></i>
                            <div class="spinner-border" role="status" v-else>
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </span>
                   </div>
                </template>
            </Column>
        </DataTable>

        <Skeleton v-else style="width:90%;margin:auto" height="10rem"></Skeleton>
    </div>


    <!-- send notification  -->
    <Dialog v-model:visible="visible" modal  :style="{ width: '50vw' }">
        <h4 class="text-center main-color fw-6"> {{ $t('spec.sendNot') }} </h4>
        <form @submit.prevent="sendNot()" ref="not_form">
                <div class="form-group mb-2">
                    <label for="" class="d-block fw-6 mb-2">
                            {{ $t('spec.nameAr') }} 
                    </label>
                    <InputText type="text" v-model="titleAr" name="titleAr" class="default_input w-100" :placeholder="$t('spec.arPlc')" />
                    <span class="error text-danger fs-13" v-if="isTitleAr"> {{ $t('spec.arPlc') }} </span>
                </div>

                <div class="form-group mb-2">
                    <label for="" class="d-block fw-6 mb-2">
                            {{ $t('spec.nameEn') }} 
                    </label>
                    <InputText type="text" v-model="titleEn" name="titleEn" class="default_input w-100" :placeholder="$t('spec.enPlc')" />
                    <span class="error text-danger fs-13" v-if="isTitleEn"> {{ $t('spec.enPlc') }} </span>
                </div>


                <div class="form-group mb-2">
                    <label for="" class="d-block fw-6 mb-2">
                            {{ $t('spec.contentAr') }} 
                    </label>
                    <Textarea v-model="messageAr" name="messageAr" autoResize rows="5" class="default_input default_textarea w-100" cols="30" :placeholder="$t('spec.arCon')" />
                    <span class="error text-danger fs-13" v-if="isMessageAr"> {{ $t('spec.arCon') }} </span>

                </div>

                <div class="form-group mb-2">
                    <label for="" class="d-block fw-6 mb-2">
                        {{ $t('spec.contentEn') }} 
                    </label>
                    <Textarea v-model="messageEn" name="messageEn" autoResize rows="5" class="default_input default_textarea w-100" cols="30" :placeholder="$t('spec.EnCon')" />
                    <span class="error text-danger fs-13" v-if="isMessageEn"> {{ $t('spec.EnCon') }} </span>

                </div>

                <div class="d-flex justify-content-center align-items-center mt-3">
                    <button class="btn main_btn w-50 mx-auo pt-2 pb-2" :disabled="disabled">
                         <span v-if="!disabled">{{ $t('common.send') }}</span> 
                         <div class="spinner-border" role="status" v-if="disabled">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </button>
                </div>

        </form>
    </Dialog>
    <Toast />


</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { FilterMatchMode } from 'primevue/api';
import Dialog from 'primevue/dialog';

import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import axios from 'axios';


import Skeleton from 'primevue/skeleton';
import Toast from 'primevue/toast';

export default {
    data() {
        return {
            // products: null,
            visible : false,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            doctors : [],
            disabled : false ,
            isShown : false,
            not_id : null,
            titleAr : '',
            titleEn : '',
            messageAr : '',
            messageEn : '',
            disabledActive : [],
            showDeleted : [],
            isTitleAr : false ,
            isTitleEn : false ,
            isMessageAr : false ,
            isMessageEn : false
        };
    },
    components:{
        DataTable,
        Column,
        InputText,
        Dialog,
        Textarea,
        Skeleton,
        Toast 
        // ColumnGroup,
        // Row
    },
    methods:{
        // deactive 
        async deactive(id, index){
            this.disabledActive[index] = true ;
            const fd = new FormData();
            await axios.put(`/show-hidden-doctor?id=${id}`, fd ,{
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    // setTimeout(() => {
                        this.getDoctors()
                    // }, 1000);
                    this.disabledActive[index] = false ;
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    this.disabledActive[index] = false ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                this.disabledActive[index] = false ;
            } )
        },
        // delete doctors 
        async deleteDoctor(id, index){
            this.showDeleted[index] = true ;
            await axios.delete(`/delete-doctor?id=${id}`,{
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    // setTimeout(() => {
                        this.getDoctors()
                    // }, 1000);
                    this.showDeleted[index] = false ;
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    this.showDeleted[index] = false ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                this.showDeleted[index] = false ;
            } )
        },
        openNotiftDialog(id){
            this.visible = true ;
            this.not_id = id ;
        },
        // send Notification 
        async sendNot(){
            if( this.titleAr == '' ){
                this.isTitleAr = true;
            }else{
                this.isTitleAr = false;
            }
            if( this.titleEn == '' ){
                this.isTitleEn = true;
            }else{
                this.isTitleEn = false;
            }
            if( this.messageAr == '' ){
                this.isMessageAr = true;
            }else{
                this.isMessageAr = false;
            }
            if( this.messageEn == '' ){
                this.isMessageEn = true;
            }else{
                this.isMessageEn = false;
            }

            if( this.isTitleAr == false && this.isTitleEn == false && this.isMessageAr == false && this.isMessageEn == false ){
                this.disabled = true ;
                const fd = new FormData(this.$refs.not_form);
                fd.append('id', this.not_id);
                await axios.post('/send-notify', fd , {
                    headers : {
                        Authorization : `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then( (res)=>{
                    if( res.data.key == 'success' ){
                        this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                        this.disabled = false ;

                        this.titleAr  = '';
                        this.titleEn  = '';
                        this.messageAr  = '';
                        this.messageEn  = '';

                        setTimeout(() => {
                            this.visible = false ;
                        }, 1000);
                    }else{
                        this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                        this.disabled = false ;
                    }
                } )
                .catch( (err)=>{
                    this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                    this.disabled = false ;
                } )
            }
            
        },
        // get doctors 
        async getDoctors(){
            await axios.get('/doctors', {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.doctors = res.data.data ;
                    this.isShown = true ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
            } )
        }
    },
    mounted() {
        this.getDoctors();
        setTimeout(() => {
            console.log(document.querySelector('.p-icon p-sortable-column-icon'))
        }, 1000);
    }
}
</script>


<style scoped>

.spinner-border {
    position: absolute;
    width: 20px;
    height: 20px;
    color: #df342f;
}
</style>
<style lang="scss">
    .specialist {
        .p-datatable-table{
            min-width: 90rem !important;
        }
    }
    #specManage{    
        .form-group{
            input{
                border: none;
                width: 250px;
                height: 35px;
                font-size: 12px;
                &::placeholder{
                    color: #dedede;
                }
            }
            .search{
                position: absolute;
                left: 11px;
                top: 10px;
                font-size: 13px;
            }
        }
        .add_doctor{
            width: 45px;
            height: 35px;
            border-radius: 3px;
            background-color: #40a8e0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff !important;
            margin: 0 13px;
        }
    }  
    .deactivate{
        background-color: #df342f !important;
        color:#fff !important;
        width:117px !important;
        font-size:10px !important;
    }
    .activate{
        background-color: #4aa236 !important;
        color:#fff !important;
        font-size: 10px !important;
        width:117px !important;
    }
    .grayColor{
        color: #bbbbbb;
        font-size: 13px;
    }
    .edit_doctor{
        background-color: rgb(206 172 85 / 19%);
        svg{
            color:#ceac55;
            font-size: 12px;
        }
    }
    .notify{
        background-color: #40a8e027;
        cursor: pointer;
        svg{
            color:#40a8e0;
            font-size: 12px;
        }
    }
    .delete{
        background-color: #ed49492f;
        cursor: pointer;
        svg{
            color:#ed4949 ;
            font-size: 12px;
        }

    }
    .notify, .edit_doctor, .delete{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .p-datatable .p-datatable-tbody > tr {
        color: #ababab !important;
    }
    .p-datatable .p-datatable-tbody > tr td.rate{
        color:#ceac55 ;
    }
    .p-datatable .p-datatable-tbody > tr td.sessions{
        color:#40a8e0 ;
    }
</style>