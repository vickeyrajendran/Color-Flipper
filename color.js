const btn = document.getElementById('btn')
const wrap = document.getElementById('wrap')
const color = document.getElementById('color')
let hex =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener("click",bg)
function bg()
{
    let hexColor='#';
    for(let i=1; i<=6; i++){
     hexColor = hexColor + rand()
    }
    //  (hexColor += rand() both are same
     wrap.style.backgroundColor = hexColor
     color.innerHTML = hexColor
}
    

let rand =()=>{
    let randomIndex = Math.floor(Math.random()*16)
   return hex[randomIndex]
}


