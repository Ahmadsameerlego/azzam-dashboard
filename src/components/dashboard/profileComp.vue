<template>
  <section class="pt-3 pb-3 px-5">
    <div>
      <h6 class="fw-bold blackColor">{{ $t('nav.profile') }}</h6>
      <p class="grayColor"> {{$t('profile.manage')  }} </p>
    </div>
  </section>

  <section id="profile" class="mx-5 pt-3 pb-3 px-3 main-bg">
    <section id="login" class="mx-0 px-0" style="width: 40%">
      <!-- title  -->
      <div class="">
        <h6 class="blackColor fw-bold"> {{ $t('profile.title') }} </h6>
      </div>
      <!-- form  -->
      <form @submit.prevent="editProfile" ref="profileform">
        <!-- profile pic  -->
        <section class="profile_pic mx-auto d-flex mt-4">
          <input type="file" class="uploadInput" name="avatar" @change="uploadProfilePic" />
          <!-- default image  -->
          <img :src="azamImg" class="profile_image" alt="" />
          <!-- edit  -->
          <span class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
          </span>
        </section>

        <div class="form-group mb-3">
          <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
            {{ $t('auth.centerName') }}
          </label>
          <InputText
            type="text"
            v-model="name"
            class="default_input w-100"
            :placeholder="$t('auth.namePlc')"
          />

          <!-- validation message  -->
          <div class="error text-danger fs-14"  v-if="showName"> {{ $t('auth.namePlc') }}  </div>

        </div>

        <div class="form-group mb-3 position-relative">
          <label
            for=""
            class="blackColor d-block fw-6 mb-2 fs-14 d-flex justify-content-between"
          >
            <span> {{ $t('auth.phone') }} </span>
            <span class="grayColor" @click="sendCode" style="cursor: pointer"
              >{{ $t('auth.changePhone') }}</span
            >
          </label>

          <InputText
            type="text"
            v-model="phone"
            class="default_input w-100"
            :placeholder="$t('auth.phonePlc')"
          />

          <!-- country code  -->
          <Dropdown
            v-model="selectedCountry"
            @change="chooseCountry"
            :options="countries"
            optionLabel="name"
            class="default_input country_code w-full md:w-14rem"
          >
            <template #value="slotProps">
              <div class="flex align-items-center">
                <!-- <img :alt="slotProps.image" :src="slotProps.image" :class="`mr-2 flag flag-${slotProps.code.toLowerCase()}`" style="width: 18px" /> -->
                <span>
                  {{ slotProps }}
                </span>
              </div>
            </template>
          </Dropdown>

          <div class="error text-danger fs-14"  v-if="showrError" > {{ $t('common.phoneValid') }} </div>

        </div>

        <div class="form-group mb-3">
          <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
            {{ $t('auth.email') }}
          </label>
          <InputText
            type="email"
            v-model="email"
            class="default_input w-100"
            :placeholder="$t('auth.emailPlc')"
          />

          <span class="error text-danger fs-14" v-if="showEmail">
              {{ $t('auth.emailPlc') }}
          </span>
        </div>

        <div class="form-group mb-3">
          <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
            {{ $t('auth.spec') }}
          </label>

          <Dropdown
            v-model="selectedSpecial"
            :options="specials"
            optionLabel="name"
            :placeholder="specialPlace"
            class="default_input w-100 w-full md:w-14rem"
          />

          <span class="error text-danger fs-14" v-if="showSpecError">
              يرجى اختيار اخصائي
          </span>
        </div>

        <div class="form-group mb-3">
          <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
            {{ $t('auth.city') }}
          </label>

          <Dropdown
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            :placeholder="cityPlace"
            class="default_input w-100 w-full md:w-14rem"
          />

          <span class="error text-danger fs-14" v-if="showCityError">
              يرجى اختيار مدينة
          </span>
        </div>

        <!-- google map  -->
        <div class="form-group mb-3">
          <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
            {{ $t('auth.address') }}
          </label>
          <InputText
            type="text"
            v-model="address"
            @focus="googleMap = true"
            class="default_input w-100"
            :placeholder="$t('auth.addressPlc')"
          />

          <span class="error text-danger fs-14" v-if="showAddressError">
              {{ $t('auth.addressPlc') }}
          </span>
        </div>

        <div class="form-group default_input mb-5">
          <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
            {{ $t('auth.licenseName') }}
          </label>
          <!-- <InputNumber v-model="commercialNumber" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال رقم الترخيص"/> -->
          <input
            type="number"
            v-model="commercialNumber"
            class="form-control w-100"
            :placeholder="$t('auth.numberPlc')"
          />
          <span class="error text-danger fs-14" v-if="showCom">
              {{ $t('auth.numberPlc') }}
          </span>
        </div>

        <div class="form-group mb-3">
          <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
            {{ $t('auth.ownerName') }}
          </label>
          <InputText
            type="text"
            v-model="ownerName"
            class="default_input w-100"
            :placeholder="$t('auth.ownerPlc')"
          />

          <span class="error text-danger fs" v-if="showOwn">
              {{ $t('auth.ownerPlc') }}
          </span>
        </div>

        <div class="form-group mb-3">
          <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
            {{ $t('auth.bankName') }}
          </label>
          <InputText
            type="text"
            v-model="bankName"
            class="default_input w-100"
            :placeholder="$t('auth.bankPlc')"
          />
          <span class="error text-danger fs" v-if="showBank">
              {{ $t('auth.bankPlc') }}
          </span>

        </div>

        <div class="form-group mb-3">
          <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
            {{ $t('auth.iban') }}
          </label>
          <InputText
            type="text"
            v-model="iban"
            class="default_input w-100"
            :placeholder="$t('auth.ibanPlc')"
          />

          <span class="error text-danger fs" v-if="showIban">
              {{ $t('auth.ibanPlc') }}
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
                name="images"
                class="upload_file_input"
                accept="image/*"
                multiple
                @change="uploadAdImages($event.target)"
              />
              <span class="icon">
                <i class="fa-solid fa-upload"></i>
              </span>
            </div>

            <div class="img-upload-show mt-4">
              <div class="d-flex">
                <div class="edited-imgs">
                  <div class="d-flex" style="flex-wrap: wrap">
                    <div
                      class="position-relative mx-2"
                      v-for="(image, key) in imagesEdited"
                      :key="key"
                    >
                      <button
                        class="remove-img text-white"
                        type="button"
                        @click="removeImageEdited(image, key)"
                      >
                        &times;
                      </button>
                      <img
                        class="preview img-thumbnail"
                        width="100"
                        height="100"
                        :src="image"
                      />
                    </div>
                  </div>
                </div>
                <div class="d-flex" style="flex-wrap: wrap">
                  <div
                    class="position-relative mx-2"
                    v-for="(image, key) in images"
                    :key="key"
                  >
                    <button
                      class="remove-img text-white"
                      type="button"
                      @click="removeImage(image, key)"
                    >
                      &times;
                    </button>
                    <img
                      class="preview img-thumbnail"
                      width="100"
                      height="100"
                      :ref="'image1'"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="d-flex justify-content-center align-items-center mt-3">
          <!-- <button class="btn main_btn w-100 pt-2 pb-2">تعديل</button> -->
          <button
            type="submit"
            class="btn main_btn w-100 pt-2 pb-2 d-flex justify-content-center"
            :disabled="disabled"
          >
            <div v-if="!disabled">{{ $t('auth.edit') }}</div>
            <div class="loading" role="status" v-if="disabled">
              <div class="spinner-small-white" v-if="disabled"></div>
            </div>
          </button>
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
    <div style="margin: 0 135px">
      <h6 class="fw-bold blackColor"> {{ $t('nav.profile') }} </h6>
      <p class="grayColor"> {{ $t('profile.manage') }} </p>
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
              style="flex-direction: row-reverse"
            />
          </div>
        </div>
      </div>

      <div
        class="d-flex justify-content-center align-items-center mt-3 w-75 mx-auto"
      >
        <button
          class="btn main_btn w-100 pt-2 pb-2"
          type="button"
          @click="activation"
        >
          {{ $t('auth.confirm') }}
        </button>
      </div>

      <div class="flex_center mt-3">
        <p class="grayColor">
          {{ $t('auth.getNoCode') }} ؟
          <span class="third-color pointer-click" @click="resendCode">
            {{ $t('auth.resend') }}
          </span>
        </p>
      </div>
    </form>
  </Dialog>

  <Toast />
</template>

<script>
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Dialog from "primevue/dialog";
// import InputNumber from 'primevue/inputnumber';

import axios from "axios";
import Toast from "primevue/toast";

export default {
  data() {
    return {
      disabled: false,
      locations: {
        lat: 0,
        lng: 0,
      },
      currentLocation: {},
      map_desc: "",
      address: "",
      googleMap: false,
      images: [],
      imagesEdited: [],

      imagesName: [],
      singleImage: null,
      changePhoneModal: false,

      profile: null,
      countries: [],
      selectedCountry: {
        "id": "64ae5989a2f2fd0c04737761",
        "name": "السعودية",
        "image": "https://azzam.4hoste.com/assets/uploads/country/image941689583177874.png",
        "code": "+966",
        "cities": [
            {
                "id": "64b3fad223389f0f2071ee4f",
                "name": "جدة",
                "image": "",
                "code": ""
            },
            {
                "id": "64b4fd5d5e73dbfc515475f0",
                "name": "الرياض",
                "image": "",
                "code": ""
            }
        ]
      },
      selectedSpecial: null,
      specialPlace: "",
      specials: [],

      name: "",
      azamImg: require("@/assets/imgs/logo.png"),
      phone: "",
      email: "",
      commercialNumber: "",
      bankName: "",
      iban: "",
      ownerName: "",
      imagesEdit: [],
      selectedCity: null,
      cities: [],
      sendedImgs: [],
      cityPlace: "",
      code: "",


      showSpecError : false,
      showCityError : false,
      showAddressError : false,
      showIban : false,
      showrError : false,
      showEmail : false,
      showCom : false,
      showOwn : false,
      showBank : false,
      showName : false,

    }
  },
  components: {
    InputText,
    Dropdown,
    Dialog,
    // InputNumber,
    Toast,
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
  methods: {
    // send code
    async sendCode() {
      this.disabled = true;
      const fd = new FormData();
      fd.append("phone", localStorage.getItem("loginKey"));
      fd.append("countryCode", localStorage.getItem("countryCode"));
      fd.append("userType", "center");

      await axios
        .patch("/send-code", fd, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.data.key === "success") {
            this.$toast.add({
              severity: "success",
              summary: res.data.message,
              life: 3000,
            });
            this.disabled = false;
            this.changePhoneModal = true;
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.message,
              life: 3000,
            });
            this.disabled = false;
          }
        })
        .catch((err) => {
          // this.$toast.add({
          //   severity: "error",
          //   summary: err.response.data,
          //   life: 3000,
          // });
          console.log(err)
          this.disabled = false;
        });
    },
    // activation
    async activation() {
      this.disabled = true;
      const fd = new FormData();

      fd.append("code", this.code);

      await axios
        .patch("/validate-activation-code", fd, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.data.key === "success") {
            this.$toast.add({
              severity: "success",
              summary: res.data.message,
              life: 3000,
            });
            this.disabled = false;
            this.$router.push("/changePhone");
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.message,
              life: 3000,
            });
            this.disabled = false;
          }
        })
        .catch((err) => {
          this.$toast.add({
            severity: "error",
            summary: err.response.data.message,
            life: 3000,
          });
          this.disabled = false;
        });
    },

    // resend code
    async resendCode() {
      const fd = new FormData();
      fd.append("loginKey", localStorage.getItem("loginKey"));
      fd.append("countryCode", localStorage.getItem("countryCode"));
      fd.append("userType", "center");

      await axios.patch("/resend-code", fd).then((res) => {
        if (res.data.key === "success") {
          this.$toast.add({
            severity: "success",
            summary: res.data.message,
            life: 3000,
          });
        } else {
          this.$toast.add({
            severity: "error",
            summary: res.data.message,
            life: 3000,
          });
        }
      });
    },
    uploadProfilePic(e) {
      const file = e.target.files[0];
      this.azamImg = URL.createObjectURL(file);
    },
    async editProfile() {

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
            if( this.specials.length == 0 ){
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
      this.disabled = true;

      const fd = new FormData(this.$refs.profileform);
      fd.append("name", this.name);
      fd.append("email", this.email);
      fd.append("phone", this.phone);
      fd.append("commercialNumber", this.commercialNumber);
      fd.append("ownerName", this.ownerName);
      fd.append("iban", this.iban);
      fd.append("bankName", this.bankName);
      fd.append("city", this.selectedCity.id);
      fd.append("addressAr", this.address);
      fd.append("addressEn", this.address);
      fd.append("latitude", this.locations.lat);
      fd.append("longitude", this.locations.lng);

      fd.append("deleteImageName", JSON.stringify(this.sendedImgs));
      fd.append("countryCode", this.selectedCountry.code);
      let arraySpecial = [];
      arraySpecial.push(this.selectedSpecial.id)
      fd.append("specialization", JSON.stringify(arraySpecial));
      //   fd.append("city", this.selectedCity.id);

      await axios
        .put("/edit-center", fd, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.data.key === "success") {
            this.$toast.add({
              severity: "success",
              summary: res.data.message,
              life: 3000,
            });
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.message,
              life: 3000,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.$toast.add({
            severity: "error",
            summary: err.response.data.message,
            life: 3000,
          });
        });
      this.disabled = false;

    },

    chooseCountry() {
      document.querySelector(".p-dropdown-label").innerHTML =
          `
            <img src="${this.selectedCountry.image}" class="country_image">
            ${this.selectedCountry.code}
            ` ;
      this.getSpecialists();
    },
    // get cities
    removeImageEdited(image, i) {
      let namesArray = [];
      namesArray.push(image);
      console.log(namesArray);
      this.imagesEdited.splice(i, 1);
      this.sendedImgs = namesArray;
    },

    async getSpecialists() {
      await axios
        .get(`/global`)
        .then((res) => {
          //   console.log(res.data.data);
          this.specials = res.data.data.specializations;
          this.countries = res.data.data.countries;
          this.cities = this.selectedCountry.cities;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // get profile
    async getProfile() {
      // const fd = new FormData();
      await axios
        .get("/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.data.key === "success") {
            console.log(res.data.data);
            this.name = res.data.data.name;
            this.email = res.data.data.email;
            this.phone = res.data.data.phone;
            this.ownerName = res.data.data.ownerName;
            this.imagesEdited = res.data.data.images;
            this.selectedSpecial = res.data.data.specialization[0];
            this.specialPlace = res.data.data.specialization[0].name;
            this.locations.lat = res.data.data.latitude;
            this.locations.lng = res.data.data.longitude;
            this.commercialNumber = res.data.data.commercialNumber;
            this.azamImg = res.data.data.avatar;
            this.iban = res.data.data.iban;
            this.bankName = res.data.data.bankName;
            this.cityPlace = res.data.data.cityName;
            this.address = res.data.data.addressAr;

            this.selectedCountry.code = res.data.data.countryCode;
            // document.querySelector(".p-dropdown-label").innerHTML =
            //   res.data.data.countryCode;
            //   `
            // <img src="${this.selectedCountry.image}" class="country_image">
            // ${this.selectedCountry.code}
            // ` ;
            this.selectedCity = {
              id: res.data.data.cityId,
              name: res.data.data.cityName,
            };
          }
        })
        .catch((err) => {
          this.$toast.add({
            severity: "error",
            summary: err.response.data.message,
            life: 3000,
          });
        });
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
      const newLat = event.latLng.lat();
      const newLng = event.latLng.lng();
      this.locations = {
        lat: newLat,
        lng: newLng,
      };

      // get format_address
      const latLng = event.latLng;
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === "OK") {
          this.address = results[0].formatted_address;
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
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
    uploadAdImages(file) {
      // preview operation
      let selectedImages2 = file.files;

      for (let i = 0; i < selectedImages2.length; i++) {
        this.images.push(selectedImages2[i]);
        this.imagesName.push(selectedImages2[i].name);
        console.log(this.images);
      }

      this.applyImage();
    },
    // remvoe image
    removeImage(image, key) {
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
  mounted() {
    this.geolocation();
    // document.querySelector(".p-dropdown-label").innerHTML =
    //       `
    //         <img src="${this.selectedCountry.image}" class="country_image">
    //         ${this.selectedCountry.code}
    //         ` ;
    this.getProfile();
    this.getSpecialists();
    this.chooseCountry();
    // this.getCities();

    document.querySelector(".p-dropdown-label").innerHTML =
          `
            <img src="${this.selectedCountry.image}" class="country_image">
            ${this.selectedCountry.code}
            ` ;
  },
};
</script>

<style>
.country_code {
  position: absolute !important;
  width: 29% !important;
  left: 0;
  top: 40%;
}
.pointer-click {
  cursor: pointer;
}
</style>
