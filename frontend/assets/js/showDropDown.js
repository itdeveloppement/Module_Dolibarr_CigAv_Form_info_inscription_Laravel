const showDropDown= {

    init: function(age, taille, poid) {

        // recuperation des données pour la liste deroulante ages
        fetch ('http://localhost:8000/api/dropdown/ages') 
            .then(function(response){
                return response.json();
            })
            .then(function(dataDropDownAges){
                
                showDropDown.dropDownAges(dataDropDownAges, age);

            });
            // condition si vide = erreur ?


        // recuperation des données pour la liste deroulante tailles
        fetch ('http://localhost:8000/api/dropdown/tailles') 
            .then(function(response){
                return response.json();
            })
            .then(function(dataDropDownTailles){
                showDropDown.dropDownTailles(dataDropDownTailles, taille);
            });
            // condition si vide = erreur ?

        // recuperation des données pour la liste deroulante poids
        fetch ('http://localhost:8000/api/dropdown/poids') 
            .then(function(response){
                return response.json();
            })
            .then(function(dataDropDownPoids){
                showDropDown.dropDownPoids(dataDropDownPoids, poid);
            });
            // condition si vide = erreur ?
        
    },

    // creation et affichage du contenue liste ages
    dropDownAges: function (dataDropDownAges, age){
    
        const dropDownAges = document.getElementById('dropDownAges');
        // creation de la l'option (ligneµ/champ) - choisir -
        const optionElt = document.createElement('option');
        optionElt.value = -1;
        optionElt.textContent = "- choisir -";
        dropDownAges.appendChild(optionElt);

        dataDropDownAges.forEach(function (ages) {
            const optionElt = document.createElement('option');
            optionElt.value = ages.id;
            optionElt.textContent = ages.libelle;
            dropDownAges.appendChild(optionElt);
            // affichage de l'age en cours
            if (ages.id === age) {
                optionElt.selected = true; // Sélectionnez l'option de la taille souhaitée
              }
        });
    },

    // creation et affichage du contenue liste tailles
    dropDownTailles: function (dataDropDownTailles, taille){

        const dropDownTailles = document.getElementById('dropDownTailles');

        const optionElt = document.createElement('option');
        optionElt.value = -1;
        optionElt.textContent = "- choisir -";
        dropDownTailles.appendChild(optionElt);

        dataDropDownTailles.forEach(function (tailles) {
            const optionElt = document.createElement('option');
            optionElt.value = tailles.id;
            optionElt.textContent = tailles.libelle;
            dropDownTailles.appendChild(optionElt);
            // affichage de la taille en cours
            if (tailles.id === taille) {
                optionElt.selected = true; // Sélectionnez l'option de la taille souhaitée
              }
        });
    },

    // creation et affichage du contenue liste ages
    dropDownPoids: function (dataDropDownPoids, poid){

        const dropDownPoids = document.getElementById('dropDownPoids');

        const optionElt = document.createElement('option');
        optionElt.value = -1;
        optionElt.textContent = "- choisir -";
        dropDownPoids.appendChild(optionElt);

        dataDropDownPoids.forEach(function (poids) {
            const optionElt = document.createElement('option');
            optionElt.value = poids.id;
            optionElt.textContent = poids.libelle;
            dropDownPoids.appendChild(optionElt);
            // affichage du poids en cours
            if (poids.id === poid) {
                optionElt.selected = true; // Sélectionnez l'option de la taille souhaitée
              }
        });
    },
}
