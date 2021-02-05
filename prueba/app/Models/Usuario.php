<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    public function configuracion(){
        return $this.belongsToOne(Configuracion::class);
    }

    public function roles(){
        return $this->belongsToMany(Rol::class);
    }    

    protected $fillable = [
        'nombreUsuario',
        'nombreCompleto',
        'email',
        'telefono',
        'edad',
        'fechaNacimiento',
        'configuracion_id'
    ];
}
