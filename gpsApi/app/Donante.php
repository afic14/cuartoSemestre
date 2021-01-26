<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Donante extends Model
{
    protected $fillable = ['nombre', 'latitud', 'longitud'];
}
