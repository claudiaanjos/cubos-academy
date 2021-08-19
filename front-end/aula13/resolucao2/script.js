const body = document.querySelector('body');
const menuToggleButton = document.querySelector('.side-menu__button--hamburguer');
const galleryItems = document.querySelectorAll('.item__image');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal__image');
const modalLike = document.querySelector('.modal__like');
const modalCloseButton = document.querySelector('.modal__button--close');
const modalPreviousButton = document.querySelector('.modal__button--previous');
const modalNextButton = document.querySelector('.modal__button--next');

let currentItem = 0;
let likedImages = [];

menuToggleButton.addEventListener('click', () => {
  const menu = menuToggleButton.parentElement;
  const icon = menuToggleButton.querySelector('.side-menu__icon');

  const estaFechado = menu.classList.contains('side-menu--closed');
  icon.src = estaFechado ? './assets/open-menu.svg' : './assets/closed-menu.svg';
  menu.classList.toggle('side-menu--closed');
});

galleryItems.forEach(function (item, index) {
  item.addEventListener('click', function (event) {
    body.style.overflowY = 'hidden';
    modal.classList.remove('hidden');

    currentItem = index;

    atualizarImagemModal(event.target.src);
    atualizarBotoesModal();
    atualizarLikeModal();
  });
});

modalPreviousButton.addEventListener('click', function (event) {
  event.stopPropagation();

  if (currentItem === 0) {
    return;
  }

  currentItem--;
  
  atualizarImagemModal(galleryItems[currentItem].src);
  atualizarBotoesModal();
  atualizarLikeModal();
});


modalNextButton.addEventListener('click', function (event) {
  event.stopPropagation();

  if (currentItem === galleryItems.length - 1) {
    return;
  }

  currentItem++;
  
  atualizarImagemModal(galleryItems[currentItem].src);
  atualizarBotoesModal();
  atualizarLikeModal();
});

modalImage.addEventListener('click', function (event) {
  event.stopPropagation();
});

modalImage.addEventListener('dblclick', function () {
  const itemLike = galleryItems[currentItem].previousElementSibling;

  if (likedImages.includes(currentItem)) {
    likedImages = likedImages.filter(function (likedImage) {
      return likedImage !== currentItem;
    });
    modalLike.classList.add('hidden');
    itemLike.classList.add('hidden');
  } else {
    likedImages.push(currentItem);
    modalLike.classList.remove('hidden');
    itemLike.classList.remove('hidden');
  }
})

modalCloseButton.addEventListener('click', fecharModal);
modal.addEventListener('click', fecharModal);

function fecharModal() {
  modal.classList.add('hidden');
  body.style.overflowY = 'auto';
}

function atualizarImagemModal(novaImagem) {
  modalImage.src = novaImagem;
}

function atualizarBotoesModal() {
  if (currentItem === 0) {
    modalPreviousButton.classList.add('hidden');
  } else {
    modalPreviousButton.classList.remove('hidden');
  }

  if (currentItem === galleryItems.length - 1) {
    modalNextButton.classList.add('hidden');
  } else {
    modalNextButton.classList.remove('hidden');
  }
}

function atualizarLikeModal() {
  if (likedImages.includes(currentItem)) {
    modalLike.classList.remove('hidden');
  } else {
    modalLike.classList.add('hidden');
  }
}