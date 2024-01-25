class Dino {
    eatFood(foodToEat) {
        foodToEat.leeft=false;
        this.honger=false;
        console.log("ik ben een " + this.naam)
        console.log("mijn honger: " + this.honger)
    }

    constructor(naam, vleeseter, leeftijd) {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }
}

class App {
    runApplication() {
        console.log("Hello world");

        let trex = new Dino("T-Rex", true, 10);
        let Giganotosaurus = new Dino("Giganotosaurus", false, 20);

        console.log(trex);
        console.log(Giganotosaurus);

        trex.eatFood(Giganotosaurus);
        console.log("leeft " + Giganotosaurus.naam + "? "+ Giganotosaurus.leeft);
    }
}

let app = new App();
app.runApplication();