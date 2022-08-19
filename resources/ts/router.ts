// require('./helper');
import { createRouter, createWebHistory } from 'vue-router'



let getComponent=(file_name:String)=>{
    const route=import(`./vue/backend/pages/${file_name}Component.vue`);
    return route;
}



const per_fix="/portal";
const routes = [
    // { path: "/:catchAll(.*)",
    // name: "NotFound",
    // component: () => getComponent("error/404") },
    // { path: "/unauthorized/user", component: () => setComponent("error/401"),name: "unauthorized" },
    {
        path: "/portal/dashboard",
        redirect: { name: 'master_dashboard' }
    },
    {
        path: `${per_fix}/dashboard`, component:()=>getComponent("dashboard/MasterDashboard"), name: "master_dashboard",
        meta: { permissions: "dashboard-view" }
    },



];


export default createRouter({
    history: createWebHistory(),
    routes
})
