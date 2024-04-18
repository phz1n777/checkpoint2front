// Script do Menu
const abrirMenu = () => {
    document.getElementById("menu").classList.toggle("abrir");
}

// Script do botao de salvar
const preencherCoracao = () => {
    const coracao = document.getElementById('coracao');
    const path = coracao.querySelector('path');
    const corAtual = path.getAttribute('fill');
    if (corAtual === 'red') {
        path.setAttribute('fill', ''); 
        localStorage.setItem('coracaoPreenchido', 'false'); 
    } else {
        path.setAttribute('fill', 'red'); 
        localStorage.setItem('coracaoPreenchido', 'true'); 
    }
}

// Script da galeria de fotos
let Index = 0;
const images = document.querySelectorAll('#imagens img');
const totalImages = images.length;

function openLightbox(event) {
    if (event.target.tagName === 'IMG') {
        const clickedIndex = Array.from(images).indexOf(event.target);
        currentIndex = clickedIndex;
        updateLightboxImage();
        document.getElementById('lightbox').style.display = 'flex';
    }
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    Index += direction;
    if (Index >= totalImages) {
        Index = 0;
    } else if (Index < 0) {
        Index = totalImages - 1;
    }
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImg = document.getElementById('lightbox-img');
    const thumbnailContainer = document.getElementById('thumbnail-container');

    lightboxImg.src = images[Index].src;
    thumbnailContainer.innerHTML = '';

    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.src;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => updateMainImage(index));
        thumbnailContainer.appendChild(thumbnail);
    });

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails[Index].classList.add('active-thumbnail');
}

function updateMainImage(index) {
    Index = index;
    updateLightboxImage();
}

updateLightboxImage();

document.addEventListener('keydown', function (e) {
    if (document.getElementById('lightbox').style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});

// Script dos comentarios 

document.getElementById("profile-pic1").innerHTML = '<img src="https://a0.muscache.com/im/pictures/user/085741aa-fe71-4e3b-af8e-38c717b1e341.jpg?im_w=240" alt="Diegos profile picture" id="profile-pic1">'
document.getElementById("comment1").innerHTML = '<p>Adoro muito mesmo…bem tranquilo…Mike e outro <br> moco muito gentil.ajuda gente muito..desjar viajar <br> outra vez</p>'
document.getElementById("user-name1").innerHTML = '<p>Chun</p>'
document.getElementById("cidade1").innerHTML = '<p>Brasil</p>'
document.getElementById("avaliacao1").innerHTML = '<p>★★★★★ . 3 semanas atrás . Ficou algumas noites</p>'


// COMENTARIO2
document.getElementById("profile-pic2").innerHTML = '<img src="https://a0.muscache.com/im/pictures/user/03872ad3-c8af-4910-9dcd-ab3d989d6cd7.jpg?im_w=240" alt="Victor Hugo profile picture" id="profile-pic2"></img>'
document.getElementById("comment2").innerHTML = '<p>A casa da árvore é uma experiência incrível. <br> Maycon muito atencioso.</p>'
document.getElementById("user-name2").innerHTML = '<p>Victor Hugo</p>'
document.getElementById("cidade2").innerHTML = '<p>São Paulo, Brasil</p>'
document.getElementById("avaliacao2").innerHTML = '<p>★★★★★ . 2 semanas atrás . Ficou algumas noites</p>'


