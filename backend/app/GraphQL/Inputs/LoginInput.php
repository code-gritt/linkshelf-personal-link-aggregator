<?php

namespace App\GraphQL\Inputs;

use Rebing\GraphQL\Support\InputType;
use GraphQL\Type\Definition\Type;

class LoginInput extends InputType
{
    protected $attributes = [
        'name' => 'LoginInput',
        'description' => 'Input for login',
    ];

    public function fields(): array
    {
        return [
            'email' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'password' => [
                'type' => Type::nonNull(Type::string()),
            ],
        ];
    }
}
