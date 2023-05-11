  const canvas = document.getElementById('canvas-game');
   const ctx = canvas.getContext('2d');

class ProduceObs {
    constructor (x, y, width, heigth) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.heigth=heigth;
        this.speedx=-8;
        // this.img = new Image();
        // this.img.src= '../images/lion.png';
        
    }
    move(){
        this.x -=this.speedx;
    }
        drawObstacle() {
            let obsImg = new Image();
            obsImg.src='../images/lion.png';
        ctx.drawImage(obsImg, 600, 255, 120, 90);
        
    }  


}

 