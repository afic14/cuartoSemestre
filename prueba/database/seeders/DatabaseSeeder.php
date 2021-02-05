<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //\App\Models\User::factory(10)->create();
        \App\Models\Configuracion::factory(20)->create();
        \App\Models\Usuario::factory(5)->create()->each(function($user){
            $user->roles()->save(\App\Models\Rol::make());
            
        });

    }
    public function array($max)
    {
       $values=[];
       for($_REQUEST["i"]=1;$_REQUEST["i"]<$max;$_REQUEST["i"]++){
          $values[]=$_REQUEST["i"];
       }
       return $values;
    }
}
