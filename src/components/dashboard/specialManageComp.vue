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
            <Column field="name" header="اسم الاخصائي" sortable></Column>
            <Column field="phone" header="رقم الجوال" sortable></Column>
            <Column field="email" header="البريد الالكتروني" sortable></Column>
            <Column field="sessionCount" header="عدد الجلسات التي قام بها" sortable class="sessions"></Column>
            <Column field="averageRating" header="التقييم" sortable class="rate">
                <template #body="slotProps">

                    <div class="d-flex">
                        <!-- edit  -->
                        <router-link  to="/rates/1" class="" @click="click(slotProps.data._id)">
                            عرض التقييم
                        </router-link>
                       
                    </div>
                </template>
            </Column>

            <Column  header="" >
                <template #body="slotProps">

                   <div class="">
                        <button class="btn deactivate" @click="click(slotProps.data._id)"> الغاء تفعيل الحساب </button>
                        <!-- <button class="btn activate" @click="click(slotProps.data._id)">  تفعيل الحساب </button> -->
                   </div>
                </template>
            </Column>

            
            <Column  header="" >
                <template #body="slotProps">

                   <div class="d-flex">
                        <!-- edit  -->
                        <router-link  to="/" class="edit_doctor" @click="click(slotProps.data._id)">
                                <i class="fa-solid fa-pen-to-square" ></i>
                        </router-link>
                        <!-- notify  -->
                        <span class="notify mx-2" @click="openNotiftDialog(slotProps.data._id)">
                            <i class="fa-regular fa-bell"></i>
                        </span>
                        <!-- delete  -->
                        <span class="delete">
                            <i class="fa-regular fa-trash-can"></i>
                        </span>
                   </div>
                </template>
            </Column>
        </DataTable>
    </div>


    <!-- send notification  -->
    <Dialog v-model:visible="visible" modal  :style="{ width: '50vw' }">
        <h4 class="text-center main-color fw-6"> ارسال اشعار </h4>
        <form>
                <div class="form-group">
                    <label for="" class="d-block fw-6 mb-2">
                            عنوان الاشعار 
                    </label>
                    <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال عنوان الاشعار" />

                </div>


                <div class="form-group">
                    <label for="" class="d-block fw-6 mb-2">
                            محتوى الاشعار 
                    </label>
                    <Textarea v-model="bio_ar" autoResize rows="5" class="default_input default_textarea w-100" cols="30" placeholder="الرجاء ادخال محتوى الاشعار" />
                </div>

                <div class="d-flex justify-content-center align-items-center mt-3">
                    <button class="btn main_btn w-50 mx-auo pt-2 pb-2"> ارسال </button>
                </div>

        </form>
    </Dialog>

</template>

<script>
import { ProductService } from '@/services/customerServices';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { FilterMatchMode } from 'primevue/api';
import Dialog from 'primevue/dialog';

// import ColumnGroup from 'primevue/columngroup';   // optional
// import Row from 'primevue/row';                   // optional
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

export default {
    data() {
        return {
            products: null,
            visible : false,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },

        };
    },
    components:{
        DataTable,
        Column,
        InputText,
        Dialog,
        Textarea
        // ColumnGroup,
        // Row
    },
    methods:{
        click(a){
            console.log(a)
        },
        openNotiftDialog(id){
            this.visible = true ;
            console.log(id);
        }
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
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
        width:157px !important;
        font-size:14px !important;
    }
    .activate{
        background-color: #4aa236 !important;
        color:#fff !important;
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