<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Participant extends Model
{

    protected $fillable = [
        'NomPrenom',
        'age_id',
        'poid_id',
        'taille_id',
    ];

/**
     * Methode pour recuperer le bulltins d'un participant
     * 
     * @return un bulletin
     */
        public function bulletin(): HasMany
        {
            return $this->hasMany(Bulletin::class);
        }
/**
     * Methode pour recuperer la taille d'un participant
     * 
     * @return la taille
     */
        public function taille(): BelongsTo
        {
            return $this->BelongsTo(Taille::class);
        }

/**
     * Methode pour recuperer le poids d'un participant
     * 
     * @return le poids
     */
    public function poid(): BelongsTo
    {
        return $this->BelongsTo(Poids::class);
    }

/**
     * Methode pour recuperer l'age d'un participant
     * 
     * @return le age
     */
    public function age(): BelongsTo
    {
        return $this->BelongsTo(Age::class);
    }
   
} 