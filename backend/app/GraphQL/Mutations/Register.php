<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Hash;
use App\Models\User;

class Register
{
  public function __invoke($_, array $args)
  {
    $input = $args['input'];
    $user = User::create([
      'name' => $input['name'],
      'email' => $input['email'],
      'password' => Hash::make($input['password']),
    ]);

    $token = $user->createToken('auth_token')->plainTextToken;

    return ['token' => $token, 'user' => $user];
  }
}
