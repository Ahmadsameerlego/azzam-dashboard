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

                <div class="d-flex justify-content-center align-items-center mt-3">
                    <button class="btn main_btn w-100 pt-2 pb-2"> تسجيل الدخول </button>
                </div>
            </form>

            <!-- register  -->
            <div class="flex_center mt-3">
                <p class="grayColor">
                    ليس لديك حساب  ؟
                    <router-link to="/" class="third-color"> اضغط هنا </router-link>
                </p>
            </div>
        </section>
    </section>
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';

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
        }
    },
    components:{
        InputText,
        Dropdown,
        Dialog
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
  
</style>