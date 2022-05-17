<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Kategoria;
use App\Models\Ingatlan;
use Illuminate\Http\Request;

class KategoriakController extends Controller{
    public function index(){
        $tabla=Kategoria::select("id","nev");
        return response()->json($tabla->get());
    }
}