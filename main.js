const action = document.getElementById('floating-action');

const search = document.querySelector('.header__search');
const searchInput = document.querySelector('.header__search--input');
const searchIcon = document.querySelector('.header__search--icon');

const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.querySelector('.header__mobile-navigation');
const closeMenu = document.querySelector('.header__mobile-navigation .header__mobile-navigation--close');
const menuCTA = document.querySelector('.header__navigation--item-cta');

const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__action--negative');

const ctas = document.querySelectorAll('.section__call-to-action');
const fullwidthCTAs = document.querySelectorAll('.section__full-width--call-to-action');

const checkbox = document.getElementById('agree-terms');
const checkmark = document.querySelector('.checkmark');

const toggleSearch = () => {
  searchInput.classList.toggle('searching');

  if (searchInput.classList.contains('searching')) {
    searchInput.focus();
  }

  search.addEventListener('focus', () => {
    search.style.background = 'rgba(255, 255, 255, 0.5)';
    search.style.border = '2px solid rgba(255, 255, 255, 1)';
  });
};

const toggleMenu = () => {
  mobileMenu.classList.toggle('open');
  closeMenu.classList.toggle('showing');

  if (mobileMenu.classList.contains('open')) {
    closeMenu.addEventListener('click', toggleMenu);
  } else {
    closeMenu.removeEventListener('click', toggleMenu);
  }
};

const toggleModal = () => {
  modal.classList.toggle('open');
  backdrop.classList.toggle('open');

  closeModal.addEventListener('click', toggleModal);
};

const hideCheckbox = () => {
  console.log(checkbox);
  checkmark.classList.add('checked');
};

const showCheckbox = () => {
  console.log(checkbox);
  checkbox.checked = false;
  checkmark.classList.remove('checked');
};

search.addEventListener('click', toggleSearch);
menuButton.addEventListener('click', toggleMenu);

backdrop.addEventListener('click', toggleModal);
ctas.forEach(cta => cta.addEventListener('click', toggleModal));
fullwidthCTAs.forEach(cta => cta.addEventListener('click', toggleModal));

checkmark.addEventListener('click', showCheckbox);
checkbox.addEventListener('click', hideCheckbox);

menuCTA.addEventListener('animationstart', event => {
  console.log('start', event);
});

menuCTA.addEventListener('animationiteration', event => {
  console.log('iteration', event);
});

menuCTA.addEventListener('animationend', event => {
  console.log('end', event);
});
