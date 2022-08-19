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


const router= createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        }
    },
})

let permissions=JSON.parse(`${localStorage.getItem('permissions')}`);

router.beforeEach((to, from, next) => {

    // if (to.meta.permissions) {
    //     if (permissions.indexOf(to.meta.permissions) !== -1) {

    //             next()
    //     }
    //     else {
    //         next({ path: '/unauthorized/user' })
    //         console.log(" not auth");
    //     }
    // }
    next()

});

export default router;
