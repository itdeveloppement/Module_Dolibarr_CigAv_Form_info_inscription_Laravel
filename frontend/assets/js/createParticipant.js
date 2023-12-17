const createParticipant = {

init: function() {

    // ecouteur evenmenet sur buuton ajouter    
    const btmAdd = document.getElementById('btmAdd');
    btmAdd.addEventListener('click', createParticipant.createParticipant);

    createParticipant.modalOpenClose
},

// recuperation des champs input "ajouter un participant"
createParticipant: function(event) {
    // empeche la page de se recharger
    event.preventDefault();
    // console.log(event.target);

    // recup des inputs
    const id_participant = document.getElementById('participant_id2').innerHTML;
    const id_activite = document.getElementById('activite_id2').innerHTML;
    const name = document.getElementById('prenom').value;
    const age = document.getElementById('dropDownAges').value;
    const taille = document.getElementById('dropDownTailles').value;
    const poids = document.getElementById('dropDownPoids').value;

    // console.log(id_participant,id_activite, name, age, taille, poids);

    // appel de la methode d'insertion des donnes ds la bdd
    createParticipant.creatBddData(id_participant,id_activite, name, age, taille, poids);

    // effacer les donner des champs
    /*
    document.getElementById('participant_id2')= "";
    document.getElementById('activite_id2')="";
    document.getElementById('prenom')="";
    document.getElementById('dropDownAges')="";
    document.getElementById('dropDownTailles')="";
    document.getElementById('dropDownPoids')="";
*/
},

creatBddData: async function(id_participant, id_activite, name, age, taille, poids) {

    // envoi des informations à la bdd
    const response = await fetch(app.baseEndpoint.endpoint2, 
        { 
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bulletin_id: id_participant, 
                activite_id: id_activite, 
                prenom: name,
                ages: age,
                poids: poids,
                tailles: taille 
            })
        }  
    );
    const participant = await response.json();
    console.log(participant);

    prenom = participant.NomPrenom;
    taille = participant.taille_id;
    poids = participant.poid_id;
    age = participant.age_id;

    showData.deletEltParticipant();
    },
}

// dinamyser les menu deroulantsok 
// ecouteur evenement sur le bouron ajouter


// recuperation des données dans l'input nom
    // getelementbyid(...).value

// recup les donnée dans liste deroulante age -> celui qui est  selectionné
    // getelementbyid(...).selected
    // idem pour les autre listes

// envoie des données à la bdd
    //fetch et recup retour validation insertion

// a faire
    // recueperer les données id bulletin, id activite et nom du client et les transmettre au moment de l'ajout ds la base
    // transofrmer tms en update at
    // foir pour la question des accend dans la bse qui ne sont pas reconnue

// affichage des données dans la liste des participants

// effacer les donnée des champs ajouts

