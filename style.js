let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')
let ampm = document.getElementById('ampm')

setInterval(()=>{
    let TodayDate = new Date();
    let hr = TodayDate.getHours();
    let min = TodayDate.getMinutes();
    let seg = TodayDate.getSeconds();

    if(hr < 12){
        ampm.innerHTML = 'AM'
    }
    else{
        ampm.innerHTML = 'PM'
    }
    
    if(hr < 10){
        hr = '0' + hr
    }
    if (min < 10){
        min = '0' + min
    }
    if (seg < 10){
        seg = '0' + seg
    }

    horas.innerHTML = hr
    minutos.innerHTML = min
    segundos.innerHTML = seg

})