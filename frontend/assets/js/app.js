const app = {


 


    baseEndpoint: {
        endpoint: 'http://localhost:8000/api/inscriptions/1',
        // endpoint2: 'http://localhost:8000/api/inscriptions',
        },

// appel des fonction a l'ouverture du document
init: function() {

    const id = document.location.pathname.split('/').pop(); // Récupère le dernier segment de l'URL
    console.log(id);
     console.log("test entree");

     
    console.log("test");
    showData.init();
 
}

}
// a l'ouverture appel de la fonction init
document.addEventListener('DOMContentLoaded', app.init);