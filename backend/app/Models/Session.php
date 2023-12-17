<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Session extends Model
{
/**
     * Methode pour recuperer les bulltins d'une session
     * 
     * @return la liste de bulletin
     */
    public function bulletin(): HasMany
        {
            return $this->hasMany(Bulletin::class);
        }

/**
     * Methode pour recuperer le calendrier d'une session
     * 
     * @return la liste de bulletin
     */
        public function calendrier(): BelongsTo
        {
            return $this->BelongsTo(Calendrier::class);
        }
}   


