const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const closeMenu = document.querySelector('.bi-x-lg');

const toggle = () => {
  navList.classList.toggle('hide');
  document.body.classList.toggle('no-scroll');
};

menu.addEventListener('click', () => {
  toggle();
});

closeMenu.addEventListener('click', () => {
  toggle();
});

const guest = [
  {
    name: 'JOSE E RODRIQUEZ',
    about: '301 East Erie Avenue Philadelphia Pennsylvania 19134.',
    description: 'HHS BENEFIACIARY.',
    image: './images/jam_met.jpg',
    display: 'block',
  },   {
    name: 'MICHAEL JOHN PUCKETT ',
    about: '15742 WILLIAMS STREET APARTMENTS 138 TUSTIN CALIFORNIA 92780.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/mob_squad.jpg',
    display: 'block',
  }, {
    name: 'FAST & RELIABLE FEDEX SERVICE',
    about: 'Lorem, ipsum dolor sit amet consect.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/fedex_bus2.jpg',
    display: 'hs hide-speaker',
  }, {
    name: 'AGENT BECERERA SNR',
    about: ' EXPERIENCE AGENT THAT CAN GUILD YOU THROUGH',
    description: '<a href="https://www.facebook.com/Xavierbecererasnr0149?mibextid=LQQJ4d" target="_blank">CONTACT OUR TREMENDIOUS AGENT HERE👈</a>.',
    image: './images/becere_me.jpg',
    display: 'hs hide-speaker',
  }, {
    name: 'WARREN EMIL SEAMAN',
    about: '425 ADLENA DRIVE FULLERTON,CALIFORNIA 92833.',
    description: 'HHS BENEFICIARY.',
    image: './images/jamee_mer.jpg',
    display: 'hs hide-speaker',
  }, {
    name: 'JOSE ATONIO CASILLAS VILLANUEVA.',
    about: '  316 fairview bridgeport WA. 98813.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/jose_face.jpg',
    display: 'hs hide-speaker',
  },{
    name: 'RICK PYATT',
    about: '242w Paramount AVE saltlake city UT 84115',
    description: 'HHS Beneficiary.',
    image: './images/jameeee_net.jpg',
    display: 'block',
  },{
    name: 'CURTIS LYNN DENNIES',
    about: '5145 STREET  1045 E SALT LAKE CITY UTAH 84117.',
    description: ' HHS PATICIPANT.',
    image: './images/jamwe_frg.jpg',
    display: 'block',
  },
];

function createSpeakers(prop) {
  const subject = document.querySelector('#col-d');
  subject.insertAdjacentHTML('beforeend',
    `<div id="speaker" class="${prop.display}">
    <div><img src="${prop.image}" alt="Speaker image"></div>
    <div>
    <h3>${prop.name}</h3>
    <p class="color-secondary italic">${prop.about}</p>
    <hr>
    <p id="primary-text">${prop.description}</p>
    </div>
    </div>`);
}

for (let i = 0; i < guest.length; i += 1) {
  createSpeakers(guest[i]);
}

const btn = document.querySelector('.btn-more');
btn.addEventListener('click', () => {
  btn.classList.toggle('show');
  if (btn.classList.contains('show')) {
    btn.innerHTML = 'LESS <i class="bi bi-chevron-up"></i>';
  } else {
    btn.innerHTML = 'MORE <i class="bi bi-chevron-down"></i>';
  }
  document.querySelectorAll('.hs').forEach((elem) => {
    elem.classList.toggle('hide-speaker');
  });
});


let slideIndex = 0;
function showSlides() {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slideIndex += 1;
  if (slideIndex > slides.length) { slideIndex = 1; }
  for (i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();