import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store';
import VueI18n from 'vue-i18n';
import i18n from './i18n'



// import primevue 
import PrimeVue from 'primevue/config';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";


import ToastService from 'primevue/toastservice';

// import style 
import '@/assets/scss/style.scss';
import '@/assets/scss/style_ltr.scss';
import '@/assets/scss/responsive.scss'
// import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// data table 
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional

// google map 
import VueGoogleMaps from '@fawmi/vue-google-maps'

import VOtpInput from "vue3-otp-input";


// import fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();

// import axios
import axios from 'axios';
axios.defaults.baseURL = 'https://azzam.4hoste.com/api';
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');   
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.lang = localStorage.getItem('locale');


axios.interceptors.response.use(
response => response,
error => {
    // Check if the error response status is 401 (unauthenticated)
    if (error.response.data.key === 'unauthorized') {
    // Perform your action here, such as redirecting to the login page
    // For example:
    // router.push('/login');
        router.push('/center/login')
    }

    return Promise.reject(error);
}
);

// import pagination
import Paginate from "vuejs-paginate-next";


createApp(App)
    .use(i18n)
    .use(VueI18n)
    .use(FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .use(DataTable)
    .use(Paginate)
    .use(ToastService)
    .use(Column)
    .use(ColumnGroup)
    .use(Row)
    .component('v-otp-input', VOtpInput)
    .use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyBNLoYGrbnQI_GMqHt6m0PSN9yA7Zvq7gA',
            libraries: "places"
    
        },
    })
    .mount('#app')
