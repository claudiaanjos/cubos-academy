const menuButton = document.querySelector('.side-menu__button--open');
const sideMenu = document.querySelector('.side-menu');
const menuButtonImg = document.querySelector('.side-menu__button--open img');
const itens = document.querySelectorAll(".item img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const modalClose = document.querySelector(".close-modal");
const arrowNext = document.querySelector(".next-arrow");
const arrowPrevious = document.querySelector(".previous-arrow");
const like = document.querySelector(".like");



let imagemAtual = 0;

menuButton.addEventListener("click", function () {
    sideMenu.classList.toggle("hidden");

    menuButtonImg.src = sideMenu.classList.contains("hidden") ? "assets/closed-menu.svg" : "assets/open-menu.svg" ;
});



itens.forEach(item => item.addEventListener ("click", function (event) {
    modal.classList.remove("hidden");
    modalImg.src = event.target.src;

    arrows(event);

    next(item);
    previous(item);
}));



modalClose.addEventListener("click", function () {
    modal.classList.add("hidden");
});







function next (item) {
    imagemAtual = Number(item.dataset.indice);
    imagemAtual++;
    imagemAtual = imagemAtual.toString();
    arrowNext.addEventListener("click", function () {
        modalImg.src = `assets/gallery/image ${imagemAtual}.png`;
    });
}


function previous(item) {
    imagemAtual = Number(item.dataset.indice);
    imagemAtual--;
    arrowPrevious.addEventListener("click", function () {
        modalImg.src = `assets/gallery/image ${imagemAtual}.png`;
    });
}


function arrows (event) {
    const targetImg = Number(event.target.dataset.indice);

    if (targetImg === 1) {
        arrowPrevious.style.display = "none";
        arrowNext.style.display = "block";
    } else if (targetImg === 10) {
        arrowNext.style.display = "none";
        arrowPrevious.style.display = "block";
    } else {
        arrowNext.style.display = "block";
        arrowPrevious.style.display = "block";
    }
}

