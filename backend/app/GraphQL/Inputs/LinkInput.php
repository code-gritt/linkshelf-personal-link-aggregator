<?php

namespace App\GraphQL\Inputs;

use Rebing\GraphQL\Support\InputType;
use GraphQL\Type\Definition\Type;

class LinkInput extends InputType
{
    protected $attributes = [
        'name' => 'LinkInput',
        'description' => 'Input for creating or updating a link',
    ];

    public function fields(): array
    {
        return [
            'url' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'category' => [
                'type' => Type::string(),
            ],
        ];
    }
}
