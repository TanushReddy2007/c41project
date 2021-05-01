class Drop{
    constructor(x,y){
        var options={
            density:1,
            restitution:0.5,
            friction:0.7
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.radius=radius
        World.add(world,this.body);
    }
}