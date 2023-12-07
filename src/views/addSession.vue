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
              <h6 class="fw-bold blackColor">اضافة جلسة جديدة</h6>
              <p class="grayColor">اضافة جلسة جديدة الى الجلسات الحالية</p>
            </div>
          </div>
        </section>
        <form action="" @submit.prevent="addSesion" ref="sendForm">
          <section class="main-bg p-3 mx-5 mb-3 font-bold">
            <h6 class="sec-color mb-4">اضافة الجلسة</h6>
            <div class="row">
              <div class="col-lg-6 col-12 mb-3">
                <div class="main-input-cont">
                  <h6 class="mb-2 font14">التخصص</h6>
                  <Dropdown
                    v-model="selectedSpecialist"
                    :options="specials"
                    optionLabel="name"
                    placeholder="الرجاء تحديد التخصص"
                    class="main-select"
                  />
  
                  <div class="abs-icon-right">
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-3">
                <div class="form-group">
                  <h6 class="mb-2 font14">اسم الجلسة</h6>
                  <InputText
                    type="text"
                    name="name"
                    class="default_input w-100"
                    placeholder="الرجاء ادخال اسم الجلسة"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-3">
                <div class="main-input-cont">
                  <h6 class="mb-2 font14">نوع الجلسة</h6>
                  <Dropdown
                    v-model="selectedType"
                    :options="types"
                    optionLabel="name"
                    placeholder="الرجاء تحديد نوع الجلسة"
                    class="main-select"
                  />
  
                  <div class="abs-icon-right">
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-3">
                <div class="form-group">
                  <h6 class="mb-2 font14">المدة</h6>
                  <InputText
                    type="number"
                    name="duration"
                    class="default_input w-100"
                    placeholder="الرجاء ادخال المدة بالدقائق"
                  />
                </div>
              </div>
              <div class="col-12 mb-3">
                <div class="form-group">
                  <h6 class="mb-2 font14">ارشادات الجلسة</h6>
                  <InputText
                    type="text"
                    name="instructions"
                    class="default_input w-100"
                    placeholder="الرجاء ادخال ارشادات الجلسة"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-3">
                <div class="main-input-cont">
                  <h6 class="mb-2 font14">قيمة الجلسة</h6>
                  <Dropdown
                    v-model="selectedValue"
                    @change="checkPrice"
                    :options="values"
                    optionLabel="name"
                    placeholder="الرجاء تحديد قيمة الجلسة"
                    class="main-select"
                  />
  
                  <div class="abs-icon-right">
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mb-3" v-if="showPriceInput">
                <div class="form-group">
                  <h6 class="mb-2 font14">سعر الجلسة</h6>
                  <InputText
                    type="text"
                    name="price"
                    class="default_input w-100"
                    placeholder="الرجاء ادخال سعر الجلسة في حالة كانت مدفوعة"
                  />
                </div>
              </div>
            </div>
          </section>
          <div class="px-5">
            <button type="submit" class="main-btn xl" :disabled="disabled">
              <div v-if="!disabled">تاكيد</div>
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
          { id: 1, name: "فردي", type: "individual" },
          { id: 2, name: "جماعي", type: "group" },
        ],
        selectedValue: null,
        values: [
          { id: 1, name: "مجانية", type: "free" },
          { id: 2, name: "مدفوعة", type: "paid" },
        ],
        showPriceInput: false,
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
              this.$router.push(`/treat/${this.$route.params.id}`);
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
  