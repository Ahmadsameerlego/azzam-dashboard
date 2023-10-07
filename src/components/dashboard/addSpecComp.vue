<template>
    <section class="pt-3 pb-3 px-5 flex_between">
        <div>
            <h6 class="fw-bold blackColor"> {{ $t('common.addSpec') }} </h6>
            <p class="grayColor"> {{  $t('common.specDesc')  }} </p>
        </div>
    </section>

    <section class="card mx-5 pt-2 pb-2 px-4 border-none">
        <h6 class="sec-color fw-6"> {{ $t('common.specInfo') }} </h6>

        <form class="add_spec_form">
            <!-- profile pic  -->
            <section class="profile_pic mt-4">
                <input type="file" name="" @change="uploadProfilePic" class="uploadInput">
                <!-- default image  -->
                <img :src="require('@/assets/imgs/logo.png')" class="profile_image" alt="">
                <!-- edit  -->
                <span class="edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                </span>
            </section>

            <!-- inputs  -->
            <div class="row mt-3">

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{ $t('common.specName') }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>
                        <InputText type="text" v-model="name" class="default_input w-100" :placeholder="$t('common.namePlace')" />

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{ $t('common.special')  }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>

                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="default_input w-100 w-full md:w-14rem" />

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group position-relative">
                        <label for="" class="d-block fw-6 mb-2">
                             {{ $t('common.phone')  }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>

                        <InputText type="text" v-model="phone" class="default_input w-100" :placeholder="$t('common.phonePlace')" />

                        <!-- country code  -->
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="default_input country_code w-100 w-full md:w-14rem" />

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{  $t('common.email')  }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>
                        <InputText type="text" v-model="email" class="default_input w-100" :placeholder="$t('common.emailPlace')" />

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{  $t('common.conPrice')  }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>
                        <InputNumber v-model="price" inputId="integeronly" class="default_input w-100" :placeholder="$t('common.pricePlace')" />

                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{  $t('common.conDuration')  }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>
                        <InputNumber v-model="duration" inputId="integeronly" class="default_input w-100" :placeholder="$t('common.durationPlace')" />

                    </div>
                </div>

                <div class="col-md-12 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{  $t('common.bio_ar') }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>
                        <Textarea v-model="bio_ar" autoResize rows="5" class="default_input default_textarea w-100" cols="30" :placeholder="$t('common.bio_ar')" />
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{ $t('common.bio_en')  }} 
                             <i class="fa-solid fa-star-of-life text-danger fs-10"></i>
                        </label>
                        <Textarea v-model="bio_en" autoResize rows="5" class="default_input default_textarea w-100" cols="30" :placeholder="$t('common.bio_en')" />
                    </div>
                </div>

            </div>
        </form>
        
    </section>

    <section class="card mt-3 mx-5 pt-2 pb-2 px-4 border-none">
        <h6 class="sec-color fw-6"> {{ $t('common.specInfo')  }} </h6>

        <form class="add_spec_form">
            
            <!-- inputs  -->
            <div class="row mt-3">     
                <div class="col-md-4 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{ $t('common.day') }} 
                        </label>

                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="default_input w-100 w-full md:w-14rem" />

                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{ $t('common.from') }} 
                        </label>

                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="default_input w-100 w-full md:w-14rem" />

                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="form-group">
                        <label for="" class="d-block fw-6 mb-2">
                             {{ $t('common.to')  }} 
                        </label>

                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="default_input w-100 w-full md:w-14rem" />

                    </div>
                </div>
            </div>

            <!-- add new date  -->
            <div class="add_new_date d-flex main-color">
                <span class="add_icon flex_center whiteColor">
                    <i class="fa-solid fa-plus"></i>
                </span>
                <span class="mx-2 fw-6"> {{ $t('common.addAnotherDate')  }} </span>
            </div>
            <div class="d-flex justify-content-center align-items-center mt-3">
                <button class="btn main_btn w-50 mx-auo pt-2 pb-2"> {{ $t('common.add') }} </button>
            </div>
        </form>
        
    </section>
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';

export default {
    data(){
        return{
            name : null,
            phone : null ,
            email : null,
            price : null,
            duration : null,
            bio_en : null,
            bio_ar : null,
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]

        }
    },
    components:{
        InputText,
        Dropdown,
        InputNumber,
        Textarea
    }
}
</script>

<style lang="scss">
    
    .add_spec_form{
        
        .country_code{
            position: absolute;
            width: 30% !important;
            left: 0;
            top: 42%;        
        }
    }
    .add_icon{
        width: 25px;
        height: 25px;
        background-color: #3694ce;
        border-radius: 50%;
    }
    .profile_pic{
        position: relative;
        width: 100px;
        height: 100px;
            .uploadInput{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                right: 0;
                opacity: 0;
            }
            .profile_image{
                width: 100px;
                height: 100px;
                border-radius: 5px;
                object-fit: contain;
            }
            .edit{
                position: absolute;
                left: -10px;
                top: 35%;
                background-color: #3694ce;
                border-radius: 9px;
                border: 1px solid #fff;
                color: #fff;
                width: 25px;
                height: 25px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;        
            }
        }
</style>