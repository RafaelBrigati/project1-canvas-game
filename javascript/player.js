//  const canvas = document.getElementById('canvas-game');
//  const ctx = canvas.getContext('2d');

//  const playerImg = new Image();
//  playerImg.src='../images/player.png';

//  playerImg.onload =function(){
//      let x= 20;
//      let y = 200;
//      ctx.drawImage(playerImg, x, y, 150, 150);
//  }


class Player{
    constructor(){
    this.x = 20;
    this.y = 210;
    this.width = 150;
    this.height= 140;
    this.speed = 8;
    this.speedX = 0;
    this.speedY = 0;
    // this.img = new Image();
    // this.img.src='../images/player.png'
    
    } 

    movePlayer(keyCode){
        // ctx.clearRect(this.x, this.y, this.width, this.heigth);
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
            const playerImg = new Image();
             playerImg.src='../images/player.png';
            ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
    
        }
        
    }

   