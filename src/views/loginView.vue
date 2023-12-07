<template>
    <section id="auth">
        <section id="login">
            <!-- logo  -->
            <div class="logo mx-auto d-flex">
                <img :src="require('@/assets/imgs/logo.png')" alt="Azzam Logo">
            </div>
            <!-- title  -->
            <div class="mt-3">
                <h6 class="blackColor fw-bold"> {{ $t('auth.login') }} </h6>
                <p class="grayColor">
                    {{ $t('auth.loginPlc') }}
                </p>
            </div>
            <!-- form  -->
            <form @submit.prevent="login">
                <div class="form-group position-relative">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('auth.phone') }} 
                    </label>

                    <InputText type="number" v-model="loginKey" name="loginKey" class="default_input w-100" :placeholder="$t('auth.phonePlc')" />

                    
                    <!-- country code  -->
                    <Dropdown v-model="selectedCity" :options="countries" optionLabel="name"     class="default_input country_code  w-full md:w-14rem" @change="chooseCountry">
                        <template #value="slotProps">
                            <div class="flex align-items-center">
                                <!-- <img :alt="slotProps.data.image" :src="slotProps.data.image"  style="width: 18px" /> -->
                                <span>
                                    {{slotProps}}
                                </span>
                            </div>
                        </template>
                    </Dropdown>

                </div>

                <!-- validation message  -->
                <span class="text-danger mt-3 fs-14 error" v-if="showrError" ref="validation">
                    يجب أن يكون رقم الهاتف اكثر من ٩ أرقام
                </span>

                <div class="d-flex justify-content-center align-items-center mt-3">
                    <button class="btn main_btn w-100 pt-2 pb-2" :disabled="disabled"> 
                        <span v-if="!loader"> {{ $t('auth.login') }} </span> 
                        <div class="spinner-border" role="status" v-if="loader">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </button>
                </div>
            </form>

            <!-- register  -->
            <div class="flex_center mt-3">
                <p class="grayColor">
                    {{ $t('auth.haveNoAcc') }}  ؟
                    <router-link to="/register" class="third-color"> {{ $t('auth.press') }} </router-link>
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
                code: "+966",
            },
            disabled : false,
            loader : false,
            showrError : false
        }
    },
    watch:{
        loginKey(){
            let inputString = this.loginKey.toString();
            if( this.loginKey === '' || inputString.length < 9 ){
                // this.disabled = true ;
                this.showrError = true ; 
            }else if(this.loginKey !== '' ){
                // this.disabled = false ; 
                this.showrError = false;
            }
        }
    },
    computed:{
        ...mapGetters('setting',['countries'])
    },
    methods:{
        ...mapActions('setting',['getCountries']),

        // login 
        async login(){
            let inputString = this.loginKey.toString();
            if( this.loginKey === '' || inputString.length < 9 ){
                // this.disabled = true ;
                this.showrError = true ; 
            }else{
                this.showrError = false ; 
                this.disabled = true ;
                this.loader = true ;
                const fd = new FormData() ;
                fd.append('loginKey', this.loginKey);
                fd.append('countryCode', this.selectedCity.code);
                fd.append('deviceId', localStorage.getItem('FCMToken'));
                fd.append('deviceType', 'web');

                await axios.post('/signin-center', fd)
                .then( (res)=>{
                    if(  res.data.key === 'needActive' ){
                        this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                        this.disabled = false ;
                        this.loader = false ;
                        localStorage.setItem('loginKey', this.loginKey);
                        localStorage.setItem('countryCode', this.selectedCity.code);
                        setTimeout(() => {
                            this.$router.push('/activeCode');
                        }, 1000);
                    }else{
                        this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                        this.disabled = false ;
                        this.loader = false ;
                    }

                } )
                .catch( (err)=>{
                    console.log(err.response.data.message)
                    this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                    this.disabled = false ;
                    this.loader = false ;
                } )
            }

            
        },
        chooseCountry(){
            document.querySelector('.p-dropdown-label').innerHTML = `
            <img src="${this.selectedCity.image}" class="country_image">
            ${this.selectedCity.code}
            ` ;
        },

    },
    components:{
        InputText,
        Dropdown,
        Toast
    },
    mounted(){
        this.getCountries();
        // this.getCountries();
        document.querySelector('.p-dropdown-label').innerHTML = `
            <img src="${this.selectedCity.image}" class="country_image">
            ${this.selectedCity.code}
            `  ;
        // get random device_id 
    }
}
</script>

<style scoped>
    #auth #login{
        transform: translateY(50%);
    }
    
</style>
<style lang="scss">
    .p-dropdown .p-dropdown-trigger{
        width: 30px !important;
    }
    .country_image{
        width: 25px;
        height: 20px;
        object-fit: contain;
    }
.error{
    transition: .3s all;
    .valid{
        transform: translateX(10px);
    }
}
.p-dropdown-label-empty{
    opacity: 1 !important;
}
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
            width: 29% !important;
            left: 0;
            top: 40%;        
        }
    }

   
</style>