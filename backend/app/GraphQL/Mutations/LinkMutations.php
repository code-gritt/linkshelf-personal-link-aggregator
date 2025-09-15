<?php

namespace App\GraphQL\Mutations;

use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\Type;
use App\Models\Link;
use Illuminate\Support\Facades\Auth;

class CreateLink extends Mutation
{
    protected $attributes = [
        'name' => 'createLink',
        'description' => 'Create a new link',
    ];

    public function type(): Type
    {
        return GraphQL::type('Link');
    }

    public function args(): array
    {
        return [
            'input' => [
                'name' => 'input',
                'type' => GraphQL::type('LinkInput'),
            ],
        ];
    }

    public function resolve($root, $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception('Unauthorized');
        }

        $input = $args['input'];
        return Link::create([
            'user_id' => $user->id,
            'url' => $input['url'],
            'category' => $input['category'] ?? null,
        ]);
    }
}

class DeleteLink extends Mutation
{
    protected $attributes = [
        'name' => 'deleteLink',
        'description' => 'Delete a link',
    ];

    public function type(): Type
    {
        return Type::boolean();
    }

    public function args(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
            ],
        ];
    }

    public function resolve($root, $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception('Unauthorized');
        }

        $link = Link::where('id', $args['id'])->where('user_id', $user->id)->firstOrFail();
        return $link->delete();
    }
}
