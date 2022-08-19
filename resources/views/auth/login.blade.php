{{-- <x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </x-slot>

        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <!-- Email Address -->
            <div>
                <x-label for="email" :value="__('Email')" />

                <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus />
            </div>

            <!-- Password -->
            <div class="mt-4">
                <x-label for="password" :value="__('Password')" />

                <x-input id="password" class="block mt-1 w-full"
                                type="password"
                                name="password"
                                required autocomplete="current-password" />
            </div>

            <!-- Remember Me -->
            <div class="block mt-4">
                <label for="remember_me" class="inline-flex items-center">
                    <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember">
                    <span class="ml-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                @if (Route::has('password.request'))
                    <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('password.request') }}">
                        {{ __('Forgot your password?') }}
                    </a>
                @endif

                <x-button class="ml-3">
                    {{ __('Log in') }}
                </x-button>
            </div>
        </form>
    </x-auth-card>
</x-guest-layout> --}}


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
                        <form method="POST" class="signup_form" action="{{ route('login') }}">
                            @csrf

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
                            <div class="float-end">
                                <a href="{{ route('password.request') }}">Forgot password?</a>
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
