


require('./bootstrap');

import { createApp } from "vue";
import MasterLayout from "./vue/backend/layouts/MasterLayoutComponent.vue"
import router from "./router";
import Vue3ColorPicker    from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import Notifications from '@kyvg/vue3-notification';




const app =createApp({
    methods:{
        alertNotify( status:any, title:String, type:String, response:any){
            switch (status) {

                case 200:
                    this.$notify({title: title,type:type,text: response.message});
                break;
                case 201:
                    this.$notify({title: title,type:type,text: response.message});
                break;
                case 422:
                    this.$notify({title: `Oops, Unprocessable Entity ${status} Error! `,type:type,text: response.message});
                break;
                case 500:
                    this.$notify({title: `Oops, Something Went Wrong ${status} Error! `,type:type,text: response.message});
                    break;
            }
        },
    },
    mounted(){
        console.log("app mounted");
    }
});
app.component('master-layout',MasterLayout);
app.use(Vue3ColorPicker);
app.use(Notifications)

app.use(router).mount('#app');
