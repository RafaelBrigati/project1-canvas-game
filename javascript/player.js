

class Player{
    cnstructor(){
    this.x = 25;
    this.y = 25;
    this.speed = speed;
    this.width = 30;
    this.heigth = 100
    this.speedX = 0;
    this.speedY = 0;
    // this.img = new Image();
    // this.img.src='../images/player.png'
    // this.img.addEventListener('load', () => {

    // })
    } 

         

    movePlayer(keyCode){
    ctx.clearRect(this.x, this.y, this.width, this.heigth);
    document.addEventListener('keydown', (e) => {
         switch (keyCode) {
            case 38:
                Player.speedY +=1;
                break;
            case 40:
                Player.speedY +=1;
                break;
            case 37:
                Player.speedX -= 1;
                break;
            case 39:
                Player.speedX += 1;
                 break;
    }
}
    )}

        moveUp() {
        this.y -= 25;
        }

        moveDown() {
        this.y += 25;
        }

        moveLeft() {
        this.x -= 25;
        }

        moveRight() {
        this.x += 25; 
        }
        
        drawPlayer() {
        ctx.drawImage(this.img, this.x, this.y);
        }
        

    }