//Program to list the properties of a JavaScript object. 
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.keys(student));


//Program to delete the rollno property from the following object.  
console.log(student);
delete student.rollno;
console.log(student);


//Program to get the length of a JavaScript object.  
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.keys(student).length);


//Program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
                { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
                { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

for(let item of library){
	console.log("The author of the book "+item.title+" is "+item.author+" and the reading status is "+item.readingStatus);	
}


//Program to get the volume of a Cylinder with four decimal places using object classes.
var R = prompt("ENTER THE RADIUS OF CYLINDER:");
var H = prompt("ENTER THE HEIGHT OF CYLINDER:");
console.log("The volume of the cylinder = "+2*Math.PI*R*H);


//Program to sort an array of JavaScript objects. 
var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

console.log(library);

function sortArr(x){
	for(i=0; i<(x.length-1); i++){
		if(x[i].libraryID<x[i+1].libraryID){
			var a = x[i];
			x[i] = x[i+1];
			x[i+1] = a;
		}
	}
}

sortArr(library);
console.log(library);