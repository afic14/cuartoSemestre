<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGropuUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gropu_user', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_grupo')->unsigned();
            $table->bigInteger('id_user')->unsigned();
            $table->timestamps();  
            $table->foreign('id_grupo')->references('id')
            ->on('gropus')->onDelete('cascade')->onUpdate('cascade');  
            $table->foreign('id_user')->references('id')
            ->on('gropus')->onDelete('cascade')->onUpdate('cascade');  
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gropu_user');
    }
}
