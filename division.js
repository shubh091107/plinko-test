class Division{
    constructor(x,y){
        var op = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,10,200,op)
        this.width = 10
        this.height = 200
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        fill("pink")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
       pop()
    }
}