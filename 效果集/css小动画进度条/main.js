function progress(){
    let progr = document.getElementById('progress');
    let text = document.getElementById('countText');
    let counter = 5;
    let progress = 25;
    let timer = setInterval(function () {  
        if(progress == 500 && counter ==100){
            clearInterval(timer)
        }else{
            progress+=5;
            counter+=1;
            progr.style.width = progress+'px';
            text.innerText = counter+'%'
        }
    },50)
}
progress()