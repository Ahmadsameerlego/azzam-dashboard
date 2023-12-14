<template>
    <section class="pt-3 pb-3 px-5 ">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('con.title') }} </h6>
            <p class="grayColor"> 
                {{ $t('con.desc') }}
            </p>
        </div>
    </section>

    <section id="auth" class="mx-5 pt-3 pb-3 px-3 main-bg">
        <section id="" class="mx-0 px-0" >
            
            <!-- title  -->
            <div class="border-bottom">
                <h6 class="blackColor fw-bold"> {{ $t('con.title') }} </h6>
            </div>

            <form class="mt-4 w-50" >
                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('con.name') }} 
                    </label>
                    <InputText type="text" v-model="name" class="default_input w-100" :placeholder="$t('offer.namePlc')" disabled />
                    <span class="error text-danger fs-13" v-if="isName"> {{ $t('offer.namePlc') }} </span>
                </div>

                <div class="form-group mb-3 position-relative">

                    <div class="position-relative">
                        <label for="" class="blackColor d-block fw-6 mb-2 fs-14 d-flex justify-content-between">
                                <span>{{ $t('con.phone') }}</span> 
                        </label>

                        <InputText type="text" disabled v-model="phone" class="default_input w-100" :placeholder="$t('con.phonePlc')" />

                        <!-- country code  -->
                        <Dropdown v-model="selectedCity" disabled :options="countries" @change="chooseCountry" optionLabel="name" placeholder="Select a City" class="default_input country_code  w-full md:w-14rem" />

                    </div>
                    <span class="error text-danger fs-13" v-if="isPhone"> {{ $t('common.phoneValid') }} </span>

                </div>

                <div class="form-group mb-3">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                        {{ $t('common.email') }}
                    </label>
                    <InputText type="email" v-model="email" disabled class="default_input w-100" :placeholder="$t('common.emailPlace')" />
                    <span class="error text-danger fs-13"  v-if="isEmail"> {{ $t('common.emailValid') }} </span>

                </div>

                <div class="form-group">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14">
                            {{ $t('common.text') }} 
                    </label>
                    <Textarea v-model="message" autoResize rows="5" class="default_input default_textarea w-100" cols="30" :placeholder="$t('common.textPlc')" />

                    <span class="error text-danger fs-13" v-if="isMessage"> {{ $t('common.textPlc') }} </span>
                </div>

            </form>

        </section>
    </section>  
    
    <div class="d-flex mx-5  mt-3">
        <button class="btn main_btn w-25  pt-2 pb-2" :disabled="disabled" @click="sendMessage"> 
            <span v-if="!loader">{{ $t('common.send') }}</span> 
            <div class="spinner-border" role="status" v-if="loader">
                <span class="visually-hidden">Loading...</span>
            </div>
        </button>
    </div>

    <Toast />
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';

import { mapActions, mapGetters } from 'vuex';


import axios from 'axios';
// import Skeleton from 'primevue/skeleton';
import Toast from 'primevue/toast';

export default {
    data(){
        return{
            name : '',
            phone : '',
            email : '',
            // disabled : false ,
            selectedCity:{
                "id": "64ae5989a2f2fd0c04737761",
                "name": "السعودية",
                "image": "https://azzam.4hoste.com/assets/uploads/country/image941689583177874.png",
                code: "+966",
            },
            loader : false ,
            disabled : false,
            message : '',
            isMessage : false,
            isName : false ,
            isPhone : false ,
            isEmail : false
        }
    },
    components:{
        InputText,
        Dropdown,
        Textarea,
        // Skeleton,
        Toast
    },
    watch:{
        // message(){
        //     if( this.message == '' ){
        //         this.disabled = true ;
        //     }else{
        //         this.disabled = false ;
        //     }
        // }
    },
    computed:{
        ...mapGetters('setting',['countries'])
    },
    methods:{
        ...mapActions('setting',['getCountries']),
        chooseCountry(){
            document.querySelector('.p-dropdown-label').innerHTML = `
            <img src="${this.selectedCity.image}" class="country_image">
            ${this.selectedCity.code}
            `  ;
        },

        // send message 
        async sendMessage(){
            if( this.message == '' ){
                this.isMessage = true ;
            }else{
                this.isMessage = false ;
            }

            if( this.name == '' ){
                this.isName = true ;
            }else{
                this.isName = false ;
            }

            let inputString = this.phone.toString();
            if( this.phone === '' || inputString.length < 9){
                this.isPhone = true ;
            }else{
                this.isPhone = false ;
            }

            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
                this.isEmail = false ;
            } else {
                this.isEmail = true ;
            }


            if( this.isMessage == false && this.isName == false && this.isPhone == false && this.isEmail == false ){
                this.mainSend();
            }
        },

        async mainSend(){
            this.loader = true ;
            this.disabled = true ;
            const fd = new FormData();
            fd.append('message', this.message)
            await axios.post('/contactus-center', fd ,{
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    this.loader = false ;
                    this.disabled = false ;
                    this.message = '';
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    this.loader = false ;
                    this.disabled = false ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                this.loader = false ;
                this.disabled = false ;
            } )
        }

    },
    mounted(){
        this.getCountries();
        // document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.code ;

        let user = JSON.parse(localStorage.getItem('user'));
        this.name = user.name ;
        this.phone = user.phone ;
        this.email = user.email ;
        this.selectedCity.code = user.countryCode ;
        document.querySelector('.p-dropdown-label').innerHTML =      `
            <img src="${this.selectedCity.image}" class="country_image">
            ${this.selectedCity.code}
            ` ;
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