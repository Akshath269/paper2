class PAPER{

constructor(x,y,radius,) {
 var options={
     inStatic: false,
     restitution:0.3,
     friction:0,
     density:1.2
 }

this.body=Bodies.circle(x,y,radius,options)
this.r=radius
this.image=loadImage("paper.png")
World.add(world, this.body);

}

display(){
    var pos =this.body.position;
    imageMode(CENTER);
    fill("orange");
    image(this.image,pos.x, pos.y,this.r,this.r);
}






}