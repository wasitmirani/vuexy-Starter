<template>
  <div>
       <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item me-auto"><router-link class="navbar-brand" to="/portal/dashboard">
                    <span class="brand-logo">
                    </span>
                        <h2 style="font-size: 14px;" class="brand-text">Vuexy</h2>
                    </router-link></li>
                <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse"><i
                            class="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i><i
                            class="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" data-feather="disc"
                            data-ticon="disc"></i></a></li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">

                 <li v-for="item in sidebar_menu" :key="item.id" :class="getClass(item)"  >
                     <span  :data-i18n="item.heading" v-if="item?.heading && isAllowed(item?.heading_can)" >{{item.heading}}</span>
                     <i data-feather="more-horizontal" v-if="item?.heading"></i>
                     <router-link class="d-flex align-items-center" v-if="item.type == 'single_link' && isAllowed(item.can)" :to="item.route">
                        <i :data-feather="item.icon"></i>
                        <span class="menu-title text-truncate" :data-i18n="item.title">{{item.title}}</span>
                    </router-link>

                     <a  class="d-flex align-items-center" v-if="item.type=='multi' && isAllowed(item.can)" href="#">
                         <i :data-feather="item.icon"></i><span class="menu-title text-truncate" :data-i18n="item.title">{{item.title}}</span>
                    </a>

                    <ul class="menu-content"  v-if="item?.sub_menu">
                        <li v-for="submenu in item.sub_menu" :key="submenu.id" >
                            <router-link  class="d-flex align-items-center" v-if="isAllowed(submenu?.can)" :to="submenu.route"><i
                                    :data-feather="submenu.icon"></i>
                                <span class="menu-item text-truncate" :data-i18n="submenu.title">{{submenu.title}}</span></router-link>
                        </li>
                    </ul>
                </li>
                <li v-if="!loading">
                    <a class="d-flex align-items-center" role="button" @click="logout">
                        <i data-feather="power"></i>
                        <span class="menu-title text-truncate" data-i18n="logout">Logout</span>
                    </a>
                </li>

            </ul>
        </div>
    </div>
  </div>
</template>

<script>


export default {

     data(){
           return {
               url:this.hosturl,
                sidebar_menu:[],
                index:0,
                loading:false,
           }
       },
       methods:{
         logout(){
            window.location.href=window.location.origin+"/logout";
        },
              isAllowed(value){

                if(permissions.includes(value))
                    return true;
                else
                    return true;
            },
            getClass(item){
               if( item?.heading){
                     return 'navigation-header'
               }
               if(item.type=='single_link'){
                   return 'nav-item'
               }else{
                   return 'nav-item has-sub'
               }
           },
           getSideBarMenu(){
                this.loading = true;
                    axios.get('/api/config/sidebar-menu').then(response=>{
                        this.sidebar_menu = response.data;
                        this.loading = false;
                    });
           }

       },
       mounted() {
        //    console.log("mounted",sidebarmenu);
       this.getSideBarMenu();
       },

}
</script>

<style>

</style>
