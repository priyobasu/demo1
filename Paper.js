class Paper {
    constructor(x,y){
        var options={
            isStatic:false,
             restitution:0.3,
            friction:0.5,
            density:1.2
    
          }
       this.box=Bodies.rectangle(x,y,70,70,options);
       this.width=70;
        this.height=70;  
        World.add(world,this.box);
        
    }
    
    display(){
      
        var angle=this.box.angle;
        push()
        translate(this.box.position.x,this.box.position.y);
        rotate(angle)
        rectMode(CENTER);
        
        fill("red");
        ellipse(56, 46, 55, 55);
        pop();
    }
    
    
    }