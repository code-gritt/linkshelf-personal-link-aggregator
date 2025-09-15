<?php

namespace App\GraphQL\Mutations;

use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\Facades\GraphQL; // <-- Import this
use GraphQL\Type\Definition\Type;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class Login extends Mutation
{
  protected $attributes = [
    'name' => 'login',
    'description' => 'Login a user',
  ];

  public function type(): Type
  {
    return GraphQL::type('AuthPayload'); // <-- use imported facade
  }

  public function args(): array
  {
    return [
      'input' => [
        'name' => 'input',
        'type' => GraphQL::type('LoginInput'), // <-- use imported facade
      ],
    ];
  }

  public function resolve($root, $args)
  {
    $credentials = $args['input'];

    if (!Auth::attempt([
      'email' => $credentials['email'],
      'password' => $credentials['password'],
    ])) {
      throw ValidationException::withMessages([
        'email' => ['Invalid credentials'],
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
