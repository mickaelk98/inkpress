<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

Route::get('/', [PostController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
    Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
    Route::put('/posts/{post}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');
    Route::post('/posts/{post}/like', [PostController::class, 'like'])->name('posts.like');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard', ["userPosts" => Auth::user()->posts()->with('author')->latest()->get()]); 
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
