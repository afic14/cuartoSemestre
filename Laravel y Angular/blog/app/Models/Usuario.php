<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $fillable = [
        'name',
        'lastName',
        'email',
        'password',
    ];
    use HasFactory;

    public function blogs(){
        return $this->hasMany(Blog::class);
    }
}
