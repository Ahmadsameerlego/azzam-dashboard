<template>
    <div class="home">
      <!-- side bar  -->
      <sidebar />
      <!-- header  -->
      <dash_header />
  
      <section id="content">
        <!-- content  -->
        <section class="pt-3 pb-3 px-5">
          <div class="flex-bet-main">
            <div>
              <h6 class="fw-bold blackColor">{{ $t('add.title') }}</h6>
              <p class="grayColor">{{ $t('add.desc') }}</p>
            </div>
          </div>
        </section>
        <form action="" @submit.prevent="addSesion" ref="sendForm">
          <section class="main-bg p-3 mx-5 mb-3 font-bold">
            <h6 class="sec-color mb-4"> {{ $t('add.addSession') }} </h6>
            <div class="row">

              <div class="col-lg-6 col-12 mb-3">


                <div class="main-input-cont">
                  <h6 class="mb-2 font14">{{ $t('add.spec') }}</h6>
                  <Dropdown
                    v-model="selectedSpecialist"
                    :options="specials"
                    optionLabel="name"
                    :placeholder="$t('add.specPlc')"
                    class="main-select"
                  />
  
                  <div class="abs-icon-right">
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                  </div>
                  <span class="error text-danger fs-13" v-if="isSpec"> {{ $t('add.specPlc') }} </span>
                </div>


              </div>
              <div class="col-lg-6 col-12 mb-3">
                <div class="form-group">
                  <h6 class="mb-2 font14">{{ $t('add.name') }}</h6>
                  <InputText
                    type="text"
                    name="name"
                    v-model="name"
                    class="default_input w-100"
                    :placeholder="$t('add.namePlc')"
                  />
                  <span class="error text-danger fs-13" v-if="isNamed"> {{ $t('add.namePlc') }} </span>

                </div>
              </div>
              <div class="col-lg-6 col-12 mb-3">
                <div class="main-input-cont">
                  <h6 class="mb-2 font14">{{ $t('add.type') }}</h6>
                  <Dropdown
                    v-model="selectedType"
                    :options="types"
                    optionLabel="name"
                    :placeholder="$t('add.typePlc')"
                    class="main-select"
                  />
  
                  <div class="abs-icon-right">
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                  </div>
                  <span class="error text-danger fs-13" v-if="isTyped"> {{ $t('add.typePlc') }} </span>

                </div>
              </div>
              <div class="col-lg-6 col-12 mb-3">
                <div class="form-group">
                  <h6 class="mb-2 font14">{{ $t('add.duration') }}</h6>
                  <InputText
                    type="number"
                    name="duration"
                    class="default_input w-100"
                    v-model="duration"
                    :placeholder="$t('add.durationPlc')"
                    min="1"
                  />
                  <span class="error text-danger fs-13" v-if="isDuration"> {{ $t('add.durationPlc') }} </span>

                </div>
              </div>
              <div class="col-12 mb-3">
                <div class="form-group">
                  <h6 class="mb-2 font14">{{ $t('add.inst') }}</h6>
                  <InputText
                    type="text"
                    name="instructions"
                    v-model="instructions"
                    class="default_input w-100"
                    :placeholder="$t('add.instPlc')"
                  />
                  <span class="error text-danger fs-13" v-if="isInst"> {{ $t('add.instPlc') }} </span>

                </div>
              </div>
              <div class="col-lg-6 col-12 mb-3">
                <div class="main-input-cont">
                  <h6 class="mb-2 font14">{{ $t('add.value') }}</h6>
                  <Dropdown
                    v-model="selectedValue"
                    @change="checkPrice"
                    :options="values"
                    optionLabel="name"
                    :placeholder="$t('add.valuePlc')"
                    class="main-select"
                  />
  
                  <div class="abs-icon-right">
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                  </div>

                  <span class="error text-danger fs-13" v-if="isValued"> {{ $t('add.valuePlc') }} </span>

                </div>
              </div>
              <div class="col-lg-6 col-12 mb-3" v-if="showPriceInput">
                <div class="form-group">
                  <h6 class="mb-2 font14">{{ $t('add.price') }}</h6>
                  <InputText
                    type="text"
                    name="price"
                    v-model="price"
                    class="default_input w-100"
                    :placeholder="$t('add.pricePlc')"
                  />
                  <span class="error text-danger fs-13" v-if="isPriced"> {{ $t('add.pricePlc') }} </span>

                </div>
              </div>
            </div>
          </section>
          <div class="px-5">
            <button type="submit" class="main-btn xl" :disabled="disabled">
              <div v-if="!disabled">{{ $t('auth.confirm') }}</div>
              <div class="loading" role="status" v-if="disabled">
                <div class="spinner-small-white" v-if="disabled"></div>
              </div>
            </button>
          </div>
        </form>
      </section>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import sidebar from "@/components/layout/side-bar.vue";
  import dash_header from "@/components/layout/dash-header.vue";
  import Dropdown from "primevue/dropdown";
  import InputText from "primevue/inputtext";
  // import home from "@/components/dashboard/suppoerMngComponent.vue";
  
  export default {
    data() {
      return {
        pdfImg: "",
        selectedSpecialist: null,
        disabled: false,
        specials: [],
        selectedType: null,
        types: [
          { id: 1, name: this.$t('add.individual'), type: "individual" },
          { id: 2, name:  this.$t('add.group'), type: "group" },
        ],
        selectedValue: null,
        values: [
          { id: 1, name: this.$t('add.free'), type: "free" },
          { id: 2, name: this.$t('add.paid'), type: "paid" },
        ],
        showPriceInput: false,
        isSpec : false,
        isNamed : false,
        name : '',
        isTyped : false,
        duration : '',
        isDuration : false,
        instructions : '',
        isInst : false,
        isValued : false,
        price : '',
        isPriced : false
       };
    },
    components: {
      sidebar,
      dash_header,
      Dropdown,
      InputText,
      //   home
    },
    methods: {
      checkPrice() {
        if (this.selectedValue.type == "paid") {
          this.showPriceInput = true;
        }else{
          this.showPriceInput = false;
        }
      },
      // get treatment
      async getSpecialists() {
        await axios
          .get(`/global`)
          .then((res) => {
            console.log(res.data.data);
            this.specials = res.data.data.specializations;
          })
          .catch((err) => {
            console.log(err);
          });
      },
      // send form
      async addSesion() {
        if( this.selectedSpecialist == null ){
          this.isSpec = true ;
        }else{
          this.isSpec = false ;
        }

        if( this.name == '' ){
          this.isNamed = true ;
        }else{
          this.isNamed = false ;
        }

        if( this.selectedType == null ){
          this.isTyped = true ;
        }else{
          this.isTyped = false ;
        }
        if( this.duration == '' ){
          this.isDuration = true ;
        }else{
          this.isDuration = false ;
        }

        if( this.instructions == '' ){
          this.isInst = true ;
        }else{
          this.isInst = false ;
        }

        if( this.selectedValue == null ){
          this.isValued = true ;
        }else{
          this.isValued = false ;
        }
        if( this.price == '' ){
          this.isPriced = true ;
        }else{
          this.isPriced = false ;
        }
        
        if( this.isSpec == false && this.isNamed == false && this.isTyped == false && this.isDuration == false && this.isInst == false && this.isValued == false && (this.isPriced == false || this.price == '') ){
          this.mainAdd();
        }
      },

      async mainAdd(){
        this.disabled = true;
  
        const fd = new FormData(this.$refs.sendForm);
        fd.append("id", this.$route.params.id);

        if (this.selectedSpecialist) {
          fd.append("specialization", this.selectedSpecialist.id);
        }
        if (this.selectedType) {
          fd.append("type", this.selectedType.type);
        }
        if (this.selectedValue) {
          fd.append("paid", this.selectedValue.type);
        }

        await axios
          .put("/add-additional-sessions", fd, {
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
              this.$router.push(`/center/treat/${this.$route.params.id}`);
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

      }
    },
  
    mounted() {
      this.getSpecialists();
    },
  };
  </script>
  
  <style scoped>
  .p-dropdown .p-dropdown-label.p-placeholder,
  .p-inputtext {
    color: #495057 !important;
    font-size: 15px;
  }
  .p-dropdown {
    border: 1px solid #ddd !important;
    border-radius: 25px !important;
    box-shadow: none !important;
    width: 100%;
  }
  </style>
  <style lang="scss">
  .p-dropdown .p-dropdown-label.p-placeholder,
  .p-inputtext 
  {
    font-family: "Cairo", sans-serif !important;

  }
  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  
  .font-bold {
    font-weight: bold;
  }
  </style>
  