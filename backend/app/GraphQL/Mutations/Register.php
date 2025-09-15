<?php

namespace App\GraphQL\Mutations;

use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\Facades\GraphQL; // <-- Import this
use GraphQL\Type\Definition\Type;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class Register extends Mutation
{
  protected $attributes = [
    'name' => 'register',
    'description' => 'Register a new user',
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
        'type' => GraphQL::type('RegisterInput'), // <-- use imported facade
      ],
    ];
  }

  public function resolve($root, $args)
  {
    $input = $args['input'];

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
