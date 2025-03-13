<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('follow', function (Blueprint $table) {
            $table->id();
            $table->foreignId('follower_id')->constrained('users')->onDelete('cascade'); // L'utilisateur qui suit
            $table->foreignId('following_id')->constrained('users')->onDelete('cascade'); // L'utilisateur suivi
            $table->unique(['follower_id', 'following_id']); // Un utilisateur ne peut suivre une autre personne qu'une seule fois
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('follow');
    }
};
