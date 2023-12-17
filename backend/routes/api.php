<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\DropDownController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// route pour recuperer les informations d'un bulletin avec la liste des participants, le poids, la taille et l'age
Route::get('/inscriptions/{id}', [FormController::class, 'bull'])->where('id', '[0-9]+');

// route pour recuperer toutes les infno des tables Age
Route::get('/dropdown/ages', [DropDownController::class, 'dropDownAges']);

// route pour recuperer toutes les infno des tables tailles
Route::get('/dropdown/tailles', [DropDownController::class, 'dropDownTailles']);

// route pour recuperer toutes les infno des tables poids
Route::get('/dropdown/poids', [DropDownController::class, 'dropDownPoids']);

// route pour recuperer un participant d'un bulletin
Route::get('/inscriptions/bulletin/{bulletin}/participant/{participant}', [FormController::class,'participantBulletin']);

// route pour ajouter un participant
Route::post('/inscriptions', [FormController::class, 'addParticipant']);

// route pour modifier un participant d'un bulletin
Route::put('/inscriptions/bulletin/{bulletin}/participant/{participant}', [FormController::class,'updateParticipant']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
