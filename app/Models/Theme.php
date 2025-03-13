<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    protected $fillable = [
        'name'
    ];

    public function posts()
    {
        return $this->belongsToMany(Post::class, 'post_theme')->withTimestamps();
    }
}
