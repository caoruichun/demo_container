
/*const fs = require('fs')
var output = fs.readFileSync('data.txt').split('\n')
console.log(output.toString())*/

// let dragon = (name, size, element) =>
//  name + 'is a' + size + 'dragon that breathes' + element + ''


// let dragon = name =>size =>element =>name+ 'is a'+size+ 'ddd'+element +'!!';

// let output = dragon('aa')('bb')('cc')

let a = new Promise((rej,res)=>{
	setTimeout(()=>{
		var b = 2;
		rej(b)
	},1000)
})

a.then(function(b){
	console.log(b)
})