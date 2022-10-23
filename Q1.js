class shape{
    constructor(height,width,radius)
 {
        
        this.height=height;
        this.width=width;
        this.radius=radius;
    }  
    
}
function getShape(shape,height,width,radius) {
  let r = new rectangle(50, 60);
  let r1 = new circle(0,0,5);

  switch(shape) {

    case 'circle':
      var circleArea = r1.getCircleArea();  
    return 'This is circle' + circleArea;
      break;
    case 'rectangle':
      var rectangleArea = r.getRectangleArea();
      return 'This is rectangle' + rectangleArea;
      break;
    default:
      return 'Please enter valid shape';
  }
};


class rectangle extends shape
{
  constructor(height,width){
    super(height,width);
  }
    
    getRectangleArea()
    {
        return this.height*this.width;
    }
    
}
class circle extends shape
{
  constructor(height,width,radius){
    super(height,width,radius);   
  }
    
  getCircleArea()
  {
      return Math.PI * this.radius * this.radius;        
  }
    
}
let r = new rectangle(50, 60);
let r1 = new circle(0,0,5);
console.log(r.getRectangleArea());
console.log(r1.getCircleArea());
console.log(getShape('circle'));