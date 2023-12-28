const app = {


  


    baseEndpoint: {
        // Pour installation sur machine virtuelle école
        endpoint: 'http://localhost:8000/api/inscriptions/1',
        // endpoint2: 'http://localhost:8000/api/inscriptions',

        // Pour installation sur serveur heberge
      //     endpoint: 'http://fourmitest2.cigaleaventure/custom/cglinscription/public/Laravel/backend/routes/api/inscriptions/1',
        
        // Pour installation en local
        //     endpoint: 'http://localhost/doliDev/custom/cglinscription/public/Laravel/backend/routes/api/inscriptions/1',
        },

// appel des fonction a l'ouverture du document
init: function() {
    console.log("test entree");
   // const id = document.location.pathname.split('/').pop(); // Récupère le dernier segment de l'URL
   // 590001844 ID d'un bulletin existant sur la base fourmi test 2
   const id =  "590001844";
    console.log(id);
     

     
    console.log("test");
    showData.init();
 
}

}
// a l'ouverture appel de la fonction init
document.addEventListener('DOMContentLoaded', app.init);