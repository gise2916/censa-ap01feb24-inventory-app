<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Login extends Controller
{
    public function login(Request $request): void
    {
        var_dump(value: $request);
    }
}
