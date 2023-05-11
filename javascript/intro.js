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



        //  const playerImg = new Image();
        // playerImg.src='../images/player.png';
        
        // playerImg.onload =function(){
        //     let x= 20;
        //     let y = 200;
        //     ctx.drawImage(playerImg, x, y, 150, 150);
        // }

     



    const forestimg = new Image();
    forestimg.src = './images/background.png';

    const forstboardimg = {
     img: forestimg,
     y: 0,
    forestspeend: -9,
    forestFrame: 0,
    
 move: function(){
    this.forestFrame++;
   this.forestFrame -=this.forestspeend;
   this.forestFrame %= canvas.width;
 },

 draw: function(){
    ctx.drawImage(this.img, 0, this.x, canvas.width, canvas.height);
    ctx.drawImage(this.img, 0, this.x - canvas.width, canvas.height, canvas.width);

 },
};


// forstboardimg.onload = function () {
//     updateCanvas()
// }

    // const game = document.getElementById ('boardGame');
    // const startButton = document.getElementById('start-game');
    // const info = document.getElementById('instrut');
    //const player = new Component ();



 

function score(){
    ctx.font = '25px serif';
    ctx.style = 'red';
    ctx.fillText(`Total Earned: $ ${forstboardimg.forestFrame}`, 170, 25);
}





     let actualGame;
     let actualPlayer;
     let actualLion;
    
    
  
   function startGame() {
    console.log("checking if am still here lol");
        document.getElementById('start-game').style.display = 'none';
        actualGame = new GameArea;
         actualPlayer = new Player;
        // actualGame.Player = actualPlayer;
        actualLion = new ProduceObs;
        actualGame.ProduceObs = actualLion;
       // actualGame.player.drawPlayer();
    // interval= setInterval( updateCanvas, 20);
    updateCanvas()
    }

    
    
    
    function collision(obstacle){
        return ((actualPlayer.x < obstacle.x + obstacle.width) &&  (actualPlayer.x + actualPlayer.width > obstacle.x) && 
        (actualPlayer.y + actualPlayer.heigth > obstacle.y) && 
        (actualPlayer.y < obstacle.y + obstacle.heigth))
    }
    
    // let frequencyLion = 0;
    
    function updateCanvas (){
        console.log("Hello");
 
    //  frequencyLion ++
    
        if (forstboardimg.forestFrame % 120 === 0){
            let randomLionX = 600; 
            // let randomLionY = Math.floor(Math.random() * 450);
            let randomLionWidth = 120 + Math.floor(Math.random() * 350) 
            let randomLionHeigth = Math.floor(Math.random() * 90)
            let newLion = new  ProduceObs (randomLionX, randomLionWidth, randomLionHeigth);
            
            actualGame.obstacleArr.push(newLion);
        }
            
            forstboardimg.move();
            actualLion.move();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
             forstboardimg.draw();
             actualPlayer.drawPlayer();
             actualPlayer.movePlayer();
             actualLion.drawObstacle();
            score();
           
             let animation = requestAnimationFrame(updateCanvas);

        for(let i = 0; i< actualGame.obstacleArr.length; i++) {
            actualGame.obstacleArr[i].x -= 1;
            //  actualGame.obstacleArrs[i].drawObstacle();


            if (collision(actualGame.obstacleArr)) {
                alert(`GAME OVER: ${forstboardimg.forestFrame -1}`);
                // obstacleFrequency = 0;
                // actualGame.obstacleArr=[]
                cancelAnimationFrame(animation);
            }
            
    }
    
    
    }

})
    
    