<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Configure your settings for cross-origin requests. Adjust as needed
    | depending on your frontend URL, headers, and credentials usage.
    |
    */

    // Which paths should accept CORS requests
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'graphql'],

    // HTTP methods allowed
    'allowed_methods' => ['*'],

    // Frontend URLs allowed to make requests
    'allowed_origins' => ['http://localhost:1000'],

    // Optional: patterns for allowed origins
    'allowed_origins_patterns' => [],

    // Headers allowed in requests
    'allowed_headers' => ['*'],

    // Headers exposed to the browser
    'exposed_headers' => [],

    // How long the results of a preflight request can be cached
    'max_age' => 0,

    // Whether to support cookies/auth headers
    'supports_credentials' => true,
];
