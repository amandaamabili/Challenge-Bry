<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIntegracaoFuncionarioEmpresasTable extends Migration
{

    public function up()
    {
        Schema::create('integracao_funcionario_empresas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_empresas');
            $table->unsignedBigInteger('id_funcionarios');
            $table->timestamps();
        });

        Schema::table('integracao_funcionario_empresas', function (Blueprint $table) {

           $table->foreign('id_empresas')->references('id')->on('empresas') ->onDelete('cascade'); // Define o campo como chave extrangeira (foreign key)

            $table->foreign('id_funcionarios')->references('id')->on('funcionarios') ->onDelete('cascade'); // Define o campo como chave extrangeira (foreign key)

        });

    }


    public function down()
    {
        Schema::dropIfExists('integracao_funcionario_empresas');
    }
}

