<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
        function register(Request $request){
        $user = new User();
        $user->name = $request->input("name");
        $user->email = $request->input("email");
        $user->password = Hash::make($request->input("password"));
        $user->save();
        return $user;
    }

    function login(Request $request){
        $user= User::where('email', $request->first);
        if(!$user || !Hash::check($request->password, $user->password)){
            return ["error"=>"Email veya şifre doğru değil"];
        }
        return $user;
    }
}
