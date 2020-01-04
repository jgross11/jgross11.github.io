console.log("Loading math resources");

class Point{
	constructor(x, y, name){
		this.x = x;
		this.y = y;
		this.name = name;
	}
	
	getSlope(otherPoint){
		return (otherPoint.y - this.y) / (otherPoint.x - this.x);
	}
	
	getDistance(otherPoint){
		return Math.sqrt( ( (this.x - otherPoint.x)*(this.x - otherPoint.x) ) + ( (this.y - otherPoint.y)*(this.y - otherPoint.y) ) );
	}
	
	getMidPoint(otherPoint){
		return new Point( (this.x + otherPoint.x) / 2, (this.y + otherPoint.y) / 2 );
	}
	
	getInverseSlope(otherPoint){
		return -1.0 / this.getSlope(otherPoint);
	}
}

class LineSegment{
	
	constructor(start, end){
		this.start = start;
		this.end = end;
	}
	
}

class Triangle{
	
	constructor(a1, b1, c1){
		this.a = a1;
		this.b = b1;
		this.c = c1;
	}
	
	hasUndefinedSlope(){
		return !isFinite(this.a.getSlope(this.b)) || !isFinite(this.a.getSlope(this.c)) || !isFinite(this.b.getSlope(this.c));
	}
	
	hasSimilarPoints(){
		return (this.a.x == this.b.x && this.a.y == this.b.y) || (this.a.x == this.c.x && this.a.y == this.c.y) || (this.b.x == this.c.x && this.b.y == this.c.y);
	}
	
}

console.log("Math resources successfully loaded");

console.log("Loading functional resources");

function isNumber(value){
	return !isNaN(value); 
}

function parseFraction(text){
    for(var i = 0; i < text.length; i++){
        if(text.charAt(i) == '/'){
            return parseFloat(text.substring(0, i) / parseFloat(text.substring(i+1, text.length)));
        }
    }
    return parseFloat(text);
}

function formatFeedbackElement(element, text, isCorrect){
	element.innerHTML = text;
	if(isCorrect){
		element.style.color = "green";
	}
	else{
		element.style.color = "red";
	}
}

console.log("Functional resources loaded");