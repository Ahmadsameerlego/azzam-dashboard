<template>
    <section class="pt-3 pb-3 px-5 ">
        <div>
            <h6 class="fw-bold blackColor"> تواصل معنا </h6>
            <p class="grayColor"> 
                يمكنك التواصل مع ادارة التطبيق من هنا
            </p>
        </div>
    </section>

    <section id="auth" class="mx-5 pt-3 pb-3 px-3 main-bg">
        <section id="" class="mx-0 px-0" >
            
            <!-- title  -->
            <div class="border-bottom">
                <h6 class="blackColor fw-bold"> تواصل معنا </h6>
            </div>

            <form class="mt-4 w-50">
                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            اسم المركز 
                    </label>
                    <InputText type="text" v-model="name" class="default_input w-100" placeholder="الرجاء ادخال اسم المركز" />
                </div>

                <div class="form-group mb-3 position-relative">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14 d-flex justify-content-between">
                            <span>رقم الجوال</span> 
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

                <div class="form-group">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            الرسالة 
                    </label>
                    <Textarea v-model="bio_en" autoResize rows="5" class="default_input default_textarea w-100" cols="30" placeholder="الرجاء ادخال رسالتك" />
                </div>

            </form>

        </section>
    </section>  
    
    <div class="d-flex mx-5  mt-3">
        <button class="btn main_btn w-25  pt-2 pb-2"> ارسال </button>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';

export default {
    components:{
        InputText,
        Dropdown,
        Textarea
    }
}
</script>

<style scoped lang="scss">
    .default_input{
        border-radius: 10px !important;
        &::placeholder{
            font-size: 12px;
            color:#ccc ;
        }
    }
</style>