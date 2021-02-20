<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    public function comentarios(){
        return $this->hasMany(Comentario::class);
    }

    public function usuario(){
        return $this->belongsTo(Usuario::class);
    }
}
