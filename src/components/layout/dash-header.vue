<template>
    <header id="header" class="pt-4 pb-4 px-4">
        <section class="header_content flex_between">
            <!-- toggle icon  -->
            <button class="btn toggle_icon">
                <i class="fa-solid fa-bars-staggered"></i>
            </button>

            <!-- user interaction  -->
            <div class="d-flex align-items-baseline">
                <!-- lang  -->
                <!-- <button class="btn lang">
                    <i class="fa-solid fa-globe"></i>
                </button> -->

                <!-- notfications  -->
                <router-link to="/" class="btn nots mx-3">
                    <i class="fa-regular fa-bell"></i>
                </router-link>

                <!-- admin  -->
                <div class="admin d-flex position-relative mx-3"  @click="switchDrop">
                    <div class="admin_image">
                        <img :src="image" alt="admin image">
                    </div>
                    <div class="admin_info mx-2">
                        <h6 class="name fw-bold"> {{ name }} </h6>
                        <span class="title fw-6"> {{ title }} </span>
                    </div>
                    <span class="profile_icon">
                        <i class="fa-solid fa-angle-down"></i>
                    </span>

                    <!-- profile dropdown  -->
                    <div class="profile_drop pt-2 pb-2" ref="profile">
                        <div class="single mb-2 px-3 pb-2 text-center">
                            <router-link to="/"> عن التطبيق </router-link>
                        </div>
                        <div class="single mb-2 px-3 pb-2 text-center">
                            <router-link to="/"> أسئلة متكررة </router-link>
                        </div>
                        <div class="single mb-2 px-3 pb-2 text-center">
                            <router-link to="/"> الشروط والأحكام </router-link>
                        </div>
                    </div>
                    
                </div>

                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                        <img class="flag_img" :src="require('@/assets/imgs/sudia.png')" alt=""  v-if="$i18n.locale=='ar'">
                        <img class="flag_img" :src="require('@/assets/imgs/en.png')" alt=""  v-else-if="$i18n.locale=='en'">
                        
                        <span v-if="$i18n.locale=='ar'">
                            العربية
                        </span>
                        <span v-else-if="$i18n.locale=='en'">
                            الانجليزية
                        </span>
                        <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a class="dropdown-item" href="#" @click="switchLanguage('ar')">
                                عربي
                                <img class="flag_img" :src="require('@/assets/imgs/sudia.png')" alt="">
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#" @click="switchLanguage('en')">
                                انجليزي
                                <img class="flag_img" :src="require('@/assets/imgs/en.png')" alt="">
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    </header>
</template>

<script>
export default {
    data(){
        return{
            name : '',
            title : '',
            image : ''
        }
    },
    methods:{
        switchLanguage(locale) {
            let lang = locale;
            if(this.$i18n.locale == 'ar'){
                lang = 'en';
            }

            if(localStorage.getItem('locale')){
                localStorage.removeItem('locale');
            }
            localStorage.setItem('locale' ,lang);

            location.reload()

        },
        switchDrop(){
            this.$refs.profile.classList.toggle('active')
        }

    },
    mounted(){
        let user = JSON.parse( localStorage.getItem('user') );
        this.name = user.name ;
        this.title = user.ownerName ;
        this.image = user.avatar ;
    }
}
</script>

<style lang="scss">
    .profile_drop{
        position: absolute;
        top: 50px;
        left: -42px;
        border-radius: 6px;
        background-color: #fff;
        box-shadow: 0px 0px 10px #33333343;
        width: 170px;
        opacity: 0;
        transition: .3s all;
        .single{
            color:#333;
            &:not(:last-of-type){
                border-bottom: 1px solid #cccccc4d;
            }
        }
        &.active{
            opacity: 1;
        }
    }
    .profile_icon{
        position: absolute;
        left: -10px;
        font-size: 13px;
        top: 27%;
    }
    .flag_img{
        width: 25px;
    }
    .dropdown-toggle::after{display: none !important;}
    .admin{
        cursor: pointer;
    }
</style>