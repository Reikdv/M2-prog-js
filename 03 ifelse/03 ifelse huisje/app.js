class App {
    runApplication() {
      console.log("hello world!");
  
      let canvas = document.getElementById("canvasId");
      console.log(canvas);
  
      let randomGetal = Math.random();
      let windowColor = "#00ffff";
  
      if (randomGetal > 0.5) {
        windowColor = "black";
      }
  
      let g = canvas.getContext("2d");
  
      g.fillStyle = "purple";
      this.drawHouse(g);
  
      g.beginPath();
      g.fillStyle = windowColor;
      g.moveTo(50, 40);
      g.lineTo(50, 50);
      g.lineTo(30, 45);
      g.lineTo(30, 35);
      g.closePath();
      g.stroke();
      g.fill();
    }
  
    drawHouse(g) {
      g.beginPath();
      g.fillStyle = "#ff0000";
      g.moveTo(30, 10);
      g.lineTo(70, 20);
      g.lineTo(60, 40);
      g.lineTo(20, 30);
      g.closePath();
      g.stroke();
      g.fill();
  
      g.beginPath();
      g.fillStyle = "#cc0000";
      g.moveTo(70, 20);
      g.lineTo(80, 30);
      g.lineTo(60, 40);
      g.closePath();
      g.stroke();
      g.fill();
  
      g.beginPath();
      g.fillStyle = "#ccccb3";
      g.moveTo(80, 30);
      g.lineTo(80, 50);
      g.lineTo(60, 60);
      g.lineTo(60, 40);
      g.closePath();
      g.stroke();
      g.fill();
  
      g.beginPath();
      g.fillStyle = "#ffffff";
      g.moveTo(60, 40);
      g.lineTo(60, 60);
      g.lineTo(20, 50);
      g.lineTo(20, 30);
      g.closePath();
      g.stroke();
      g.fill();
  
    }
  }
  
  let app = new App();
  app.runApplication();
  