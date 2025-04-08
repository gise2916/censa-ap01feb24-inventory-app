<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'login')->name('login');

Route::post("/auth/login", [\app\Http\Controllers\Auth\login::class, "login"])
    ->name("auth.login");