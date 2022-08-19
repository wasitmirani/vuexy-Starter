


require('./bootstrap');

import { createApp } from "vue";
import MasterLayout from "./vue/backend/layouts/MasterLayoutComponent.vue"
import router from "./router";



const app =createApp({
    mounted(){
        console.log("app mounted");
    }
});
app.component('master-layout',MasterLayout);
app.use(router).mount('#app');
