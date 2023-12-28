
<?php 

// pour le serveur hébergé
header('Access-Control-Allow-Origin: https://fourmitest2.cigaleaventure.com');

// Pour le local
//header('Access-Control-Allow-Origin: https://localhost/doliDev');

header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization');

include "template/header.php"; 

echo "test index";?>


<body>
    <div class="container">
        <div class="image_montagne" >
            
            <img class="image_logo" src="assets/images/CigAve_bandeau.png" alt="image de montagnes et vallées">
            <!-- <a class="text_faq" href="">F.A.Q</a> -->

        </div>

        <div class="text_presentation">
             
                <span class="text_presentation1">Renseignier <span class="text_presentation_vert">pour chaque participant</span> le prénom, l'age, la taille, le poids,  puis cliquer sur envoyer.</span>
            
        </div>
            
                <div class="text_titre_ecran1">Votre activité</div>

            <!-- donnée provenant de la BDD / affichage sur ecran 1 inf a 700px-->
        <form action="page.html" method="post">    

                <div class="box_activite_ecran1" >
                    <div id="participant_id1" class="intitule1 elementHidden"></div>
                    <div id="activite_id1" class="intitule1 elementHidden"></div>
                    <div id="nom1" class="intitule1"></div>
                    <div id="date1" class="intitule1"></div>
                    <div id="activite1" class="intitule1"></div>
                    <div id="lieu1" class="intitule1"></div>
                </div>

            <!-- donnée provenant BDD / affichage sur ecran 2 sup à 700px-->

                <div class="box_activite_ecran2" >
                    <div id="participant_id2" class="intitule2 elementHidden"></div>
                    <div id="activite_id2" class="intitule2 elementHidden"></div>
                    <div id="nom2"class="intitule2 nom1"></div>
                    <div id="date2" class="intitule2"></div>
                    <div id="activite2" class="intitule2"></div>
                    <div id="lieu2" class="intitule2"></div>
                </div>       

            <!-- FORMULAIRE D'AFFICHAGE -->
        
            <div class="text_titre_ecran2">Liste des participants</div>
            <!--  modification BDD / affichage sur tous les ecrans   -->
               
            <div class="affichageParticipant">
            <!-- <div class="text_titre_ecran">Participant1</div>
                    <div  class="div5b">
                
                        <div class="div5a">
                            <div class="champ_participant"></div>
                        </div>
                        <div class="div5ba">
                            <div id="age" class="champ_participant"></div>
                        </div>
                        <div class="div5bb">
                            <div id="taille" class="champ_participant"></div>
                        </div>
                        <div class="div5bc">
                            <div id="poids" class="champ_participant"></div>
                        </div> 
                    bouton de supression ou modification d'un participant   
                        <div id="boutonMod" class="div5bd champ_participant">                    
                            <buttom class="boutons">Mod</buttom>   
                        </div>  
                        <div id="boutonSup"class="div5bd champ_participant">
                                <buttom class="boutons">Sup</buttom>    
                        </div> 
                    </div>    
                    -->  
            </div>
        </form>  

        <div>
                <?php include "template/modal.php"; ?>
                <?php include "template/footer.php"; ?>
        </div>
    </div>
       
        <script src="assets/js/showData.js"></script>
        <script src="assets/js/showDropDown.js"></script>
        <script src="assets/js/app.js"></script>

        