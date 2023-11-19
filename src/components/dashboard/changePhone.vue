<template>
    <section class="pt-3 pb-3 px-5 ">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('nav.profile') }} </h6>
            <p class="grayColor"> 
                {{ $t('profile.manage') }}
            </p>
        </div>
    </section>

    <section id="auth" class="mx-5 pt-3 pb-3 px-3 main-bg">
        <section id="login" class="mx-0 px-0" style="width:40%">
            <!-- title  -->
            <div class="">
                <h6 class="blackColor fw-bold"> {{ $t('profile.changePhone') }} </h6>
            </div>

            <form>

                <div class="form-group mb-3 position-relative">
                    <label for="" class="blackColor d-block fw-6 mb-2 fs-14 d-flex justify-content-between">
                            <span>{{ $t('auth.phone') }}</span> 
                    </label>

                    <InputText type="text" v-model="phone" class="default_input w-100" :placeholder="$t('auth.phonePlc')" />

                    <!-- country code  -->
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="default_input country_code  w-full md:w-14rem" />

                </div>

                <div class="d-flex justify-content-center align-items-center mt-3 w-100 mx-auto">
                    <button class="btn main_btn w-100 pt-2 pb-2"> {{ $t('auth.confirm') }} </button>
                </div>


            </form>
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

<style>

</style>