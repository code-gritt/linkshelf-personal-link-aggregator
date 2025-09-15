<?php

namespace App\GraphQL\Types;

use Rebing\GraphQL\Support\Type as GraphQLType;
use GraphQL\Type\Definition\Type;
use App\Models\Link;

class LinkType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Link',
        'description' => 'A user-saved link',
        'model' => Link::class,
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
            ],
            'url' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'category' => [
                'type' => Type::string(),
            ],
            'created_at' => [
                'type' => Type::string(),
            ],
        ];
    }
}
