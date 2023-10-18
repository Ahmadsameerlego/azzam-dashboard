<template>
    <section id="auth">
        <section id="login">
            <!-- logo  -->
            <div class="logo mx-auto d-flex">
                <img :src="require('@/assets/imgs/logo.png')" alt="Azzam Logo">
            </div>
            <!-- title  -->
            <div class="mt-3">
                <h6 class="blackColor fw-bold"> تسجيل جديد </h6>
                <p class="grayColor">
                    برجاء ادخال بيانات حسابك حتى تتمكن من التسجيل
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

                
                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            اسم المركز 
                    </label>
                    <InputText type="text" v-model="name" name="name" class="default_input w-100" placeholder="الرجاء ادخال اسم المركز" />

                </div>

                <div class="form-group mb-3 position-relative">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            رقم الجوال 
                    </label>

                    <InputText type="text" v-model="phone" name="phone" class="default_input w-100" placeholder="الرجاء ادخال رقم الجوال" />

                    <!-- country code  -->
                    <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name"  class="default_input country_code  w-full md:w-14rem" />

                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            البريد الالكتروني 
                    </label>
                    <InputText type="text" v-model="email" name="email" class="default_input w-100" placeholder="الرجاء ادخال البريد الالكتروني" />
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            التخصص 
                    </label>

                    <MultiSelect v-model="selectedSpec" :options="specs"  :maxSelectedLabels="3" optionLabel="name" placeholder="الرجاء اختيار التخصص" class="default_input w-100 w-full md:w-14rem" />

                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            المدينة 
                    </label>

                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="الرجاء اختيار مدينة" class="default_input w-100 w-full md:w-14rem" />

                </div>

                <!-- google map  -->
                <div class="form-group mb-3">

                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            العنوان 
                    </label>
                    <InputText type="text" v-model="address"  @focus="googleMap=true" class="default_input w-100" placeholder="الرجاء ادخال العنوان على الخريطة" />
                    
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        رقم الترخيص
                    </label>
                    <InputNumber v-model="commercialNumber" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال رقم الترخيص"/>
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            اسم المالك 
                    </label>
                    <InputText type="text" v-model="ownerName" name="ownerName" class="default_input w-100" placeholder="الرجاء ادخال اسم المالك" />
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            اسم البنك 
                    </label>
                    <InputText type="text" v-model="bankName"  name="bankName" class="default_input w-100" placeholder="الرجاء ادخال اسم البنك" />
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            رقم الايبان 
                    </label>
                    <InputText type="text" v-model="iban" name="iban" class="default_input w-100" placeholder="الرجاء ادخال رقم الايبان" />
                </div>


                <!-- upload images  -->
                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            صور الاعتمادات والخبرات 
                    </label>

                    <!-- container  -->
                    <section>
                        <div class="upload_file_container position-relative">
                            <input
                                type="file" 
                                class="upload_file_input"
                                accept="image/*"
                                multiple
                                name="images[]"
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
                    <button class="btn main_btn w-100 pt-2 pb-2" :disabled="disabled"> 
                        <span v-if="!disabled">تسجيل</span> 
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
                    <router-link to="/login" class="third-color"> تسجيل الدخول </router-link>
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
                placeholder="This is a placeholder"
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
import InputNumber from 'primevue/inputnumber';
import Toast from 'primevue/toast';

import { mapActions, mapGetters } from 'vuex';
import MultiSelect from 'primevue/multiselect';

import axios from 'axios';
export default {
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

            selectedCountry : {
                "id": "64ae5989a2f2fd0c04737761",
                "name": "السعودية",
                "image": "https://azzam.4hoste.com/assets/uploads/country/image941689583177874.png",
                "code": "+966",
            },
            selectedSpec : [],
            selectedCity : null , 
            cities : [],
            ownerName : '',
            name : '',
            phone : '',
            commercialNumber : null,
            email : '',
            bankName : '',
            iban : '',
            disabled : false
        }
    },
    computed:{
        ...mapGetters('setting',['countries', 'specs'])
    },
    components:{
        InputText,
        Dropdown,
        Dialog,
        InputNumber,
        Toast,
        MultiSelect
    },
    methods:{
        ...mapActions('setting',['getCountries']),
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

        // register 
        async register(){
            const fd = new FormData( this.$refs.register );
            fd.append( 'countryCode', this.selectedCountry.code )
            fd.append( 'addressAr', this.address )
            fd.append( 'addressEn', this.address )
            fd.append( 'latitude', this.locations.lat );
            fd.append( 'longitude', this.locations.lng );
            fd.append( 'city', this.selectedCity.id );
            fd.append( 'commercialNumber', this.commercialNumber );

            for( let i = 0 ; i<this.selectedSpec.length ; i++ ){
                fd.append( 'specialization', this.selectedSpec[i].id );
            }


            this.disabled=true ;
            await axios.post('/signup-center', fd)
            .then((res)=>{
                console.log("res",res);
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.message, life: 3000 });
                    setTimeout(() => {
                        this.$router.push('/login')
                    }, 3000);
                    this.disabled=false ;
                }else{
                    this.$toast.add({ severity: 'error', summary: res.message, life: 3000 });
                    this.disabled=false ;
                }
            } ).catch ((err)=> {
                this.$toast.add({ severity: 'error', summary: err, life: 3000 });
            } )
        }
    },
    mounted(){
        this.geolocation();
        this.getCountries();
        this.getCities();
    }
}
</script>


<style scoped>
    .main_btn:disabled{ opacity: .5; cursor: not-allowed; }
    #auth #login{
        transform: translateY(10%);
    }
</style>
<style lang="scss">
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
</style>