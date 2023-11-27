<template>
  <section class="pt-3 pb-3 px-5">
    <div>
      <h6 class="fw-bold blackColor">{{ $t("nav.profile") }}</h6>
      <p class="grayColor">
        {{ $t("profile.manage") }}
      </p>
    </div>
  </section>

  <section id="auth" class="mx-5 pt-3 pb-3 px-3 main-bg">
    <section id="login" class="mx-0 px-0" style="width: 40%">
      <!-- title  -->
      <div class="">
        <h6 class="blackColor fw-bold">{{ $t("profile.changePhone") }}</h6>
      </div>

      <form>
        <div class="form-group mb-3 position-relative">
          <label
            for=""
            class="blackColor d-block fw-6 mb-2 fs-14 d-flex justify-content-between"
          >
            <span>{{ $t("auth.phone") }}</span>
          </label>

          <InputText
            type="text"
            v-model="phone"
            class="default_input w-100"
            :placeholder="$t('auth.phonePlc')"
          />

          <!-- country code  -->
          <!-- <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" class="default_input country_code  w-full md:w-14rem" /> -->
          <Dropdown
            v-model="selectedCountry"
            :options="countries"
            optionLabel="name"
            class="default_input country_code w-full md:w-14rem"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex-group-me">
                <div>{{ slotProps.value.code }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="flex-group-me">
                <div>{{ slotProps.option.code }}</div>
              </div>
            </template>
          </Dropdown>
        </div>

        <div
          class="d-flex justify-content-center align-items-center mt-3 w-100 mx-auto"
        >
          <button
            type="button"
            @click="sendCode"
            class="btn main_btn w-100 pt-2 pb-2"
          >
            {{ $t("auth.confirm") }}
          </button>
        </div>
      </form>
    </section>
  </section>

  <!-- change phone otp  -->
  <Dialog v-model:visible="changePhoneModal" modal :style="{ width: '50vw' }">
    <div style="margin: 0 135px">
      <h6 class="fw-bold blackColor">الملف الشخصي</h6>
      <p class="grayColor">ادارة الملف الشخصي</p>
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
          @click="updatePhone"
        >
          تأكيد
        </button>
      </div>

      <div class="flex_center mt-3">
        <p class="grayColor">
          لم يصلك الكود ؟
          <span class="third-color pointer-click" @click="resendCode">
            إعادة ارسال
          </span>
        </p>
      </div>
    </form>
  </Dialog>
</template>

<script>
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import axios from "axios";
import Dialog from "primevue/dialog";

export default {
  data() {
    return {
      phone: null,
      selectedCountry: {
        code: "+966",
        key: "SA",
        // image: require("../../assets/imgs/saudi.png"),
      },
      countries: [],
      changePhoneModal: false,
    };
  },
  components: {
    InputText,
    Dropdown,
    Dialog,
  },
  methods: {
    // send code
    async sendCode() {
      this.disabled = true;
      const fd = new FormData();
      fd.append("phone", localStorage.getItem("loginKey"));

      fd.append("updatedPhone", this.phone);
      fd.append("updatedCountryCode", this.selectedCountry.code);
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
          this.$toast.add({
            severity: "error",
            summary: err.response.data.message,
            life: 3000,
          });
          this.disabled = false;
        });
    },
    async getCountries() {
      await axios
        .get(`/global`)
        .then((res) => {
          //   console.log(res.data.data);
          this.countries = res.data.data.countries;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // update phone
    async updatePhone() {
      this.disabled = true;
      const fd = new FormData();
      fd.append("phone", this.phone);

      fd.append("updatedPhone", this.phone);
      //   fd.append("updatedCountryCode", this.selectedCountry.code);
      fd.append("countryCode", this.selectedCountry.code);
      fd.append("code", this.code);

      await axios
        .patch("/update-phone-number", fd, {
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
            this.changePhoneModal = false;
            this.$router.push("/login");
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
      fd.append("loginKey", this.phone);
      fd.append("countryCode", this.selectedCountry.code);
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
  },
  mounted() {
    this.getCountries();
  },
};
</script>

<style scoped>
#auth #login {
  transform: translateY(0) !important;
}
</style>
