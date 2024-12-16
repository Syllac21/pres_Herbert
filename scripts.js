const buttonSecret = document.getElementById('show');
const divSecret = document.getElementById('secret');
let showSecret = false

clickShow= buttonSecret.addEventListener('click', ()=>{
    if(showSecret){
        divSecret.classList.add('hidden');
        showSecret= false;
    }else{
        divSecret.classList.remove('hidden');
        showSecret = true;
    }
})
