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
            <form @submit.prevent="login">
                <div class="form-group position-relative">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            رقم الجوال 
                    </label>

                    <InputText type="text" v-model="loginKey" name="loginKey" class="default_input w-100" placeholder="الرجاء ادخال رقم الجوال" />

                    <!-- country code  -->
                    <Dropdown v-model="selectedCity" :options="countries" optionLabel="name"  class="default_input country_code  w-full md:w-14rem" />

                </div>

                <div class="d-flex justify-content-center align-items-center mt-3">
                    <button class="btn main_btn w-100 pt-2 pb-2" :disabled="disabled"> 
                        <span v-if="!disabled">تسجيل الدخول</span> 
                        <div class="spinner-border" role="status" v-if="disabled">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </button>
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
    <Toast />
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            loginKey : '',
            selectedCity : {
                "id": "64ae5989a2f2fd0c04737761",
                "name": "السعودية",
                "image": "https://azzam.4hoste.com/assets/uploads/country/image941689583177874.png",
                "code": "+966",
            },
            disabled : false
        }
    },
    computed:{
        ...mapGetters('setting',['countries'])
    },
    methods:{
        ...mapActions('setting',['getCountries']),

        // login 
        async login(){
            this.disabled = true ;
            const fd = new FormData() ;
            fd.append('loginKey', this.loginKey);
            fd.append('countryCode', this.selectedCity.code);
            fd.append('deviceId', localStorage.getItem('device_id'));
            fd.append('deviceType', 'web');

            await axios.post('/signin-center', fd)
            .then( (res)=>{
                if(  res.data.key === 'needActive' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                    localStorage.setItem('loginKey', this.loginKey);
                    localStorage.setItem('countryCode', this.selectedCity.code);
                    setTimeout(() => {
                        this.$router.push('/activeCode');
                    }, 3000);
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                }

            } )
        }

    },
    components:{
        InputText,
        Dropdown,
        Toast
    },
    mounted(){
        this.getCountries();
        // get random device_id 
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => localStorage.setItem('device_id', data.ip))
        .catch(error => console.error(error));
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
            width: 27% !important;
            left: 0;
            top: 40%;        
        }
    }

   
</style>