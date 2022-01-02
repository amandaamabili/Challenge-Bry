<?php

namespace App\Http\Controllers;
use App\Http\Resources\Empresas;
use App\Http\Resources\Funcionarios as FuncionariosResource;
use App\Models\Funcionarios as Funcionarios;
use App\Models\Empresas as Empresas2;
use App\Models\IntegracaoFuncionarioEmpresa;
use Illuminate\Http\Request;

class FuncionariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $funcionarios = Funcionarios:: paginate(15);
        return FuncionariosResource:: collection($funcionarios);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response

    public function create()
    {
        //
    }
*/
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   info("assaassasas");
        $funcionarios = new Funcionarios;
        $funcionarios->login = $request ->input('login');
        $funcionarios->nome = $request ->input('nome');
        $funcionarios->cpf = $request ->input('cpf');
        $funcionarios->email = $request ->input('email');
        $funcionarios->endereco = $request ->input('endereco');
        $funcionarios->senha = $request ->input('senha');

        if($funcionarios -> save()){
            $relaciotionship = new IntegracaoFuncionarioEmpresa;
            $relaciotionship -> id_empresas = $request ->input('empresa');
            $relaciotionship -> id_funcionarios = $funcionarios -> input('id');
            echo $relaciotionship;
            $relaciotionship -> save();
            return new  FuncionariosResource($funcionarios);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $funcionarios = Funcionarios::findOrFail($id);
        return  new FuncionariosResource($funcionarios);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response

    public function edit($id)
    {
        //
    }
     */
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $funcionarios = Funcionarios::findOrFail($request->id);
        $funcionarios->login = $request ->input('login');
        $funcionarios->nome = $request ->input('nome');
        $funcionarios->cpf = $request ->input('cpf');
        $funcionarios->email = $request ->input('email');
        $funcionarios->endereco = $request ->input('endereco');
        $funcionarios->senha = $request ->input('senha');
        $funcionarios->empresa = $request ->input('empresa');

        if($funcionarios -> save()){
            return new  FuncionariosResource($funcionarios);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $funcionarios =  Funcionarios::findOrFail($id);
        if ($funcionarios->delete()){
            return  new FuncionariosResource($funcionarios);
        }
    }
}
