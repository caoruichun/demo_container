
var reders = [
 {aa:12},
 {aa:12},
 {aa:12},
 {aa:12},
 {aa:12},
 {aa:12}
]
var total = reders.reduce((sum,order)=>sum+order.aa,0)
console.log(total)
