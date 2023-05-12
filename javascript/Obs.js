const canvas = document.getElementById('canvas-game');
const ctx = canvas.getContext('2d');

    let obsImg = new Image();
     obsImg.src='../images/lion.png';

class ProduceObs {
    constructor () {
        this.x=600;
        this.y=270;
        this.width=95;
        this.heigth=70;
        this.img=obsImg;
        this.speedx =9;
       
    }

    move(){
         this.x -=this.speedx;
    }

    drawObstacle() {
        ctx.drawImage(obsImg, this.x, this.y,this.width, this.heigth);
    }  


}

 