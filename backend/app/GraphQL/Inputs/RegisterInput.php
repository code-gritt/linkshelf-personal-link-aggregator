<?php

namespace App\GraphQL\Inputs;

use Rebing\GraphQL\Support\InputType;
use GraphQL\Type\Definition\Type;

class RegisterInput extends InputType
{
    protected $attributes = [
        'name' => 'RegisterInput',
        'description' => 'Input for registering a user',
    ];

    public function fields(): array
    {
        return [
            'name' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'email' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'password' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'password_confirmation' => [
                'type' => Type::nonNull(Type::string()),
            ],
        ];
    }
}
