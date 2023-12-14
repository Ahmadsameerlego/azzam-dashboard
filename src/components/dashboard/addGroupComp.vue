<template>
    <section class="pt-3 pb-3 px-5 ">
            <div>
                <h6 class="fw-bold blackColor"> {{ $t('group.title') }} </h6>
                <p class="grayColor"> 
                    {{ $t('group.desc') }}
                </p>
            </div>
    </section>

    <!-- form  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" >
        <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ $t('group.info') }} </h6>

        <form class="mx-5 mt-3" ref="sessionForm">
        <div class="row">

            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        {{ $t('group.nameAr') }}
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputText type="text" v-model="groupNameAr" name="groupNameAr" class="default_input w-100" :placeholder="$t('group.namePlc')" />
                    <span class="error text-danger fs-13" v-if="isNameAr"> {{ $t('group.namePlc') }} </span>
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        {{ $t('group.nameEn') }}
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputText type="text" v-model="groupNameEn" name="groupNameEn" class="default_input w-100" :placeholder="$t('group.namePlc')" />
                    <span class="error text-danger fs-13" v-if="isNameEn"> {{ $t('group.namePlc') }} </span>

                </div>
            </div>

            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                         {{ $t('group.descAr') }}
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputText type="text" v-model="groupDescriptionAr" name="groupDescriptionAr" class="default_input w-100" :placeholder="$t('group.descPlc')" />
                    <span class="error text-danger fs-13" v-if="isDescAr"> {{ $t('group.descPlc') }} </span>

                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        {{ $t('group.descEn') }}
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputText type="text" v-model="groupDescriptionEn" name="groupDescriptionEn" class="default_input w-100" :placeholder="$t('group.descPlc')" />
                    <span class="error text-danger fs-13" v-if="isDescEn"> {{ $t('group.descPlc') }} </span>

                </div>
            </div>


            <div class="col-md-6 mb-2">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        {{ $t('group.value') }} 
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <Dropdown v-model="selectedType" :options="values" optionLabel="title" :placeholder="$t('group.valuePlc')" class="default_input w-100 w-full md:w-14rem" />
                    <span class="error text-danger fs-13" v-if="isTyped"> {{ $t('group.valuePlc') }} </span>

                </div>
            </div>

            <div class="col-md-6 mb-2" v-if="isPaid">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        {{ $t('group.price') }}
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <!-- <InputNumber v-model="price" name="price" inputId="integeronly" class="default_input w-100" :placeholder="$t('group.pricePlc')" /> -->
                    <input type="number" min="1" v-model="price" id="" class="default_input form-control" :placeholder="$t('group.pricePlc')">
                    <span class="error text-danger fs-13" v-if="isPrice"> {{ $t('group.pricePlc') }} </span>

                </div>
            </div>


            <div class="col-md-6 mb-2">
                <div class="form-group default_input">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        {{ $t('group.count') }}
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <!-- <InputNumber v-model="sessionsCount" name="sessionsCount" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال عدد الجلسات "  @input="handleError"/> -->
                    <input type="number" min="1" v-model="sessionsCount" name="sessionsCount" class="form-control default_input w-100" :placeholder="$t('group.countPlc')" >
                    <span class="error text-danger fs-13" v-if="isSession"> {{ $t('group.countPlc') }} </span>

                </div>
            </div>


            <div class="col-md-6 mb-2">
                <div class="form-group position-relative">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        {{ $t('group.seats') }}
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <!-- <InputNumber v-model="seats" name="seats" inputId="integeronly" class="default_input w-100" :placeholder="$t('group.seatsPlc')"  /> -->

                    <input type="number" min="1" v-model="seats" name="seats" class="form-control default_input" :placeholder="$t('group.seatsPlc')">
                    <span class="error text-danger fs-13" v-if="isSeats"> {{ $t('group.seatsPlc') }} </span>
                </div>
            </div>


        </div>

        <div class="mt-2">
            <button class="btn w-25 sec-bg main_btn" @click.prevent="setSessions" :disabled="disabledSession"> {{ $t('auth.confirm') }} </button>
        </div>
        </form>
    </section>

    <!-- number of sessions  -->
    <section v-if="showSession" class="addGroupMain">
        <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-for="(session, index) in sessionsCount" :key="index">
            <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ $t('group.session') }} {{index + 1}} </h6>

            <form class="mx-5 mt-3">
                <div class="row">


                <div class="col-md-6 mb-3">
                    <div class="form-group ">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('group.nameAr') }}
                            <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                        </label>
                        <InputText type="text" v-model="namesAr[index]" class="default_input w-100" :placeholder="$t('session.namePlc')" />
                        <span class="error text-danger fs-13" v-if="isNamesAr[index]"> {{ $t('session.namePlc') }} </span>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-group ">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('group.nameEn') }}
                            <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                        </label>
                        <InputText type="text" v-model="namesEn[index]" class="default_input w-100" :placeholder="$t('session.namePlc')" />
                        <span class="error text-danger fs-13" v-if="isNamesEn[index]"> {{ $t('session.namePlc') }} </span>

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group ">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('group.descAr') }}
                            <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                        </label>
                        <InputText type="text" v-model="descriptionsAr[index]"  class="default_input w-100" :placeholder="$t('group.descPlc')" />
                        <span class="error text-danger fs-13" v-if="isDescsAr[index]"> {{ $t('group.descPlc') }} </span>

                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-group ">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('group.descEn') }}
                            <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                        </label>
                        <InputText type="text" v-model="descriptionsEn[index]"  class="default_input w-100" :placeholder="$t('group.descPlc')" />
                        <span class="error text-danger fs-13" v-if="isDescsEn[index]"> {{ $t('group.descPlc') }} </span>

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group position-relative">
                        <div class="position-relative">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                {{ $t('session.date') }}
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>
                            <Calendar v-model="dates[index]" @select="getDocotrs(index)" class="default_input w-100" :placeholder="$t('session.datePlc')" :minDate="new Date()" />

                            <span class="icon_date">
                                <i class="fa-solid fa-calendar-days"></i>
                            </span>

                        </div>
                        <span class="error text-danger fs-13" v-if="isDatesAdded[index]">  {{ $t('session.datePlc') }} </span>

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group position-relative">
                        <div class="position-relative">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                {{ $t('session.appoint') }}
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>
                            <Calendar v-model="times[index]" @select="getDocotrs(index)" class="default_input w-100" :placeholder="$t('session.appPlc')" timeOnly hourFormat="12" />
                            <span class="icon_date">
                                <i class="fa-solid fa-clock"></i>
                            </span>
                        </div>

                        <span class="error text-danger fs-13" v-if="isAppAdedd[index]">  {{ $t('session.appPlc') }} </span>

                    </div>
                </div>


                <div class="col-md-6 mb-3">
                    <div class="form-group ">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('session.duration') }}
                            <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                        </label>
                        <InputText type="number" min="1" v-model="durations[index]" @input="getDocotrs(index)" class="default_input w-100" :placeholder="$t('session.durationPlc')" />
                        <span class="error text-danger fs-13" v-if="isDurationAdded[index]">  {{ $t('session.durationPlc') }} </span>
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group ">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('session.spec') }}
                            <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                        </label>
                        <Dropdown v-model="selectedDoctors[index]" :options="doctors[index]" optionLabel="name" :placeholder="$t('session.specPlc')" class="default_input w-100 w-full md:w-14rem" />
                    </div>
                    <ProgressBar mode="indeterminate" class="mt-2" style="height: 6px" v-if="getDocotorsLoading[index]"></ProgressBar>
                    <span class="text-danger fs-14 text-center" v-if="getDocotorsLoading[index]">
                        {{ $t('session.specLoad') }}
                    </span>

                    <span class="error text-danger fs-13" v-if="isSessionAdded[index]">  {{ $t('session.specPlc') }} </span>

                </div>


                </div>
                
            </form>

            <!-- <span v-if="isSessionAdded[index]" class="error text-danger fs-13 mx-5 mt-3"> يرجى اضافة بيانات هذه الجلسة </span> -->

        </section>

         <!-- main submit button  -->
        <div class="mt-2 pt-3 pb-3 mx-5 mb-3">
            <button class="btn w-25 px-5 sec-bg main_btn" @click.prevent="addGroup" :disabled="disabled">
                    <span v-if="!disabled">
                    {{ $t('common.add') }}
                </span>
                <div class="spinner-border" role="status" v-if="disabled">
                    <span class="visually-hidden">Loading...</span>
                </div> 
            </button>
        </div>
    </section>

    <Toast />
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
// import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import ProgressBar from 'primevue/progressbar';


import axios from 'axios';
import moment from 'moment';
import Toast from 'primevue/toast';


import { ref , watch} from 'vue';
export default {
    setup(){
        // ============= data ====================
        const groupNameEn         = ref('');
        const groupNameAr         = ref('');
        const groupDescriptionEn  = ref('');
        const groupDescriptionAr  = ref('');
        const  values           = ref(
                    [
                    {
                        id : 1,
                        name : 'free',
                        title : 'مجانية'
                    },
                    {
                        id : 2,
                        name : 'paid',
                        title : 'مدفوعة'
                    },
                    ],
                    
                );
        const selectedType      = ref(null);
        const price             = ref(null);
        const sessionsCount     = ref(null);
        const seats             = ref(null);
        const isPaid            = ref(true);
        const showSession       = ref(false);
        const sessions          = ref([]);
        const namesAr           = ref([]);
        const namesEn           = ref([]);
        const descriptionsAr    = ref([]);
        const descriptionsEn    = ref([]);
        const dates             = ref([]);
        const times             = ref([]);
        const durations         = ref([]);
        const doctors           = ref([]);
        const selectedDoctors   = ref([]);
        const getDocotorsLoading= ref([]);
        const disabled          = ref(false);
        const disabledSession   = ref(false);
        // validations 
        const isNameAr = ref(false);
        const isNameEn = ref(false);
        const isDescAr = ref(false);
        const isDescEn = ref(false);
        const isTyped = ref(false);
        const isSeats = ref(false);
        const isSession = ref(false);
        const isPrice = ref(false);
        const isSessionAdded = ref([]);
        const isDurationAdded = ref([]);
        const isAppAdedd = ref([]);
        const isNamesAr = ref([]);
        const isNamesEn = ref([]);
        const isDescsAr = ref([]);
        const isDescsEn = ref([]);
        const isDatesAdded = ref([]);
        

        
        const isDoctors = ref([]);


        const appendedSessions  = ref([]);


        // =============== watchers ===============

        // watch for selectedType 
        watch( selectedType , (newVal)=>{
            if( newVal && newVal.name === 'free' ){
                isPaid.value = false ;
            }else if( newVal && newVal.name === 'paid' ){
                isPaid.value = true ;
            }
        })

        watch( namesAr , (newVal, oldVal)=>{
           console.log(newVal)
           console.log(oldVal)
        })



        // watchs for validations 
        watch( groupNameAr , (newVal)=>{
            if( newVal == ''  ){
                isNameAr.value = true ;
            }else {
                isNameAr.value = false ;
            }
        })
        watch( groupNameEn , (newVal)=>{
            if( newVal == ''  ){
                isNameEn.value = true ;
            }else {
                isNameEn.value = false ;
            }
        })
        watch( groupDescriptionAr , (newVal)=>{
            if( newVal == ''  ){
                isDescAr.value = true ;
            }else {
                isDescAr.value = false ;
            }
        })
        watch( groupDescriptionEn , (newVal)=>{
            if( newVal == ''  ){
                isDescEn.value = true ;
            }else {
                isDescEn.value = false ;
            }
        })

        watch( selectedType , (newVal)=>{
            if( newVal == null  ){
                isTyped.value = true ;
            }else {
                isTyped.value = false ;
            }
        })

        watch( price , (newVal)=>{
            if( newVal == ''  ){
                isPrice.value = true ;
            }else {
                isPrice.value = false ;
            }
        })
        watch( seats , (newVal)=>{
            if( newVal == ''  ){
                isSeats.value = true ;
            }else {
                isSeats.value = false ;
            }
        })
        watch( sessionsCount , (newVal)=>{
            if( newVal == ''  ){
                isSession.value = true ;
            }else {
                isSession.value = false ;
            }
        })

        // ============== methods =================

        // set session number 
        const setSessions = () =>{
            if( groupNameAr.value == '' ){
                isNameAr.value = true ;
            }else{
                isNameAr.value = false ;
            }

            if( groupNameEn.value == '' ){
                isNameEn.value = true ;
            }else{
                isNameEn.value = false ;
            }

            if( groupDescriptionAr.value == '' ){
                isDescAr.value = true ;
            }else{
                isDescEn.value = false ;
            }

            if( groupDescriptionEn.value == '' ){
                isDescEn.value = true ;
            }else{
                isDescEn.value = false ;
            }

            if( selectedType.value == null  ){
                isTyped.value = true ;
            }else {
                isTyped.value = false ;
            }

            if( price.value == null  ){
                isPrice.value = true ;
            }else {
                isPrice.value = false ;
            }

            if( sessionsCount.value == null  ){
                isSession.value = true ;
            }else {
                isSession.value = false ;
            }
            if( seats.value == null  ){
                isSeats.value = true ;
            }else {
                isSeats.value = false ;
            }



            if( isSession.value == false && isSeats.value == false && (isPrice.value == false || price.value == null) && isTyped.value == false && isDescAr.value == false && isDescEn.value == false && isNameAr.value == false && isNameEn.value == false ){
                showSession.value = true ;
            }
        }

        // get avilable doctors 
        const getDocotrs = async (index)=>{
            getDocotorsLoading.value[index] = true ;
            await axios.get(`/available-doctors?date=${moment(dates.value[index]).format('YYYY-MM-DD')}&startTime=${moment(times.value[index]).format('hh:mm A')}&duration=${durations.value[index]}`, {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}` 
                }
            })
            .then( (res)=>{
                doctors.value[index] = res.data.data ;
                getDocotorsLoading.value[index] = false ;
            } )
            .catch ( (err)=>{
                console.log(err)
                getDocotorsLoading.value[index] = false ;
            } )
        }


        return{
            groupNameEn,
            groupNameAr,
            groupDescriptionAr,
            groupDescriptionEn,
            values,
            selectedType,
            price,
            sessionsCount,
            seats,
            isPaid,
            sessions,
            showSession,
            namesAr,
            namesEn,
            descriptionsAr,
            descriptionsEn,
            dates,
            times,
            durations,
            doctors,
            selectedDoctors,
            getDocotorsLoading,
            disabled,
            disabledSession,
            appendedSessions,
            // validations  
            isNameAr ,
            isNameEn,
            isDescAr ,
            isDescEn ,
            isTyped ,
            isSeats ,
            isSession ,
            isPrice ,
            // isSNameAr,
            isDoctors ,
            isSessionAdded,
            isDurationAdded ,
            isAppAdedd ,
            isNamesAr,
            isNamesEn,
            isDescsAr,
            isDescsEn ,
            isDatesAdded ,

            // methods 
            setSessions,
            getDocotrs
        }
    },

    methods:{
        async addGroup(){


            
            

            for( let i = 0 ; i < this.sessionsCount ; i++ ){
                if(this.selectedDoctors[i] != null){
                    this.isSessionAdded[i] = false ;
                }else{
                    this.isSessionAdded[i] = true ;
                }
                // durations 
                if(this.durations[i] != null){
                    this.isDurationAdded[i] = false ;
                }else{
                    this.isDurationAdded[i] = true ;
                }
                
                // times 
                if(this.times[i] != null){
                    this.isAppAdedd[i] = false ;
                }else{
                    this.isAppAdedd[i] = true ;
                }
                
                // names ar 
                if(this.namesAr[i] != null){
                    this.isNamesAr[i] = false ;
                }else{
                    this.isNamesAr[i] = true ;
                }

                // names en 
                if(this.namesEn[i] != null){
                    this.isNamesEn[i] = false ;
                }else{
                    this.isNamesEn[i] = true ;
                }
                // descs ar 
                if(this.descriptionsAr[i] != null){
                    this.isDescsAr[i] = false ;
                }else{
                    this.isDescsAr[i] = true ;
                }
                // descs ar 
                if(this.descriptionsEn[i] != null){
                    this.isDescsEn[i] = false ;
                }else{
                    this.isDescsEn[i] = true ;
                }

                // dates 
                if( this.dates[i] != null ){
                    this.isDatesAdded[i] = false ;
                }else{
                    this.isDatesAdded[i] = true ;
                }
                
                
            }

            if( this.isAllFalse && this.isDurationsFalse && this.isTimesFAlse && this.isNamesArFalse && this.isNamesEnFalse && this.isDescsArFalse && this.isDescsEnFalse && this.isDatesFalse){
                this.mainAddDoctor();
            }                
            
            
        },
        async mainAddDoctor(){
            const fd = new FormData(this.$refs.sessionForm);
            // append type 
            if(this.selectedType){
                fd.append('type', this.selectedType.name) ;
            }
            // append seats 
            if( this.seats ){
                fd.append('seats', this.seats) ;
            }
            if( this.price ){
                fd.append('price', this.price)  
            }
            for( let i = 0 ; i < this.sessionsCount ; i++ ){
                if(this.selectedDoctors[i] != null){
                    this.appendedSessions.push({
                        name : {
                            ar : this.namesAr[i],
                            en : this.namesEn[i]
                        },
                        description : {
                            ar : this.descriptionsAr[i],
                            en : this.descriptionsEn[i]
                        },
                        startDate : moment(this.dates[i]).format('YYYY-MM-DD'),
                        startTime : moment( this.times[i] ).format('hh:mm A'),
                        duration  : this.durations[i],
                        doctors : [this.selectedDoctors[i].id ]

                    })
                    // append sessions 
                    fd.append('sessions', JSON.stringify(this.appendedSessions));
                }
            }

            this.disabled = true ;
                await axios.post('/create-support-group', fd , {
                    headers : {
                        Authorization : `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then( (res)=>{
                    if( res.data.key == 'success' ){
                        this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                        this.disabled = false ;
                        setTimeout(() => {
                            this.$router.push('/center/support')
                        }, 1000);
                    }else{
                        this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                        this.disabled = false ;
                        this.appendedSessions = []
                    }
                } )
                .catch( (err)=>{
                    this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                    this.disabled = false ;
                    this.appendedSessions = [] ;
                } )
        }
    },
    mounted(){
        
    },
    watch:{
        dates(newIndex, oldIndex){
            this.getDocotrs(newIndex);
            console.log(oldIndex)
        }
    },
    computed:{
        isAllFalse(){
            return this.isSessionAdded.every( value => value === false )
        },
        isDurationsFalse(){
            return this.isDurationAdded.every( value => value === false)
        },
        isTimesFAlse(){
            return this.isAppAdedd.every( value => value === false)
        },
        isNamesArFalse(){
            return this.isNamesAr.every( value => value === false)
        },
        isNamesEnFalse(){
            return this.isNamesEn.every( value => value === false)
        },
        isDescsArFalse(){
            return this.isDescsAr.every( value => value === false)
        },
        isDescsEnFalse(){
            return this.isDescsEn.every( value => value === false)
        },
        isDatesFalse(){
            return this.isDatesAdded.every( value => value === false)
        }
        
    },
    components:{
        InputText,
        Dropdown,
        // InputNumber,
        Calendar,
        ProgressBar,
        Toast
    }
}
</script>


<style>
    .icon_date{
        position: absolute;
        color: #3694ce;
        top: 51%;
        left: 3%;
    }
    .addGroupMain .p-calendar .p-inputtext ,.addGroupMain .p-multiselect{background-color: #fff !important;}

</style>