<template>
    <section class="pt-3 pb-3 px-5">
        <div>
            <h6 class="fw-bold blackColor"> المحفظة </h6>
            <p class="grayColor"> 
                متابعة المحفظة
            </p>
        </div>

        <!-- wallet  -->
        <div class="main-bg pt-3 pb-3 mb-3 flex_column">
            <div class="wallet_img mb-2">
                <img :src="require('@/assets/imgs/wallet.png')" alt="wallet">
            </div>
            <h3 class="sec-color fw-bold mb-2">
                1000 رس
            </h3>
            <div>
                <button class="main_btn btn w-100 px-5"> سحب رصيد </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {

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