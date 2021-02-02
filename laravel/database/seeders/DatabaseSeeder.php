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
        \App\Models\Perfil::factory()->create(['nombre' => 'Perfil1', 'user_id' => 1]);
        \App\Models\Perfil::factory()->create(['nombre' => 'Perfil2', 'user_id' => 2]);
        \App\Models\Perfil::factory()->create(['nombre' => 'Perfil3', 'user_id' => 3]);
        \App\Models\Location::factory()->create(['pais' => 'Canada']);
        \App\Models\Location::factory()->create(['pais' => 'Perú']);
        \App\Models\Location::factory()->create(['pais' => 'Noruega']);
    }

    public function array($max){
        $value = [];
        for($i = 1; $i<$max; $i++){
            $value [] = $i;
        }
    }
}
