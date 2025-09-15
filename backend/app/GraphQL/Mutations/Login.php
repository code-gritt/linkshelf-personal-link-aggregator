<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Auth;
use App\Models\User;

class Login
{
  public function __invoke($_, array $args)
  {
    $credentials = $args['input'];

    if (!Auth::attempt($credentials)) {
      throw new \Exception('Invalid credentials');
    }

    $user = User::where('email', $credentials['email'])->first();
    $token = $user->createToken('auth_token')->plainTextToken;

    return ['token' => $token, 'user' => $user];
  }
}
