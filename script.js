function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementById('hours').textContent = hours;
    document.getElementById('min').textContent = minutes;
    if(seconds<10){
        document.getElementById('sec').textContent = "0"+ seconds;
    }else{
        document.getElementById('sec').textContent = seconds;
    }
   
}

updateTime(); 
setInterval(updateTime, 1000);