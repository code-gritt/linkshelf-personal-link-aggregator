<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    protected $fillable = ['user_id', 'url', 'category'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
