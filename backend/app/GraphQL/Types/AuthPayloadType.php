<?php

namespace App\GraphQL\Types;

use Rebing\GraphQL\Support\Type as GraphQLType;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL; // <-- import this

class AuthPayloadType extends GraphQLType
{
    protected $attributes = [
        'name' => 'AuthPayload',
        'description' => 'Authentication payload',
    ];

    public function fields(): array
    {
        return [
            'token' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Auth token',
            ],
            'user' => [
                'type' => GraphQL::type('User'), // use imported facade
                'description' => 'Authenticated user',
            ],
        ];
    }
}
