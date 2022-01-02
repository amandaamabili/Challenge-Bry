<?php

namespace App\Http\Controllers;
use App\Http\Resources\Empresas as EmpresasResource;
use App\Models\Empresas as Empresas;
use Illuminate\Http\Request;

class EmpresasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $empresas = Empresas:: paginate(15);
        return EmpresasResource:: collection($empresas);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $empresas = new Empresas();
        $empresas->nome = $request ->input('nome');
        $empresas->cnpj = $request ->input('cnpj');
        $empresas->endereco = $request ->input('endereco');


        if($empresas -> save()){
            return new  EmpresasResource($empresas);
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
        $empresas = Empresas::findOrFail($id);
        return  new EmpresasResource($empresas);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
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
        $empresas = Empresas::findOrFail($request->id);
        $empresas->nome = $request ->input('nome');
        $empresas->cnpj = $request ->input('cnpj');
        $empresas->endereco = $request ->input('endereco');

        if($empresas -> save()){
            return new  EmpresasResource($empresas);
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
        $empresas =  Empresas::findOrFail($id);
        if ($empresas->delete()){
            return  new EmpresasResource($empresas);
        }
    }
}
