

class Player{
    constructor(){
    this.x = 20;
    this.y = 232;
    this.width = 120;
    this.height= 110;
    // this.speed=5;
    } 

movePlayer(keyCode){
   
     document.addEventListener('keydown', (e) => {
             switch (e.key) {
                case "ArrowRight":
                    this.x +=1;
                    break;
                case  "ArrowUp":
                    this.y +=1;
                    break;
                case "ArrowLeft":
                    this.x -= 1;
                    break;
                case "ArrowDown":
                    this.y -= 1;
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

   