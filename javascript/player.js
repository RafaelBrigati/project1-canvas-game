const player = new Component ();

class Component{
    cnstructor(){
    this.ctx=ctx;
    this.x = 25;
    this.y = 25;
    this.speed = speed;
    this.width = 30;
    this.heigth = 50
    this.speedX = 0;
    this.speedY = 0;
    this.img = new Image ();
    this.img.src='./images/player.png'
    this.img.addEventListener('load', () => {
    this.drawPlayer();
    })
    } 
         

    movePlayer(keyCode){
    ctx.clearRect(this.x, this.y, this.width, this.heigth);
    document.addEventListener('keydown', (e) => {
         switch (e.KeyCode) {
            case 38:
                player.speedY +=1;
                break;
            case 40:
                player.speedY +=1;
                break;
            case 37:
                player.speedX -= 1;
                break;
            case 39:
                player.speedX += 1;
                 break;
        
        
         }
        moveUp() 
        this.y -= 25;
        

        moveDown() 
        this.y += 25;
        

        moveLeft() 
        this.x -= 25;
        

        moveRight() 
        this.x += 25; 
        
        drawPlayer() 
        this.ctx.drawImage(this.img, this.x, this.y)
    
    
    })