
/**Ok, so this principle is a bit more trickier for me.
 *  Open/Closed principle means that we should be able to extend the behavior
 * of a software entity without modifying its source code.
 * 
 */

//We do not touch this class anymore
abstract class Shape {
    //Every class must implement this method
    abstract getArea(): number
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number){
        super();
    }
    getArea(): number {
        return this.width * this.height
    }
}
// As you can observe here, we are not modifying the Shape class but extending from it
class Circle extends Shape {
    constructor(private radius: number){
        super();
    }
    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

function totalArea(shapes: Shape[]): number {
    let area = 0;
    for(const shape of shapes){
        area += shape.getArea();
    }
    return area;
}
/**So, here we had the Shape class which is open to extension
 * but close to modification since we do not need to change it anymore
 * The advantage we get here is that the code becomes more flexible
 * and is easier to maintain over time, which reduces technical debt
 */