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

     this.speedX = 1;
     this.speedY =0 ;
    
    } 

    movePlayer(keyCode){
           if(this.speed === 1){
       this.x += this.speed;
       }
    // else if(this.speed < 1){
    //   this.x -= 3;
    // }
    // else if (this.speed > 1){
    //   this.x += 3;
    //  ctx.clearRect(this.x, this.y, this.width, this.heigth);
    // }
        document.addEventListener('keydown', (e) => {
             switch (e.key) {
                case "ArrowRight":
                    this.speedX +=1;
                    break;
                case  "ArrowUp":
                    this.speedY +=0;
                    break;
                case "ArrowLeft":
                    this.speedX -= 1;
                    break;
                case "ArrowDown":
                    this.speedY -= 0;
                     break;
        }
    }
        )}

        drawPlayer() {
            const playerImg = new Image();
             playerImg.src='../images/player.png';
            ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
    
        }
        
    }

   