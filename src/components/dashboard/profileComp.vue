<template>
    <section class="pt-3 pb-3 px-5 ">
        <div>
            <h6 class="fw-bold blackColor"> الملف الشخصي </h6>
            <p class="grayColor"> 
                ادارة الملف الشخصي
            </p>
        </div>
    </section>

    <section id="profile" class="mx-5 pt-3 pb-3 px-3 main-bg">
        <section id="login" class="mx-0 px-0" style="width:40%">
            
            <!-- title  -->
            <div class="">
                <h6 class="blackColor fw-bold"> بيانات الملف الشخصي </h6>
            </div>
            <!-- form  -->
            <form>
                <!-- profile pic  -->
                <section class="profile_pic mx-auto d-flex mt-4">
                    <input type="file" name="" @change="uploadProfilePic" class="uploadInput">
                    <!-- default image  -->
                    <img :src="require('@/assets/imgs/logo.png')" class="profile_image" alt="">
                    <!-- edit  -->
                    <span class="edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </span>
                </section>

                
                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            اسم المركز 
                    </label>
                    <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال اسم المركز" />

                </div>

                <div class="form-group mb-3 position-relative">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14 d-flex justify-content-between">
                            <span>رقم الجوال</span> 
                            <span class="grayColor" style="cursor: pointer;" @click="changePhoneModal=true">تغيير رقم الجوال</span>
                    </label>

                    <InputText type="text" v-model="phone" class="default_input w-100" placeholder="الرجاء ادخال رقم الجوال" />

                    <!-- country code  -->
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="default_input country_code  w-full md:w-14rem" />

                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            البريد الالكتروني 
                    </label>
                    <InputText type="email" v-model="email" class="default_input w-100" placeholder="الرجاء ادخال البريد الالكتروني" />
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            التخصص 
                    </label>

                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="default_input w-100 w-full md:w-14rem" />

                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            المدينة 
                    </label>

                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="default_input w-100 w-full md:w-14rem" />

                </div>

                <!-- google map  -->
                <div class="form-group mb-3">

                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            العنوان 
                    </label>
                    <InputText type="text" v-model="address"  @focus="googleMap=true" class="default_input w-100" placeholder="الرجاء ادخال العنوان على الخريطة" />
                    
                </div>

                <div class="form-group default_input mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        رقم الترخيص
                    </label>
                    <!-- <InputNumber v-model="commercialNumber" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال رقم الترخيص"/> -->
                    <input type="number" v-model="commercialNumber" class="form-control  w-100" placeholder="الرجاء ادخال رقم الترخيص">
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            اسم المالك 
                    </label>
                    <InputText type="text" v-model="ownerName" class="default_input w-100" placeholder="الرجاء ادخال اسم المالك" />
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            اسم البنك 
                    </label>
                    <InputText type="text" v-model="bankName" class="default_input w-100" placeholder="الرجاء ادخال اسم البنك" />
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            رقم الايبان 
                    </label>
                    <InputText type="text" v-model="iban" class="default_input w-100" placeholder="الرجاء ادخال رقم الايبان" />
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
                                name="boatImages[]"
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
                    <button class="btn main_btn w-100 pt-2 pb-2"> تعديل  </button>
                </div>
            </form>

           
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
    
    <!-- change phone otp  -->
     <Dialog v-model:visible="changePhoneModal" modal :style="{ width: '50vw' }">
        <div style="margin:0 135px">
            <h6 class="fw-bold blackColor"> الملف الشخصي </h6>
            <p class="grayColor"> 
                ادارة الملف الشخصي
            </p>
        </div>

        <form>
            <div class="form-group position-relative">        
                <!-- otp  -->
                <div class="position-relative flex-auto">
                    <div
                        style="
                        display: flex;
                        flex-direction: row;
                        justify-content: space-evenly;
                        "
                    >
                        <v-otp-input
                            ref="otpInput"
                            v-model:value="code"
                            name="code"
                            input-classes="otp-input"
                            separator=""
                            :num-inputs="6"
                            :should-auto-focus="true"
                            autofocus
                            input-type="letter-numeric"
                            style="flex-direction: row-reverse;"
                        />
                    </div>
                </div>

            </div>

            <div class="d-flex justify-content-center align-items-center mt-3 w-75 mx-auto">
                <button class="btn main_btn w-100 pt-2 pb-2"> تأكيد </button>
            </div>

            <div class="flex_center mt-3">
                <p class="grayColor">
                    لم يصلك الكود  ؟
                    <span  class="third-color"> إعادة ارسال </span>
                </p>
            </div>
        </form>
    </Dialog>

    <Toast />
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
// import InputNumber from 'primevue/inputnumber';

import axios from 'axios';
import Toast from 'primevue/toast';

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
            changePhoneModal : false,

            profile : null,

            name : '',
            phone : '',
            email : '',
            commercialNumber : '',
            bankName : '',
            iban : '',
            ownerName : ''
         }
    },
    components:{
        InputText,
        Dropdown,
        Dialog,
        // InputNumber,
        Toast
    },
    methods:{

        async handleProfile(){
            const fd = new FormData();
            await axios.put('/edit-center',fd , {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    let user = res.data.data ;
                    this.profile = user ;
                    this.name = user.name ;
                    this.email = user.email ;
                    this.commercialNumber = user.commercialNumber ;
                    this.iban = user.iban ;
                    this.bankName = user.bankName ;
                    this.ownerName = user.ownerName ;
                    // this.name = user.name ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
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


        
    },
    mounted(){
        this.geolocation();

        this.handleProfile();
    }
}
</script>

<style>

</style>