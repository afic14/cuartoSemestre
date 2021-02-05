<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('nombreUsuario');
            $table->string('nombreCompleto');
            $table->string('email');
            $table->string('telefono');
            $table->integer('edad');
            $table->date('fechaNacimiento');
            $table->integer('configuracion_id');
            $table->timestamps();
            $table->foreign('configuracion_id')->references('id')
            ->on('configuracions')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}
