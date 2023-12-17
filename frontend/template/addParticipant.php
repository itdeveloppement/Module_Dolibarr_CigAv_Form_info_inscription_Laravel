<!-- formulaire d'ajout d'un participant -->

<form action="page.html" method="post">

            <!-- modification BDD / affichage sur tous les ecrans-->
        
            <!-- variable -->
                    
                <div class="text_titre_ecran1 text_titre_ecran1">Ajouter un participant2</div>
                                
                <div class="div5b">

                    <div class="div5a">
                        <!-- <div class="intitule4">Prénom</div> -->
                        <div class="champ_participant">
                        <input type="text" id="prenom" name="prenom" placeholder="Prenom" value=""></div>
                    </div>

                    <div class="div5ba">
                        <!-- <div class="intitule4">Age</div> -->
                        <div class="champ_participant"><select type="text" id="dropDownAges" name="ages">
                                <option value="- choisir -">- Ages -</option>
                            </select>  
                        </div>
                    </div>

                    <div class="div5bb">
                        <!-- <div class="intitule4">Taille</div> -->
                        <div class="champ_participant"><select type="text" id="dropDownTailles" name="tailles">
                                <option value="- choisir -"> - Tailles - </option>
                        </select>
                        </div>
                    </div>

                    <div class="div5bc">
                        <!-- <div class="intitule4">Poids</div> -->
                        <div class="champ_participant"><select type="text" id="dropDownPoids" name="Poids">
                        option value="- choisir -">- choisir -</option>
                                <option value="- choisir -">- Poids -</option>
                        </select>
                        </div>
                    </div> 

                    <!-- bouton de modification d'un participant -->

                    <div id="btmAdd" class="div5bd">    
                        <div class="champ_participant">
                            <buttom  class="boutons">Ajouter</buttom>
                        </div>
                    </div> 
                </div>
        </form>