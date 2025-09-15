<?php

return [
  /*
    |--------------------------------------------------------------------------
    | Schema Path
    |--------------------------------------------------------------------------
    |
    | The path to your GraphQL schema file.
    |
    */
  'schema' => [
    'register' => base_path('graphql/schema.graphql'),
  ],

  /*
    |--------------------------------------------------------------------------
    | Resolver Namespaces
    |--------------------------------------------------------------------------
    */
  'namespaces' => [
    'mutations' => 'App\\GraphQL\\Mutations',
    'queries' => 'App\\GraphQL\\Queries',
    'models' => 'App\\Models',
  ],

  /*
    |--------------------------------------------------------------------------
    | Authentication Guard
    |--------------------------------------------------------------------------
    */
  'guard' => 'sanctum', // For @auth directive with Sanctum
];
