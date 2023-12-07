<template>
  <section class="pt-3 pb-3 px-5 ">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('support.title') }} </h6>
            <p class="grayColor"> 
                {{ $t('support.desc') }}
            </p>
        </div>
  </section>

   <!-- form  -->
  <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-if="isShown">
    <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ $t('support.groupInfo') }} </h6>

    <form class="mx-5 mt-3">
      <div class="row">

        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  {{ $t('group.nameAr') }}
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <InputText type="text" v-model="groupNameAr" name="groupNameAr" class="default_input w-100" :placeholder="$t('group.namePlc')" />
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  {{ $t('group.nameEn') }}
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <InputText type="text" v-model="groupNameEn" name="groupNameEn" class="default_input w-100" :placeholder="$t('group.namePlc')" />
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  {{ $t('group.descAr') }}
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <InputText type="text" v-model="groupDescriptionAr" name="groupDescriptionAr" class="default_input w-100" :placeholder="$t('group.descPlc')" />
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="form-group ">
              <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                {{ $t('group.descEn') }}
                  <i class="fa-solid fa-asterisk text-danger fs-10"></i>
              </label>
              <InputText type="text" v-model="groupDescriptionEn" name="groupDescriptionEn" class="default_input w-100" :placeholder="$t('group.descPlc')" />
          </div>
        </div>


        <div class="col-md-6 mb-2">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  {{ $t('group.value') }} 
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>

                <Dropdown v-model="selectedType" disabled :options="values" optionLabel="title" :placeholder="$t('group.valuePlc')" class="default_input w-100 w-full md:w-14rem" />
            </div>
        </div>

        <div class="col-md-6 mb-2" v-if="type='paid'">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  {{ $t('group.price') }} 
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputNumber v-model="price" name="price" disabled inputId="integeronly" class="default_input w-100" :placeholder="$t('group.pricePlc')" />
            </div>
        </div>


        <div class="col-md-6 mb-2">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  {{ $t('group.count') }} 
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputNumber v-model="sessionsCount" disabled name="sessionsCount" inputId="integeronly" class="default_input w-100" :placeholder="$t('group.countPlc')"/>
            </div>
        </div>


        <div class="col-md-6 mb-2">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  {{ $t('group.seats') }} 
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputNumber v-model="seats" name="seats" inputId="integeronly" class="default_input w-100" :placeholder="$t('group.seatsPlc')"/>
            </div>
        </div>


      </div>
    </form>
  </section>
  
  <Skeleton v-else style="width:90%;margin:auto" class="mb-3" height="14rem"></Skeleton>

  <section v-if="isShown">
    <!-- number of sessions  -->
    <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-for="(session, index) in sessions" :key="index">
      <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> {{ session.headText }} </h6>

      <form class="mx-5 mt-3">
        <div class="row">


          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    {{ $t('session.nameAr') }}
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputText type="text" v-model="session.nameAr" class="default_input w-100" :placeholder="$t('session.namePlc')" />
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  {{ $t('session.nameEn') }}
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputText type="text" v-model="session.nameEn" class="default_input w-100" :placeholder="$t('session.namePlc')" />
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  {{ $t('group.descAr') }}
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputText type="text" v-model="session.descriptionAr" class="default_input w-100" :placeholder="$t('session.descPlc')" />
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  {{ $t('group.descEn') }}
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputText type="text" v-model="session.descriptionEn" class="default_input w-100" :placeholder="$t('session.descPlc')" />
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  {{ $t('session.date') }}
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <Calendar v-model="session.date" class="default_input w-100" :placeholder="$t('session.datePlc')" />
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                    {{ $t('session.appoint') }}
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <Calendar v-model="session.time" class="default_input w-100" :placeholder="$t('session.appPlc')" timeOnly hourFormat="12" />
            </div>
          </div>


          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  {{ $t('session.duration') }}
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <InputText type="text" v-model="session.duration" class="default_input w-100" :placeholder="$t('session.durationPlc')"  @input="getDoctors(index)" />
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group ">
                <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                  {{ $t('session.spec') }}
                    <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                </label>
                <!-- <InputText type="text" v-model="session.doctors[0].name" class="default_input w-100" placeholder="الرجاء ادخال الاخصائي" /> -->
                <!-- <Dropdown v-model="session.doctors[index]" :options="session.doctors" optionLabel="name" placeholder="الرجاء تحديد الأخصائي المتاح" class="default_input w-100 w-full md:w-14rem" /> -->
                <MultiSelect v-model="session.doctors" :options="session.doctors" optionLabel="name" :placeholder="$t('session.specPlc')"
                              :maxSelectedLabels="3" class="w-full md:w-20rem" />
            </div>

            <ProgressBar mode="indeterminate" class="mt-2" style="height: 6px" v-if="getDocotorsLoading[index]"></ProgressBar>
            <span class="text-danger fs-14 text-center" v-if="getDocotorsLoading[index]">
                {{ $t('session.specLoad') }}
            </span>

          </div>


        </div>
      </form>
    </section>
  </section>
  
  <Skeleton v-else style="width:90%;margin:auto" height="14rem"></Skeleton>


  <!-- edit  -->
  <div class=" pt-3 pb-3 mx-5 mb-3"  v-if="isShown">
    <button class="btn w-25 sec-bg main_btn " :disabled="disabled" @click.prevent="updateGroup">
       <span v-if="!disabled"> {{ $t('auth.edit') }} </span>
       <div class="spinner-border" role="status" v-if="disabled">
            <span class="visually-hidden">Loading...</span>
        </div> 
    </button>
  </div>

  <Toast />
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import MultiSelect from 'primevue/multiselect';
import ProgressBar from 'primevue/progressbar';


import axios from 'axios';
import Skeleton from 'primevue/skeleton';
import Toast from 'primevue/toast';
import moment from 'moment';

export default {
  data(){
    return{
        group : null,
        sessions : [],

        groupName : '',
        groupDescription : '',
        groupNameAr : '',
        groupNameEn : '',
        groupDescriptionAr : '',
        groupDescriptionEn : '',
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
        isShown : false,
        disabled : false,


        // sended 
        sessionNameAr : [],
        sessionNameEn : [],
        sessionDescriptionAr : [],
        sessionDescriptionEn : [],
        sessionIds : [],
        sessionStartDate : [],
        sessionStartTime : [],
        sessionDuration : [],
        sessionDoctors : [],


        sendedSessions : [],

        getDocotorsLoading : [],
        doctors : []
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

          this.groupNameAr = response.groupNameAr ;
          this.groupNameEn = response.groupNameEn ;
          this.groupDescriptionAr = response.groupDescriptionAr ;
          this.groupDescriptionEn = response.groupDescriptionEn ;



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

          // get sessions 
          // for( let i = 0 ; i < response.sessions.length ; i++ ){
          //     this.sessionNameAr.push(response.sessions[i].nameAr) ;
          //     this.sessionNameEn.push(response.sessions[i].nameEn) ;
          //     this.sessionDescriptionAr.push( response.sessions[i].descriptionAr ) ;               
          //     this.sessionDescriptionEn.push( response.sessions[i].descriptionEn ) ;  
          //     this.sessionStartDate.push( response.sessions[i].date );
          //     this.sessionStartTime.push( response.sessions[i].time );
          //     this.sessionDuration.push( response.sessions[i].duration );
          //     this.sessionDoctors.push( response.sessions[i].doctors );
          //     console.log(this.sessionDoctors)   
          // }
        } 
      } )
      .catch( (err)=>{
        this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
        console.log(err)
      } )
      
    },

    // update group
    async updateGroup(){

        this.disabled = true ;
        const fd = new FormData();

        fd.append('groupNameAr', this.groupName);
        fd.append('groupNameEn', this.groupName);
        fd.append('groupDescriptionAr', this.groupDescription);
        fd.append('groupDescriptionEn', this.groupDescription);
        fd.append('seats', this.seats);

        for( let i = 0 ; i < this.sessions.length ; i++){

          // get date which it is changed or not
          var sendedTime ;
          if(  moment(this.sessions[i].time ).format('hh:mm A') == 'Invalid date'){
            sendedTime = this.sessions[i].time ;
          }else{
            sendedTime = moment(this.sessions[i].time ).format('hh:mm A') ;
          }
          
          this.sendedSessions.push({
            id : this.sessionIds[i],
            name : {
              ar : this.sessions[i].nameAr,
              en : this.sessions[i].nameEn
            },
            description : {
              ar : this.sessions[i].descriptionAr,
              en : this.sessions[i].descriptionEn
            },
            startDate :  moment(this.sessions[i].date).format('YYYY-MM-DD'),
            startTime :  sendedTime,
            // startTime :  moment( new Date(`${moment(this.sessions[i].date).format('YYYY-MM-DD')} ${this.sessions[i].time}`)  ).format('hh:mm A'), //// time date for future,
            duration  : this.sessions[i].duration,
            doctors   : [ this.sessions[i].doctors[0].id ]
          })



        }


        fd.append('sessions', JSON.stringify(this.sendedSessions));


        await axios.put(`update-support-group/${this.$route.params.id}`, fd , {
          headers : {
            Authorization : `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then( (res)=>{
          if(  res.data.key === 'success'  ){
            this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
            this.disabled = false ;
            setTimeout(() => {
              this.getGrouo()
            }, 500);
          }else{
            this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
            this.disabled = false ;
          }
          this.sendedSessions = [] ;
        } )
        .catch( (err)=>{
          this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
          this.disabled = false ;
          this.sendedSessions = [] ;
          console.log(err)
        } )
    } ,

    // get available doctoros 
    async getDoctors(index){

      var date  =  this.sessions[index].date;
      var time  = this.sessions[index].time;
      var duration = this.sessions[index].duration ;
      var doctors = this.sessions[index].doctors ;
      
      this.getDocotorsLoading[index] = true ;
      await axios.get(`/available-doctors?date=${moment(date).format('YYYY-MM-DD')}&startTime=${moment(time).format('hh:mm A')}&duration=${duration}`, {
          headers : {
              Authorization : `Bearer ${localStorage.getItem('token')}` 
          }
      })
      .then( (res)=>{
          doctors[index] = res.data.data ;
          this.getDocotorsLoading[index] = false ;
      } )
      .catch ( (err)=>{
          console.log(err)
          this.getDocotorsLoading[index] = false ;
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
    Toast,
    MultiSelect,
    ProgressBar
  }
}
</script>

<style>
.sec-bg{
    background-color: #4aa236 !important;
}
</style>