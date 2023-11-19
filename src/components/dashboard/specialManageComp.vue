<template>
    <section id="specManage" class="pt-3 pb-3 px-5 flex_between">
        <div>
            <h6 class="fw-bold blackColor"> ادارة الاخصائيين </h6>
            <p class="grayColor"> يمكنك اضافة اخصائي جديد وامكانية تعديله او حذفه </p>
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
            <!-- add  -->
            <div class="add">
                <router-link to="/addSpecialist" class="add_doctor">
                    <i class="fa-solid fa-plus"></i>
                </router-link>
            </div>
        </div>
        
    </section>

    <!-- table  -->
    <div class=" ">

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
             
            <template #empty> No customers found. </template>

            <Column  header="رقم" >
                <template #body="slotProps">
                <!-- Add row numbers to your table -->
                {{  slotProps.index + 1  }}
                </template>
            </Column>
            <Column field="name" header="اسم الاخصائي" sortable></Column>
            <Column field="phone" header="رقم الجوال" sortable></Column>
            <Column field="email" header="البريد الالكتروني" sortable></Column>
            <Column field="sessionCount" header="عدد الجلسات التي قام بها" sortable class="sessions"></Column>
            <Column field="averageRating" header="التقييم" sortable class="rate">
                <template #body="slotProps">

                    <div class="d-flex">
                        <!-- edit  -->
                        <router-link  :to="'/rates/'+slotProps.data.id" class="" @click="click(slotProps.data._id)">
                            عرض التقييم
                        </router-link>
                       
                    </div>
                </template>
            </Column>

            <Column  header="" >
                <template #body="slotProps">

                   <div class="">
                        <button class="btn deactivate"  v-if="slotProps.data.isApproved== true" @click="deactive(slotProps.data.id)"> 
                            الغاء تفعيل الحساب 

                        </button>
                        <button class="btn activate"  v-if="slotProps.data.isApproved== false" @click="deactive(slotProps.data.id)">  
                            تفعيل الحساب 
                        </button>
                   </div>
                </template>
            </Column>

            
            <Column  header="" >
                <template #body="slotProps">

                   <div class="d-flex">
                        <!-- edit  -->
                        <router-link  :to="'/editDoctor/'+slotProps.data.id" class="edit_doctor">
                                <i class="fa-solid fa-pen-to-square" ></i>
                        </router-link>
                        <!-- notify  -->
                        <span class="notify mx-2" @click="openNotiftDialog(slotProps.data.id)">
                            <i class="fa-regular fa-bell"></i>
                        </span>
                        <!-- delete  -->
                        <span class="delete" @click="deleteDoctor(slotProps.data.id)">
                            <i class="fa-regular fa-trash-can"></i>
                        </span>
                   </div>
                </template>
            </Column>
        </DataTable>

        <Skeleton v-else style="width:90%;margin:auto" height="10rem"></Skeleton>
    </div>


    <!-- send notification  -->
    <Dialog v-model:visible="visible" modal  :style="{ width: '50vw' }">
        <h4 class="text-center main-color fw-6"> ارسال اشعار </h4>
        <form @submit.prevent="sendNot()" ref="not_form">
                <div class="form-group mb-2">
                    <label for="" class="d-block fw-6 mb-2">
                            عنوان الاشعار بالعربية 
                    </label>
                    <InputText type="text" v-model="titleAr" name="titleAr" class="default_input w-100" placeholder="الرجاء ادخال عنوان الاشعار بالعربية" />

                </div>

                <div class="form-group mb-2">
                    <label for="" class="d-block fw-6 mb-2">
                            عنوان الاشعار بالانجليزية 
                    </label>
                    <InputText type="text" v-model="titleEn" name="titleEn" class="default_input w-100" placeholder="الرجاء ادخال عنوان الاشعار بالانجليزية" />

                </div>


                <div class="form-group mb-2">
                    <label for="" class="d-block fw-6 mb-2">
                            محتوى الاشعار بالعربية 
                    </label>
                    <Textarea v-model="messageAr" name="messageAr" autoResize rows="5" class="default_input default_textarea w-100" cols="30" placeholder="الرجاء ادخال محتوى الاشعار بالعربية" />
                </div>

                <div class="form-group mb-2">
                    <label for="" class="d-block fw-6 mb-2">
                            محتوى الاشعار بالانجليزية 
                    </label>
                    <Textarea v-model="messageEn" name="messageEn" autoResize rows="5" class="default_input default_textarea w-100" cols="30" placeholder="الرجاء ادخال محتوى الاشعار بالانجليزية" />
                </div>

                <div class="d-flex justify-content-center align-items-center mt-3">
                    <button class="btn main_btn w-50 mx-auo pt-2 pb-2" :disabled="disabled">
                         <span v-if="!disabled">ارسال</span> 
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
        async deactive(id){
            const fd = new FormData();
            await axios.put(`/show-hidden-doctor?id=${id}`, fd ,{
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                    // setTimeout(() => {
                        this.getDoctors()
                    // }, 1000);
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                this.disabled = false ;
            } )
        },
        // delete doctors 
        async deleteDoctor(id){
            await axios.delete(`/delete-doctor?id=${id}`,{
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                    // setTimeout(() => {
                        this.getDoctors()
                    // }, 1000);
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                this.disabled = false ;
            } )
        },
        openNotiftDialog(id){
            this.visible = true ;
            this.not_id = id ;
        },
        // send Notification 
        async sendNot(){
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
                    }, 2000);
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                this.disabled = false ;
            } )
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

<style lang="scss">
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