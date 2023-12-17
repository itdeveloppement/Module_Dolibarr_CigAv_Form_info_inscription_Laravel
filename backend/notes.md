Illuminate\Database\Eloquent\RelationNotFoundException: Call to undefined relationship [vue_cglinscription_bull] on model [App\Models\Bulletin]. in file C:\wamp64\www\projets\CigAvFormInfoLaravel\backend\vendor\laravel\framework\src\Illuminate\Database\Eloquent\RelationNotFoundException.php on line 35



Bien sûr, voici comment coder une sélection dans une entrée HTML :

HTML
<input type="text" id="select-input" />
<select id="select-list" onchange="updateInput(this)">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>

<script>
function updateInput(select) {
  var value = select.options[select.selectedIndex].value;
  document.getElementById("select-input").value = value;
}
</script>
Utilisez le code avec précaution. En savoir plus
Ce code créera une entrée de texte avec l'id select-inputet une liste de sélection avec l'id select-list. La liste de sélection aura trois options : Option 1, Option 2et Option 3. Lorsque l'utilisateur sélectionne une option dans la liste de sélection, la valeur de l'option sera mise à jour dans la saisie de texte.

Le code JavaScript écoutera l' changeévénement sur la liste de sélection. Lorsque l'événement est déclenché, la valeur de l'option sélectionnée sera récupérée et mise à jour dans la saisie de texte.

Pour utiliser ce code, vous devez l'ajouter à votre page HTML. Vous devrez également ajouter le code JavaScript à votre fichier JavaScript. Une fois que vous avez fait cela, la liste de sélection fonctionnera comme prévu.

Voici une ventilation du code :

L' inputélément avec l'id select-inputest une entrée de texte. L'utilisateur peut saisir du texte dans cette entrée.
L' selectélément avec l'id select-listest une liste de sélection. L'utilisateur peut sélectionner une option dans cette liste.
Le onchangegestionnaire d'événements sur l' selectélément sera déclenché lorsque l'utilisateur sélectionnera une option dans la liste.
La updateInput()fonction mettra à jour la valeur de l'entrée de texte avec la valeur de l'option sélectionnée dans la liste de sélection.
J'espère que ça aide!


  /**
     * Methode pour recuperer le contenue liste deroulante tailles
     * 
     * @returm 
     */
    public function dropDownTailles() {

        $dropDownTailles = DropDownList::all();

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

        $dropDownPoids = DropDownList::all();

        if (!empty($dropDownPoids)) {

            // Renvoyer les données au format JSON
            header('Content-Type: application/json');
            echo json_encode($dropDownPoids);
        };
        
    }




    /**
     * Methode pour recuperer tous le contenu de la table taille
     * 
     * @return 
     *  
     * */ 

    public function allTablePoids ()
    {
       
    }

     /**
     * Methode pour recuperer tous le contenu de la table taille
     * 
     * @return 
     *  
     * */ 
    
    public function allTableTailles ()
    {
       
    }




    public function updateParticipant(Request $request, $bulletinId, $participantId)
     {

        // Rechercher le bulletin et le participant associé
        $bulletin = Bulletin::findOrFail($bulletinId);
        $participant = $bulletin->participants()->findOrFail($participantId);

     
         // recup des données de l'url
         $bulletin_id = $request->input('bulletin_id');
         $activite_id = $request->input('activite_id');
         $name = $request->input('prenom');
         $age = $request->input('ages');
         $taille = $request->input('poids');
         $poids = $request->input('tailles');
 
         // instentiation du model
         $participant = new Participant();
 
         // mise a jour des propiétés
         $participant->bulletin_id = $bulletin_id;
         $participant->activite_id = $activite_id;
         $participant->NomPrenom = $name;
         $participant->age_id = $age;
         $participant->poid_id = $taille;
         $participant->taille_id = $poids;
         
         // verification. Si les données sont sauvegarder retour code 201 sinon 500
         if($participant->save()) {
             return response()->json($participant, 201);
         } else {
             return response()->json($participant, 500);
         }
     }

