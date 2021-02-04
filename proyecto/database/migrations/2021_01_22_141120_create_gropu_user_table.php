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
            $table->bigInteger('gropu_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->timestamps();  
            $table->foreign('gropu_id')->references('id')
            ->on('gropus')->onDelete('cascade')->onUpdate('cascade');  
            $table->foreign('user_id')->references('id')
            ->on('users')->onDelete('cascade')->onUpdate('cascade');  
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
