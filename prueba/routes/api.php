<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get('configuracion','App\Http\Controllers\ConfiguracionController@index');
Route::post('configuracion/create','App\Http\Controllers\ConfiguracionController@store');
Route::post('configuracion/update','App\Http\Controllers\ConfiguracionController@update');
Route::delete('configuracion/delete','App\Http\Controllers\ConfiguracionController@destroy');

Route::get('rol','App\Http\Controllers\RolController@index');
Route::post('rol/create','App\Http\Controllers\RolController@store');
Route::post('rol/update','App\Http\Controllers\RolController@update');
Route::delete('rol/delete','App\Http\Controllers\RolController@destroy');

Route::get('usuario','App\Http\Controllers\UsuarioController@index');
Route::post('usuario/create','App\Http\Controllers\UsuarioController@store');
Route::post('usuario/update','App\Http\Controllers\UsuarioController@update');
Route::delete('usuario/delete','App\Http\Controllers\UsuarioController@destroy');