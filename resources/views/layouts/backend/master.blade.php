

<!DOCTYPE html>

<html class="loading" lang="en" data-textdirection="ltr">
  <!-- BEGIN: Head-->
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui">
    <meta name="description" content="Vuexy admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords" content="admin template, Vuexy admin template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="PIXINVENT">
    <title>Dashboard ecommerce - Vuexy - Bootstrap HTML admin template</title>
    <link rel="apple-touch-icon" href="../../../app-assets/images/ico/apple-icon-120.png">
    <link rel="shortcut icon" type="image/x-icon" href="../../../app-assets/images/ico/favicon.ico">



    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="{{asset('app-assets/vendors/css/vendors.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{mix('css/master.css')}}">
    {{-- <link rel="stylesheet" href="{{ asset('css/app.css') }}"> --}}
    <!-- END: Custom CSS-->
    <style lang="scss">
      :root {
    --bs-blue: #00CFE8;
    --bs-indigo: #f2b610d8;
    --bs-purple: rgb(16, 207, 96);
    --bs-pink: #D63384;
    --bs-red: #EA5455;
    --bs-orange: #FF9F43;
    --bs-yellow: #FFC107;
    --bs-green: #28C76F;
    --bs-teal: #20C997;
    --bs-cyan: #0DCAF0;
    --bs-white: #FFFFFF;
    --bs-gray: #B8C2CC;
    --bs-gray-dark: #1E1E1E;
    --bs-gray-100: #BABFC7;
    --bs-gray-200: #EDEDED;
    --bs-gray-300: #DAE1E7;
    --bs-gray-400: #636363;
    --bs-gray-500: #ADB5BD;
    --bs-gray-600: #B8C2CC;
    --bs-gray-700: #4E5154;
    --bs-gray-800: #1E1E1E;
    --bs-gray-900: #2A2E30;
    --bs-primary: #07cc60cc;
    --bs-secondary: #82868B;
    --bs-success: #28C76F;
    --bs-info: #00CFE8;
    --bs-warning: #FF9F43;
    --bs-danger: #EA5455;
    --bs-light: #F6F6F6;
    --bs-dark: #4B4B4B;
    --bs-primary-rgb: 115, 103, 240;
    --bs-secondary-rgb: 130, 134, 139;
    --bs-success-rgb: 40, 199, 111;
    --bs-info-rgb: 0, 207, 232;
    --bs-warning-rgb: 255, 159, 67;
    --bs-danger-rgb: 234, 84, 85;
    --bs-light-rgb: 246, 246, 246;
    --bs-dark-rgb: 75, 75, 75;
    --bs-white-rgb: 255, 255, 255;
    --bs-black-rgb: 34, 41, 47;
    --bs-body-rgb: 110, 107, 123;
    --bs-font-sans-serif: 'Montserrat', Helvetica, Arial, serif;
    --bs-font-monospace: 'Montserrat', Helvetica, Arial, serif;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.45;
    --bs-body-color: #6E6B7B;
    --bs-body-bg: #F8F8F8
}

    </style>

  </head>
  <!-- END: Head-->

  <!-- BEGIN: Body-->
  <body class="pace-done pace-done vertical-layout vertical-menu-modern navbar-floating footer-static menu-expanded" data-open="click" data-menu="vertical-menu-modern" data-col="">

    <div id="app">
        @yield('content')
    </div>
    <button class="btn btn-primary btn-icon scroll-top" type="button"><i data-feather="arrow-up"></i></button>
    <!-- END: Footer-->

    <!-- END: Page JS-->
    <script>
        @auth
           window.user = {!! json_encode(Auth::user(), true) !!};
           window.permissions=[];

        //  {{-- let permissions = {!! json_encode(Auth::user()->getPermissionsViaRoles()->pluck('name'), true) !!}; --}}
        @else
          let user = [];
           let permissions = [];
       @endauth
    //    localStorage.removeItem('setup');
       localStorage.removeItem('permissions');
       localStorage.setItem('permissions', JSON.stringify(permissions))

    </script>
       <!-- Scripts -->
       <script src="{{ mix('js/app.js') }}" ></script>
    <script src="{{asset('app-assets/vendors/js/vendors.min.js')}}"></script>
      <!-- BEGIN: Page Vendor JS-->

    <script src="{{ mix('/js/master.js') }}"></script>

      <script src="{{asset('app-assets/vendors/js/charts/apexcharts.min.js')}}"></script>
      <script src="{{asset('app-assets/vendors/js/extensions/toastr.min.js')}}"></script>

    <script>
      $(window).on('load',  function(){
        console.log(feather);
        if (feather) {
          feather.replace({ width: 14, height: 14 });
        }
      })
      @if(session('login')=="true" || session('login')==true)
      setTimeout(function() {
      // toastr['success'](
      // 'You have successfully logged in to {{config('app.name')}}.',
      // '👋 Welcome {{Auth::user()->name}}', {
      //     closeButton: true,
      //      tapToDismiss: false
      // });
      }, 1000);
      @php
      session(['login' => '']);
      @endphp
      @endif
       toastr['success'](
      'You have successfully logged in to {{config('app.name')}}.',
      '👋 Welcome {{Auth::user()->name}}', {
          closeButton: true,
           tapToDismiss: false
      });
    </script>
  </body>
  <!-- END: Body-->
</html>
