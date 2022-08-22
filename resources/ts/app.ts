


require('./bootstrap');

import { createApp } from "vue";
import MasterLayout from "./vue/backend/layouts/MasterLayoutComponent.vue"
import router from "./router";
import Vue3ColorPicker    from "vue3-colorpicker";
import "vue3-colorpicker/style.css";



const app =createApp({
    mounted(){
        console.log("app mounted");
    }
});
app.component('master-layout',MasterLayout);
app.use(Vue3ColorPicker);
app.use(router).mount('#app');
