<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Taille extends Model
{
/**
     * Methode pour recuperer la taille d'un participant
     * 
     * @return 
     *  
     * */ 
    public function participant():HasMany
    {
        return $this->hasMany(Participant::class);
    }

   

}