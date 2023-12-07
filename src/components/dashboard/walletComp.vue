<template>
    <section class="pt-3 pb-3 px-5">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('wallet.wallet') }} </h6>
            <p class="grayColor"> 
                {{ $t('wallet.keep') }}
            </p>
        </div>

        <!-- wallet  -->
        <div class="main-bg pt-3 pb-3 mb-3 flex_column">
            <div class="wallet_img mb-2">
                <img :src="require('@/assets/imgs/wallet.png')" alt="wallet">
            </div>
            <h3 class="sec-color fw-bold mb-2" v-html="wallet"></h3>
            <div>
                <button class="main_btn btn w-100 px-5" :disabled="disabled" @click.prevent="widthDraw">
                     <span v-if="!disabled"> {{ $t('wallet.withdraw') }} </span>
                     <div class="spinner-border" role="status" v-if="disabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
            </div>
        </div>
    </section>

    <Toast />
</template>

<script>
import Toast from 'primevue/toast';

import axios from 'axios';
export default {
    data(){
        return{
            wallet : '',
            disabled : false
        }
    },
    methods:{
        // get wallet data 
        async getWallet(){
            await axios.get('/wallet' , {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.wallet = res.data.data ;
                }
            } )
        },
        // withdraw 
        async widthDraw(){
            const fd = new FormData();
            this.disabled = true ;
            await axios.post('/balance-withdrawal', fd , {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key === 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                    setTimeout(() => {
                        this.getWallet();
                    }, 1000);
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
                    this.disabled = false ;
                }
            } )
            .catch( (err)=>{
                this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
                this.disabled = false ;
            } )
        }
    },
    components:{
        Toast
    },
    mounted(){
        this.getWallet();
    }
}
</script>

<style lang="scss">
    .wallet_img{
        width:300px;
        height: 300px;
        img{
            width:100%;
            height:100%;
            object-fit: contain;
        }
    }
</style>