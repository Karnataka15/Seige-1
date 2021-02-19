class Block3l
{
    constructor(x, y, width, height)
    {
        var options = {isStatic : false, restitution : 0.5, density : 1, friction : 1};

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;

        push();
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}