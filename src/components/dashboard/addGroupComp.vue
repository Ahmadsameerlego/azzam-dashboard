<template>
    <section class="pt-3 pb-3 px-5 ">
            <div>
                <h6 class="fw-bold blackColor"> ادارة مجموعة الدعم </h6>
                <p class="grayColor"> 
                    متابعة مجموعة الدعم
                </p>
            </div>
    </section>

    <!-- form  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" >
        <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> بيانات المجموعة </h6>

        <form class="mx-5 mt-3" ref="sessionForm">
        <div class="row">

            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        اسم المجموعة بالعربية
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputText type="text" v-model="groupNameAr" name="groupNameAr" class="default_input w-100" placeholder="الرجاء ادخال اسم المجموعة" />
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        اسم المجموعة بالانجليزية
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputText type="text" v-model="groupNameEn" name="groupNameEn" class="default_input w-100" placeholder="الرجاء ادخال اسم المجموعة" />
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                         الوصف بالعربية
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputText type="text" v-model="groupDescriptionAr" name="groupDescriptionAr" class="default_input w-100" placeholder="الرجاء ادخال الوصف" />
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        الوصف بالانجليزية
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputText type="text" v-model="groupDescriptionEn" name="groupDescriptionEn" class="default_input w-100" placeholder="الرجاء ادخال الوصف" />
                </div>
            </div>


            <div class="col-md-6 mb-2">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        قيمة المجموعة 
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>

                    <Dropdown v-model="selectedType" :options="values" optionLabel="title" placeholder="الرجاء تحديد قيمة المجموعة" class="default_input w-100 w-full md:w-14rem" />
                </div>
            </div>

            <div class="col-md-6 mb-2" v-if="isPaid">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        السعر
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputNumber v-model="price" name="price" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال السعر " />
                </div>
            </div>


            <div class="col-md-6 mb-2">
                <div class="form-group default_input">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        عدد الجلسات
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <!-- <InputNumber v-model="sessionsCount" name="sessionsCount" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال عدد الجلسات "  @input="handleError"/> -->
                    <input type="number" v-model="sessionsCount" name="sessionsCount" class="form-control default_input w-100" placeholder="الرجاء ادخال عدد الجلسات " >
                </div>
            </div>


            <div class="col-md-6 mb-2">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        عدد المقاعد
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputNumber v-model="seats" name="seats" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال عدد المقاعد "  />
                </div>
            </div>


        </div>

        <div class="mt-2">
            <button class="btn w-25 sec-bg main_btn" @click.prevent="setSessions" :disabled="disabledSession"> تأكيد </button>
        </div>
        </form>
    </section>

    <!-- number of sessions  -->
    <section v-if="showSession">
        <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-for="(session, index) in sessionsCount" :key="index">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> جلسة {{index + 1}} </h6>

        <form class="mx-5 mt-3">
            <div class="row">


            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        اسم الجلسة بالعربية
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputText type="text" v-model="namesAr[index]" class="default_input w-100" placeholder="الرجاء ادخال اسم الجلسة" />
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        اسم الجلسة بالإنجليزية
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputText type="text" v-model="namesEn[index]" class="default_input w-100" placeholder="الرجاء ادخال اسم الجلسة" />
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        الوصف بالعربية
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputText type="text" v-model="descriptionsAr[index]"  class="default_input w-100" placeholder="الرجاء ادخال الوصف" />
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        الوصف بالإنجليزية
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputText type="text" v-model="descriptionsEn[index]"  class="default_input w-100" placeholder="الرجاء ادخال الوصف" />
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <div class="form-group position-relative">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        التاريخ
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <Calendar v-model="dates[index]" @select="getDocotrs(index)" class="default_input w-100" placeholder="الرجاء ادخال التاريخ" />
                    <span class="icon_date">
                        <i class="fa-solid fa-calendar-days"></i>
                    </span>
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <div class="form-group position-relative">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        الموعد
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <Calendar v-model="times[index]" @select="getDocotrs(index)" class="default_input w-100" placeholder="الرجاء ادخال الموعد" timeOnly hourFormat="12" />
                    <span class="icon_date">
                        <i class="fa-solid fa-clock"></i>
                    </span>
                </div>
            </div>


            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        المدة
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <InputText type="text"  v-model="durations[index]" @input="getDocotrs(index)" class="default_input w-100" placeholder="الرجاء ادخال المدة" />
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <div class="form-group ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        الاخصائي
                        <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                    </label>
                    <Dropdown v-model="selectedDoctors[index]" :options="doctors[index]" optionLabel="name" placeholder="الرجاء تحديد الأخصائي المتاح" class="default_input w-100 w-full md:w-14rem" />
                </div>
                <ProgressBar mode="indeterminate" class="mt-2" style="height: 6px" v-if="getDocotorsLoading[index]"></ProgressBar>
                <span class="text-danger fs-14 text-center" v-if="getDocotorsLoading[index]">
                    جاري تحديد الأخصائيين المتاحيين
                </span>
            </div>


            </div>
            
        </form>
        </section>

         <!-- main submit button  -->
        <div class="mt-2 pt-3 pb-3 mx-5 mb-3">
            <button class="btn w-25 px-5 sec-bg main_btn" @click.prevent="addGroup" :disabled="disabled">
                    <span v-if="!disabled">
                    اضافة
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
import InputNumber from 'primevue/inputnumber';
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
        const namesAr             = ref([]);
        const namesEn            = ref([]);
        const descriptionsAr      = ref([]);
        const descriptionsEn      = ref([]);
        const dates             = ref([]);
        const times             = ref([]);
        const durations         = ref([]);
        const doctors           = ref([]);
        const selectedDoctors   = ref([]);
        const getDocotorsLoading= ref([]);
        const disabled          = ref(false);
        const disabledSession   = ref(false);

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

        // ============== methods =================

        // set session number 
        const setSessions = () =>{
            showSession.value = true ;
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

            // methods 
            setSessions,
            getDocotrs
        }
    },

    methods:{
        async addGroup(){
            this.disabled = true ;
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
                fd.append('sessions', JSON.stringify(this.appendedSessions))
            }
            
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
                        this.push('/support')
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

    components:{
        InputText,
        Dropdown,
        InputNumber,
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
</style>