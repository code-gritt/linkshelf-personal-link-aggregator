<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    // Disable wrapping in a transaction to avoid PostgreSQL foreign key errors
    public $withinTransaction = false;

    public function up(): void
    {
        // Step 1: Create the table without the foreign key
        Schema::create('links', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id'); // explicit BIGINT
            $table->text('url');
            $table->string('category')->nullable();
            $table->timestamps();
        });

        // Step 2: Add the foreign key in a separate schema call
        Schema::table('links', function (Blueprint $table) {
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('links');
    }
};
