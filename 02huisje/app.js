class App {
    runApplication() {
        console.log("hello world!");

       
        let canvas = document.getElementById("canvasId");
        console.log(canvas);

        
        let g = canvas.getContext("2d");

        
        g.fillStyle = "skyblue";
        g.fillRect(0, 0, canvas.width, canvas.height);

        
        g.fillStyle = "green";
        g.fillRect(0, 200, canvas.width, 100);

        
        this.huisje(g);
    }

    huisje (g) {
        
        g.fillStyle = "purple";
        g.fillRect(75, 100, 150, 120);

        
        g.fillStyle = "orange";
        g.beginPath();
        g.moveTo(75, 100);
        g.lineTo(150, 20);
        g.lineTo(225, 100);
        g.closePath();
        g.fill();

        
        g.fillStyle = "brown  ";
        g.fillRect(120, 160, 30, 60);

        
        g.fillStyle = "yellow";
        g.fillRect(90, 120, 30, 30);
        g.fillRect(180, 120, 30, 30);
    }
}


let app = new App();
app.runApplication();
