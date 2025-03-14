<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function index(): Response {
        return Inertia::render('welcome', [
            'posts' => Post::with('author')->latest()->get()
        ]);
    }

    public function Create(): Response {
        if(!Auth::check()) {
            return Inertia::render('Auth/Login');
        }
        return Inertia::render('Posts/Create');
    }

    public function store(Request $req) {
        if(!Auth::check()) {
            return Inertia::render('Auth/Login');
        }

        $validate = $req->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $post = new Post();
        $post->title = $validate['title'];
        $post->content = $validate['content'];
        $post->user_id = Auth::user()->id;

        if($req->hasFile('image')) {
            $path = $req->file('image')->store('posts', 'public');
            $post->image = $path;
        }

        $post->save();

        return redirect()->route('dashboard')->with('success', 'Le post a bien été crée.');
    }

    public function show(Post $post): Response {
        return Inertia::render('Posts/Show', [
            'post' => $post->load('author')
        ]);
    }

    public function edit(Post $post): Response {
        return Inertia::render('Posts/Edit', [
            'post' => $post
        ]);
    }

    public function update(Request $req, Post $post) {
        if($post->user_id != Auth::user()->id) {
            abort(403, "Vous n'estez pas autoriser a effectuer cette action");
        }

        $validate = $req->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $post->title = $validate['title'];
        $post->content = $validate['content'];
        

        if($req->hasFile('image')) {
            if($post->image) {
                Storage::disk('public')->delete($post->image);
            }
            $path = $req->file('image')->store('posts', 'public');
            $post->image = $path;
        }

        $post->save();

        return redirect()->route('dashboard')->with('success', 'Le post a bien été modifieé.');
    }

    public function destroy(Post $post) {
        if($post->user_id != Auth::user()->id) {
            abort(403, "Vous n'estez pas autoriser a effectuer cette action");
        }
        if($post->image !== "images/default_post.png") {
            storage::disk('public')->delete($post->image);
        }
        $post->delete();
        return redirect()->back()->with('success', 'Le post a bien été supprimé.');
    }

    public function like(Post $post) {
        $user = Auth::user();
        if($post->likedByUsers()->where('user_id', $user->id)->exists()) {
            $post->likedByUsers()->detach(Auth::user()->id);
            $message = "post unlike";
        } else {
            $post->likedByUsers()->attach(Auth::user()->id);
            $message = "poste like";
        }

        return redirect()->back()->with('success', $message);
    }

}