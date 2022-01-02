<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresas extends Model
{
    use HasFactory;
    protected $fillable = [
        'nome',
        'cnpj',
        'endereco',
    ];


    public function funcionarios(){
        return $this-> belongsToMany(Funcionarios::class, 'integracao_funcionario_empresas',  'id_empresas','id_funcionarios');
    }

}
