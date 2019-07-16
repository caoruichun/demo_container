let count = (num) => {
	if(num===0) return
  console.log(num)
  setTimeout(function(){
  	count(num-1)
  },1000)
}
count(10)