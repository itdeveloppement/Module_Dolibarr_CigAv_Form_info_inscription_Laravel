<?php 

namespace App\Http\Controllers;
use App\Models\DropDownAges;
use App\Models\DropDownTailles;
use App\Models\DropDownPoids;
use Illuminate\Http\Request;

class DropDownController extends Controller

{

    /**
     * Methode pour recuperer le contenue liste deroulante ages
     * 
     * @returm 
     */
    public function dropDownAges() {

        $dropDownAges = DropDownAges::all();

        if (!empty($dropDownAges)) {

            // Renvoyer les données au format JSON
            header('Content-Type: application/json');
            echo json_encode($dropDownAges);
        };
        
    }

  /**
     * Methode pour recuperer le contenue liste deroulante tailles
     * 
     * @returm 
     */
    public function dropDownTailles() {

        $dropDownTailles = DropDownTailles::all();

        if (!empty($dropDownTailles)) {

            // Renvoyer les données au format JSON
            header('Content-Type: application/json');
            echo json_encode($dropDownTailles);
        };
        
    }


    /**
     * Methode pour recuperer le contenue liste deroulante poids
     * 
     * @returm 
     */
    public function dropDownPoids() {

        $dropDownPoids = DropDownPoids::all();

        if (!empty($dropDownPoids)) {

            // Renvoyer les données au format JSON
            header('Content-Type: application/json');
            echo json_encode($dropDownPoids);
        };
        
    }

    
}      
