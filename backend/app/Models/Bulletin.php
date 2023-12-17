<?php 

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Bulletin extends Model
{
    
 /**
     * Methode pour recuperer la session d'un bulletin
     * 
     * @return une session
     *  
     * */ 
    public function session():BelongsTo
        {  
        return $this->belongsTo(Session::class);
        }
/**
     * Methode pour recuperer un participant d'un bulletin
     * 
     * @return un participant
     *  
     * */ 
    public function participant():HasMany
    {  
        return $this->hasMany(Participant::class);
    }

/**
     * Methode pour recuperer un participant d'un bulletin
     * 
     * @return un participant
     *  
     * */ 
    public function participants():HasMany
    {  
        return $this->hasMany(Participant::class);
    }

}
