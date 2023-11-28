class App
{
    runApplication()
    {
        console.log("Hello world!");
      
    }
}

let app = new App();
app.runApplication();

function runApplication() {
    
    let appNaam = "Reik zijn Applicatie";
    let versienummer = 1.0; 
    let versiedatum = new Date();
    let auteur = "Reik de Vries";
    let copyright = "© 1066";
    let distributeur = "RKDV bedrijf";
    let darkmode = false;

    

    
    console.log("Applicatie Naam:", appNaam);
    console.log("Versienummer:", versienummer);
    console.log("Versiedatum:", versiedatum);
    console.log("Auteur:", auteur);
    console.log("Copyright:", copyright);
    console.log("Distributeur:", distributeur);
    console.log("Dark Mode:", darkmode);
}


runApplication();


