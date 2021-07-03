class Ball{

    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution: 0.3,
            friction:1.2,
            density:0.5
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.body= Bodies.circle(this.x,this.y,(this.r)/2,options);
        //this.image= loadImage("images/paper.png");
        World.add(world,this.body);
    }


    display(){

        var paperpos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(paperpos.x,paperpos.y);
        rotate(angle);
     // strokeWeight(3);
        fill("red");
       // ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);
        pop();
        
    }
}