class obstacles {
    constructor (x, y, width, heigth) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.heigth=heigth;
        // this.img = new Image();
        // this.img.src= '../images/lion.png';
        // this.img.addEventListener('load', () => {
        //     this.drawObstacle();
        // })
    }
    drawObstacle() {
        
        ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth)
        }  


        
}

