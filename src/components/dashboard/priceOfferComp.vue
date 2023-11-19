<template>
    <section class="pt-3 pb-3 px-5 ">
        <div>
            <h6 class="fw-bold blackColor"> ارسال عرض سعر </h6>
            <p class="grayColor"> 
                اضافة خطط علاجية
            </p>
        </div>
    </section>

    <section class="main-bg pt-3 pb-3 mx-5 mb-3">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> تحديد عدد الجلسات ومدة العلاج التقريبية </h6>
        <form class="mx-5 mt-3" @submit.prevent="sendSessionsInfo">

            <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="form-group mb-3">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            عدد الجلسات 
                            <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                        </label>

                        <Dropdown v-model="selectedNum" :options="sessions" optionLabel="name" placeholder="اختر عدد الجلسات" class="default_input w-100 w-full md:w-14rem" />
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-group mb-3">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            مدة انتهاء الخطة (عدد الايام )
                            <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                        </label>
                        <InputNumber v-model="durationDays" inputId="integeronly" class="default_input w-100" placeholder="اكتب عدد الأيام المتوقعة"/>
                    </div>
                </div>
            </div>

            <div>
                <button class="main_btn btn w-25" :disabled="numDisabled"> تأكيد </button>
            </div>
        </form>
    </section>


    <!-- appended sessions  -->
    <section class="" v-if="showSessionsNum">

        <!-- single session  -->
        <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-for="(session, index) in selectedNum.name" :key="index">
            <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> الجلسة رقم {{  session  }} </h6>
            <form class="mx-5 mt-3">
                <div class="row">

                    <div class="col-md-6 mb-2">
                        <div class="form-group">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                نوع الجلسة 
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>

                            <Dropdown v-model="selectedType[index]" :options="types" optionLabel="title" placeholder="الرجاء تحديد نوع الجلسة" class="default_input w-100 w-full md:w-14rem" />
                        </div>
                    </div>

                    <div class="col-md-6 mb-2">
                        <div class="form-group ">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                التخصص 
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>

                            <Dropdown v-model="selectedSpec[index]" :options="specs" optionLabel="name" placeholder="الرجاء تحديد التخصص" class="default_input w-100 w-full md:w-14rem" />
                        </div>
                    </div>


                    <div class="col-md-6 mb-2">
                        <div class="form-group ">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                اسم الجلسة
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>
                            <InputText type="text" v-model="sessionName[index]" class="default_input w-100" placeholder="الرجاء ادخال اسم الجلسة" />
                        </div>
                    </div>

                    <div class="col-md-6 mb-2">
                        <div class="form-group ">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                المدة
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>
                            <InputNumber v-model="sessionDuration[index]" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال المدة (بالدقائق)"/>
                        </div>
                    </div>

                    <div class="col-md-12 mb-2">
                        <div class="form-group ">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                ارشادات الجلسة
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>
                            <InputText type="text" v-model="instructions[index]" class="default_input w-100" placeholder="الرجاء ادخال ارشادات الجلسة" />
                        </div>
                    </div>
                </div>
            </form>
        </section>

        <!-- treats => الادوية والعلاجات  -->
        <section class="main-bg pt-3 pb-3 mx-5 mb-3" >
            <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> الادوية والعلاجات </h6>
            <form class="mx-5 mt-3">
                <div class="row">

                    <section class="row" ref="treat_item">
                        <div class="col-md-6 mb-2">
                            <div class="form-group ">
                                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                    اسم الدوء بالعربي
                                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                                </label>
                                <InputText type="text" v-model="nameAr" class="default_input w-100" placeholder="الرجاء ادخال اسم الدوء بالعربي" />
                            </div>
                        </div>

                        <div class="col-md-6 mb-2">
                            <div class="form-group ">
                                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                    اسم الدواء بالانجليزية
                                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                                </label>
                                <InputText type="text" v-model="nameEn" class="default_input w-100" placeholder="الرجاء ادخال اسم الدواء بالانجليزية" />
                            </div>
                        </div>
                
                        <div class="col-md-12 mb-2">
                            <div class="form-group position-relative">
                                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                    صورة الدواء
                                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                                </label>
                                <InputText type="text" v-model="fileName" ref="file_name" class="default_input w-100" placeholder="الرجاء ارفاق صورة الدواء" />
                                <!-- icon  -->
                                <span class="icon_upload">
                                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                </span>

                                <!-- input file  -->
                                <input type="file" name="" id="" class="input_file" @change="uploadTreatImage">

                            </div>
                        </div>

                    </section>

                    <!-- appended  -->
                    <section class="row" v-for="(item, index) in items" :key="index">
                        <div class="col-md-6 mb-2">
                            <div class="form-group ">
                                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                    اسم الدوء بالعربي
                                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                                </label>
                                <InputText type="text" v-model="namesAr[index]" class="default_input w-100" placeholder="الرجاء ادخال اسم الدوء بالعربي" />
                            </div>
                        </div>

                        <div class="col-md-6 mb-2">
                            <div class="form-group ">
                                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                    اسم الدواء بالانجليزية
                                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                                </label>
                                <InputText type="text" v-model="namesEn[index]" class="default_input w-100" placeholder="الرجاء ادخال اسم الدواء بالانجليزية" />
                            </div>
                        </div>
                
                        <div class="col-md-12 mb-2">
                            <div class="form-group position-relative">
                                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                    صورة الدواء
                                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                                </label>
                                <InputText type="text" v-model="filesName[index]" class="default_input w-100" placeholder="الرجاء ارفاق صورة الدواء" />
                                <!-- icon  -->
                                <span class="icon_upload">
                                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                </span>

                                <!-- input file  -->
                                <input type="file" name="" id="" ref="file_name" class="input_file" @change="uploadTreatImage1(index)">

                            </div>
                        </div>
                    </section>

                    <!-- add new treat  -->
                    <div class="add_treat">
                        <button class="btn d-flex align-items-center main-color" @click.prevent="addNewTreat">
                            <span class="add_icon flex_center whiteColor">
                                <i class="fa-solid fa-plus"></i>
                            </span>
                            <span class="mx-2 fs-16 fw-bold main-color">اضافة دواء جديد</span>
                        </button>
                    </div>
                </div>
            </form>
        </section>

        <!-- التعليمات ولارشادات  -->
        <section class="main-bg pt-3 pb-3 mx-5 mb-3">
            <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> التعليمات والإرشادات </h6>
            <form class="mx-5 mt-3" @submit.prevent="sendSessionsInfo">

                <div class="form-group">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        التعليمات والإرشادات 
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>

                    <textarea name="" class="form-control" id="" cols="30" rows="7" placeholder="التعليمات والارشادات"></textarea>
                </div>
            </form>
        </section>

        <!-- التعليمات ولارشادات  -->
        <section class="main-bg pt-3 pb-3 mx-5 mb-3">
            <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> السعر الكلي </h6>
            <form class="mx-5 mt-3" @submit.prevent="sendSessionsInfo">

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                السعر 
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>
                            <InputNumber v-model="value1" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال السعر"/>
                        </div>
                    </div>
                </div>
            </form>
        </section>

         <!-- client info  -->
        <section class="main-bg pt-3 pb-3 mx-5 mb-3">
            <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> بيانات العميل </h6>
            <!-- main info  -->
            <section class="client_info mx-5 d-flex align-items-center">
                <!-- client image  -->
                <div class="client_image">
                    <img :src="require('@/assets/imgs/logo.png')" alt="client image">
                </div>
                <!-- client info  -->
                <div class="client_details mx-3">

                    <div class="d-flex mb-2">
                        <span class="fw-6 fs-14 blackColor"> Ahmed Samer </span>
                        
                    </div>

                    <!-- phone  -->
                    <div class="phone d-flex ">
                        <span class="phone_icon flex_center">
                            <i class="fa-solid fa-phone-flip sec-color fs-10"></i>
                        </span>
                        <span class="phone_num fs-13 mx-3"> 01013746111 </span>
                    </div>
                </div>
            </section>
        </section>

        <div class=" pt-3 pb-3 mx-5 mb-3">
            <button class="btn w-25 main_btn " :disabled="disabled"> تأكيد </button>
        </div>

        
    </section>

    <Toast />
</template>

<script>
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            sessions : [
                {
                    id:1,
                    name : 1
                },
                {
                    id:2,
                    name : 2
                },
                {
                    id:3,
                    name : 3
                },
                {
                    id:4,
                    name : 4
                },
                {
                    id:5,
                    name : 5
                },
                {
                    id:5,
                    name : 5
                },
                {
                    id:6,
                    name : 6
                },
                {
                    id:7,
                    name : 7
                },
                {
                    id:8,
                    name : 8
                },
                {
                    id:9,
                    name : 9
                },
                {
                    id:10,
                    name : 10
                },
            ],
            types : [
                {
                    id:1 ,
                    name : 'individual',
                    title : 'فردي'
                },
                {
                    id:2 ,
                    name : 'group',
                    title : 'جماعي'
                },
            ],
            selectedType : [],
            selectedNum : null,
            selectedSpec : [],
            sessionName : [],
            sessionDuration : [],
            instructions : [],
            name : '',
            value1 : null,
            showSessionsNum :false ,
            fileName : '',
            filesName : [],
            items : [],
            durationDays : null ,

            nameAr : null,
            nameEn : null,

            namesAr : [],
            namesEn : [],
            numDisabled : true,
            disabled : false,

            sessions_appended : []
        }
    },
    computed:{
        ...mapGetters('setting',['countries', 'specs']),
    },
    watch:{
        selectedNum(){
            if( this.selectedNum == null ){
                this.numDisabled = true ;
            }else{
                this.numDisabled = false ;
            }
        },
        // set selected type  
        selectedType:{
            handler(){
                for( let i = 0 ; i < this.selectedType.length ; i++ ){
                    this.sessions_appended.push({
                        type : this.selectedType[i].name 
                    })
                    console.log(this.sessions_appended)
                }
            },
            deep : true     
        },
        // set selected spcifications 
        selectedSpec : {
            handler(){
                for( let i = 0 ; i < this.selectedSpec.length ; i++ ){
                    this.sessions_appended.push({
                        specialization : this.selectedSpec[i].id  
                    })
                    console.log(this.sessions_appended)
                }
            },
            deep : true 
        }
    },
   
    methods:{
        ...mapActions('setting',['getCountries']),
        sendSessionsInfo(){
            console.log(this.selectedNum)
            this.showSessionsNum = true ;
        },
        uploadTreatImage(e){
            let file = e.target.files[0];
            
            console.log(file);
            this.fileName = file.name ;
        },
        uploadTreatImage1(index) {
            let file = this.$refs.file_name[index].files[0];
            console.log(file);
            this.filesName[index] = file.name;
            // You can handle the file upload logic here
        },

        addNewTreat(){
            let appendedSection = this.$refs.treat_item ;

            // let appendedArea = this.$refs.added_treats ;

            // console.log(appendedArea)
            // console.log(appendedSection)
            // appendedArea.html = appendedSection
            this.items.push(appendedSection)
        },

        appenedSessions(){
            
        },

        // send offer main method 
        async sendOffer(){
            this.disabled = true ;
            const fd = new FormData();
            fd.append('id', this.$route.params.id);
            fd.append('sessionsNumber', this.selectedNum.name);
            fd.append('duration', this.durationDays);
            await axios.put('/send-offer', fd , {
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
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
    components:{
        Dropdown,
        InputNumber,
        InputText,
        Toast
    },
    mounted(){
        this.getCountries();
    }
}
</script>

<style>
    .icon_upload{
        position: absolute;
        left:20px;
        top: 50%;
    }
    .input_file{
        position: absolute;
        width: 100%;
        height:100%;
        top:0;
        left:0;
        opacity:0;
    }
</style>