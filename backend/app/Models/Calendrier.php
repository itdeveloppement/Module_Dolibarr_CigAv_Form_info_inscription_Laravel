<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Calendrier extends Model
{
/**
     * Methode pour recuperer le calendrier d'une session
     * 
     * @return 
     * 
     * */ 
    public function session():HasMany
    {
        return $this->hasMany(Session::class);
    }
}  