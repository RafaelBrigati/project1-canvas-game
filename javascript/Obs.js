class obstacles {
    constructor (x, y, width, heigth) {
        this.x=x;
        this.y=ythis.width=width;
        this.heigth=heigth;
        this.img.src= './images/lion';
        this.img.addEventListener('load', () => {
            this.drawObstacle();
        })
    }
    drawObstacle() {
        const imgLion = new Image ();
        imgLion.src = this.img;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth)
        }  


        
}

