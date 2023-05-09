    document.getElementById('boardGame').style.display = 'hidden';
    const canvas = document.getElementById('canvas-game');
    const ctx = canvas.getContext('2d');


    window.addEventListener("load", () => {

    let playerImg = new Image();
    playerImg.src='../images/player.png';

    let obsImg = new Image();
    obsImg.src='../images/lion.png';

    // let bkgImage = new Image();
    // bkgImage.src='../background.png';
    
    const game = document.getElementById ('boardGame');
    const startButton = document.getElementById('start-game');
    const info = document.getElementById('instrut');
    //const player = new Component ();
    
    startButton.addEventListener("click", () => {
        if (game.classList.contains("hidden")){
            game.classList.remove("hidden");
            info.classList.add('hidden');
        }

        startGame();
        })
    

 
    let actualGame;
    let actualPlayer;
    let actualLion;
    
    
  
    function startGame (){
        document.getElementById('canvas-game').style.display = 'visible';
        actualGame = new gameArea;
        actualPlayer = new Player;
        actualGame.player = actualPlayer;
        actualLion = new obstacles;
        actualGame.obstacle = actualLion;
       // actualGame.player.drawPlayer();
        updateCanvas();
    }
    
    function collision(obstacle){
        return ((actualPlayer.x < obstacle.x + obstacle.width) &&  (actualPlayer.x + actualPlayer.width > obstacle.x) && 
        (actualPlayer.y + actualPlayer.heigth > obstacle.y) && 
        (actualPlayer.y < obstacle.y + obstacle.heigth))
    }
    
    let frequencyLion = 0;
    
    function updateCanvas (){
        ctx.clearRect(0, 0, 500, 300 );
        console.log("Hello");
        ctx.drawImage(playerImg, 100, 100, 100, 100);
        ctx.drawImage(obsImg, actualLion.x, actualLion.y, 100, 100 )
 
        frequencyLion ++
    
        if (frequencyLion % 100 === 1){
            let randomLionX = 0;
            let randomLionY = Math.floor(Math.random() * 450);
            let randomLionWidth = Math.floor(Math.random() *50) + 20;
            let randomLionHeigth = Math.floor(Math.random() * 50) +20
            let newLion = new obstacles ( randomLionX, randomLionY, randomLionWidth, randomLionHeigth);
            
            actualGame.obstacles.push(newLion);
        }
        
        for(let i = 0; i<actualGame.obstacles.length; i++) {
            actualGame.obstacles[i].y -= 1;
            //actualGame.obstacles[i].drawObstacle();
    
            if (collision(actualGame.obstacles[i])) {
                alert('GAME OVER');
                obstacleFrequency = 0;
                //actualGame.score = 0;
                //document.gerElementById('score').innerHTML = 0
                actualGame.obstacles=[];
                document.getElementById('canvas-game').style.display = 'none';
            }
            
    }
    requestAnimationFrame(updateCanvas);
    
    
    
    }

})
    
    