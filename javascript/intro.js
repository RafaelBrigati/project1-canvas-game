window.addEventListener("load", () => {

    const myButton= document.getElementById('start-game')
     const canvasid= document.getElementById('canvas')


     myButton.addEventListener("click", () => {
        if ( myButton.classList.contains("hidden")){
            myButton.classList.remove("hidden");
            canvasid.classList.add('hidden');
        }
        startGame()
        })
     


         const canvas = document.getElementById('canvas-game');
         const ctx = canvas.getContext('2d');

     

    const forestimg = new Image();
    forestimg.src = './images/backgroundd.png';



class  Forstboardimg {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.forestspeend = 9;
        this.img =forestimg;
    }

    move(){
        this.x --;
        this.x -= this.forestspeend;
        this.x %= canvas.width;
    }
    draw (){
        ctx.drawImage(this.img, this.x, this.y,  canvas.width, canvas.height);
        ctx.drawImage(this.img, this.y, this.x  - canvas.width,  canvas.width, canvas.height);

    }
}

const boardImg = new Forstboardimg ( this.x, this.y, canvas.width, canvas.height);

 
function score(){
    ctx.font = '25px serif';
    ctx.style = '#FF0000';
    ctx.fillText(`Total Earned: $ ${boardImg.x}`, 170, 25);
}

     let actualGame;
     let actualPlayer;
     let actualLion;
    
   function startGame() {
    console.log("checking if am still here lol");
        document.getElementById('start-game')
        actualGame = new GameArea;
        actualPlayer = new Player;
        actualLion = new ProduceObs;
        actualGame.ProduceObs = actualLion;
          updateCanvas()
    }

    function collision(obstacle){
        return ((actualPlayer.x < obstacle.x + obstacle.width) &&  (actualPlayer.x + actualPlayer.width > obstacle.x) && 
        (actualPlayer.y + actualPlayer.heigth > obstacle.y) && 
        (actualPlayer.y < obstacle.y + obstacle.heigth))
    }
    
    function updateCanvas (){
        console.log("Hello");
 
    
        if (boardImg.x %2000 === 0){
            let randomLionX = 600; 
            let randomLionY = 270;
            let randomLionWidth = 95 + Math.floor(Math.random() * 350) 
            let randomLionHeigth = Math.floor(Math.random() * 70)
            let newLion = new  ProduceObs (randomLionX, randomLionY, randomLionWidth, randomLionHeigth);
            
            actualGame.obstacleArr.push(newLion);
        }
        
             boardImg.move();
          // ctx.clearRect(0, 0, canvas.width, canvas.height);
              boardImg.draw();
             actualPlayer.drawPlayer();
             actualPlayer.movePlayer();
            //  actualLion.drawObstacle();
            score();
             let animation = requestAnimationFrame(updateCanvas);

             for(let i = 0; i< actualGame.obstacleArr.length; i++) {
                actualGame.obstacleArr[i].drawObstacle();
                actualGame.obstacleArr[i].move();
               
    
            
            if (collision(actualGame.obstacleArr)) {
                alert(`GAME OVER: ${boardImg.x -1}`);
        
                cancelAnimationFrame(animation);
                
            }
        }
            
    }

})
    
    