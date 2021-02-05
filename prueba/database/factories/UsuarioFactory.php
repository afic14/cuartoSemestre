<?php

namespace Database\Factories;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

class UsuarioFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Usuario::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nombreUsuario' => $this->faker->name,
            'nombreCompleto' => $this->faker->name,
            'email' => $this->faker->email,
            'telefono' => $this->faker->phoneNumber,
            'edad' => $this->faker->randomDigit,
            'fechaNacimiento' => $this->faker->dateTime,
            'configuracion_id' => $this->faker->randomDigitNotNull,
        ];
    }
}
