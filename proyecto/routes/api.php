<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
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
Route::get('user','App\Http\Controllers\UsersController@index');
Route::post('user-create','App\Http\Controllers\UsersController@store');
Route::get('gropu','App\Http\Controllers\GropusController@index');
Route::post('gropu-create','App\Http\Controllers\GropusController@store');
Route::get('level','App\Http\Controllers\LevelsController@index');
Route::post('level-create','App\Http\Controllers\LevelsController@store');