class Log{
    constructor(x,y,height,angle){
        var options={
            friction:1
        }
        this.body=Bodies.rectangle(x,y,20,height,options);

        this.width= 20;
        Matter.Body.setAngle(this.body,angle)
        this.height= height;
        World.add(myWorld,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        strokeWeight(4);
        stroke("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}