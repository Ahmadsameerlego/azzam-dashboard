<template>
  <section class="pt-3 pb-3 px-5 ">
        <div>
            <h6 class="fw-bold blackColor"> ادارة مجموعة الدعم </h6>
            <p class="grayColor"> 
                متابعة مجموعة الدعم
            </p>
        </div>
  </section>

   <!-- form  -->
  <section class="main-bg pt-3 pb-3 mx-5 mb-3">
    <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> بيانات المجموعة </h6>

    <form class="mx-5 mt-3">
      <div class="row">

        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  اسم المجموعة
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال اسم المجموعة" />
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  الوصف
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال الوصف" />
          </div>
        </div>


        <div class="col-md-6 mb-2">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    قيمة المجموعة 
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>

                <Dropdown v-model="selectedNum" :options="sessions" optionLabel="name" placeholder="الرجاء تحديد قيمة المجموعة" class="default_input w-100 w-full md:w-14rem" />
            </div>
        </div>

        <div class="col-md-6 mb-2">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    السعر
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputNumber v-model="value1" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال السعر "/>
            </div>
        </div>


        <div class="col-md-6 mb-2">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    عدد الجلسات
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputNumber v-model="value1" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال عدد الجلسات "/>
            </div>
        </div>


        <div class="col-md-6 mb-2">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    عدد المقاعد
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputNumber v-model="value1" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال عدد المقاعد "/>
            </div>
        </div>


      </div>
    </form>
  </section>

  <!-- number of sessions  -->
  <section class="main-bg pt-3 pb-3 mx-5 mb-3">
    <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> الجلسة 1 </h6>

    <form class="mx-5 mt-3">
      <div class="row">


        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  اسم الجلسة
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال اسم الجلسة" />
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  الوصف
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال الوصف" />
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  التاريخ
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <Calendar v-model="date" class="default_input w-100" placeholder="الرجاء ادخال التاريخ" />
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  الموعد
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <Calendar v-model="date" class="default_input w-100" placeholder="الرجاء ادخال الموعد" timeOnly />
          </div>
        </div>


        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  المدة
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال المدة" />
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  الاخصائي
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال الاخصائي" />
          </div>
        </div>


      </div>
    </form>
  </section>

  <!-- edit  -->
  <div class=" pt-3 pb-3 mx-5 mb-3">
    <button class="btn w-25 sec-bg main_btn "> تعديل </button>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';

export default {
  components:{
    InputText,
    Dropdown,
    InputNumber,
    Calendar
  }
}
</script>

<style>
.sec-bg{
    background-color: #4aa236 !important;
}
</style>