<?php

return [

  /*
    |--------------------------------------------------------------------------
    | Resolver Namespaces
    |--------------------------------------------------------------------------
    |
    | These namespaces tell Lighthouse where to find your GraphQL resolvers.
    | You can define separate namespaces for queries, mutations, and models.
    |
    */

  'namespaces' => [
    'mutations' => 'App\\GraphQL\\Mutations',
    'queries' => 'App\\GraphQL\\Queries', // optional
    'models' => 'App\\Models',            // optional
  ],

  // ... you can add other Lighthouse config options here as needed
];
