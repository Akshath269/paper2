class DUSTBIN{


    constructor(x,y,width,height){
      
       this.DUSTBIN=Bodies.rectangle(x,y,width,height,{isStatic:true});
       World.add(world,this.DUSTBIN);
       this.w=width;
       this.h=height;
      
       
    }
    
    display(){
    rectMode(CENTER)
    fill("YELLOW")
    rect(this.DUSTBIN.position.x,this.DUSTBIN.position.y,this.w,this.h);
    
    }
    
    
    }