<template>
    <section class="pt-3 pb-3 px-5 ">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('offer.title') }} </h6>
            <p class="grayColor"> 
                {{ $t('offer.add') }}
            </p>
        </div>
    </section>

    <section class="  pt-3 pb-3 mx-5 mb-3" v-if="isShown">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ $t('offer.info') }} </h6>
        <form class="mx-5 mt-3" @submit.prevent="sendSessionsInfo">

            <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="form-group mb-3 sessionNum">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('offer.num') }} 
                            <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                        </label>

                        <Dropdown v-model="selectedNum" :options="sessions" @change="handleValid" optionLabel="name" :placeholder="$t('offer.numPlc')" class="default_input w-100 w-full md:w-14rem" :disabled="isEdit" />

                        <span class="error text-danger fs-13" v-if="isNum"> {{$t('offer.numPlc') }} </span>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-group mb-3">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('offer.duration') }}
                            <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                        </label>
                        <!-- <InputNumber v-model="durationDays" inputId="integeronly" class="default_input w-100" placeholder="اكتب عدد الأيام المتوقعة"/> -->
                        <input type="number" min="1"  v-model="durationDays" @input="handleValid" class="form-control default_input w-100" :placeholder="$t('offer.durationPlc')" :readonly="isEdit">

                        <span class="error text-danger fs-13" v-if="isDays"> {{ $t('offer.durationPlc') }} </span>
                    </div>
                </div>
            </div>

            <div>
                <button class="main_btn btn w-25" :disabled="numDisabled"> {{ $t('auth.confirm') }} </button>
            </div>
        </form>
    </section>
    
    <Skeleton v-else class="px-5 mb-3 mx-auto" style="width:90%" height="10rem"></Skeleton>

    <!-- appended sessions  -->
    <section class="" v-if="showSessionsNum">

        <!-- single session  -->
        <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-for="(session, index) in selectedNum.name" :key="index">
            <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ $t('offer.sessionIndex') }} {{  session  }} </h6>
            <form class="mx-5 mt-3">
                <div class="row">

                    <div class="col-md-6 mb-2">
                        <div class="sessionType form-group">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                {{ $t('offer.type') }} 
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>

                            <Dropdown v-model="selectedType[index]" :options="types" optionLabel="title" :placeholder="$t('offer.typePlc')" class="default_input w-100 w-full md:w-14rem" />
                            <span class="error text-danger fs-13" v-if="isTyped[index]"> {{ $t('offer.typePlc') }} </span>
                        </div>
                    </div>

                    <div class="col-md-6 mb-2">
                        <div class="form-group ">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                {{ $t('offer.spec') }} 
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>

                            <Dropdown v-model="selectedSpec[index]" :options="specs" optionLabel="name" :placeholder="$t('offer.specPlc')" class="default_input w-100 w-full md:w-14rem" />
                            <span class="error text-danger fs-13" v-if="isSpec[index]"> {{ $t('offer.specPlc') }} </span>

                        </div>
                    </div>


                    <div class="col-md-6 mb-2">
                        <div class="form-group ">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                {{ $t('offer.name') }}
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>
                            <InputText type="text" v-model="sessionName[index]" class="default_input w-100" :placeholder="$t('offer.namePlc')" />
                            <span class="error text-danger fs-13" v-if="isSession[index]"> {{ $t('offer.namePlc') }} </span>

                        </div>
                    </div>

                    <div class="col-md-6 mb-2">
                        <div class="form-group ">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                {{ $t('offer.time') }}
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>
                            <InputNumber v-model="sessionDuration[index]" inputId="integeronly" class="default_input w-100" :placeholder="$t('offer.timePlc')"/>
                            <span class="error text-danger fs-13" v-if="isDuration[index]"> {{ $t('offer.timePlc') }} </span>

                        </div>
                    </div>

                    <div class="col-md-12 mb-2">
                        <div class="form-group ">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                {{ $t('offer.inst') }}
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>
                            <InputText type="text" v-model="instructions[index]" class="default_input w-100" :placeholder="$t('offer.instPlc')" />
                            <span class="error text-danger fs-13" v-if="isInst[index]"> {{ $t('offer.instPlc') }} </span>

                        </div>
                    </div>
                </div>
            </form>
        </section>

        <!-- treats => الادوية والعلاجات  -->
        <section class="main-bg pt-3 pb-3 mx-5 mb-3" >
            <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ $t('offer.med') }} </h6>
            <form class="mx-5 mt-3" ref="medicines">
                <div class="row">

                    <!-- shows only in add case  -->
                    <section class="row" ref="treat_item" v-if="!$route.fullPath.includes('editPriceOffer')">
                        <div class="col-md-6 mb-2">
                            <div class="form-group ">
                                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                    {{ $t('offer.medNameAr') }}
                                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                                </label>
                                <InputText type="text" v-model="nameAr" class="default_input w-100" :placeholder="$t('offer.arPlc')" />
                                <span class="error text-danger fs-13" v-if="isMedAr"> {{ $t('offer.arPlc') }} </span>
                            </div>
                        </div>

                        <div class="col-md-6 mb-2">
                            <div class="form-group ">
                                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                    {{ $t('offer.en') }}
                                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                                </label>
                                <InputText type="text" v-model="nameEn" class="default_input w-100" :placeholder="$t('offer.enPlc')" />
                                <span class="error text-danger fs-13" v-if="isMedEn"> {{ $t('offer.enPlc') }} </span>

                            </div>
                        </div>
                
                        <div class="col-md-12 mb-2">
                            <div class="form-group position-relative">
                                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                    {{ $t('offer.medImage') }}
                                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                                </label>
                                <InputText type="text" v-model="fileName" ref="file_name" class="default_input w-100" :placeholder="$t('offer.imgPlc')" />
                                <!-- icon  -->
                                <span class="icon_upload">
                                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                </span>

                                <!-- input file  -->
                                <input type="file" name="images" id="" class="input_file" @change="uploadTreatImage">

                                <span class="error text-danger fs-13" v-if="IsMedImage"> {{ $t('offer.imgPlc') }} </span>
                            </div>
                        </div>

                    </section>

                    <!-- appended  -->
                    <section class="row" v-for="(item, index) in items" :key="index">
                        <div class="col-md-6 mb-2">
                            <div class="form-group ">
                                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                    {{ $t('offer.medNameAr') }}
                                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                                </label>
                                <InputText type="text" v-model="namesAr[index]" class="default_input w-100" :placeholder="$t('offer.arPlc')" />
                                <span class="error text-danger fs-13" v-if="isNamedAr[index]"> {{ $t('offer.arPlc') }} </span>
                            </div>
                        </div>

                        <div class="col-md-6 mb-2">
                            <div class="form-group ">
                                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                    {{ $t('offer.en') }}
                                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                                </label>
                                <InputText type="text" v-model="namesEn[index]" class="default_input w-100" :placeholder="$t('offer.enPlc')" />
                                <span class="error text-danger fs-13" v-if="isNamedEn[index]"> {{ $t('offer.enPlc') }} </span>

                            </div>
                        </div>
                
                        <div class="col-md-12 mb-2">
                            <div class="form-group position-relative">
                                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                    {{ $t('offer.medImage') }}
                                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                                </label>
                                <InputText type="text" v-model="filesName[index]" class="default_input w-100" :placeholder="$t('offer.imgPlc')" />
                                <!-- icon  -->
                                <span class="icon_upload">
                                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                </span>

                                <!-- input file  -->
                                <input type="file" name="images" id="" ref="file_name" class="input_file" @change="uploadTreatImage1(index)">

                                <!-- validations  -->
                                <span class="error text-danger fs-13" v-if="isFiles[index]"> {{ $t('offer.imgPlc') }} </span>

                                <button class="btn showImage" type="button" @click="visible[index]=true" v-if="isEdit">
                                    <i class="fas fa-eye"></i>
                                </button>

                                <Dialog v-model:visible="visible[index]" modal  :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                                    <img :src="filesName[index]" class="med_image_modal" alt="">
                                </Dialog>
                            </div>
                        </div>
                    </section>

                    <!-- add new treat  -->
                    <div class="add_treat">
                        <button class="btn d-flex align-items-center main-color" @click.prevent="addNewTreat">
                            <span class="add_icon flex_center whiteColor">
                                <i class="fa-solid fa-plus"></i>
                            </span>
                            <span class="mx-2 fs-16 fw-bold main-color">{{ $t('offer.addMed') }}</span>
                        </button>
                    </div>
                </div>
            </form>
        </section>

        <!-- التعليمات ولارشادات  -->
        <section class="main-bg pt-3 pb-3 mx-5 mb-3">
            <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ $t('treat.insts') }} </h6>
            <form class="mx-5 mt-3" >

                <div class="form-group">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        {{ $t('treat.insts') }} 
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>

                    <textarea name="" v-model="public_instructions" class="form-control" id="" cols="30" rows="7" :placeholder="$t('treat.insts')"></textarea>

                    <span class="error text-danger fs-13" v-if="isPublicInst"> {{ $t('treat.insts') }} </span>
                </div>
            </form>
        </section>

        <!-- السعر  -->
        <section class="main-bg pt-3 pb-3 mx-5 mb-3">
            <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ $t('offer.price') }} </h6>
            <form class="mx-5 mt-3">

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                {{ $t('offer.price') }} 
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>
                            <input type="number" min="1" v-model="price"  class="form-control default_input w-100" :placeholder="$t('offer.pricePlc')" >
                            <span class="error text-danger fs-13" v-if="isPriced"> {{ $t('offer.pricePlc') }} </span>

                        </div>
                    </div>
                </div>
            </form>
        </section>

         <!-- client info  -->
        <section class="main-bg pt-3 pb-3 mx-5 mb-3">
            <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ $t('treat.clientInfo') }} </h6>
            <!-- main info  -->
            <section class="client_info mx-5 d-flex align-items-center">
                <!-- client image  -->
                <div class="client_image">
                    <img :src="patient.avatar" alt="client image">
                </div>
                <!-- client info  -->
                <div class="client_details mx-3">

                    <div class="d-flex mb-2">
                        <span class="fw-6 fs-14 blackColor"> {{ patient.name }} </span>
                        
                    </div>

                    <!-- phone  -->
                    <div class="phone d-flex ">
                        <span class="phone_icon flex_center">
                            <i class="fa-solid fa-phone-flip sec-color fs-10"></i>
                        </span>
                        <span class="phone_num fs-13 mx-3"> {{ patient.phone }} </span>
                    </div>
                </div>
            </section>
        </section>

        <!-- add  -->
        <div class=" pt-3 pb-3 mx-5 mb-3" @click.prevent="sendOffer" v-if="!$route.fullPath.includes('editPriceOffer')">
            <button class="btn w-25 main_btn " :disabled="disabled"> {{ $t('auth.confirm') }} </button>
        </div>
        <!-- edit  -->
        <div class=" pt-3 pb-3 mx-5 mb-3" @click.prevent="updateOffer" v-if="$route.fullPath.includes('editPriceOffer')">
            <button class="btn w-25 main_btn " :disabled="disabled_update"> {{ $t('auth.confirm') }} </button>
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
import Dialog from 'primevue/dialog';

import Skeleton from 'primevue/skeleton';


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
            selectedNum : {name : 0}, // review it in add
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
            durationDays : '' ,

            nameAr : '',
            nameEn : '',

            namesAr : [],
            namesEn : [],
            numDisabled : false,
            disabled : false,

            single_med_image : null,
            med_images : [],

            sessions_appended : [],
            medicines_appended : [],
            images_appended : [],


            public_instructions : '',
            price : '',

            patient : {},
            med_src : '',
            visible : [],
            disabled_update : false,

            deleted_iamges : [],
            appedended_deleted_images : [],

            isEdit : false,
            isShown : true,

            // validations 
            isNum : false,
            isDays : false,
            isTyped : [],
            isSpec  : [],
            isSession : [],
            isInst : [],
            isDuration : [],
            isMedAr : '',
            isMedEn : '',
            IsMedImage : '',
            isNamedAr : [],
            isNamedEn : [],
            isFiles : [],
            isPublicInst : false,
            isPriced : false
        }
    },
    // computed:{
    // },
    watch:{   
        selectedType: {
            handler(newVal) {
                // This function will be called whenever selectedType changes
                console.log('Selected Type changed:', newVal);
                // Add your logic here to respond to changes
            },
            deep: true, // Use deep: true if selectedType is an array or object
        },
        sessionName: {
            handler(newVal) {
                // This function will be called whenever selectedType changes
                console.log('Selected Type changed:', newVal);
                // Add your logic here to respond to changes
            },
            deep: true, // Use deep: true if selectedType is an array or object
        },
            
    },
   
    methods:{
        ...mapActions('setting',['getCountries']),
        handleValid(){
            // if( this.selectedNum == '' || this.durationDays == '' ){
            //     this.numDisabled = true ;
            // }else if( this.selectedNum != '' || this.durationDays != '' ){
            //     this.numDisabled = false ;
            // } 
        },
        handleMainSub(){
            if( this.public_instructions == '' || this.price == '' ){
                this.disabled = true ;
            }else{
                this.disabled = false ;
            }
        },
        sendSessionsInfo(){
            if( this.selectedNum.name == 0 ){
                this.isNum = true ;
            }else{
                this.isNum = false ;
            }

            if( this.durationDays == '' ){
                this.isDays = true ;
            }else{
                this.isDays = false ;
            }

            if( this.isNum == false && this.isDays == false ){
                this.showSessionsNum = true ;
            }
            
        },
        uploadTreatImage(e){
            let file = e.target.files[0];
            
            // console.log(file);
            this.fileName = file.name ;
            this.single_med_image = file;
            this.med_images.push(file)
            // console.log(this.med_images)
        },
        uploadTreatImage1(index) {
            console.log(this.$refs.file_name[index])
            let file = this.$refs.file_name[index].files[0];
            
            this.filesName[index] = file.name;
            // You can handle the file upload logic here
            this.med_images.push(file);

            if( this.$route.fullPath.includes('editPriceOffer') ){
            
                this.appedended_deleted_images.push(this.deleted_iamges[index]);
            }
            console.log(this.appedended_deleted_images)
            console.log(this.deleted_iamges)
        },

        addNewTreat(){
            let appendedSection = this.$refs.treat_item ;

            // let appendedArea = this.$refs.added_treats ;

            // console.log(appendedArea)
            // console.log(appendedSection)
            // appendedArea.html = appendedSection
            this.items.push(appendedSection)
        },


        // send offer main method 
        async sendOffer(){
            for( let i = 0 ; i < this.selectedNum.name ; i++ ){
                if( this.selectedType[i] == null){
                     this.isTyped[i] = true ;
                }else{
                    this.isTyped[i] = false ;
                }
                if( this.selectedSpec[i] == null){
                     this.isSpec[i] = true ;
                }else{
                    this.isSpec[i] = false ;
                }
                if( this.sessionName[i] == null || this.sessionName[i] == ''){
                     this.isSession[i] = true ;
                }else{
                    this.isSession[i] = false ;
                }
                if( this.sessionDuration[i] == null || this.sessionDuration[i] == '' ){
                    this.isDuration[i] = true ;
                }else{
                    this.isDuration[i] = false ;
                }
                if( this.instructions[i] == null || this.instructions[i] == '' ){
                    this.isInst[i] = true ;
                }else{
                    this.isInst[i] = false ;
                }


                if( this.nameAr == '' ){
                    this.isMedAr = true ;
                }else{
                    this.isMedAr = false ;
                }
                if( this.nameEn == '' ){
                    this.isMedEn = true ;
                }else{
                    this.isMedEn = false ;
                }
                if( this.fileName == '' ){
                    this.IsMedImage = true ;
                }else{
                    this.IsMedImage = false ;
                }

                if( this.public_instructions == '' ){
                    this.isPublicInst = true ;
                }else{
                    this.isPublicInst = false ;
                }

                
                if( this.price == '' ){
                    this.isPriced = true ;
                }else{
                    this.isPriced = false ;
                }



                for( let i = 0 ; i < this.items.length ; i++ ){
                    if(this.namesAr[i] == null || this.namesAr[i] == ''){
                        this.isNamedAr[i] = true ;
                    }else{
                        this.isNamedAr[i] = false ;
                    }

                    if(this.namesEn[i] == null || this.namesEn[i] == ''){
                        this.isNamedEn[i] = true ;
                    }else{
                        this.isNamedEn[i] = false ;
                    }
                    // files 
                    if( this.filesName[i] == null || this.filesName[i] == '' ){
                        this.isFiles[i] = true ;
                    }else{
                        this.isFiles[i] = false ;
                    }
                   
                }
                
                
            }

            if( this.isTypedFalse && this.isSpecFalse && this.isSessionFalse && this.isDurationFalse && this.isInstFalse && this.isNamedArFalse && this.isNamedEnFalse && this.isFilesFalse && this.isMedAr == false && this.isMedEn == false && this.IsMedImage == false && this.isPublicInst == false && this.isPriced == false){
                this.mainSend(); 
            }
        },

        // main send 
        async mainSend(){
            this.disabled = true ;
            const fd = new FormData(this.$refs.medicines);
            fd.append('id', this.$route.params.id);
            fd.append('sessionsNumber', this.selectedNum.name);
            fd.append('duration', this.durationDays);

            // add medicienes 
            // this.medicines_appended.push({
            //     ar : this.nameAr,
            //     en : this.nameEn
            // })
            for( let i = 0 ; i < this.items.length ; i++ ){
                this.medicines_appended.push({
                    ar : this.namesAr[i],
                    en : this.namesEn[i],         
                })
            }
            
            // append medicies
            fd.append('medicines', JSON.stringify(this.medicines_appended));

            // add sessions 
            for( let i = 0 ; i < this.selectedNum.name ; i++ ){
                if( this.selectedType[i] != null && this.selectedSpec[i] != null ){
                    this.sessions_appended.push({
                        name : this.sessionName[i],
                        type : this.selectedType[i].name ,
                        duration : this.sessionDuration[i],
                        specialization : this.selectedSpec[i].id  ,
                        instructions : this.instructions[i]
                    })  
                }
                
            }
            // append sessions
            fd.append('sessions', JSON.stringify(this.sessions_appended));

            // add images 
            // for( let i = 0 ; i <  this.med_images.length ; i++ ){
            //     this.images_appended.push(this.med_images[i]);
            // }
            // this.images_appended.push(this.single_med_image);
            // append images 
            // fd.append('images', JSON.stringify(this.med_images,null, 2));

            fd.append('instructions', this.public_instructions);
            fd.append('price', this.price);
            await axios.put('/send-offer', fd , {
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                    setTimeout(() => {
                        this.$router.push('/center/treatManage');
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
        },

        // update offer 
        async updateOffer(){
            for( let i = 0 ; i < this.selectedNum.name ; i++ ){
                if( this.selectedType[i] == null){
                     this.isTyped[i] = true ;
                }else{
                    this.isTyped[i] = false ;
                }
                if( this.selectedSpec[i] == null){
                     this.isSpec[i] = true ;
                }else{
                    this.isSpec[i] = false ;
                }
                if( this.sessionName[i] == null || this.sessionName[i] == ''){
                     this.isSession[i] = true ;
                }else{
                    this.isSession[i] = false ;
                }
                if( this.sessionDuration[i] == null || this.sessionDuration[i] == '' ){
                    this.isDuration[i] = true ;
                }else{
                    this.isDuration[i] = false ;
                }
                if( this.instructions[i] == null || this.instructions[i] == '' ){
                    this.isInst[i] = true ;
                }else{
                    this.isInst[i] = false ;
                }


                // if( this.nameAr == '' ){
                //     this.isMedAr = true ;
                // }else{
                //     this.isMedAr = false ;
                // }
                // if( this.nameEn == '' ){
                //     this.isMedEn = true ;
                // }else{
                //     this.isMedEn = false ;
                // }
                // if( this.fileName == '' ){
                //     this.IsMedImage = true ;
                // }else{
                //     this.IsMedImage = false ;
                // }

                if( this.public_instructions == '' ){
                    this.isPublicInst = true ;
                }else{
                    this.isPublicInst = false ;
                }

                
                if( this.price == '' ){
                    this.isPriced = true ;
                }else{
                    this.isPriced = false ;
                }



                for( let i = 0 ; i < this.items.length ; i++ ){
                    if(this.namesAr[i] == null || this.namesAr[i] == ''){
                        this.isNamedAr[i] = true ;
                    }else{
                        this.isNamedAr[i] = false ;
                    }

                    if(this.namesEn[i] == null || this.namesEn[i] == ''){
                        this.isNamedEn[i] = true ;
                    }else{
                        this.isNamedEn[i] = false ;
                    }
                    // files 
                    if( this.filesName[i] == null || this.filesName[i] == '' ){
                        this.isFiles[i] = true ;
                    }else{
                        this.isFiles[i] = false ;
                    }
                   
                }
                
                
            }

            if( this.isTypedFalse && this.isSpecFalse && this.isSessionFalse && this.isDurationFalse && this.isInstFalse && this.isNamedArFalse && this.isNamedEnFalse && this.isFilesFalse && this.isMedAr == false && this.isMedEn == false && this.IsMedImage == false && this.isPublicInst == false && this.isPriced == false){
                this.mainEdit(); 
            }
        },

        async mainEdit(){
            this.disabled_update = true ;
            const fd = new FormData(this.$refs.medicines);
            fd.append('id', this.$route.params.id);
            fd.append('sessionsNumber', this.selectedNum.name);
            fd.append('duration', this.durationDays);

           
            for( let i = 0 ; i < this.namesAr.length ; i++ ){
                
                // let lastIndex = this.appedended_deleted_images[i].lastIndexOf('/');
                // let fileName = this.appedended_deleted_images[i].substring(lastIndex + 1);


                this.medicines_appended.push({
                    ar : this.namesAr[i],
                    en : this.namesEn[i],
                    image : this.deleted_iamges[i] || null
                })
            }
            // let uniqueMedicines = [ ...new Set(this.medicines_appended) ] ;
            // append medicies
            fd.append('medicines', JSON.stringify(this.medicines_appended));

            fd.append('deleteImages', JSON.stringify(this.appedended_deleted_images));
            // add sessions 
            for( let i = 0 ; i < this.selectedType.length ; i++ ){
                this.sessions_appended.push({
                    name : this.sessionName[i],
                    type : this.selectedType[i].name ,
                    duration : this.sessionDuration[i],
                    specialization : this.selectedSpec[i].id  ,
                    instructions : this.instructions[i]
                })  
            }
            // append sessions
            fd.append('sessions', JSON.stringify(this.sessions_appended));

            // add images 
            // for( let i = 0 ; i <  this.med_images.length ; i++ ){
            //     this.images_appended.push(this.med_images[i]);
            // }
            // this.images_appended.push(this.single_med_image);
            // append images 
            // fd.append('images', JSON.stringify(this.med_images,null, 2));

            fd.append('instructions', this.public_instructions);
            fd.append('price', this.price);
            await axios.put('/send-offer', fd , {
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    // remove duplicated 
                    this.disabled_update = false ;
                    this.sessions_appended = [];
                    this.medicines_appended = [];
                    this.appedended_deleted_images = [];
                    setTimeout(() => {
                        this.getTreatment();
                    }, 1000);
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    this.disabled_update = false ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                this.disabled_update = false ;
            } )
        },

        // get price offer  
        async getTreatment(){
            await axios.get(`/treatmentPlans-details?id=${this.$route.params.id}`, {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                const response = res.data.data ;
                if( res.data.key === 'success' ){

                    // hide skeleton


                    // this.selectedNum = response.totalSessions ;
                    this.selectedNum.name = response.totalSessions ;
                    this.durationDays = response.durationNum ;
                    document.querySelector('.p-placeholder').innerHTML = response.totalSessions ;
                    this.numDisabled = false ;
                    this.showSessionsNum = true ;

                    this.price = response.price ;
                    this.public_instructions = response.instructions ;

                    // get sessions 
                    for( let i = 0 ; i < response.totalSessions ; i++ ){
                        this.sessionName.push(response.sessions[i].name) 
                        this.sessionDuration.push( response.sessions[i].duration );
                        this.instructions.push( response.sessions[i].instructions ) ;
                        this.selectedSpec.push( response.sessions[i].specialization ) ;
                        this.selectedType.push( response.sessions[i].type ) ;               
                    }

                    // get the selected spec 
                    for( let i = 0 ; i < this.specs.length ; i++ ){
                        for( let x = 0 ; x < this.selectedSpec.length ; x++ ){
                            if( this.selectedSpec[x] == this.specs[i].id ){
                                this.selectedSpec[x] = this.specs[i] ;
                            }
                        }
                    }
                    // get the selected type 
                    for( let i = 0 ; i < this.types.length ; i++ ){
                        for( let x = 0 ; x < this.selectedType.length ; x++ ){
                            if( this.selectedType[x] == this.types[i].name ){
                                this.selectedType[x] = this.types[i] ;
                            }
                        }
                    }
                    // get medicines 
                    this.items.length = response.medicine.length ;
                    for( let i = 0 ; i < response.medicine.length  ; i++ ){
                            this.namesAr.push(response.medicine[i].ar)
                            this.namesEn.push(response.medicine[i].en)                          
                            this.filesName.push(response.medicine[i].image)
                    }   
                    
                    // get files name 
                    for( let i = 0 ; i < this.filesName.length ; i++ ){
                        let lastIndex = this.filesName[i].lastIndexOf('/');
                        let fileName = this.filesName[i].substring(lastIndex + 1);
                        this.deleted_iamges.push(fileName);
                    }


                    
                    
                }
            } )
            .catch( (err)=>{
                console.log(err)
            } )
        }
    },
    computed:{
        isFilesFalse(){
            return this.isFiles.every( value => value == false )
        },
        isNamedArFalse(){
            return this.isNamedAr.every( value => value == false )
        },
        isNamedEnFalse(){
            return this.isNamedEn.every( value => value == false )
        },
        isTypedFalse(){
            return this.isTyped.every( value => value == false )
        },
        
        isSpecFalse(){
            return this.isSpec.every( value => value == false )
        },
        isSessionFalse(){
            return this.isSession.every( value => value == false )
        },
        isDurationFalse(){
            return this.isDuration.every( value => value == false )
        },
        isInstFalse(){
            return this.isInst.every( value => value == false )
        },

        ...mapGetters('setting',['countries', 'specs']),


    },
    components:{
        Dropdown,
        InputNumber,
        InputText,
        Toast,
        Dialog,
        Skeleton
    },
    mounted(){
        this.getCountries();
        if( this.$route.fullPath.includes('editPriceOffer') ){
            this.getTreatment();
            this.isEdit = true ;
        }
        this.patient = JSON.parse(localStorage.getItem('patient'))
    }
}
</script>

<style>
    
    .sessionNum .p-dropdown .p-dropdown-label.p-placeholder{
        color: #6c757d !important;
        font-size: 15px !important;
        font-weight: 600 !important;
    }
    .med_image_modal{
        width:100%;
        height: 40vh !important;
    }
    .showImage{
        position: absolute;
        top: 48%;
        color: red !important;
    }
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
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
</style>