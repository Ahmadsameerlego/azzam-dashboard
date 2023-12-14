<template>
    <section id="auth">
        <section id="login">
            <!-- logo  -->
            <div class="logo mx-auto d-flex">
                <img :src="require('@/assets/imgs/logo.png')" alt="Azzam Logo">
            </div>
            <!-- title  -->
            <div class="mt-3">
                <h6 class="blackColor fw-bold"> {{ $t('auth.reg') }} </h6>
                <p class="grayColor">
                    {{ $t('auth.regDesc') }}
                </p>
            </div>
            <!-- form  -->
            <form @submit.prevent="register" ref="register">
                <!-- profile pic  -->
                <section class="profile_pic mx-auto d-flex mt-4">
                    <input type="file" name="avatar" @change="uploadProfilePic" class="uploadInput">
                    <!-- default image  -->
                    <img :src="require('@/assets/imgs/logo.png')" ref="profile" class="profile_image" alt="">
                    <!-- edit  -->
                    <span class="edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </span>
                </section>

                <!-- name   -->
                <div class="form-group mb-3 ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('auth.centerName') }} 
                    </label>
                    <InputText type="text"  v-model="name" name="name" class="default_input w-100" :placeholder="$t('auth.namePlc')" @blur="nameTouched=true" />

                    <!-- validation message  -->
                    <div class="error text-danger fs-14"  v-if="showName"> {{ $t('auth.namePlc') }}  </div>
                </div>

                <!-- phone  -->
                <div class="form-group mb-3 ">
                    <div class="above_valid position-relative">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('auth.phone') }} 
                        </label>

                        <input type="number"  min="1"  v-model="phone" name="phone" class="default_input form-control w-100" :placeholder="$t('auth.phonePlc')" @blur="phoneTouched=true">

                        <!-- country code  -->
                        <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name"  @change="chooseCountry"  class="default_input country_code  w-full md:w-14rem" />

                    </div>
                    
                    <div class="error text-danger fs-14"  v-if="showrError" > يجب أن يكون رقم الهاتف اكثر من ٩ أرقام </div>
                </div>

                <!-- email  -->
                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('auth.email') }} 
                    </label>
                    <InputText type="email" v-model="email" name="email" class="default_input w-100" :placeholder="$t('auth.emailPlc')" />


                    <span class="error text-danger fs-14" v-if="showEmail">
                        صيغة الأيميل غير صحيحة
                    </span>
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('auth.spec') }} 
                    </label>

                    <MultiSelect v-model="selectedSpec" :options="specs"  :maxSelectedLabels="3" optionLabel="name" :placeholder="$t('auth.specPlc')" class="default_input w-100 w-full md:w-14rem" @change="handleSpecs" />

                    <span class="error text-danger fs-14" v-if="showSpecError">
                        يرجى اختيار اخصائي
                    </span>
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('auth.city') }} 
                    </label>

                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" :placeholder="$t('auth.cityPlc')" class="default_input w-100 w-full md:w-14rem" />

                    <span class="error text-danger fs-14" v-if="showCityError">
                        يرجى اختيار مدينة
                    </span>
                </div>

                <!-- google map  -->
                <div class="form-group mb-3">

                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('auth.address') }} 
                    </label>
                    <InputText type="text" v-model="address"  @focus="googleMap=true" class="default_input w-100" :placeholder="$t('auth.addressPlc')" />
                    
                    <span class="error text-danger fs-14" v-if="showAddressError">
                        يرجى ادخال عنوانك
                    </span>
                </div>

                <div class="form-group mb-3 ">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        {{ $t('auth.licenseName') }}
                    </label>
                    <!-- <InputNumber v-model="commercialNumber" inputId="integeronly" class="default_input w-100" :placeholder="$t('auth.numberPlc')"/> -->
                    <input type="number" min="1" v-model="commercialNumber" class="default_input form-control w-100" :placeholder="$t('auth.numberPlc')">

                    <span class="error text-danger fs-14" v-if="showCom">
                        هذا الحقل مطلوب
                    </span>
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        {{ $t('auth.ownerName') }}
                    </label>
                    <InputText type="text" v-model="ownerName" name="ownerName" class="default_input w-100" :placeholder="$t('auth.ownerPlc')" />
                    <span class="error text-danger fs" v-if="showOwn">
                        هذا الحقل مطلوب
                    </span>
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('auth.bankName') }} 
                    </label>
                    <InputText type="text" v-model="bankName"  name="bankName" class="default_input w-100" :placeholder="$t('auth.bankPlc')" />
                    <span class="error text-danger fs" v-if="showBank">
                        هذا الحقل مطلوب
                    </span>
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('auth.iban') }} 
                    </label>
                    <InputText type="text" v-model="iban" name="iban" class="default_input w-100" :placeholder="$t('auth.ibanPlc')" />
                    <span class="error text-danger fs" v-if="showIban">
                        هذا الحقل مطلوب
                    </span>
                </div>


                <!-- upload images  -->
                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('auth.images') }} 
                    </label>

                    <!-- container  -->
                    <section>
                        <div class="upload_file_container position-relative">
                            <input
                                type="file" 
                                class="upload_file_input"
                                accept="image/*"
                                multiple
                                name="images"
                                @change="uploadAdImages($event.target)"
                             >
                            <span class="icon">
                                <i class="fa-solid fa-upload"></i>
                            </span>
                        </div>

                        

                        <div class="img-upload-show mt-4" >

                            <div class="d-flex" >
                                <div class="d-flex" style="flex-wrap:wrap">
                                    <div class="position-relative mx-2" v-for="(image, key) in images" :key="key" >
                                        <button class="remove-img text-white" type="button" @click="removeImage(image, key)">
                                            &times;
                                        </button>
                                        <img class="preview img-thumbnail" width="100" height="100" :ref="'image1'" /> 

                                    </div>

                                </div>
                            </div>

                        </div>


                    </section>
                </div>
                

                <div class="d-flex justify-content-center align-items-center mt-3">
                    <button class="btn main_btn w-100 pt-2 pb-2" :disabled="isDisabled"> 
                        <span v-if="!disabled"> {{ $t('auth.sign') }} </span> 
                        <div class="spinner-border" role="status" v-if="disabled">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </button>
                </div>
            </form>

            <!-- register  -->
            <div class="flex_center mt-3">
                <p class="grayColor">
                    هل لديك حساب  ؟
                    <router-link to="/center/login" class="third-color"> {{ $t('auth.login') }} </router-link>
                </p>
            </div>
        </section>
    </section>

    <!-- google map modal  -->      
    <Dialog v-model:visible="googleMap" modal :style="{ width: '50vw' }">
        <GMapMap
            :center="locations"
            :zoom="14"
            map-type-id="terrain"
            style="width: 100vw; height: 900px"
        >
            <GMapAutocomplete
                placeholder="ابحث عن عنوان"
                @place_changed="onPlaceChanged"
            >
            </GMapAutocomplete>
            <GMapMarker
                :position="locations"
                :clickable="true"
                :draggable="true"
                @mouseover="onMarkerDragEnd($event)"
            />
        </GMapMap>
    </Dialog>

    <Toast />
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
// import InputNumber from 'primevue/inputnumber';
import Toast from 'primevue/toast';

import { mapActions, mapGetters } from 'vuex';
import MultiSelect from 'primevue/multiselect';

import axios from 'axios';

// vuelidate 
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators'
export default {
    // use validate 
    setup(){
        return { v$ : useVuelidate() }
    },
    data(){
        return{
            locations:
            {
                lat: 0,
                lng: 0
            },
            currentLocation: {},
            map_desc: '',
            address : '',
            googleMap : false,
            images : [],
            imagesName : [],
            singleImage :null,
            selectedCity : null,

            // selectedCity : {
            //     "id": "64ae5989a2f2fd0c04737761",
            //     "name": "السعودية",
            //     "image": "https://azzam.4hoste.com/assets/uploads/country/image941689583177874.png",
            //     "code": "+966",
            // },
            selectedSpec : [],
            selectedCountry : {
                "id": "64ae5989a2f2fd0c04737761",
                "name": "السعودية",
                "image": "https://azzam.4hoste.com/assets/uploads/country/image941689583177874.png",
                "code": "+966",
            } , 
            cities : [],
            ownerName : '',
            name : '',
            phone : '',
            commercialNumber : '',
            email : '',
            bankName : '',
            iban : '',
            disabled : false,
            new_specs : [],


            nameTouched: false,
            phoneTouched: false,
            showrError : false,
            showEmail : false,
            showCom : false,
            showOwn : false,
            showBank : false,
            showName : false,

            showSpecError : false,
            showCityError : false,
            showAddressError : false,
            showIban : false
        }
    },
    validations(){
        return{
            name : { required },
            phone : { required },
            email : { required , email }
        }
    },
    watch:{
        phone(){
            let inputString = this.phone.toString();
            if( this.phone === '' || inputString.length < 9 ){
                this.showrError = true ; 
            }else if(this.phone !== '' ){
                this.showrError = false;
            }
        },
        email(){
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
                this.showEmail = false ;
            } else {
                this.showEmail = true ;
            }
        },
        commercialNumber(){
            if( this.commercialNumber === ''  ){
                this.showCom = true ; 
            }else if(this.commercialNumber !== '' ){
                this.showCom = false;
            }
        },
        ownerName(){
            if( this.ownerName === ''  ){
                this.showOwn = true ; 
            }else if(this.ownerName !== '' ){
                this.showOwn = false;
            }
        },
        bankName(){
            if( this.bankName === ''  ){
                this.showBank = true ; 
            }else if(this.bankName !== '' ){
                this.showBank = false;
            }
        },
        iban(){
            if( this.iban === ''  ){
                this.showIban = true ; 
            }else if(this.iban !== '' ){
                this.showIban = false;
            }
        },
        name(){
            if( this.name === ''  ){
                this.showName = true ; 
            }else if(this.name !== '' ){
                this.showName = false;
            }
        },


    },
    computed:{
        ...mapGetters('setting',['countries', 'specs']),

        isNameValid(){
            return this.name.trim() !== '';
        },
        isPhoneValid() {
            return this.phoneTouched ? this.phone.length >= 9 : true;
        },

        // very important 
        // isDisabled() {
        //     return (
        //             this.images.length === 0||
        //             !this.iban ||
        //             !this.bankName ||
        //             !this.ownerName ||
        //             !this.commercialNumber||
        //             !this.name ||
        //             !this.phone||
        //             !this.email||
        //             !this.address||
        //             !this.showrError === false ||
        //             !this.showEmail === false ||
        //             this.selectedCity === null ||
        //             this.selectedSpec.length === 0
        //         )
        // }

    },
    components:{
        InputText,
        Dropdown,
        Dialog,
        // InputNumber,
        Toast,
        MultiSelect
    },
    methods:{
        ...mapActions('setting',['getCountries']),

        // register 
        async register(){
            let inputString = this.phone.toString();
            if( this.phone === '' || inputString.length < 9  ){
                this.showrError = true ; 
            }
            else if(this.phone !== '' ){
                this.showrError = false;
            }
            // name 
            if( this.name === ''  ){
                this.showName = true ; 
            }else if(this.name !== '' ){
                // this.mainSubmitForm();   
                this.showName = false;
            }
            // email 
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
                this.showEmail = false ;
            } else {
                this.showEmail = true ;
            }
            // spec 
            if( this.selectedSpec.length == 0 ){
                this.showSpecError = true ;
            } else{
                this.showSpecError = false ;
            }
            // city 
            if( this.selectedCity == null ){
                this.showCityError = true ;
            }else{
                this.showCityError = false ;
            }
            // address 
            if( this.address == '' ){
                this.showAddressError = true ;
            }else{
                this.showAddressError = false ;   
            }
            // commercial 
            if( this.commercialNumber == '' ){
                this.showCom = true ;
            }else{
                this.showCom = false ;
            }
            if( this.ownerName == '' ){
                this.showOwn = true ;
            }else{
                this.showOwn = false ;
            }
            if( this.bankName == '' ){
                this.showBank = true
            }else{
                this.showBank = false ;
            }
            if( this.iban == '' ){
                this.showIban = true ;
            }else{
                this.showIban = false ;
            }


            if( this.showrError == false && this.showName == false && this.showIban == false && this.showBank == false && this.showOwn == false && this.showCom == false && this.showAddressError == false && this.showCityError == false && this.showSpecError == false && this.showEmail == false){
                this.mainSubmitForm();
            }
            
            
            
        },

        async mainSubmitForm(){
            const fd = new FormData( this.$refs.register );
                fd.append( 'countryCode', this.selectedCountry.code )
                fd.append( 'addressAr', this.address )
                fd.append( 'addressEn', this.address )
                fd.append( 'latitude', this.locations.lat );
                fd.append( 'longitude', this.locations.lng );
                if( this.selectedCity !== null ){
                    fd.append( 'city', this.selectedCity.id );
                }
                fd.append( 'commercialNumber', this.commercialNumber );
                fd.append( 'specialization', JSON.stringify(this.new_specs));
                this.disabled=true ;
                await axios.post('/signup-center', fd)
                .then((res)=>{
                    console.log("res",res);
                    if( res.data.key === 'success' ){   
                        this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                        setTimeout(() => {
                            this.$router.push('/center/login')
                        }, 1000);
                        this.disabled=false ;
                    }else{
                        this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                        this.disabled=false ;
                    }
                } ).catch ((err)=> {
                    this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                    this.disabled=false ;
                } )
        },
        chooseCountry(){
            document.querySelector('.p-dropdown-label').innerHTML = `
            <img src="${this.selectedCountry.image}" class="country_image">
            ${this.selectedCountry.code}
            ` ; 
            this.getCities()
        },

        uploadProfilePic(e){
            const file = e.target.files[0];
            this.$refs.profile.src = URL.createObjectURL(file);

        },
        // get cities 
        async getCities(){
            await axios.get(`/cities?countryId=${this.selectedCountry.id}`)
            .then( (res)=>{
                this.cities = res.data.data ;
            } )
        },
        // get current location  
        geolocation() {
            navigator.geolocation.getCurrentPosition((position) => {
                this.locations = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
            });
        },

        // get new value after dragged 
        onMarkerDragEnd(event) {
            // get new lat lang value 
            const newLat = event.latLng.lat()
            const newLng = event.latLng.lng()
            this.locations = {
                lat: newLat,
                lng: newLng
            }

            // get format_address 
            const latLng = event.latLng
            const geocoder = new window.google.maps.Geocoder()
            geocoder.geocode({ location: latLng }, (results, status) => {
                if (status === 'OK') {
                    this.address = results[0].formatted_address
                } else {
                    console.error('Geocode was not successful for the following reason: ' + status)
                }
            })

        },

        onPlaceChanged(place) {
          if (place.geometry) {
            this.locations = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            };
            this.address = place.formatted_address;
          }
        },

        // upload images 
        uploadAdImages(file){
            // preview operation 
            let selectedImages2 = file.files ;

            for( let i = 0 ; i < selectedImages2.length ; i++ ){
                this.images.push( selectedImages2[i] )
                this.imagesName.push(selectedImages2[i].name);
            }
                 
            
              
            this.applyImage();
        },
        // remvoe image 
        removeImage(image, key){
            this.images.splice(key, 1);
            this.applyImage();

        },
        // apply image 
        applyImage() {
          for (let i = 0; i < this.images.length; i++) {
            let reader = new FileReader();
            reader.onload = () => {
              this.$refs.image1[i].src = reader.result;
            };
            reader.readAsDataURL(this.images[i]);
          }
        },

        handleSpecs(){
            // const newspecs = [] ;
            for( let i = 0 ; i<this.selectedSpec.length ; i++ ){
                this.new_specs.push(this.selectedSpec[i].id) 
            }
            console.log(JSON.stringify(this.new_specs)) ;
            // this.new_specs = Object.values(newspecs) ;
            // // console.log( this.new_specs)
        },

        
    },
    mounted(){
        this.geolocation();
        this.getCountries();
        this.getCities();
        document.querySelector('.p-dropdown-label').innerHTML = `
            <img src="${this.selectedCountry.image}" class="country_image">
            ${this.selectedCountry.code}
            ` ;
    }
}
</script>


<style scoped>
    .main_btn:disabled{ opacity: .5; cursor: not-allowed; }
    #auth #login{
        transform: translateY(10%);
    }
    .p-multiselect{
        background-color: #fff !important;
    }
    .p-multiselect .p-multiselect-label.p-placeholder {
        color: #c3c0c0 !important;
    }

    .p-dropdown .p-dropdown-label.p-placeholder {
        color: #bbb7b7 !important;
        font-size: 13px;
    }
</style>
<style lang="scss">
.p-multiselect .p-multiselect-label.p-placeholder  {
    color: #aaa5a5c9 !important; 
    font-size: 12px;
}
.p-inputtext{
    font-family: "Cairo", sans-serif !important;
}

.vue-map{
    width: 100% !important;
    height: 72vh !important;
    position: relative;
    overflow: hidden;
}
.pac-container{
    z-index: 9999 !important;
}
.vue-map-hidden{
    position: absolute  !important;
    top: 92px !important;
    right: 50% !important;
    transform: translate(50%, 50%) !important;
}
.upload_file_container{
    border: 1px dashed #3290d8;
    width: 90px;
    height: 90px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        color:#333;
    }
    input.upload_file_input{
        position: absolute;
        widows: 100%;
        height:100%;
        top: 0;
        right:0;
        opacity: 0;
    }
}
.preview{
    width: 80px;
    height: 80px !important;
    border-radius: 5px;
}
.remove-img{
    position: absolute;
    top: -4px;
    left:-4px;
    background-color: red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    width:25px;
    height:25px;
    border: none;
}
.p-multiselect.p-multiselect-chip .p-multiselect-token{
    background: #fff !important;
    border: 1px solid #ddd !important;
    min-width: 120px;
    position: relative;
    justify-content: center;
    text-align: center;
}
.p-multiselect.p-multiselect-chip .p-multiselect-token .p-multiselect-token-icon{
    position: absolute;
    right: -2px;
    top: -2px;
    background: #f00;
    color: #fff;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>