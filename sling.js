class SlingShot{
constructor(bodyA,pointB){
    var options={
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.4,
        length: 40
      
    }
    this.sling= Matter.Constraint.create(options);
    this.pointB= pointB;
    World.add(world,this.sling);
}

display(){
    if(this.sling.bodyA){

        var Pa= this.sling.bodyA.position;
        var Pb= this.pointB;
        push();
        stroke("black");
        strokeWeight(5);
        line(Pa.x,Pa.y,Pb.x,Pb.y);
        pop();
    }
}
 fly(){
this.sling.bodyA= null;
}
 attach(body){
     this.sling.bodyA= body;
 }
}
