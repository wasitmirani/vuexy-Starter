
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="{{asset('authassets/vendors/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('authassets/css/style.css')}}" rel="stylesheet">
    <link href="{{asset('authassets/css/responsive.css')}}" rel="stylesheet">

    <title>{{config('app.name')}} | @yield('title')</title>
</head>

<body>
    <div class="body_wrapper frm-vh-md-100">
        <div class="formify_body" data-bg-color="#fafafa">
            <div class="f_content">
                @yield('content')
               
            </div>

        </div>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->
    <script src="{{asset('authassets/js/jquery-3.4.1.min.js')}}"></script>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="{{asset('authassets/vendors/bootstrap/js/popper.min.js')}}"></script>
    <script src="{{asset('authassets/vendors/bootstrap/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('authassets/js/main.js')}}"></script>

</body>

</html>
