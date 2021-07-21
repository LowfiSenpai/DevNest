//TOO CHECK IF THE INPUT IS ARRAY OR NOT
function is_array(x){
	return (Array.isArray(x));
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//TO CLONE AN ARRAY
function array_Clone(x){
	return (x.slice(0));
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//Function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.
function first(x,y){
	
	if(y==undefined){
		y=0;
		return x[0];
	}
	else if(x.length>=y & y>0){
		newArray=[];
		for(i=0;i<y;i++){
			newArray[i]=x[i]; 
			}
		return newArray;
	}
	else if(x.length<y){
		return x;
	}
	else{
		return [];
	}
	
	
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//Program to join all elements of the following array into a string.
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(""));
console.log(myColor.join(","));
console.log(myColor.join("+"));

//JavaScript program to find the most frequent item of an array.
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var x = 0;
var y = '0';
arr1.forEach((item)=>{
	if((arr1.filter(z=>z===item)).length>x){
		x=(arr1.filter(z=>z===item)).length;
		y=item;
        }
})
console.log(y+" ( "+x+" times)");