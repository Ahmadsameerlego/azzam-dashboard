<template>
  <section class="pt-3 pb-3 px-5">
    <div class="flex-bet-main">
      <div>
        <h6 class="fw-bold blackColor">{{ $t("treat.title") }}</h6>
        <p class="grayColor">
          {{ $t("treat.keep") }}
        </p>
      </div>
      <div class="flex-sm-gap">
        <router-link
          :to="{
            name: 'addSession',
            params: { id: traatmentPlanId },
          }"
          class="main-btn xl"
          >اضافة جلسة جديدة</router-link
        >
        <button type="button"     @click="endTeatmentPlan" class="main-btn bg-red xl" :disabled="disabled">
          <div v-if="!disabled">انهاء الخطة العلاجية</div>
          <div class="loading" role="status" v-if="disabled">
            <div class="spinner-small-white" v-if="disabled"></div>
          </div>
        </button>
      </div>
    </div>
  </section>

  <!-- steps  -->
  <section
    class="main-bg steps flex_between pt-3 pb-3 px-5 mx-5 mb-3"
    v-if="isShown"
  >
    <!-- single step  -->
    <div class="step d-flex align-items-center">
      <span
        class="step_number"
        :class="{
          active:
            treat.status == 'new' ||
            treat.status == 'current' ||
            treat.status == 'finish' ||
            treat.status == 'cancelled',
        }"
      >
        1
      </span>
      <span
        class="step-text grayColor mx-2"
        :class="{
          active:
            treat.status == 'new' ||
            treat.status == 'current' ||
            treat.status == 'finish' ||
            treat.status == 'cancelled',
        }"
      >
        {{ $t("common.new") }}
      </span>
    </div>
    <span
      class="line"
      :class="{
        active:
          treat.status == 'current' ||
          treat.status == 'finish' ||
          treat.status == 'cancelled',
      }"
    ></span>
    <!-- single step  -->
    <div class="step d-flex align-items-center">
      <span
        class="step_number"
        :class="{
          active:
            treat.status == 'current' ||
            treat.status == 'finish' ||
            treat.status == 'cancelled',
        }"
      >
        2
      </span>
      <span
        class="step-text grayColor mx-2"
        :class="{
          active:
            treat.status == 'current' ||
            treat.status == 'finish' ||
            treat.status == 'cancelled',
        }"
      >
        {{ $t("dash.current") }}
      </span>
    </div>
    <span
      class="line"
      :class="{
        active: treat.status == 'finish' || treat.status == 'cancelled',
      }"
    ></span>
    <!-- single step  -->
    <div class="step d-flex align-items-center">
      <span
        class="step_number"
        :class="{
          active: treat.status == 'finish' || treat.status == 'cancelled',
        }"
      >
        3
      </span>
      <span
        class="step-text grayColor mx-2"
        :class="{
          active: treat.status == 'finish' || treat.status == 'cancelled',
        }"
      >
        {{ $t("dash.finish") }}
      </span>
    </div>
    <span class="line" :class="{ active: treat.status == 'cancelled' }"></span>
    <!-- single step  -->
    <div class="step d-flex align-items-center">
      <span
        class="step_number"
        :class="{ active: treat.status == 'cancelled' }"
      >
        3
      </span>
      <span
        class="step-text grayColor mx-2"
        :class="{ active: treat.status == 'cancelled' }"
      >
        {{ $t("dash.canceled") }}
      </span>
    </div>
  </section>
  <Skeleton
    v-else
    class="px-5 mb-3 mx-auto"
    style="width: 90%"
    height="4rem"
  ></Skeleton>

  <!-- cancelled  -->
  <section class="cancelled" v-if="treat.status == 'cancelled'">
    <div class="cancel_head mt-3 mb-3">
      {{ treat.reasonText }}
    </div>

    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
      <h6 class="sec-color fs-17 fw-6 px-5 mb-3 text-danger">
        {{ $t("treat.cancelReason") }}
      </h6>

      <p class="grayColor mx-5 fs-14">
        {{ treat.reason }}
      </p>
    </section>
  </section>

  <!-- order details  -->
  <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
    <h6 class="sec-color fs-17 fw-6 px-5 mb-2">
      {{ $t("treat.orderDetail") }}
    </h6>
    <!-- all infos  -->
    <section class="infos">
      <!-- single info -->
      <div class="white_bg pt-2 pb-2 px-5">
        <div class="single_info flex_between">
          <span class="info_key"> {{ $t("treat.num") }} </span>
          <span class="info_value"> {{ treat.orderNumber }} </span>
        </div>
      </div>
      <!-- single info -->
      <div class="gray-bg pt-2 pb-2 px-5">
        <div class="single_info gray-bg flex_between">
          <span class="info_key"> {{ $t("treat.date") }} </span>
          <span class="info_value"> {{ treat.dateOfOrder }} </span>
        </div>
      </div>
      <!-- single info -->
      <div class="white_bg pt-2 pb-2 px-5">
        <div class="single_info flex_between">
          <span class="info_key"> {{ $t("treat.type") }} </span>
          <span class="info_value"> {{ treat.typeOfOrder }} </span>
        </div>
      </div>
      <!-- single info -->
      <div class="gray-bg pt-2 pb-2 px-5">
        <div class="single_info gray-bg flex_between">
          <span class="info_key"> {{ $t("treat.gender") }} </span>
          <span class="info_value"> {{ treat.gender }} </span>
        </div>
      </div>
      <!-- single info -->
      <div class="white_bg pt-2 pb-2 px-5">
        <div class="single_info flex_between">
          <span class="info_key"> {{ $t("treat.age") }} </span>
          <span class="info_value"> {{ treat.age }} </span>
        </div>
      </div>
      <!-- single info -->
      <div class="gray-bg pt-2 pb-2 px-5">
        <div class="single_info gray-bg flex_between">
          <span class="info_key"> {{ $t("treat.name") }} </span>
          <span class="info_value"> {{ treat.name }} </span>
        </div>
      </div>
      <!-- single info -->
      <div class="white_bg pt-2 pb-2 px-5">
        <div class="single_info flex_between">
          <span class="info_key"> {{ $t("common.addType") }} </span>
          <span class="info_value"> {{ treat.typeOfAddiction }} </span>
        </div>
      </div>
      <!-- single info -->
      <div class="gray-bg pt-2 pb-2 px-5">
        <div class="single_info gray-bg flex_between">
          <span class="info_key"> {{ $t("treat.social") }} </span>
          <span class="info_value"> {{ treat.socialSituation }} </span>
        </div>
      </div>
      <!-- single info -->
      <div class="white_bg pt-2 pb-2 px-5">
        <div class="single_info flex_between">
          <span class="info_key"> {{ $t("treat.job") }} </span>
          <span class="info_value"> {{ treat.job }} </span>
        </div>
      </div>
      <!-- single info -->
      <div class="gray-bg pt-2 pb-2 px-5">
        <div class="single_info gray-bg flex_between">
          <span class="info_key"> {{ $t("treat.jobType") }} </span>
          <span class="info_value"> {{ treat.typeOfJob }} </span>
        </div>
      </div>
      <!-- single info -->
      <div class="white_bg pt-2 pb-2 px-5">
        <div class="single_info flex_between">
          <span class="info_key"> {{ $t("treat.symp") }} ؟ </span>
          <span class="info_value"> {{ treat.isSymptoms }} </span>
        </div>
      </div>
      <!-- single info -->
      <div class="gray-bg pt-2 pb-2 px-5">
        <div class="single_info gray-bg flex_between">
          <span class="info_key"> {{ $t("treat.mental") }} ؟ </span>
          <span class="info_value"> {{ treat.mentallyIll }} </span>
        </div>
      </div>
    </section>
  </section>

  <Skeleton
    v-else
    class="px-5 mb-3 mx-auto"
    style="width: 90%"
    height="15rem"
  ></Skeleton>

  <!-- status  -->
  <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
    <h6 class="sec-color fs-17 fw-6 px-5 mb-3">{{ $t("treat.desc") }}</h6>

    <p class="grayColor mx-5 fs-14">
      {{ treat.caseDescription }}
    </p>
  </section>
  <Skeleton
    v-else
    class="px-5 mb-3 mx-auto"
    style="width: 90%"
    height="10rem"
  ></Skeleton>

  <!-- status  -->
  <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
    <h6 class="sec-color fs-17 fw-6 px-5 mb-3">{{ $t("treat.freeTime") }}</h6>

    <p class="grayColor mx-5 fs-14">
      {{ treat.freeTime }}
    </p>
  </section>
  <Skeleton
    v-else
    class="px-5 mb-3 mx-auto"
    style="width: 90%"
    height="10rem"
  ></Skeleton>

  <!-- status  -->
  <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
    <h6 class="sec-color fs-17 fw-6 px-5 mb-3">
      {{ $t("treat.timeSessions") }}
    </h6>

    <p class="grayColor mx-5 fs-14">
      {{ treat.timeSessions }}
    </p>
  </section>
  <Skeleton
    v-else
    class="px-5 mb-3 mx-auto"
    style="width: 90%"
    height="10rem"
  ></Skeleton>

  <!-- status  -->
  <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
    <h6 class="sec-color fs-17 fw-6 px-5 mb-3">{{ $t("treat.diseases") }}</h6>

    <p class="grayColor mx-5 fs-14">
      {{ treat.diseases }}
    </p>
  </section>
  <Skeleton
    v-else
    class="px-5 mb-3 mx-auto"
    style="width: 90%"
    height="10rem"
  ></Skeleton>

  <!-- client info  -->
  <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
    <h6 class="sec-color fs-17 fw-6 px-5 mb-2">{{ $t("treat.clientInfo") }}</h6>
    <!-- main info  -->
    <section class="client_info mx-5 d-flex align-items-center">
      <!-- client image  -->
      <div class="client_image">
        <img :src="patient.avatar" alt="client image" />
      </div>
      <!-- client info  -->
      <div class="client_details mx-3">
        <div class="d-flex mb-2">
          <span class="fw-6 fs-14 blackColor"> {{ patient.name }} </span>
        </div>

        <!-- phone  -->
        <div class="phone d-flex">
          <span class="phone_icon flex_center">
            <i class="fa-solid fa-phone-flip sec-color fs-10"></i>
          </span>
          <span class="phone_num fs-13 mx-3"> {{ patient.phone }} </span>
        </div>
      </div>
    </section>
  </section>
  <Skeleton
    v-else
    class="px-5 mb-3 mx-auto"
    style="width: 90%"
    height="6rem"
  ></Skeleton>

  <!-- instructions -->
  <section
    class="main-bg pt-3 pb-3 mx-5 mb-3"
    v-if="isShown && treat.instructions"
  >
    <h6 class="sec-color fs-17 fw-6 px-5 mb-3">{{ $t("treat.insts") }}</h6>

    <p class="grayColor mx-5 fs-14">
      {{ treat.instructions }}
    </p>
  </section>

  <!-- medicines  -->
  <section
    class="main-bg pt-3 pb-3 mx-5 mb-3"
    v-if="isShown && treat.medicine.length > 0"
  >
    <h6 class="sec-color fs-17 fw-6 px-5 mb-3">{{ $t("treat.medicines") }}</h6>

    <div class="row mx-5">
      <!-- single medicine  -->
      <div class="col-md-4 mb-3" v-for="med in treat.medicine" :key="med.id">
        <div class="single_med d-flex align-items-center justify-content-start">
          <!-- medicine image  -->
          <div class="medicine_img">
            <img :src="med.image" alt="medicine image" />
          </div>
          <!-- medicine name  -->
          <span class="mx-3 text-black">
            {{ med.name }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- sessions  -->
  <section class="sessions pt-3 pb-3 mx-5 mb-3" v-if="isShown">
    <h4 class="text-black fw-bold fs-19">{{ $t("treat.plan") }}</h4>
    <!-- single session  -->
    <section
      class="main-bg pt-3 pb-3 mb-3"
      v-for="session in treat.sessions"
      :key="session.id"
    >
      <h6 class="sec-color fs-17 fw-6 px-5 mb-2">
        {{ session.sessionNumber }}
      </h6>
      <!-- all infos  -->
      <section class="infos">
        <!-- single info -->
        <div class="white_bg pt-2 pb-2 px-5">
          <div class="single_info flex_between">
            <span class="info_key"> {{ $t("treat.sessionType") }} </span>
            <span class="info_value"> {{ session.typeText }} </span>
          </div>
        </div>
        <!-- single info -->
        <div class="gray-bg pt-2 pb-2 px-5">
          <div class="single_info gray-bg flex_between">
            <span class="info_key"> {{ $t("treat.sessinName") }} </span>
            <span class="info_value"> {{ session.name }} </span>
          </div>
        </div>
        <!-- single info -->
        <div class="white_bg pt-2 pb-2 px-5">
          <div class="single_info flex_between">
            <span class="info_key"> {{ $t("treat.spec") }} </span>
            <span class="info_value"> {{ session.specialization }} </span>
          </div>
        </div>
        <!-- single info -->
        <div class="gray-bg pt-2 pb-2 px-5">
          <div class="single_info gray-bg flex_between">
            <span class="info_key"> {{ $t("treat.duration") }} </span>
            <span class="info_value"> {{ session.duration }} </span>
          </div>
        </div>
        <!-- single info -->
        <div class="gray-bg pt-2 pb-2 px-5">
          <div class="single_info gray-bg flex_between">
            <span class="info_key"> {{ $t("treat.appoint") }} </span>
            <span class="info_value"> {{ session.date }} </span>
          </div>
        </div>
        <!-- single info -->
        <div class="white_bg pt-2 pb-2 px-5">
          <div class="single_info flex_between">
            <span class="info_key"> {{ $t("treat.sessionInst") }} </span>
            <span class="info_value"> {{ session.instructions }} </span>
          </div>
        </div>
      </section>

      <!-- give the session  -->
      <!-- show onlu when the status is current  -->
      <div v-if="treat.status == 'current'">
        <!-- {{session.duration}} -->
        <button
          class="btn send_offer mx-5 mb-4 pt-2 pb-2 mt-3"
          @click="getSessionId(session.id, session.type, session.duration)"
        >
          {{ $t("treat.addDoc") }}
        </button>

        <div class="doctors-main">
          <h5 class="sec-color mb-4" v-if="session.doctors.length">بيانات الاخصائي</h5>
          <div
            class="loop-here mb-4"
            v-for="doctor in session.doctors"
            :key="doctor"
          >
            <div class="flex-sm-gap mb-2">
              <img :src="doctor.avatar" class="doctor-img" alt="" />
              <div class="w-100">
                <div class="flex-bet-main mb-3">
                  <div class="flex-sm-gap">
                    <div class="doc-name">
                      {{ doctor.name }}
                    </div>
                    <div class="doc-rate">
                      <i class="fa-solid fa-star"></i>
                      <div class="rate-num">{{ doctor.rate }}</div>
                    </div>
                  </div>
                  <!--red-danger-->
                  <div class="sec-color" v-if="doctor.isConfirmed">
                    قام بقبول الانضمام الى الجلسة
                  </div>
                  <div class="sec-color red-danger" v-if="doctor.isDelayed">
                    قام بقبول الانضمام الى الجلسة
                  </div>
                </div>
                <div class="doc-spicialist mb-2">
                  {{ doctor.specialization }}
                </div>
                <p>{{ doctor.description }}</p>
              </div>
            </div>
            <h6 class="main-color">استعراض تقارير الجلسة</h6>
            <a href="" class="pdf-cont">
              <img :src="pdfImg" alt="" />
            </a>
          </div>
          <h5 class="sec-color mb-4" v-if="session.members.length">بيانات المرضى</h5>
          <div
            class="loop-members mb-4"
            v-for="member in session.members"
            :key="member"
          >
            <div class="flex-sm-gap mb-2">
              <img :src="member.avatar" class="doctor-img" alt="" />
              <div class="w-100">
                <div class="flex-bet-main mb-3">
                  <div class="flex-sm-gap">
                    <div class="doc-name">
                      {{ member.name }}
                    </div>
                  </div>
                  <!--red-danger-->
                  <div class="sec-color" v-if="member.isConfirmed">
                    قام بقبول الانضمام الى الجلسة
                  </div>
                  <div class="sec-color red-danger" v-if="member.isDelayed">
                    قام بقبول الانضمام الى الجلسة
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>

  <!-- send offer  -->
  <div class="send_offer mx-5 mb-4" v-if="treat.status == 'new'">
    <router-link :to="'/priceOffer/' + treat.id">
      {{ $t("treat.sendOffer") }}
    </router-link>
  </div>
  <!-- edit offer  -->
  <div class="send_offer mx-5 mb-4" v-if="treat.status == 'cancelled'">
    <router-link to="/priceOffer">
      {{ $t("treat.editOffer") }}
    </router-link>
  </div>

  <!-- getdoctor modal  -->
  <Dialog v-model:visible="getdoctor" modal :style="{ width: '50vw' }">
    <div class="modal-container-main">
      <h5 class="mb-4 text-center font-bold">
        الرجاء اختيار الطبيب المسند اليه الخطة
      </h5>
      <div class="main-input-cont mb-4">
        <h6 class="mb-2 font14">تاريخ الجلسة</h6>
        <Calendar
          v-model="date"
          placeholder="برجاء ادخال تاريخ الجلسة"
          dateFormat="dd-mm-yy"
        />
        <div class="abs-icon"><i class="fa-solid fa-calendar-days"></i></div>
      </div>
      <div class="main-input-cont mb-4">
        <h6 class="mb-2 font14">وقت الجلسة</h6>
        <Calendar
          id="calendar-timeonly"
          v-model="time"
          placeholder="الرجاء اختيار وقت الجلسة"
          timeOnly
        />
        <div class="abs-icon"><i class="fa-regular fa-clock"></i></div>
      </div>
      <div class="main-input-cont mb-4">
        <h6 class="mb-2 font14">الطبيب</h6>
        <MultiSelect
          v-model="selectedDoctor"
          display="chip"
          :options="doctors"
          optionLabel="name"
          placeholder="اختر الطبيب "
          :maxSelectedLabels="20"
          class="w-full md:w-20rem"
        />
        <div class="abs-icon-right">
          <font-awesome-icon :icon="['far', 'clipboard']" />
        </div>
      </div>
      <div class="main-input-cont mb-4" v-if="sessionType == 'group'">
        <h6 class="mb-2 font14">المرضى</h6>
        <MultiSelect
          v-model="selectedPatient"
          display="chip"
          :options="Patients"
          optionLabel="name"
          placeholder="اختر  المرضى"
          :maxSelectedLabels="20"
          class="w-full md:w-20rem"
        />
        <div class="abs-icon-right">
          <font-awesome-icon :icon="['far', 'clipboard']" />
        </div>
      </div>
      <button
        type="button"
        class="main-btn full-width"
        @click="sendSession"
        :disabled="disabled"
      >
        <div v-if="!disabled">اسناد الخطة</div>
        <div class="loading" role="status" v-if="disabled">
          <div class="spinner-small-white" v-if="disabled"></div>
        </div>
      </button>
    </div>
  </Dialog>
</template>

<script>
import axios from "axios";
import Skeleton from "primevue/skeleton";
import Dialog from "primevue/dialog";
import MultiSelect from "primevue/multiselect";

import Calendar from "primevue/calendar";
import moment from "moment";

export default {
  data() {
    return {
      treat: {},
      patient: {},
      isShown: false,
      getdoctor: false,
      date: null,
      time: null,
      traatmentPlanId: null,
      sessionId: null,
      sessionType: null,
      duration: null,
      disabled: false,
      selectedDoctor: null,
      selectedPatient: null,
      doctors: [],
      Patients: [],
      doctorsShow: [],
      pdfImg: "",
    };
  },
  components: {
    Skeleton,
    Dialog,
    Calendar,
    MultiSelect,
  },
  methods: {
    async endTeatmentPlan() {
      this.disabled = true;

      const fd = new FormData();
      fd.append("id", this.$route.params.id);

      await axios
        .put("/finish-treatmentPlan", fd, {
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
            this.$router.push(`/`);
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
    getSessionId(id, type, duration) {
      this.getdoctor = true;
      this.sessionId = id;
      this.sessionType = type;
      this.duration = duration;
      this.getPatients();
    },
    // get treatment
    async getTreatment() {
      await axios
        .get(`/treatmentPlans-details?id=${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data.data.sessions);
          if (res.data.key === "success") {
            this.treat = res.data.data;
            this.patient = res.data.data.patient;
            this.traatmentPlanId = res.data.data.id;
            this.isShown = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // get doctors

    async getDoctors() {
      await axios
        .get(
          `/available-doctors?date=${moment(this.date).format(
            "YYYY-MM-DD"
          )}&startTime=${this.time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}&duration=${this.duration}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          if (res.data.key === "success") {
            console.log(res.data.data);
            this.doctors = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getPatients() {
      await axios
        .get(`/patients-sessions?id=${this.sessionId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.data.key === "success") {
            console.log(res.data.data);
            this.Patients = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // send form
    async sendSession() {
      this.disabled = true;

      const fd = new FormData();
      fd.append("id", this.sessionId);
      let docorsIds = [];
      if (this.selectedDoctor) {
        for (let i = 0; i < this.selectedDoctor.length; i++) {
          docorsIds.push(this.selectedDoctor[i].id);
        }
      }
      let patiensIds = [];
      if (this.selectedPatient) {
        for (let i = 0; i < this.selectedPatient.length; i++) {
          patiensIds.push(this.selectedPatient[i].id);
        }
      }
      console.log(docorsIds);
      console.log(patiensIds);
      fd.append("doctors", JSON.stringify(docorsIds));
      fd.append("members", JSON.stringify(patiensIds));
      fd.append("startDate", moment(this.date).format("YYYY-MM-DD"));
      fd.append(
        "startTime",
        this.time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      await axios
        .put("/handle-session", fd, {
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
            this.getdoctor = false;
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
    this.getTreatment();
    // this.getPatients();
    // this.getDoctors();
  },
  watch: {
    time(newTime, old) {
      console.log(newTime, old);
      this.getDoctors();
      // this.date = moment(this.date).format('YYYY-MM-DD')
    },
  },
};
</script>

<style lang="scss">
.pdf-cont {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.doc-spicialist {
  padding: 6px 14px;
  border-radius: 25px;
  background: #0090d8;
  color: #fff;
  width: fit-content;
}
.flex-bet-main {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}
.doctor-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  flex-shrink: 0;
}
.flex-sm-gap {
  display: flex;
  gap: 12px;
}
.doc-rate {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  background: #f5f5f5;
  padding: 5px;
  border-radius: 4px;
  min-width: 100px;
  justify-content: center;
}
.doc-rate .fa-star {
  color: #ffb300;
}
.doctors-main {
  padding: 10px 35px;
}
.p-datepicker.p-datepicker-timeonly .p-timepicker {
  direction: ltr;
}
.single_med {
  padding: 15px 9px;
  box-shadow: 0px 0px 10px #33333342;
  border-radius: 4px;
  .medicine_img {
    width: 75px;
    height: 75px;
    border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
}
.cancel_head {
  background-color: #df342f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 92%;
  margin: auto;
  border-radius: 4px;
}
.send_offer {
  background-color: #3290d8 !important;
  border-radius: 20px !important;
  text-align: center !important;
  padding: 10px 7px !important;
  color: #fff !important;
  width: 250px;
}
.font-bold {
  font-weight: bold;
}
.main-input-cont {
  position: relative;
}
.p-calendar {
  width: 100%;
}
.p-calendar .p-inputtext {
  width: 100%;
  height: 50px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  border-radius: 25px;
}
.p-calendar .p-inputtext::placeholder {
  color: var(--gray);
  transition: all 0.3s ease;
  font-size: 13px;
}
.abs-icon {
  position: absolute;
  top: 43px;
  left: 20px;
  pointer-events: none;
  color: #a1a0a0;
}
.abs-icon-right {
  position: absolute;
  top: 38px;
  color: var(--gray);
  right: 13px;
  opacity: 0.8;
  width: fit-content;
}
.p-inputtext {
  font-family: "myfont", sans-serif !important;
  margin-top: 2px !important;
}
.p-multiselect {
  width: 100%;
  font-family: "myfont", sans-serif !important;
  border: 1px solid #ddd !important;
  background-color: #f8f8f8 !important;
  border-radius: 25px !important;
  box-shadow: none !important;
}
.main-input-cont .p-checkbox {
  margin-left: 10px !important;
}
.pdf-cont img {
  width: 50px;
  height: 50px;
}
.p-multiselect.p-multiselect-chip .p-multiselect-token {
  gap: 6px;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item {
  gap: 10px;
}
.p-multiselect .p-multiselect-label.p-placeholder {
  color: #000 !important;
}
.main-btn {
  padding: 12px 5px;
  width: 160px;
  color: #fff !important;
  background: #0090d8;
  border-radius: 25px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-btn.lg {
  width: 220px;
}
.main-btn.xl {
  width: 260px;
}
.main-btn.bg-red {
  background: #de0303;
}
.main-btn.full-width {
  width: 100%;
}
.modal-container-main {
  padding: 0px 40px;
}
.p-multiselect.p-multiselect-chip
  .p-multiselect-token
  .p-multiselect-token-icon {
  right: -10px;
  top: -5px;
}
.spinner-small-white {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 2px solid #fff;
  border-left-color: #3290d8;
  -webkit-animation: load2 1.1s infinite linear; /* Chrome, Safari, Opera */
  animation: load2 1.1s infinite linear;
}
@-webkit-keyframes load2 {
  0% {
    -ms-transform: rotate(7deg); /* IE 9 */
    -webkit-transform: rotate(7deg); /* Chrome, Safari, Opera */
    transform: rotate(7deg);
  }
  100% {
    -ms-transform: rotate(360deg); /* IE 9 */
    -webkit-transform: rotate(360deg); /* Chrome, Safari, Opera */
    transform: rotate(360deg);
  }
}
@keyframes load2 {
  0% {
    -ms-transform: rotate(7deg); /* IE 9 */
    -webkit-transform: rotate(7deg); /* Chrome, Safari, Opera */
    transform: rotate(7deg);
  }
  100% {
    -ms-transform: rotate(360deg); /* IE 9 */
    -webkit-transform: rotate(360deg); /* Chrome, Safari, Opera */
    transform: rotate(360deg);
  }
}
.sec-color.red-danger {
  color: #de0303;
}
</style>
