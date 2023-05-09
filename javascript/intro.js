window.addEventListener("load", () => {
    const game = document.getElementById ('boardGame');
    
    const startButton = document.getElementById('start-game');
    startButton.addEventListener("click", () => {
        if (game.classList.contains("hidden")){
            game.classList.remove("hidden");
        }
        })
    })
    
    
    let actualGame;
    let actualPlayer;
    
    document.getElementById('boardGame').style.display = 'hidden';
    const canvas = document.getElementById('canvas-game');
    const ctx = canvas.getContext('2d');
    

    
    document.onekeydown = (e) => {
        let toMove = e.keyCode;
        currentGame.player.movePlayer(toMove);
    }
    
    
    function startGame (){
        document.getElementById('camvas-game').style.sisplay = 'block';
        actualGame = new gameArea;
        actualPlayer = new Component;
        actualGame.player = actualPlayer;
        actualGame.player.drawPlayer();
        updateCanvas();
    }
    
    function collision(obstacle){
        return !((actualPlayer.x > obstacle.x + obstacle.heigth) || 
        (actualPlayer.y + actualPlayer.width < obstacle.y) || 
        (actualPlayer.y - actualPlayer.width > obstacle.y + obstacle.width))
    }
    
    let frequencyLion = 0;
    
    function updateCanvas (){
        ctx.clearRect(0, 0, 500, 300 );
        actualGame.player.drawPlayer();
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
            currentGame.obstacles[i].y -= 1;
            currentGame.obstacles[i].drawObstacle();
    
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
    
    