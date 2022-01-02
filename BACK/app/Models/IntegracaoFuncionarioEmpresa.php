<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IntegracaoFuncionarioEmpresa extends Model
{
   protected  $fillable = ['id_funcionarios', 'id_empresas'];
}
