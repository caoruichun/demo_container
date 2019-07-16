var animals = [
	{name:'a',age:'aa'},
	{name:'b',age:'bb'},
	{name:'c',age:'bb'},
	{name:'d',age:'dd'},
	{name:'e',age:'ee'},
	{name:'f',age:'ff'}
]


var isdogs=function(animals){
	return animals.age ==='bb'
}
var dogs = animals.filter(isdogs)
//============
// var dogs = []

// for(var i = 0; i<animals.length; i++){
// 	if(animals[i].age === 'bb')
// 		dogs.push(animals[i])
// 	asd
// }
// 
console.log(dogs)
