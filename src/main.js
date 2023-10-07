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


// import style 
import '@/assets/scss/style.scss';
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


createApp(App)
    .use(i18n)
    .use(VueI18n)
    .use(FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .use(DataTable)
    .use(Column)
    .use(ColumnGroup)
    .use(Row)
    .component('v-otp-input', VOtpInput)
    .use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyB4d19CAL7u_hJ8k4P7EaQFcnner_Q9KEo',
            libraries: "places"
    
        },
    })
    .mount('#app')
