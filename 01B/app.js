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
        this.darkmode = true

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

