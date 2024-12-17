// DOM secret
const buttonSecret = document.getElementById('show');
const divSecret = document.getElementById('secret');
let showSecret = false

// DOM modale
const modal = document.querySelector('.galerie__modal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const images = document.querySelectorAll('.gallery img');

// DOM formulaire
const forumulaire = document.querySelector('.form');
const formMessage = document.querySelector('.form__message');

// gestion du secret
clickShow = buttonSecret.addEventListener('click', ()=>{
    if(showSecret){
        divSecret.classList.add('hidden');
        buttonSecret.innerHTML = 'Dévoiler le secret';
        showSecret= false;
    }else{
        divSecret.classList.remove('hidden');
        buttonSecret.innerHTML = 'Masquer le secret';
        showSecret = true;
    }
})

// gestion de la modale
images.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = "flex";
        modal.classList.remove('hidden');
        modalImg.src = this.src;
        modalImg.alt = this.alt; // Mettre l'image dans la modale
        
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = "none"; // Masquer la modale
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// gestion du formulaire
forumulaire.addEventListener('submit',(e)=>{
    e.preventDefault();

    formMessage.innerHTML = "";
    formMessage.classList.remove('success','error');

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // tous les champs sont remplis
    if(
        !name ||
        !email ||
        !message
    ){
        formMessage.innerHTML = 'Tous les champs sont obligatoires';
        formMessage.classList.add('error');
        return;
    }

    // le message fait plus de 50 caractères
    if(message.length < 50){
        formMessage.innerHTML = 'le message doit comporter au moins 50 caractères';
        formMessage.classList.add('error');
        return
    }

    // l'addresse mail est valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        formMessage.innerHTML = 'Veuillez saisir un email valide';
        formMessage.classList.add('error');
        return
    }

    formMessage.innerHTML = 'votre message a été envoyé';
    formMessage.classList.add('success');

    forumulaire.reset();

})