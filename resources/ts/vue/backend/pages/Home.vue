<template>
   <div>

       <h1>Welcome to Vue 3 using Ts in laravel 9 BY Wasit Mirani </h1>
   </div>
</template>
<script>

   export default {
       mounted() {
           axios.get('/api/test').then((res)=>{
               console.log(res);
           });
       },
   }
</script>
