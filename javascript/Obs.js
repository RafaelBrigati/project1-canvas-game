class obstacles {
    constructor (x, y, width, heigth) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.heigth=heigth;
        // this.img = new Image();
        // this.img.src= '../images/lion.png';
        
    }
        drawObstacle() {
        
        ctx.drawImage(obsImg, this.x, this.y, this.width, this.heigth);
        
    }  


}


