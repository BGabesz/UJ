<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Kategoria;
use App\Models\Ingatlan;
use Illuminate\Http\Request;
use Carbon\Carbon;

class IngatlanokController extends Controller{
    public function index(){

        $tabla=Ingatlan::join('kategorias','kategorias.id','ingatlans.kategoria')
        ->select('*','ingatlans.id as ingatlanId');
        return response()->json($tabla->get());
    }
    public function store(Request $request){
        $kategoria=$request->input("kategoria");
        $datum=$request->input("datum");
        $leiras=$request->input("leiras");
        $tehermentes=$request->input("tehermentes");
        $ar=$request->input("ar");
        $kep=$request->input("kep");


        $ingatlan=new Ingatlan;
        $ingatlan->kategoria=$kategoria;
        $ingatlan->leiras=$leiras;
        if($datum){
            $ingatlan->hirdetesDatuma=$datum;
        }else{
            $ingatlan->hirdetesDatuma=Carbon::now();
        }
        
        /* if($tehermentes===true){
            $tehermentes=1;
        }else{
            $tehermentes=0;
        } */
        $ingatlan->tehermentes=$tehermentes;
        $ingatlan->ar=$ar;
        $ingatlan->kepUrl=$kep;
        $ingatlan->save();

        return response()->json(true);
    }
    public function destroy(string $id){
        Ingatlan::find($id)->delete();
        return response()->json(true);
     }
    
     public function update(Request $request, string $id){
        $kategoria=$request->input("kategoria");
        $datum=$request->input("datum");
        $leiras=$request->input("leiras");
        $tehermentes=$request->input("tehermentes");
        $ar=$request->input("ar");
        $kep=$request->input("kep");
        /* if($tehermentes===true){
            $tehermentes=0;
        }else{
            $tehermentes=1;
        } */
        $tabla=Ingatlan::find($id)
        ->update([
            'kategoria' => $request->kategoria,
            'leiras' => $request->leiras,
            'hirdetesDatuma' => $request->datum,
            'tehermentes' => $tehermentes,
            'ar' => $request->ar,
            'kepUrl' => $request->kep,
            ]);
            /* >update([
            'kategoria' => $request->kategoria,
            'leiras' => $request->leiras,
            'hirdetesDatuma' => $request->datum,
            'tehermentes' => $request->tehermentes,
            'ar' => $request->ar,
            'kepUrl' => $request->kep,
            ]); */
        /* $tabla -> kategoria = $kategoria;
        $tabla -> hirdetesDatuma = $datum;
        $tabla -> leiras =$leiras;
        $tabla -> tehermentes = $tehermentes;
        $tabla -> ar = $ar;
        $tabla -> kepUrl = $kep; */
        /* $tabla->save(); */

        return response()->json(true);
    }
}