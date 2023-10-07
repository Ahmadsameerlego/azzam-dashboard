<template>
    <section id="auth">
        <section id="login">
            <!-- logo  -->
            <div class="logo mx-auto d-flex">
                <img :src="require('@/assets/imgs/logo.png')" alt="Azzam Logo">
            </div>
            <!-- title  -->
            <div class="mt-3">
                <h6 class="blackColor fw-bold"> تسجيل الدخول </h6>
                <p class="grayColor">
                    برجاء ادخال بيانات حسابك حتى تتمكن من الدخول
                </p>
            </div>
            <!-- form  -->
            <form>
                <div class="form-group position-relative">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            رقم الجوال 
                    </label>

                    <InputText type="text" v-model="phone" class="default_input w-100" placeholder="الرجاء ادخال رقم الجوال" />

                    <!-- country code  -->
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="default_input country_code  w-full md:w-14rem" />

                </div>

                <div class="d-flex justify-content-center align-items-center mt-3">
                    <button class="btn main_btn w-100 pt-2 pb-2"> تسجيل الدخول </button>
                </div>
            </form>

            <!-- register  -->
            <div class="flex_center mt-3">
                <p class="grayColor">
                    ليس لديك حساب  ؟
                    <router-link to="/register" class="third-color"> اضغط هنا </router-link>
                </p>
            </div>
        </section>
    </section>
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';

export default {
    components:{
        InputText,
        Dropdown
    }
}
</script>

<style scoped>
    #auth #login{
        transform: translateY(50%);
    }
</style>
<style lang="scss">
    #auth{
        position: relative;
        #login{
            width: 40vw ;
            height:auto ;
            margin-right: auto;
            margin-left: auto;
            background-color: #fff;
            border-radius: 25px;
            padding: 30px 70px;
            .logo{
                width:140px;
                height:90px;
                img{
                    width:100%;
                    height:100%;
                    object-fit: contain;
                }
            }
            input{
                &::placeholder{
                    color:#aaa5a5c9;
                    font-size: 12px;
                }
            }
        }
        .country_code{
            position: absolute !important;
            width: 20% !important;
            left: 0;
            top: 40%;        
        }
    }

   
</style>