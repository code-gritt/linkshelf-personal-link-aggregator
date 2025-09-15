<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class Login
{
  /**
   * Handle the login mutation.
   *
   * @param  mixed  $_
   * @param  array  $args
   * @return array
   */
  public function __invoke($_, array $args): array
  {
    $credentials = $args['input'];

    // Attempt to authenticate the user
    if (!Auth::attempt([
      'email' => $credentials['email'],
      'password' => $credentials['password'],
    ])) {
      throw ValidationException::withMessages([
        'email' => ['The provided credentials are incorrect.'],
      ]);
    }

    $user = User::where('email', $credentials['email'])->firstOrFail();
    $token = $user->createToken('auth_token')->plainTextToken;

    return [
      'token' => $token,
      'user' => $user,
    ];
  }
}
