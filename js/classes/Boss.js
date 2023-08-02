class Boss extends Sprite{
    constructor({position,imageSrc,frameRate,frameBuffer}){
        super({position,imageSrc,frameRate,frameBuffer});
        this.width = 316;
        this.height = 201;

        this.position ={
            x: canvas.width - this.width,
            y: 60
        }
        this.time = {
            width: 100,
            height: 40,
            value: 120
        }
        this.hp = 100

        this.attack = 10
        this.attribute = Math.floor(Math.random() * 3);

        
    }

    hitBox(){
    }
    health(){
        c.fillStyle = 'white';
        c.fillRect(canvas.width - 410, 10, 400,40)

        c.fillStyle = 'red';
        c.fillRect(canvas.width - 410 + (400 - this.hp * 4 ), 10, this.hp * 4,40)

    }
    timer(){
        c.fillStyle = 'red';
        c.fillRect(canvas.width/2 - this.time.width / 2, 10, this.time.width, 40);

        c.fillStyle = 'white'
        c.font = "20px Arial";
        // c.fillText(this.time.value.toString(),canvas.width/2 - this.time.width/2,this.time.height)
        c.fillText(this.time.value.toString() + " detik",canvas.width/2 - this.time.width/2 + 10,this.time.height)
        // c.fillText("Hello World", 10, 50);

    }
    draw(){
        if(!this.loaded) return;
        c.drawImage(this.image,this.position.x,this.position.y);
    }
}