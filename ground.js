class Ground{
    constructor(){
        this.body=Bodies.rectangle(400,685,800,15,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("yellow");
        rect(this.body.position.x,this.body.position.y,800,10)
    }
}