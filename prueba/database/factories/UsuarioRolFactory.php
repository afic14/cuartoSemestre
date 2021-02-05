<?php

namespace Database\Factories;

use App\Models\Usuario_rol;
use Illuminate\Database\Eloquent\Factories\Factory;

class UsuarioRolFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Usuario_rol::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'usuario_id' => $this->faker->unixTime,
            'rol_id' => $this->faker->unixTime
        ];
    }
}
