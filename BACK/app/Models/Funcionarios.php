<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Funcionarios extends Model
{
    use HasFactory;
    protected $fillable = [
        'login',
        'nome',
        'cpf',
        'email',
        'endereco',
        'senha',
    ];




     public function empresas(){
        return $this-> belongsToMany(Empresas::class, 'integracao_funcionario_empresas', 'id_funcionarios', 'id_empresas');
    }

}
