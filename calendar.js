//vamos a suponer que el 1 de enero es lunes

function getDayOfWeek(day,month, year) {
    if(day<7){
console.log(dayOfWeek[day-1]) 
    } else{
    myDay= day%((dayOfWeek.length)+1)
    console.log(dayOfWeek[myDay])
    }
}

const dayOfWeek=['Monday', 'Tuesday', 'Wendnesday', 'Tursday', 'Friday', 'Saturday', 'Sunday']
getDayOfWeek(10, 1,1)
