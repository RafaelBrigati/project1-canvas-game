

class Player{
    constructor(x, y, width, heigth){
    this.x = 25;
    this.y = 25;
    this.speed = 5;
    this.width = 30;
    this.heigth = 100
    this.speedX = 0;
    this.speedY = 0;
    
    } 

         

    movePlayer(keyCode){
    ctx.clearRect(this.x, this.y, this.width, this.heigth);
    document.addEventListener('keydown', (e) => {
         switch (keyCode) {
            case 38:
                this.y +=1;
                break;
            case 40:
                this.y +=1;
                break;
            case 37:
                this.y -= 1;
                break;
            case 39:
                this.x += 1;
                 break;
    }
}
    )}

        drawPlayer() {
            let playerImg = new Image();
            playerImg.src='../images/player.png';
            ctx.drawImage(playerImg, this.x, this.y);
        }
        

    }