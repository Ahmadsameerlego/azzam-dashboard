<template>
    <header id="header" class="pt-4 pb-4 px-4">
        <section class="header_content flex_between">
            <!-- toggle icon  -->
            <button class="btn toggle_icon" @click="switchSide()">
                <i class="fa-solid fa-bars-staggered"></i>
            </button>
            <button class="btn openSide" @click="opeSide()">
                <i class="fa-solid fa-bars-staggered"></i>
            </button>

            <!-- user interaction  -->
           <div class="d-flex align-items-baseline">
                

                <!-- notfications  -->
                <router-link to="/center/notification" class="position-relative btn nots mx-3">
                    <i class="fa-regular fa-bell"></i>
                    <span class="not_count" v-if="notifyCount>0">
                        {{ notifyCount }}
                    </span>
                </router-link>

                <!-- admin  -->
                

                <div class="admin dropdown">
                    <button class="btn  d-flex dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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

                    </button>
                    <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                        <li class="single">
                            <router-link to="/center/about"> {{ $t('dash.about') }} </router-link>
                        </li>
                        <li class="single">
                            <router-link to="/center/faqs"> {{ $t('dash.fqs') }}  </router-link>
                        </li>
                        <li class="single">
                            <router-link to="/center/terms"> {{ $t('dash.terms') }} </router-link>
                        </li>
                    </ul>
                </div>

                <!-- language  -->
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                        <img class="flag_img" :src="require('@/assets/imgs/sudia.png')" alt=""  v-if="$i18n.locale=='ar'">
                        <img class="flag_img" :src="require('@/assets/imgs/en.png')" alt=""  v-else-if="$i18n.locale=='en'">
                        
                        <span v-if="$i18n.locale=='ar'">
                            {{ $t('dash.arabic') }}
                        </span>
                        <span v-else-if="$i18n.locale=='en'">
                            {{ $t('dash.english') }}
                        </span>
                        <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a class="dropdown-item" href="#" @click="switchLanguage('ar')">
                                {{ $t('dash.arabic') }}
                                <img class="flag_img" :src="require('@/assets/imgs/sudia.png')" alt="">
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#" @click="switchLanguage('en')">
                                {{ $t('dash.english') }}
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
import axios from 'axios';
export default {
    data(){
        return{
            name : '',
            title : '',
            image : '',
            notifyCount : ''
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
        },

        // get home 
        async getHome(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            await axios.get('/home-center', {headers})
            .then( (res)=>{
                this.notifyCount = res.data.data.notifyCount ;
            } )
        },

        switchSide(){
            document.querySelector('#sidebar').classList.toggle('active');
            document.querySelector('#header').classList.toggle('active');
            document.querySelector('#content').classList.toggle('active');
        }
        ,
        opeSide(){
            document.querySelector('#sidebar').classList.add('active');

        }
    },
    mounted(){
        let user = JSON.parse( localStorage.getItem('user') );
        this.name = user.name ;
        this.title = user.ownerName ;
        this.image = user.avatar ;

        this.getHome();
    }
}
</script>

<style lang="scss">
    .openSide{
        display: none !important; 
    }
    .not_count{
        position: absolute;
        background: #3290d8;
        color: #fff;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        top: -10px;
        left: -8px;
        font-size: 12px;
    }
    .dropdown-menu{
        border-radius: 6px !important;
        background-color: #fff !important;
        box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.262745098) !important;
        width: 170px;
        transition: 0.6s all;
        border: none !important;
        .single{
            color:#333;
            text-align: center;
            padding-bottom: 8px;
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
        left: 3px;
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
    .btn.show{
        border: none !important;
    }
</style>