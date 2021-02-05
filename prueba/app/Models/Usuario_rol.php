<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario_rol extends Model
{
    use HasFactory;

    public function usuarios(){
        return $this.hasMany(Usuario::class);
    }

    public function rols(){
        return $this.hasMany(Rol::class);
    }
    protected $fillable = [
        'usuario_id',
        'rol_id'
    ];
}
