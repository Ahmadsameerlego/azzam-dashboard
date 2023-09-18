<template>
    <section id="auth">
        <section id="login">
            <!-- logo  -->
            <div class="logo mx-auto d-flex">
                <img :src="require('@/assets/imgs/otp.png')" alt="Azzam Logo">
            </div>
            <!-- title  -->
            <div class="mt-3">
                <h6 class="blackColor fw-bold"> 
                    كود التحقق
                </h6>
                <p class="grayColor">
                    برجاء ادخال كود التحقق المرسل الى رقم جوالك
                </p>
            </div>
            <!-- form  -->
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
                                style="flex-direction: row-reverse;"
                            />
                        </div>
                    </div>

                </div>

                <div class="d-flex justify-content-center align-items-center mt-3">
                    <button class="btn main_btn w-100 pt-2 pb-2"> تسجيل الدخول </button>
                </div>
            </form>

            <!-- register  -->
            <div class="flex_center mt-3">
                <p class="grayColor">
                    لم يصلك الكود  ؟
                    <span  class="third-color"> إعادة ارسال </span>
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

<style lang="scss">
    .otp-input{
        width: 50px;
        height: 50px;
        margin: 0 10px;
        border: 1px solid #d8d2d2;
        border-radius: 6px;
        text-align: center;
    }
</style>