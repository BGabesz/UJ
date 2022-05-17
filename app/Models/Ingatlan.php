<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingatlan extends Model
{
    protected $fillable = ['kategoria','leiras','hirdetesDatuma','tehermentes','ar','kepUrl'];
}
