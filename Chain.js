class Slingshot{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
        this.point = point;
        console.log("property"+ this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }

    display(){
        
        var pointB = this.point;
        
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }
    }
    
}
