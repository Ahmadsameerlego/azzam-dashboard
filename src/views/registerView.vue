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
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            رقم الجوال 
                    </label>

                    <InputText type="text" v-model="phone" class="default_input w-100" placeholder="الرجاء ادخال رقم الجوال" />

                    <!-- country code  -->
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="default_input country_code  w-full md:w-14rem" />

                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            البريد الالكتروني 
                    </label>
                    <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال البريد الالكتروني" />
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

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        رقم الترخيص
                    </label>
                    <InputNumber v-model="value1" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال رقم الترخيص"/>
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            اسم المالك 
                    </label>
                    <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال اسم المالك" />
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            اسم البنك 
                    </label>
                    <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال اسم البنك" />
                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            رقم الايبان 
                    </label>
                    <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال رقم الايبان" />
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
                    <button class="btn main_btn w-100 pt-2 pb-2"> تسجيل  </button>
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
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import InputNumber from 'primevue/inputnumber';

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
            singleImage :null
        }
    },
    components:{
        InputText,
        Dropdown,
        Dialog,
        InputNumber
    },
    methods:{
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
    }
}
</script>

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