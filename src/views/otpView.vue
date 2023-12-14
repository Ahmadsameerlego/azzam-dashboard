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
                    {{ $t('auth.actCode') }}
                </h6>
                <p class="grayColor">
                    {{ $t('auth.codePlc') }}
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
                         <span v-if="!loader"> {{ $t('auth.confirm') }} </span> 
                         <div class="spinner-border" role="status" v-if="loader">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </button>
                </div>
            </form>

            <!-- register  -->
            <div class="flex_center mt-3">
                <p class="grayColor">
                    {{ $t('auth.getNoCode') }}  ؟
                    <span  class="third-color" style="cursor:pointer" @click="resendCode"> {{ $t('auth.resend') }} </span>
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
            disabled : true,
            loader : false
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
            console.log(localStorage.getItem('FCMToken'))
            this.disabled = true ;
            this.loader = true ;
            const fd = new FormData();
            fd.append('loginKey', localStorage.getItem('loginKey'));
            fd.append('countryCode', localStorage.getItem('countryCode'));
            fd.append('deviceId', localStorage.getItem('FCMToken'));
            fd.append('deviceType', 'web');
            fd.append('activationCode', this.code);

            await axios.post('/activate-center', fd)
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                    this.loader = false ;
                    setTimeout(() => {
                        this.$router.push('/center/home')
                    }, 1000);
                    localStorage.setItem('user', JSON.stringify(res.data.data));
                    localStorage.setItem('token', res.data.data.token);
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                    this.loader = false ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                    this.disabled = false ;
                    this.loader = false ;
            } )
        },

        // // resend code 
        // async resendCode(){
        //     const fd = new FormData();
        //     fd.append('loginKey', localStorage.getItem('loginKey'));
        //     fd.append('countryCode', localStorage.getItem('countryCode'));
        //     // fd.append('deviceType', 'web');
        //     fd.append('userType', 'center');
        //     // fd.append('deviceId', localStorage.getItem('FCMToken'));
        //     await axios.patch('/resend-code', fd)
        //     .then( (res)=>{
        //         console.log('done')

        //         if( res.data.key === 'success' ){
        //             this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
        //         }else{
        //             this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
        //         }
        //     } )
        //     .catch( (err)=>{
        //         this.$toast.add({ severity: 'error', summary: err.message, life: 3000 });
        //         console.log(err)
        //     } )
        // }

        resendCode() {
            const fd = new FormData();
            fd.append('loginKey', localStorage.getItem('loginKey'));
            fd.append('countryCode', localStorage.getItem('countryCode'));
            fd.append('userType', 'center');

            axios.patch('/resend-code', fd)
                .then((res) => {
                try {
                    console.log('done');

                    if (res.data.key === 'success') {
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    } else {
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    }
                } catch (error) {
                    // Handle specific error scenarios if needed
                    console.error(error);
                }
                })
                .catch((err) => {
                this.$toast.add({ severity: 'error', summary: err.message, life: 3000 });
                console.log(err);
                });
            
        }

    },
    watch:{
        code(){
            if( this.code.length < 6 ){
                console.log(this.code.length)
                this.disabled = true ;
            }else{
                this.disabled = false ;
            }
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