class Hexagon
{
    constructor(x, y, radius)
    {
        var options = {restitution : 0.5, density : 2, friction : 1.5};

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("hexagon-16.png");

        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position
 
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
}