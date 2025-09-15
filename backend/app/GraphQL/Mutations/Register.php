<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class Register
{
  /**
   * Handle the register mutation.
   *
   * @param  mixed  $_
   * @param  array  $args
   * @return array
   */
  public function __invoke($_, array $args): array
  {
    $input = $args['input'];

    // Optional: Validate password confirmation
    if ($input['password'] !== $input['password_confirmation']) {
      throw ValidationException::withMessages([
        'password_confirmation' => ['The password confirmation does not match.'],
      ]);
    }

    $user = User::create([
      'name' => $input['name'],
      'email' => $input['email'],
      'password' => Hash::make($input['password']),
    ]);

    $token = $user->createToken('auth_token')->plainTextToken;

    return [
      'token' => $token,
      'user' => $user,
    ];
  }
}
