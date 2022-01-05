<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Funcionarios extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'login' => $this->login,
            'nome' => $this->nome,
            'cpf' => $this->cpf,
            'email' => $this->email,
            'endereco' => $this->endereco,

        ];
    }
}
