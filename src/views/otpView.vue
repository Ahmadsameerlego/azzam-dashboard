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
            <form @submit.prevent="sendCode">
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
                    <button class="btn main_btn w-100 pt-2 pb-2" :disabled="disabled">
                         <span v-if="!disabled"> تأكيد </span> 
                         <div class="spinner-border" role="status" v-if="disabled">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </button>
                </div>
            </form>

            <!-- register  -->
            <div class="flex_center mt-3">
                <p class="grayColor">
                    لم يصلك الكود  ؟
                    <span  class="third-color" style="cursor:pointer" @click="resendCode"> إعادة ارسال </span>
                </p>
            </div>
        </section>
    </section>
    <Toast />
</template>

<script>
// import InputText from 'primevue/inputtext';
// import Dropdown from 'primevue/dropdown';
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            code : '',
            disabled : false
        }
    },
    components:{
        // InputText,
        // Dropdown
        Toast
    },
    methods:{
        // send code 
        async sendCode(){
            this.disabled = true ;
            const fd = new FormData();
            fd.append('loginKey', localStorage.getItem('loginKey'));
            fd.append('countryCode', localStorage.getItem('countryCode'));
            fd.append('deviceId', localStorage.getItem('device_id'));
            fd.append('deviceType', 'web');
            fd.append('activationCode', this.code);

            await axios.post('/activate-center', fd)
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                    setTimeout(() => {
                        this.$router.push('/')
                    }, 3000);
                    localStorage.setItem('user', JSON.stringify(res.data.data));
                    localStorage.setItem('token', res.data.data.token);
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                }
            } )
        },

        // resend code 
        async resendCode(){
            const fd = new FormData();
            fd.append('loginKey', localStorage.getItem('loginKey'));
            fd.append('countryCode', localStorage.getItem('countryCode'));
            fd.append('deviceType', 'web');
            fd.append('deviceId', localStorage.getItem('device_id'));
            await axios.patch('/resend-code', fd)
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                }
            } )
        }
    }
}
</script>

<style lang="scss">
#auth #login{
        transform: translateY(50%);
    }
    .otp-input{
        width: 50px;
        height: 50px;
        margin: 0 10px;
        border: 1px solid #d8d2d2;
        border-radius: 6px;
        text-align: center;
    }
</style>