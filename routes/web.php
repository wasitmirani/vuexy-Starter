<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\BackendController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get('/',function(){
return redirect('login');
});
Route::get('/portal/{any?}',[BackendController::class,'index'])->middleware('auth')->name('dashboard')->where('any', '[\/\w\.-]*');

Route::get('unauthorized/user',function(){
return abort(401,'Unauthorized User');
});

Route::get('/logout',[AuthenticatedSessionController::class,'destroy']);

require __DIR__.'/auth.php';
