<template>
    <section class="pt-3 pb-3 px-5 flex_between">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('common.addSpec') }} </h6>
            <p class="grayColor"> {{  $t('common.specDesc')  }} </p>
        </div>
    </section>

    <section class="card mx-5 pt-2 pb-2 px-4 border-none">
        <h6 class="sec-color fw-6"> {{ $t('common.specInfo') }} </h6>

        <form class="add_spec_form" ref="addDoctorForm">
            <!-- profile pic  -->
            <section class="profile_pic mt-4">
                <input type="file" name="avatar" @change="uploadProfilePic" class="uploadInput">
                <!-- default image  -->
                <img :src="require('@/assets/imgs/logo.png')" ref="profile" class="profile_image" alt="">
                <!-- edit  -->
                <span class="edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                </span>
            </section>

            <!-- inputs  -->
            <div class="row mt-3">

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{ $t('common.specName') }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>
                        <InputText type="text" v-model="name" name="name" class="default_input w-100" :placeholder="$t('common.namePlace')" />

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{ $t('common.special')  }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>

                        <Dropdown v-model="selectedSpec" :options="specs" optionLabel="name" :placeholder="$t('common.specPlc')" class="default_input w-100 w-full md:w-14rem" />

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="phone form-group position-relative">
                        <label for="" class="d-block fw-6 mb-2">
                             {{ $t('common.phone')  }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>

                        <InputText type="number" v-model="phone" name="phone" class="default_input w-100" :placeholder="$t('common.phonePlace')" @input="handleChange('isPhoneChanged')" />

                        <!-- country code  -->
                        <Dropdown v-model="selectedCountry" @change="chooseCountry" :options="countries" optionLabel="code" :placeholder="$t('common.countryCode')" class="default_input country_code w-100 w-full md:w-14rem" />

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{  $t('common.email')  }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>
                        <InputText type="email" v-model="email" name="email" class="default_input w-100" :placeholder="$t('common.emailPlace')" required @input="handleChange('isMailChanged')"/>

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{  $t('common.conPrice')  }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>
                        <InputNumber v-model="price" name="price" inputId="integeronly" class="default_input w-100" :placeholder="$t('common.pricePlace')" />

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{  $t('common.conDuration')  }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>
                        <input 
                            type="number"  
                            v-model="time" 
                            min="15"
                            max="60"
                            pattern="\d*"
                            name="time" 
                            class="form-control default_input w-100" 
                            :placeholder="$t('common.durationPlace')"
                            
                        >
                        <!-- <InputNumber v-model="time" name="time" inputId="integeronly" class="default_input w-100" :placeholder="$t('common.durationPlace')" /> -->

                    </div>
                </div>

                <div class="col-md-12 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{  $t('common.bio_ar') }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>
                        <Textarea v-model="descriptionAr" name="descriptionAr" autoResize rows="5" class="default_input default_textarea w-100" cols="30" :placeholder="$t('common.bio_ar')" />
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{ $t('common.bio_en')  }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>
                        <Textarea v-model="descriptionEn" name="descriptionEn" autoResize rows="5" class="default_input default_textarea w-100" cols="30" :placeholder="$t('common.bio_en')" />
                    </div>
                </div>

            </div>
        </form>
        
    </section>


    <!-- add docotr form  -->
    <section class="card mt-3 mx-5 pt-2 pb-2 px-4 border-none" v-if="addDoc">
        <h6 class="sec-color fw-6"> {{ $t('common.workDate')  }} </h6>

        <form class="add_spec_form"  >
            
           
            <!-- Add new dates -->
            <div v-for="(appointment, index) in new_appointments" :key="index">
                <div class="row align-items-center mt-3">
                    <div class="col-md-4 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">{{ $t('common.day') }}</label>
                        <Dropdown
                            v-model="appointment.selectedDay"
                            :options="days"
                            optionLabel="title"
                            placeholder="اختر اليوم"
                            class="default_input w-100 w-full md:w-14rem"
                        />
                    </div>
                    </div>
                    <div class="col-md-4 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">{{ $t('common.from') }}</label>
                        <Calendar
                            :id="'from-timeonly-' + index"
                            v-model="appointment.startTime"
                            timeOnly
                            class="default_input w-100 w-full md:w-14rem"
                            placeholder="من"
                            hour-format="12"
                        />
                    </div>
                    </div>
                    <div class="col-md-3 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">{{ $t('common.to') }}</label>
                        <Calendar
                            :id="'to-timeonly-' + index"
                            v-model="appointment.endTime"
                            timeOnly
                            class="default_input w-100 w-full md:w-14rem"
                            placeholder="إلى"
                            hour-format="12"
                        />
                    </div>
                    </div>
                    <div class="col-md-1 mb-3">
                        <button class="btn removeAppointment" @click.prevent="removeAppointment(index)">
                            <i class="fa-solid fa-trash-can text-danger"></i>
                        </button>
                    </div>
                </div>

            </div>


            <!-- add new date  -->
            <div class="add_new_date d-flex main-color" @click="addAnotherAppointment">
                <span class="add_icon flex_center whiteColor">
                    <i class="fa-solid fa-plus"></i>
                </span>
                <span class="mx-2 fw-6"> {{ $t('common.addAnotherDate')  }} </span>
            </div>


            <div class="d-flex justify-content-center align-items-center mt-3">
                <button class="btn main_btn w-50 mx-auo pt-2 pb-2" :disabled="disabled2" @click.prevent="addDoctor">
                     <span v-if="!disabled">
                        {{ $t('common.add') }} 
                     </span>
                     <div class="spinner-border" role="status" v-if="disabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
            </div>



        </form>
        
    </section>

       <!-- edit doctor form  -->
    <section class="card mt-3 mx-5 pt-2 pb-2 px-4 border-none" v-else-if="editDoc">
        <h6 class="sec-color fw-6"> {{ $t('common.workDate')  }} </h6>

        <form class="add_spec_form"  >
            
           
            <!-- Add new dates -->
            <div v-for="(appointment, index) in new_appointments" :key="index">
                <div class="row align-items-center mt-3">
                    <div class="col-md-4 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">{{ $t('common.day') }}</label>
                        <Dropdown
                            v-model="appointment.day"
                            :options="days"
                            optionLabel="title"
                            :placeholder="appointment.dayText"
                            class="default_input w-100 w-full md:w-14rem"
                        />
                    </div>
                    </div>
                    <div class="col-md-4 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">{{ $t('common.from') }}</label>
                        <Calendar
                            :id="'from-timeonly-' + index"
                            v-model="appointment.startTime"
                            timeOnly
                            class="default_input w-100 w-full md:w-14rem"
                            placeholder="من"
                            hour-format="12"
                        />
                    </div>
                    </div>
                    <div class="col-md-3 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">{{ $t('common.to') }}</label>
                        <Calendar
                            :id="'to-timeonly-' + index"
                            v-model="appointment.endTime"
                            timeOnly
                            class="default_input w-100 w-full md:w-14rem"
                            placeholder="إلى"
                            hour-format="12"
                        />
                    </div>
                    </div>
                    <div class="col-md-1 mb-3">
                        <button class="btn removeAppointment" @click.prevent="removeAppointment(index)">
                            <i class="fa-solid fa-trash-can text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>


            <!-- add new date  -->
            <div class="add_new_date d-flex main-color" @click="addAnotherAppointment">
                <span class="add_icon flex_center whiteColor">
                    <i class="fa-solid fa-plus"></i>
                </span>
                <span class="mx-2 fw-6"> {{ $t('common.addAnotherDate')  }} </span>
            </div>

            <div class="d-flex justify-content-center align-items-center mt-3">
                <button class="btn main_btn w-50 mx-auo pt-2 pb-2" :disabled="disabled2" @click.prevent="updateDoctor">
                     <span v-if="!disabled">
                        {{ $t('common.add') }} 
                     </span>
                     <div class="spinner-border" role="status" v-if="disabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
            </div>
        </form>
        
    </section>

 



    <Toast />
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import { mapActions, mapGetters } from 'vuex';
import Calendar from 'primevue/calendar';
import axios from 'axios';

import Toast from 'primevue/toast';

export default {
    data(){
        return{
            disabled : false ,
            disabled2 : true ,
            name : null,
            phone : null ,
            isPhoneChanged : false ,
            email : null,
            isMailChanged : false ,
            price : null,
            time : 15,
            selectedCity: null,
            selectedSpec : null,
            selectedCountry : {
                name: "السعودية",
                image: "https://azzam.4hoste.com/assets/uploads/country/image941689583177874.png",
                code: "+966",
            },
            descriptionAr : '',
            descriptionEn : '',
            days : [
                {
                    id : 1,
                    name : 'sat',
                    title : 'السبت'
                },
                {
                    id : 2,
                    name : 'sun',
                    title : 'الأحد'
                },
                {
                    id : 3,
                    name : 'mon',
                    title : 'الاثنين'
                },
                {
                    id : 4,
                    name : 'tue',
                    title : 'الثلاثاء'
                },
                {
                    id : 5,
                    name : 'wed',
                    title : 'الأربعاء'
                },
                {
                    id : 6,
                    name : 'thu',
                    title : 'الخميس'
                },
                {
                    id : 7,
                    name : 'fri',
                    title : 'الجمعة'
                },
            ],
            selectedDay : {
                id : null,
                name : '',
                title : ''

            },
            startTime : null,
            endTime : null,
            new_appointments : [
                {
                    selectedDay: null,
                    startTime: null,
                    endTime: null,
                }
            ],
            dates : [],

            
            minlenght : 15,
            maxlength : 60,
            addDoc : false,
            editDoc : false,



        }
    },
    watch:{
        dateeee(){
            console.log(this.dateeee)
        },
        new_appointments: {
            deep: true,
            handler(newAppointments) {
            // Check if any of the properties in any appointment is null
            const anyNull = newAppointments.some(appointment => {
                return (
                appointment.selectedDay === null ||
                appointment.startTime === null ||
                appointment.endTime === null
                );
            });

            if (anyNull) {
                // Do something when any of the properties is null
                this.disabled2 = true ;
            }else{
                this.disabled2 = false ;
            }
            }
        }


    },
    computed:{
        ...mapGetters('setting',['countries', 'specs']),
        // format from time 
        formatFrom(){
            return this.formatTimeTo12HourFormat(this.new_appointments.from)
        },
        // format to 
        formatTo(){
            return this.formatTimeTo12HourFormat(this.new_appointments.to)
        },
    },
    methods:{
        ...mapActions('setting',['getCountries']),
        handleChange(input){
            this[input] = true ;
        },
        // remove appointment 
        removeAppointment(index){
            this.new_appointments.splice(index,1)
        },
        // handle input type number 
        
        // upload pic image 
        uploadProfilePic(e){
            const file = e.target.files[0];
            this.$refs.profile.src = URL.createObjectURL(file);
        },
        // add another appointment 
        addAnotherAppointment(){
            this.new_appointments.push({
                selectedDay: null,
                startTime: null,
                endTime: null,
            });
        },

        // format time 
        formatTimeTo12HourFormat(time) {
            const hours = time.getHours();
            const minutes = time.getMinutes();

            const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
            const amPm = hours < 12 ? "AM" : "PM";
            const formattedMinutes = String(minutes).padStart(2, "0");

            return `${formattedHours}:${formattedMinutes} ${amPm}`;
        },

        // Add New Spcialist 
        async addDoctor(){
            // loop through appended appointments
            if (this.new_appointments.length > 0) {
                const uniqueAppointments = [];
                const seen = new Set();

                for (let i = 0; i < this.new_appointments.length; i++) {
                    const key = this.new_appointments[i].selectedDay.name +
                                this.formatTimeTo12HourFormat(this.new_appointments[i].startTime) +
                                this.formatTimeTo12HourFormat(this.new_appointments[i].endTime);

                    if (!seen.has(key)) {
                        seen.add(key);
                        uniqueAppointments.push({
                            day: this.new_appointments[i].selectedDay.name,
                            startTime: this.formatTimeTo12HourFormat(this.new_appointments[i].startTime),
                            endTime: this.formatTimeTo12HourFormat(this.new_appointments[i].endTime),
                        });
                    }
                }

                this.dates = uniqueAppointments;
            }

            
            this.disabled = true ;
            this.disabled2 = true ;
            const fd = new FormData(this.$refs.addDoctorForm) ;
            fd.append('price', this.price);
            // fd.append('time', this.time);
            fd.append('countryCode', this.selectedCountry.code);
            if( this.selectedSpec ){
                fd.append('specialization', this.selectedSpec.id);
            }   
            fd.append('userType', 'doctor');
            fd.append('center', JSON.parse(localStorage.getItem('user')).id);

            fd.append('appointments', JSON.stringify(this.dates));

            await axios.post('/add-doctor', fd , {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                    this.disabled2 = false ; 
                    setTimeout(() => {
                        this.$router.push('/specialistsManage')
                    }, 1000);
                    
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    this.disabled = false ; 
                    this.disabled2 = false ; 
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                this.disabled = false ;
                this.disabled2 = false ;    
            } )
        },

        // get doctor data 
        async getDoctorData(){
            await axios.get(`/doctors-details?id=${this.$route.params.id}`, {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                const response = res.data.data ;
                if( res.data.key === 'success' ){
                    this.name = response.name ;
                    this.phone = response.phone ;
                    this.email = response.email ;
                    this.price = response.price ;
                    this.time = response.time ;
                    this.selectedCountry.code = response.countryCode ;
                    document.querySelector('.phone .p-dropdown-label').innerHTML = response.countryCode ;

                    for( let i = 0 ; i < this.specs.length ; i++ ){
                        if ( response.specializationId == this.specs[i].id ){
                        // console.log('the ratio is exist')
                        this.selectedSpec = this.specs[i] ;
                        this.selectedSpec.id = this.specs[i].id ;
                        this.selectedSpec.name = this.specs[i].name ;
                        }
                    }
                    // this.selectedSpec.id = response.specializationId ;
                    // this.selectedSpec.name = response.specialization ;
                    this.descriptionAr = response.descriptionAr ;
                    this.descriptionEn = response.descriptionEn ;

                    this.$refs.profile.src = response.avatar ;

                    this.new_appointments = response.appointments
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
            } )
        },

        // update doctors 
        async updateDoctor(){
            // loop through appended appointments
            // if (this.new_appointments.length > 0) {
            //     const uniqueAppointments = [];
            //     const seen = new Set();

            //     for (let i = 0; i < this.new_appointments.length; i++) {
            //         const key = this.new_appointments[i].selectedDay.name +
            //                     this.formatTimeTo12HourFormat(this.new_appointments[i].startTime) +
            //                     this.formatTimeTo12HourFormat(this.new_appointments[i].endTime);

            //         if (!seen.has(key)) {
            //             seen.add(key);
            //             uniqueAppointments.push({
            //                 day: this.new_appointments[i].selectedDay.name,
            //                 startTime: this.formatTimeTo12HourFormat(this.new_appointments[i].startTime),
            //                 endTime: this.formatTimeTo12HourFormat(this.new_appointments[i].endTime),
            //             });
            //         }
            //     }

            //     this.dates = uniqueAppointments;
            // }

            
            this.disabled = true ;
            this.disabled2 = true ;
            const fd = new FormData() ;
            fd.append('id', this.$route.params.id);
            if( this.name ){
                fd.append('name', this.name);
            }
            if( this.price ){
                fd.append('price', this.price);
            }
            if( this.isPhoneChanged ){
                fd.append('phone', this.phone);
            }
            if( this.isMailChanged ){
                fd.append('email', this.email);
            }
            if( this.selectedSpec ){
                fd.append('specialization', this.selectedSpec.id);
            }  
            if( this.time ){
                fd.append('time', this.time);
            }
            if( this.selectedCountry ){
                fd.append('countryCode', this.selectedCountry.code);
            }             
            fd.append('userType', 'doctor');
            fd.append('center', JSON.parse(localStorage.getItem('user')).id);

            // fd.append('appointments', JSON.stringify(this.dates));

            await axios.put('/edit-doctor', fd , {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                    this.disabled2 = false ;
                    // setTimeout(() => {
                    //     this.$router.push('/specialistsManage')
                    // }, 1000);
                    
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    this.disabled = false ; 
                    this.disabled2 = false ; 
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                this.disabled = false ;
                this.disabled2 = false ;
            } )
        },

        chooseCountry(){
            document.querySelector('.phone .p-dropdown-label').innerHTML = this.selectedCountry.code ;
        },

    },
    components:{
        InputText,
        Dropdown,
        InputNumber,
        Textarea,
        Calendar,
        Toast
    },
    beforeMount(){
        if( this.$route.fullPath.includes('addSpecialist') ){
            this.addDoc = true ;
            this.editDoc = false ;
        }else if( this.$route.fullPath.includes('editDoctor') ){
            this.addDoc = false ;
            this.editDoc = true ;
            this.getDoctorData();
        }
    },
    mounted(){
        this.getCountries();
        
        document.querySelector('.phone .p-dropdown-label').innerHTML = this.selectedCountry.code ;
        
    }
}
</script>

<style lang="scss">
    .removeAppointment{
        font-size: 22px !important;
        margin-top: 31px;
    }
    .add_new_date{
        cursor: pointer;
    }
    .add_spec_form{
        
        .country_code{
            position: absolute;
            width: 30% !important;
            left: 0;
            top: 42%;        
        }
    }
    .add_icon{
        width: 25px;
        height: 25px;
        background-color: #3694ce;
        border-radius: 50%;
    }
    .profile_pic{
        position: relative;
        width: 100px;
        height: 100px;
            .uploadInput{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                right: 0;
                opacity: 0;
            }
            .profile_image{
                width: 100px;
                height: 100px;
                border-radius: 5px;
                object-fit: contain;
            }
            .edit{
                position: absolute;
                left: -10px;
                top: 35%;
                background-color: #3694ce;
                border-radius: 9px;
                border: 1px solid #fff;
                color: #fff;
                width: 25px;
                height: 25px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;        
            }
        }
</style>