<?php

declare(strict_types=1);

return [

    'schemas' => [
        'default' => [
            'query' => [
                // Add queries if needed, e.g., 'me' => App\GraphQL\Queries\MeQuery::class
            ],
            'mutation' => [
                'register' => App\GraphQL\Mutations\Register::class,
                'login' => App\GraphQL\Mutations\Login::class,
            ],
            'types' => [
                App\GraphQL\Types\UserType::class,
                App\GraphQL\Types\AuthPayloadType::class,
            ],
        ],
    ],

    'types' => [
        'RegisterInput' => App\GraphQL\Inputs\RegisterInput::class,
        'LoginInput' => App\GraphQL\Inputs\LoginInput::class,
        'User' => App\GraphQL\Types\UserType::class,
        'AuthPayload' => App\GraphQL\Types\AuthPayloadType::class,
    ],

];
