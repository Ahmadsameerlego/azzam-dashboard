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
  <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
    <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> بيانات المجموعة </h6>

    <form class="mx-5 mt-3">
      <div class="row">

        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  اسم المجموعة
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <InputText type="text" v-model="groupName" name="groupName" class="default_input w-100" placeholder="الرجاء ادخال اسم المجموعة" />
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  الوصف
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <InputText type="text" v-model="groupDescription" name="groupDescription" class="default_input w-100" placeholder="الرجاء ادخال الوصف" />
          </div>
        </div>


        <div class="col-md-6 mb-2">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    قيمة المجموعة 
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>

                <Dropdown v-model="selectedType" :options="values" optionLabel="title" placeholder="الرجاء تحديد قيمة المجموعة" class="default_input w-100 w-full md:w-14rem" />
            </div>
        </div>

        <div class="col-md-6 mb-2" v-if="type='paid'">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    السعر
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputNumber v-model="price" name="price" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال السعر "/>
            </div>
        </div>


        <div class="col-md-6 mb-2">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    عدد الجلسات
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputNumber v-model="sessionsCount" name="sessionsCount" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال عدد الجلسات "/>
            </div>
        </div>


        <div class="col-md-6 mb-2">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    عدد المقاعد
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputNumber v-model="seats" name="seats" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال عدد المقاعد "/>
            </div>
        </div>


      </div>
    </form>
  </section>
  
  <Skeleton v-else style="width:90%;margin:auto" class="mb-3" height="14rem"></Skeleton>

  <section v-if="isShown">
    <!-- number of sessions  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-for="session in sessions" :key="session.id">
      <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ session.headText }} </h6>

      <form class="mx-5 mt-3">
        <div class="row">


          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    اسم الجلسة
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputText type="text" v-model="session.name" class="default_input w-100" placeholder="الرجاء ادخال اسم الجلسة" />
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    الوصف
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputText type="text" v-model="session.description" class="default_input w-100" placeholder="الرجاء ادخال الوصف" />
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    التاريخ
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <Calendar v-model="session.date" class="default_input w-100" placeholder="الرجاء ادخال التاريخ" />
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    الموعد
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <Calendar v-model="session.time" class="default_input w-100" placeholder="الرجاء ادخال الموعد" timeOnly />
            </div>
          </div>


          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    المدة
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputText type="text" v-model="session.duration" class="default_input w-100" placeholder="الرجاء ادخال المدة" />
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    الاخصائي
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputText type="text" v-model="session.doctors[0].name" class="default_input w-100" placeholder="الرجاء ادخال الاخصائي" />
            </div>
          </div>


        </div>
      </form>
    </section>
  </section>
  
  <Skeleton v-else style="width:90%;margin:auto" height="14rem"></Skeleton>


  <!-- edit  -->
  <div class=" pt-3 pb-3 mx-5 mb-3"  v-if="isShown">
    <button class="btn w-25 sec-bg main_btn "> تعديل </button>
  </div>

  <Toast />
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';

import axios from 'axios';
import Skeleton from 'primevue/skeleton';
import Toast from 'primevue/toast';

export default {
  data(){
    return{
        group : null,
        sessions : [],

        groupName : '',
        groupDescription : '',
        groupValue : '',
        type : '',
        price : null,
        seats : '',
        sessionsCount : null,
        values : [
          {
            id : 1,
            name : 'free',
            title : 'مجانية'
          },
          {
            id : 2,
            name : 'paid',
            title : 'مدفوعة'
          },
        ],
        selectedType : null,
        isShown : false
    }
  },
  methods:{
    // get group details 
    async getGrouo(){
      await axios.get(`/support-groups-details-center?id=${this.$route.params.id}`, {
        headers:{
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        if( res.data.key === 'success' ){
          this.isShown = true ;

          const response = res.data.data ;
          this.group = response ;
          this.sessions = response.sessions ;

          this.groupName = response.groupName ;
          this.groupDescription = response.groupDescription ;
          this.groupValue = response.groupValue ;
          this.type = response.type ;
          this.price = response.price ;
          this.seats = response.seats ;
          this.sessionsCount = response.sessionsCount ;

          // for( let i = 0 ; i < this.values.length ; i++  ){
            if( response.type == 'free' ){
              this.selectedType  = this.values[0];
            }else if( response.type == 'paid' ){
              this.selectedType  = this.values[1];
            }
          // }
          
          // this.selectedType = response. ;
        } 
      } )
      .catch( (err)=>{
        this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
      } )
      
    }
  },
  mounted(){
    if( this.$route.fullPath.includes('supportManage') ){
      this.getGrouo();
    }else if( this.$route.fullPath.includes('addGroup') ){
      this.isShown = true ;
    }
    
  },
  components:{
    InputText,
    Dropdown,
    InputNumber,
    Calendar,
    Skeleton,
    Toast
  }
}
</script>

<style>
.sec-bg{
    background-color: #4aa236 !important;
}
</style>