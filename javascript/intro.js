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
    
    
    
    class Component{
        cnstructor(){
        this.x = 25;
        this.y = 25;
        this.width = 30;
        this.heigth = 50
        this.img = './images/player.png'
        }
    
    
    
         drawPlayer() {
            const imgPlayer = new Image ();
            imgPlayer.src = this.img;
            ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth)
            }   
                  
        movePlayer(keyCode){
            console.log('x', this.x);
            console.log('y', this.y);
            ctx.clearRect(this.x, this.y, this.width, this.heigth);
            switch(keyCode){
                case 37:
                    if (this.y > 20){
                        this.y +=10
                    }
                    break;
                    case 39:
                        if (this.y < 800) {
                            this.y -= 10;
                        }
                        break;
            }
        }
        
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
        }
    
        class gameArea {
            constructor () {
                this.player = {};
                this.obstacle = [];
                this.score = 0;
                this.img = './images/background.png';
            }
        }
    
    class obstacles {
        constructor (x, y, width, heigth) {
            this.x=x;
            this.y=ythis.width=width;
            this.heigth=heigth;
            this.img= './images/lion';
        }
        drawObstacle() {
            const imgLion = new Image ();
            imgLion.src = this.img;
            ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth)
            }  
    
    
    }
    
    
    const player = new Component ();
    
    document.getElementById('start-button').onclick = () => {
        startGame();
    }
    
    document.onekeydown = (e) => {
        let toMove = e.keyCode;
        currentGame.player.movePlayer(toMove);
    }
    
    
    function startGame (){
        document.getElementById('camvas-game').style.sisplay = ;
        actualGame = new gameArea;
        actualPlayer = new Component;
        actualGame.player = actualPlayer;
        actualGame.player.drawPlayer();
        updateCanvas();
    }
    
    function collision(obstacle){
        return !((actualPlayer.x > obstacle.x + obstacle.heigth) || (actualPlayer.y + actualPlayer.width < obstacle.y) || (actualPlayer.y - actualPlayer.width > obstacle.y + obstacle.width))
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
            let newLion = new Component ( randomLionX, randonLionY, randomLionWidth, randomLionHeigth);
            
            actualGame.obstacles.push(newLion);
        }
        
        for(let i = 0; i<actualGame.obstacles.length; i++) {
            currentGame.obstacles[i].y += 1;
            currentGame.obstacles[i].drawObstacle();
    
            if (collision(actualGame.obstacles[i])) {
                alert('GAME OVER');
                obstacleFrequency = 0;
                actualGame = 0;
                //document.gerElementById('score').innerHTML = 0
                actualGame.obstacles=[];
                document.getElementById('canvas-game').style.display = 'none';
            }
    }
    
    requestAnimationFrame(updateCanvas);
    
    
    }
    
    