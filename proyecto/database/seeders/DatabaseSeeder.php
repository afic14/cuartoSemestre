<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Factory;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory(3)->create();
        \App\Models\Gropu::factory(3)->create();
        \App\Models\Level::factory()->create(['nombre' => 'Plata']);
        \App\Models\Level::factory()->create(['nombre' => 'Oro']);
        \App\Models\Level::factory()->create(['nombre' => 'Bronce']);
        /*\App\Models\User::factory(5)->create()-> each(
            function($user){
                $perfil = $user->perfil()->save(\App\Models\Perfil::factory())->make();
                $perfil->location()->save(\App\Location::factory())->make();
                //$user->gropus()->attach($this->array(rand(1,3)));
            }
        );*/
        \App\Models\User::factory(5)->create()->each(function($user){
            $perfil=$user->perfil()->save(\App\Models\Perfil::make());
            $perfil->locations()->save(\App\Models\Location::make());
            $user->gropus()->attach($this->array(rand(1,3)));
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
