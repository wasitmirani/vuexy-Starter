
@extends('layouts.backend.authmaster')

@section('content')
    <div class="formify_box_three formify_login">
        <div class="container custom_height">
            <div class="row custom_height">
                <div class="col-md-6 formify_content_left">
                    <div class="formify_logo_wrapper">
                        <a href="index.html"><img src="{{ asset('authassets/img/logo.png') }}" alt=""></a>
                        <p>Lorem ipsum, or lipsum as it is sometimes<br> known, is dummy text used</p>
                    </div>
                    <img class="img-fluid img" src="authassets/img/login_img.png" alt="">
                </div>
                <div class="col-md-6 formify_content_right">
                    <div class="formify_box">
                        <h6>Start for Free</h6>
                        <h4 class="form_title">Sign In to {{ config('app.name') }}</h4>
                        <x-auth-session-status class="mb-4 text-danger" :status="session('status')" />

                        <!-- Validation Errors -->
                        <x-auth-validation-errors class="mb-4 text-danger" :errors="$errors" />
                        <form method="POST" action="{{ route('register') }}">
                            @csrf
                            <div class="form-group">
                                <label class="input_title" for="inputEmail">Full Name</label>
                                <div class="input">
                                    <input type="text" class="form-control @error('name') is-invalid @enderror"
                                        id="inputEmail" placeholder="Email address" name="name"
                                        value="{{ old('name') }}" required="">
                                    <img class="input_icon" src="{{ asset('authassets/img/at.png') }}" alt="">
                                </div>
                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label class="input_title" for="inputEmail">Email</label>
                                <div class="input">
                                    <input type="email" class="form-control @error('email') is-invalid @enderror"
                                        id="inputEmail" placeholder="Email address" name="email"
                                        value="{{ old('email') }}" required="">
                                    <img class="input_icon" src="{{ asset('authassets/img/at.png') }}" alt="">
                                </div>
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                            <div class="form-group">
                                <label class="input_title" for="inputPassword">Password</label>
                                <div class="input">
                                    <input type="password"  name="password"class="form-control  @error('password') is-invalid @enderror"
                                        id="inputPassword" placeholder="*******" required="">
                                    <img class="input_icon" src="{{ asset('authassets/img/lock.png') }}" alt="">
                                </div>
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label class="input_title" for="inputPassword">Confirm Password</label>
                                <div class="input">
                                    <input type="password"  name="password_confirmation"class="form-control  @error('password') is-invalid @enderror"
                                        id="inputPassword" placeholder="*******" required="">
                                    <img class="input_icon" src="{{ asset('authassets/img/lock.png') }}" alt="">
                                </div>
                              
                            </div>
                           
                            <div class="form-group">
                                <button type="submit" class="btn action_btn thm_btn text-transform-inherit"> Log In</button>
                            </div>
                            <p class="form_footer_text text-center">Have an account? <a href="#"> Create an
                                    account</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
