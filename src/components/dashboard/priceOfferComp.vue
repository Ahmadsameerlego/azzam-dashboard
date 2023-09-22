<template>
    <section class="pt-3 pb-3 px-5 ">
        <div>
            <h6 class="fw-bold blackColor"> ارسال عرض سعر </h6>
            <p class="grayColor"> 
                اضافة خطط علاجية
            </p>
        </div>
    </section>

    <section class="main-bg pt-3 pb-3 mx-5 mb-3">
        <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> تحديد عدد الجلسات ومدة العلاج التقريبية </h6>
        <form class="mx-5 mt-3" @submit.prevent="sendSessionsInfo">

            <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="form-group mb-3">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            عدد الجلسات 
                            <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                        </label>

                        <Dropdown v-model="selectedNum" :options="sessions" optionLabel="name" placeholder="اختر عدد الجلسات" class="default_input w-100 w-full md:w-14rem" />
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="form-group mb-3">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            مدة انتهاء الخطة (عدد الايام )
                            <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                        </label>
                        <InputNumber v-model="value1" inputId="integeronly" class="default_input w-100" placeholder="اكتب عدد الأيام المتوقعة"/>
                    </div>
                </div>
            </div>

            <div>
                <button class="main_btn btn w-25" > تأكيد </button>
            </div>
        </form>
    </section>


    <!-- appended sessions  -->
    <section class="" v-if="showSessionsNum">

        <!-- single session  -->
        <section class="main-bg pt-3 pb-3 mx-5 mb-3" v-for="session in selectedNum.name" :key="session">
            <h6 class="sec-color fs-17 fw-6 px-5 mb-2"> الجلسة رقم {{  session  }} </h6>
            <form class="mx-5 mt-3">
                <div class="row">

                    <div class="col-md-6 mb-2">
                        <div class="form-group">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                نوع الجلسة 
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>

                            <Dropdown v-model="selectedNum" :options="sessions" optionLabel="name" placeholder="الرجاء تحديد نوع الجلسة" class="default_input w-100 w-full md:w-14rem" />
                        </div>
                    </div>

                    <div class="col-md-6 mb-2">
                        <div class="form-group ">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                التخصص 
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>

                            <Dropdown v-model="selectedNum" :options="sessions" optionLabel="name" placeholder="الرجاء تحديد التخصص" class="default_input w-100 w-full md:w-14rem" />
                        </div>
                    </div>


                    <div class="col-md-6 mb-2">
                        <div class="form-group ">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                اسم الجلسة
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>
                            <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال اسم الجلسة" />
                        </div>
                    </div>

                    <div class="col-md-6 mb-2">
                        <div class="form-group ">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                المدة
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>
                            <InputNumber v-model="value1" inputId="integeronly" class="default_input w-100" placeholder="الرجاء ادخال المدة (بالدقائق)"/>
                        </div>
                    </div>

                    <div class="col-md-12 mb-2">
                        <div class="form-group ">
                            <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                                ارشادات الجلسة
                                <i class="fa-solid fa-asterisk text-danger fs-10"></i>
                            </label>
                            <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال ارشادات الجلسة" />
                        </div>
                    </div>
                </div>
            </form>
        </section>

        
    </section>


</template>

<script>
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';

export default {
    data(){
        return{
            sessions : [
                {
                    id:1,
                    name : 1
                },
                {
                    id:2,
                    name : 2
                },
                {
                    id:3,
                    name : 3
                },
                {
                    id:4,
                    name : 4
                },
            ],
            selectedNum : null,
            name : '',
            value1 : null,
            showSessionsNum :true 
        }
    },
    methods:{
        sendSessionsInfo(){
            console.log(this.selectedNum)
            this.showSessionsNum = true ;
        }
    },
    components:{
        Dropdown,
        InputNumber,
        InputText
    }
}
</script>

<style>

</style>