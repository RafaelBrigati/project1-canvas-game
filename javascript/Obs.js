  const canvas = document.getElementById('canvas-game');
   const ctx = canvas.getContext('2d');

class ProduceObs {
    constructor () {
        this.x=600;
        this.y=255;
        this.width=120;
        this.heigth=90;
        this.speedx =4;
        // this.img = new Image();
        // this.img.src= '../images/lion.png';
        
    }
    move(){
         this.x -=this.speedx;
      
    }
        drawObstacle() {
            let obsImg = new Image();
            obsImg.src='../images/lion.png';
        ctx.drawImage(obsImg, this.x, this.y,this.width, this.heigth);
        
    }  


}

 