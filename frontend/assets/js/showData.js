const showData = {

    init: function(id) {
        
       // recuperation des donnéers de la bdd (bulletin et participants)
               // Pour installation sur machine virtuelle école
               fetch(`http://localhost:8000/api/inscriptions/${id}`,)
       
               // Pour installation sur serveur heberge
                //fetch(`http://fourmitest2.cigaleaventure.com/custom/cglinscription/public/Laravel/backend/routes/api/inscriptions/${id}`,
               
               // Pour installation en local
                //fetch(`http://localhost/doliDev/custom/cglinscription/public/Laravel/backend/routes/api/inscriptions/${id}`,
                
               // A tester si endpoint correctement paramétrer
                //fetch(`api/inscriptions/${id}`,               
     
.then( function(response) {
                return response.json();
            })
            .then(function(bulletin) {
           
                showData.extractData(bulletin);
                showData.selectDatasParticipant(bulletin);
               
            });
            // condition si erreur ?    
    },

    // extraction des données et afichage
    extractData: function (bulletin, dateFormatee){
        // console.log(dateFormatee);  
            // champs non affichés 
           id_participant = bulletin.participant[0].bulletin_id;
           document.getElementById("participant_id1").textContent = id_participant;
           document.getElementById("participant_id2").textContent = id_participant;
       
           id_activite = bulletin.participant[0].activite_id;
           document.getElementById("activite_id1").textContent = id_activite;
           document.getElementById("activite_id2").textContent = id_activite;

            // traitement données du bulletin et affichage
            nomClient = bulletin.NomTiers;
            // ecran 1
            document.getElementById("nom1").textContent = nomClient;
            // ecran 2
            document.getElementById("nom2").textContent = nomClient;

            lieuActivite = bulletin.session.Lieu_Activite;
            document.getElementById("lieu1").textContent = lieuActivite;
            document.getElementById("lieu2").textContent = lieuActivite;

            activite = bulletin.session.intitule_custom;
            document.getElementById("activite1").textContent = activite;
            document.getElementById("activite2").textContent = activite;

            dateActivite = bulletin.session.calendrier.heured;
            
            showData.dateFormat(dateActivite);     
        },

        // affichage de la date au format
        extractDataDate: function (dateFormatee){
            document.getElementById("date1").textContent = dateFormatee;       
            document.getElementById("date2").textContent = dateFormatee;
        },

        // mise au format de la date
        dateFormat: function(dateActivite) {

        // Date au format "2023-06-10 09:00:00"
        const dateString = dateActivite;

        // Créer un objet Date à partir de la chaîne de date
        const dateObj = new Date(dateString);

        // Tableaux pour traduire les mois et les jours de la semaine
        const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
        const jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

        // Extraire le jour, le mois, l'année, les heures et les minutes
        const jour = dateObj.getDate();
        const moisIndex = dateObj.getMonth();
        const annee = dateObj.getFullYear();
        const heure = dateObj.getHours();
        const minute = dateObj.getMinutes();

        // Formatter la date
        var dateFormatee = jour + " " + mois[moisIndex] + " " + annee + " à " + heure + "h" + (minute < 10 ? "0" : "") + minute;

        showData.extractDataDate(dateFormatee);
        },

        // LISTE DES PARTICIPANTS

    // recupertation des données des champs à afficher
    selectDatasParticipant: function(bulletin) {
        
            for (const participant of bulletin.participant) {
                idBulletin = bulletin.id;
                idParticipant = participant.id;
                

                prenom = participant.NomPrenom;
               
                if (participant.NomPrenom === null){
                    prenom = "";
                } else {  prenom = participant.NomPrenom;}
           
                // taille = participant.taille.libelle;
                if (participant.taille === null){
                    taille = "";
                } else { taille = participant.taille.libelle;}

                // poid = participant.poid.libelle;
                if (participant.poid === null){
                    poid = "";
                } else {poid = participant.poid.libelle;}

                // age = participant.age.libelle;
                if (participant.age === null){
                    age = "";
                } else { age = participant.age.libelle;}

        // console.log(prenom, taille, poid, age);
                showData.createEltParticipant(idParticipant, idBulletin, prenom, taille, poid, age);
            }
        },

    // creation des elements des participants et remplissage des champs
    createEltParticipant: function(idParticipant, idBulletin, prenom, taille, poid, age) {
        
        // creation des elements d'affichage des participants
        const divElt01 = document.createElement("div");
        divElt01.classList.add("div5b");

        const divElt001 = document.createElement("div");
        divElt001.classList.add("text_titre_ecran");
        divElt001.textContent = "Participant";

        const divElt1 = document.createElement("div");
        divElt1.classList.add("div5a");
            const divElt2 = document.createElement("div");
            divElt2.id ="prenomParticipant";
            divElt2.classList.add("champ_participant");
            divElt2.textContent = prenom;
            divElt2.classList.add(idParticipant);
            // si champ vide / valeur par defaut
            if(prenom.length == 0) { 
            divElt2.textContent="Prenom";
            divElt2.classList.add("colorRed"); }

        const divElt3 = document.createElement("div");
        divElt3.classList.add("div5ba");
            const divElt4 = document.createElement("div");
            divElt4.id ="age";
            divElt4.classList.add("champ_participant");
           
            divElt4.textContent= age ;
            divElt4.classList.add(idParticipant);
            // si champ vide / valeur par defaut
            if(age.length == 0) { 
                divElt4.textContent="Age";
                divElt4.classList.add("colorRed"); }
       
        const divElt5 = document.createElement("div");
        divElt5.classList.add("div5bb");
            const divElt6 = document.createElement("div");
            divElt6.id ="taille";
            divElt6.classList.add("champ_participant");
            divElt6.textContent=taille;
            divElt6.classList.add(idParticipant);
            // si champ vide / valeur par defaut
            if(taille.length == 0) { 
                divElt6.textContent="Taille";
                divElt6.classList.add("colorRed"); }
        
        const divElt7 = document.createElement("div");
        divElt7.classList.add("div5bc");
            const divElt8 = document.createElement("div");
            divElt8.id ="poids";
            divElt8.classList.add("champ_participant");
            divElt8.textContent=poid;
            divElt8.classList.add(idParticipant);
            // si champ vide / valeur par defaut
            if(poid.length == 0) { 
                divElt8.textContent="Poids";
                divElt8.classList.add("colorRed"); }
       
        //element boutons modifier
        const divElt9 = document.createElement("div");
        divElt9.classList.add("champ_participant");
        divElt9.classList.add("div5bd");
        
        const divElt11 = document.createElement("buttom");
        divElt11.classList.add("boutons");
        divElt11.textContent="Modifier";
        divElt11.id = "ouvrirModal";
        divElt11.classList.add(idParticipant);

        // pose ecouteur evenement sur le bouton modifer pour ouverture modale
        divElt11.addEventListener("click", function() {

            // rendre invisible bouton modifer avec modif clas css 
            const divElt11 = document.getElementsByClassName('div5bd');
            // il faut transformer htmlCollection en tableau pour l'effacer
            var array = Array.from(divElt11); 
            // lecture du tabelau
            for (const elt of array) {
            
            // modif class css
            elt.style.display = 'none';
            }
            showData.openModal(idParticipant, idBulletin);
            
        })
        
        // hiarchisation des elements du DOM pour la liste des participants
        const formEltPartcipant = document.querySelector("div.affichageParticipant");

        // titre participant
        formEltPartcipant.append(divElt001);
     
        formEltPartcipant.append(divElt01);
        
        divElt01.append(divElt1);
        divElt1.append(divElt2);

        divElt01.append(divElt3);
        divElt3.append(divElt4);

        divElt01.append(divElt5);
        divElt5.append(divElt6);

        divElt01.append(divElt7);
        divElt7.append(divElt8);

        // elements buttons modifier
        divElt01.append(divElt9);
        divElt9.append(divElt11);
    },  

    // GESTION DE LA MODALE

    // recuperation des donnée du participant en cours ds la modal
    dataParticipantModal: function (idParticipant, idBulletin){
        
        // recuperation des données de la base de donnée
        bulletin = idBulletin;
        participant = idParticipant;

        fetch(`http://localhost:8000/api/inscriptions/bulletin/${bulletin}/participant/${participant}`,)       
            .then( function(response) {
                return response.json();
            })
            .then( function(objetParticipant) {
                showData.extractDataParticipantModal(objetParticipant, idParticipant, idBulletin);
            });
    },

    // extration des données
    extractDataParticipantModal: function (participant, idParticipant, idBulletin) {

        prenom = participant.NomPrenom;
        age = participant.age_id;
        taille = participant.taille_id;
        poid = participant.poid_id;

        showData.createEltParticipantModal(prenom, age, taille, poid, idParticipant, idBulletin);
    },

    // creation des elements du dom pour la modale pour un participant
    createEltParticipantModal: function(prenom, age, taille, poid, idParticipant, idBulletin) {

        // creation des elements d'affichage des participants
        const divElt01 = document.createElement("div");
        divElt01.classList.add("div5bModal");
        
        // champ prenom
        const divElt1 = document.createElement("div");
        divElt1.classList.add("div5a");
        
        const divElt2 = document.createElement("div");
        divElt2.classList.add("champ_participant");
              
        const divElt2M = document.createElement("input");
            divElt2M.type = "text";
            divElt2M.id = "prenom";
            divElt2M.name = "prenom";
            divElt2M.placeholder="Prenom";
            divElt2M.value = prenom;

        // champ age
        const divElt3 = document.createElement("div");
        divElt3.classList.add("div5ba");
        
        const divElt4 = document.createElement("div");
        divElt4.classList.add("champ_participant");

        const divElt4s = document.createElement("select");
            divElt4s.type = "text";
            divElt4s.id = "dropDownAges";
            divElt4s.name = "ages";
          
        // champs taille
        const divElt5 = document.createElement("div");
        divElt5.classList.add("div5bb");
        
        const divElt6 = document.createElement("div");
        divElt6.classList.add("champ_participant");

        const divElt6s = document.createElement("select");
            divElt6s.type = "text";
            divElt6s.id = "dropDownTailles";
            divElt6s.name = "tailles";

        // champs poids
        const divElt7 = document.createElement("div");
        divElt7.classList.add("div5bc");
        
        const divElt8 = document.createElement("div");
        divElt8.classList.add("champ_participant");

        const divElt8s = document.createElement("select");
            divElt8s.type = "text";
            divElt8s.id = "dropDownPoids";
            divElt8s.name = "poids";

        // boutons fermer
            
        const divElt12 = document.createElement("div");
        divElt12.classList.add("champ_participant");
        divElt12.classList.add("div5bd");

        const divElt13 = document.createElement("buttom");
        divElt13.classList.add("boutons");
        divElt13.id = "fermerModal";
        divElt13.textContent = "Fermer";

        // boutons valider
        const divElt9 = document.createElement("div");
        divElt9.classList.add("champ_participant");
        divElt9.classList.add("div5bd");
        
        const divElt11 = document.createElement("buttom");
        divElt11.classList.add("boutons");
        divElt11.textContent = "Valider";

        // ecouteur evenement sur btm valider
        divElt9.addEventListener('click', function(){
            modal.classList.remove("active");
            showData.valueChampsModal(idParticipant, idBulletin);
            showData.deleteEltModal()
            
            // ajout de la classe pour afficher les bouton modifier
            const divElt11 = document.getElementsByClassName('div5bd');
            // il faut transformer htmlCollection en tableau pour l'effacer
            var array = Array.from(divElt11); 
            // lecture du tabelau
            for (const elt of array) {
           
           // a jout de la class
            elt.style.display = 'flex';
            } 
         });
        
        // hiarchisation des elements du dom
        const formEltPartcipant = document.querySelector("#affichageParticipant2");
        
        formEltPartcipant.append(divElt01);

         // buton fermer
        divElt01.append(divElt12);
        divElt12.append(divElt13);

        // champ prenom
        divElt01.append(divElt1);
        divElt1.append(divElt2);
        divElt2.append(divElt2M);

        // champ ages
        divElt01.append(divElt3);
        divElt3.append(divElt4);
        divElt4.append(divElt4s);
     
        // champ tailles
        divElt01.append(divElt5);
        divElt5.append(divElt6);
        divElt6.append(divElt6s);

        // champ poids
        divElt01.append(divElt7);
        divElt7.append(divElt8);
        divElt8.append(divElt8s);

        // elements buttons valider
        divElt01.append(divElt9);
        divElt9.append(divElt11);

        // affichage des données des listes
        showDropDown.init(age, taille, poid);

        // ecouteur element sur btm fermer modal
        const fermerModal = document.getElementById("fermerModal");
        fermerModal.addEventListener("click", function() {
            modal.classList.remove("active");
            showData.deleteEltModal()
           
            // ajout de la classe pour afficher les bouton modifier
            const divElt11 = document.getElementsByClassName('div5bd');
            // il faut transformer htmlCollection en tableau pour l'effacer
            var array = Array.from(divElt11); 
            // lecture du tabelau
            for (const elt of array) {
           // a jout de la class
            elt.style.display = 'flex';
            } 
        });
        
    },  
    // ferme la modale
    closeModal: function() {
        modalElt = document.getElementById('modal');
        modalEltclassList.remove("active");
    },

    // suprime les element du dom de la modal
    deleteEltModal: function () {
        // supression du dom affichage participant ds la modale
        eltDomDelete = document.querySelector("#affichageParticipant2 .div5bModal");
        eltDomDelete.remove(); 
    },

    // ouvre la modale
    openModal: function(idParticipant, idBulletin) {
        const modal = document.getElementById("modal");
        modal.classList.add("active");
        showData.dataParticipantModal(idParticipant, idBulletin);
        },

    // recuperation des valeurs des champs
    valueChampsModal: function(idParticipant, idBulletin) {
    const name = document.getElementById('prenom').value;
    const age = document.getElementById('dropDownAges').value;
    const taille = document.getElementById('dropDownTailles').value;
    const poids = document.getElementById('dropDownPoids').value;

   showData.updateParticipant(idParticipant, idBulletin, name, age, taille, poids);

    },
    // envoi des donnée à la bbd
    updateParticipant: async function (idParticipant, idBulletin, name, age, taille, poids){

            // envoi des donnée a la base
            const response = await fetch(`http://localhost:8000/api/inscriptions/bulletin/${idBulletin}/participant/${idParticipant}`, 
            { 
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                {
                    prenom: name,
                    ages: age,
                    tailles: taille,
                    poids: poids,
                })
            }
        );
            const participant = await response.json();
            showData.deleteEltParticipant()
            showData.init();

            /* --------------------------------------------------
        // recuperation participant de l'id current
        idCurrent = participant.id

        // console.log(participant);

        // recuperation pour l'idCurrent de l'htmlcollection avec age, poids ...deleteEltParticipant. d'un participant
        eltHTMLCollection = document.getElementsByClassName(idCurrent);
        // transformer htmlCollection en tableau
        var eltArray = Array.from(eltHTMLCollection); 
        // lecture du tabelau
        // console.log(eltArray);

            for (const elt of eltArray) {
                // console.log(elt)

                if(participant.NomPrenom){
                    eltPrenom = document.getElementById("prenomParticipant ");
                    console.log(eltPrenom);
                    eltPrenom.value = participant.NomPrenom;
                }

                if(participant.taille_id){
                    eltTaille = document.getElementById("taille");
                    eltTaille.value = participant.taille_id;
                }

                if(participant.age_id){
                    eltAge = document.getElementById("age");
                    eltAge.value = participant.age_id;
                }

                if(participant.poid_id){
                    eltPoids = document.getElementById("poids");
                    eltPoids.value=participant.poid_id;
                }
                
            } 
        // mise a jour des champs
        eltPrenom = document.getElementById("prenomParticipant");
        console.log(eltPrenom.value);
        
        // showData. updateParticipant(idParticipant, idBulletin);
        // showData.init(idParticipant, idBulletin);
          -------------------------------------------------------  */
        }, 

     // suprime les element du dom de la liste de participant
    deleteEltParticipant: function () {
        // supression du dom ade la liste de participânt
        eltDomParent = document.querySelector(".affichageParticipant");
      
        // console.log(eltDomDelete);
        eltDomEnfant = eltDomParent.children;

        var eltArray = Array.from(eltDomEnfant); 
        // lecture du tabelau
     
        for (const elt of eltArray) {
            elt.remove();
        }
    },
}

