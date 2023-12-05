class App
{
    runApplication()
    {
        this.greeting= "starting up";
        this.appNaam = "Reik zijn applicatie";
        this.versienummer = 1.0
        this.versiedatum = new Date();
        this.autheur = "Reik";
        this.copyright = "© 1066";
        this.distributeur = "RKDV bedrijf ";
        this.darkmode = false

    }
}

let app = new App();
app.runApplication();

console.log (app.greeting);
console.log("hello world!");
console.log("appnaam: " + app.appNaam)
console.log("versie: " + app.versienummer)
console.log("versiedatum: " + app.versiedatum)
console.log("autheur: " + app.autheur)
console.log("copyright: " + app.copyirght)
console.log("distributeur: " + app.distributeur)
console.log("darkmode: " + app.darkmode)

function runApplication() {
    
    let isActief = true; 
    let lokaleString = "Dit is een lokale string"; 
    let getal = 5713; 

    
    console.log("Is Actief:", isActief);
    console.log("Lokale String:", lokaleString);
    console.log("Getal:", getal);

    
    class Applicatie {
        constructor() {
            this.isActive = false; 
            this.appString = "Dit is een class string"; 
            this.appNumber = 3.14;
        }
    }

    
    const mijnApp = new Applicatie();

    
    console.log("Is Actief (Class):", mijnApp.isActive);
    console.log("Applicatie String (Class):", mijnApp.appString);
    console.log("Applicatie Getal (Class):", mijnApp.appNumber);
}


runApplication();

