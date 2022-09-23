class shape{
    constructor(height,width)
 {
        
        this.height=height;
        this.width=width;
    }  
    
}
shape.prototype.getShape = function getShape() {
  return 'Shape';
};
console.log(shape.prototype.getShape());

class rectangle extends shape
{
  constructor(height,width){
    super(height,width);
    
    
  }
    
    getArea()
    {
        return this.height*this.width;
        
    }
    
}

let r = new rectangle(50, 60);

console.log(r.getArea());
