var box 
function setup() 
{
  createCanvas(400, 400);
  box= new Box(50,150,50,50,-3)
}

function draw() 
{
  background(220);
  box.show()
  box.moveUp()

}

