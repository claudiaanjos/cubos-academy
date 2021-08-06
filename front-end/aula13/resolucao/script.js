const menuToggleButton = document.querySelector('.side-menu__button--hamburguer');
const galleryItems = document.querySelectorAll('.item__image');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal__image');
const modalLike = document.querySelector('.modal__like');
const modalCloseButton = document.querySelector('.modal__button--close');
const modalPreviousButton = document.querySelector('.modal__button--previous');
const modalNextButton = document.querySelector('.modal__button--next');

let currentImage = 0;
let liked = [];

menuToggleButton.addEventListener('click', () => {
  const menu = menuToggleButton.parentElement;
  const icon = menuToggleButton.querySelector('.side-menu__icon');

  const estaFechado = menu.classList.contains('side-menu--closed');
  icon.src = estaFechado ? './assets/open-menu.svg' : './assets/closed-menu.svg';
  menu.classList.toggle('side-menu--closed');
});

galleryItems.forEach(item => {
  item.addEventListener('click', (event) => {
    modal.classList.remove('hidden');
    currentImage = Number(event.target.dataset.index);

    if (liked.includes(currentImage)) {
      modalLike.classList.remove('hidden');
    } else {
      modalLike.classList.add('hidden');
    }

    updateModalImg(event.target.src); 
    updateModalButtons();
  });

  const itemLike = item.previousElementSibling;
  if (liked.includes(item.dataset.index)) {
    itemLike.classList.remove('hidden');
  } else {
    itemLike.classList.add('hidden');
  }
});

modalImage.addEventListener('click', (event) => {
  event.stopPropagation();
});

// NOVIDADE
modalImage.addEventListener('dblclick', () => {
  // NOVIDADE
  const itemLike = galleryItems[currentImage].previousElementSibling;

  if (liked.includes(currentImage)) {
    liked = liked.filter(like => like !== currentImage);
    itemLike.classList.add('hidden');
    modalLike.classList.add('hidden');
  } else {
    liked.push(currentImage);
    itemLike.classList.remove('hidden');
    modalLike.classList.remove('hidden');
  }
});

modalPreviousButton.addEventListener('click', (event) => {
  event.stopPropagation();

  currentImage--;
  const image = galleryItems[currentImage];
  updateModalImg(image.src);
  updateModalButtons();
  updateModalLike();
});

modalNextButton.addEventListener('click', (event) => {
  event.stopPropagation();

  currentImage++;

  const image = galleryItems[currentImage];
  updateModalImg(image.src);
  updateModalButtons();
  updateModalLike();
});

function updateModalImg(src) {
  modalImage.src = src;
}

function updateModalButtons() {
  modalPreviousButton.classList.remove('hidden');
  modalNextButton.classList.remove('hidden');
  
  if (currentImage === 0) {
    modalPreviousButton.classList.add('hidden');
  }

  if (currentImage === 9) {
    modalNextButton.classList.add('hidden');
  }
}

function updateModalLike() {
  if (liked.includes(currentImage)) {
    modalLike.classList.remove('hidden');
  } else {
    modalLike.classList.add('hidden');
  }
}

modal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});