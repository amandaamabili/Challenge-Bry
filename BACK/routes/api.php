<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FuncionariosController;
use App\Http\Controllers\EmpresasController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// List Funcionarios
Route::get('funcionarios', [FuncionariosController::class, 'index']);

// List single Funcionario
Route::get('funcionarios/{id}', [FuncionariosController::class, 'show']);

// Create new Funcionario
Route::post('funcionarios', [FuncionariosController::class, 'store']);

// Update Funcionario
Route::put('funcionarios/{id}', [FuncionariosController::class, 'update']);

// Delete Funcionario
Route::delete('funcionarios/{id}', [FuncionariosController::class, 'destroy']);


// List Empresa
Route::get('empresa', [EmpresasController::class, 'index']);

// List single Empresa
Route::get('empresa/{id}', [EmpresasController::class, 'show']);

// Create new Empresa
Route::post('empresa', [EmpresasController::class, 'store']);

// Update Empresa
Route::put('empresa/{id}', [EmpresasController::class, 'update']);

// Delete Empresa
Route::delete('empresa/{id}', [EmpresasController::class, 'destroy']);
