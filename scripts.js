const buttonSecret = document.getElementById('show');
const divSecret = document.getElementById('secret');
let showSecret = false

// modale
const modal = document.querySelector('.galerie__modal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const images = document.querySelectorAll('.gallery img');

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

images.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = "flex";
        modal.classList.remove('hidden');
        modalImg.src = this.src;
        modalImg.alt = this.alt; // Mettre l'image dans la modale
        // captionText.innerHTML = this.alt; // Ajouter la légende de l'image
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