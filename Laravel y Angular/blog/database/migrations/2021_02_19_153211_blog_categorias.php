<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BlogCategorias extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog_categoria', function (Blueprint $table) {
            $table->bigInteger('blog_id');
            $table->bigInteger('categoria_id');
            $table->foreign('blog_id')->references('id')->on('blogs')
            ->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('categoria_id')->references('id')->on('categorias')
            ->onDelete('cascade')->onUpdate('cascade');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blog_categoria');
    }
}
