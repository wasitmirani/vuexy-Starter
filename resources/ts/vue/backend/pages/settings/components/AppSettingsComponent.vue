<template>
  <div>
  <div class="col-lg-6">
    <div class="card">
      <div class="card-header border-bottom">
        <h4 class="card-title">Colors Layout</h4>
      </div>
      <div class="card-body pt-2">
        <div class="row custom-options-checkable g-1">
          <div class="col-md-6">
            <input class="custom-option-item-check" @click="custom_layout=false"  type="radio" name="customOptionsCheckableRadios" id="customOptionsCheckableRadios1" checked="">
            <label class="custom-option-item p-1" for="customOptionsCheckableRadios1">
              <span class="d-flex justify-content-between flex-wrap mb-50">
                <span class="fw-bolder">Basic Colors</span>
                <span class="fw-bolder">Default</span>
              </span>
              <!-- <small class="d-block">Get 1 project with 1 team member.</small> -->
            </label>
          </div>

          <div class="col-md-6">
            <input class="custom-option-item-check" @click="custom_layout= !this.custom_layout" type="radio" name="customOptionsCheckableRadios" id="customOptionsCheckableRadios2" value="">
            <label class="custom-option-item p-1" for="customOptionsCheckableRadios2">
              <span class="d-flex justify-content-between flex-wrap mb-50">
                <span class="fw-bolder">Custom Colors</span>
                <span class="fw-bolder">By User</span>
              </span>
              <!-- <small class="d-block">Get 5 projects with 5 team members.</small> -->
            </label>
          </div>
        </div>
        <div>
        <hr>
        <div class="row" v-show="custom_layout">
             <div class="col pt-2">
             <label class="form-label" for="defaultInput">Primary Color</label>
                <input type="color" v-model="settings.custom.primary_color" class="form-control" id="floating-label1" placeholder="Label-placeholder" />
                </div>
             <div class="col pt-2">
                <label class="form-label" for="defaultInput">Primary Rgb Color</label><br>
               <color-picker   class="form-control" format="rgb"    v-model:pureColor="settings.custom.primary_rgb"/>
              </div>


             <div class="pt-2">
            <button @click="onSubmit" type="button" class="btn btn-primary waves-effect waves-float waves-light">Submit</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
 import { ref } from "vue";
 import { ColorInputWithoutInstance } from "tinycolor2";
export default {
     setup() {
       let pureColor = ref<ColorInputWithoutInstance>("red");
       const gradientColor = ref("linear-gradient(0deg, rgba(0, 0, 0,   1) 0%, rgba(0, 0, 0, 1) 100%)");

    //    pureColor=pureColor?.replace(/rgb/, "");

       return { pureColor, gradientColor }
     },
     data(){
        return{
             custom_layout:false,
             settings:{
              custom:{
                primary_color:"",
                primary_rgb:"",
              },
            },
        }
     },
     methods:{
        onSubmit(){
            let primary_rgb=this.settings.custom.primary_rgb.replace('rgb', "");
            primary_rgb=primary_rgb.replace('(', "");
            primary_rgb=primary_rgb.replace(')', "");
           this.settings.custom.primary_rgb= primary_rgb;
            axios.post('/config/update-app-settings', {settings:this.settings.custom,type:'custom'}).then((res)=>{
              this.$root.alertNotify(res.status, 'Update Successfuly', 'info', res.data);
              window.location.reload(true);
            });
        },
        mapColor(item){
          this.settings.custom.primary_rgb="rgb("+item.settings.primary_rgb+")";
          this.settings.custom.primary_color=item.settings.primary_color;
        },
        getSettings(){
          axios.get('/config/settings').then((res)=>{
            let data=res.data;
            console.log(data);
            if(data.setting_by_user){
                this.mapColor(data.setting_by_user);
            }
          });
        },
     },
     mounted() {
      this.getSettings();
     },

}
</script>

<style>

</style>
