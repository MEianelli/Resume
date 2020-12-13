/// <reference path="./p5.global-mode.d.ts" />;

import { data } from './data.js';

const cover = document.querySelector('.cover');
const closeButton = document.querySelector('.close-button');
const overlay = document.querySelector('.overlay');
const rightPanel = document.querySelector('.right-panel');

window.onload = function () {
  overlay.addEventListener('click', closeOverlay);
  closeButton.addEventListener('click', closeCover);

  createButtons();

  rotateArts();
};

function createProjectCards() {
  data.projetos.forEach(e => {
    const card = createCard(e);
    cover.innerHTML += card;
  });
}

function closeBigImgContainer() {
  const bigImgContainer = document.querySelector('.bigImgContainer');
  bigImgContainer.style.display = 'none';
}

function showBigImg(imgSrc) {
  const bigImgContainer = document.querySelector('.bigImgContainer');
  const bigArtCard = `<img class="big-art-card" src="${imgSrc}" alt="bigImg">`;
  bigImgContainer.innerHTML = bigArtCard;
  bigImgContainer.style.display = 'block';
}

function applyClickToArtCards() {
  const artCards = document.querySelectorAll('.art-card');
  const bigImgContainer = document.querySelector('.bigImgContainer');
  bigImgContainer.addEventListener('click', closeBigImgContainer);
  artCards.forEach(element => {
    element.addEventListener('click', e => {
      showBigImg(e.target.attributes.src.value);
    });
  });
}

function createArtCards() {
  const bigImgContainer = document.createElement('div');
  bigImgContainer.classList.add('bigImgContainer');
  document.body.appendChild(bigImgContainer);
  for (let i = 1; i <= 16; i++) {
    const artCard = `<img class="art-card" src="./images/Lucas/${i}.jpg" alt="${i}">`;
    cover.innerHTML += artCard;
  }
  setTimeout(() => {
    applyClickToArtCards();
  }, 100);
}

function clearCover() {
  cover.innerHTML = '';
}

function createCoverContent(btn) {
  clearCover();
  if (btn === 'projects') {
    createProjectCards();
    applyLinksToCards();
  } else {
    createArtCards();
  }
  openCover();
}

const closeCover = () => {
  cover.classList.remove('show-hide-cover');

  if (window.innerWidth < 1000) {
    closeButton.style.height = '0';
  } else {
    closeButton.style.width = '0';
  }

  const bigImgContainer = document.querySelector('.bigImgContainer');
  if (bigImgContainer !== null) {
    closeBigImgContainer();
  }
};

const openCover = () => {
  cover.classList.add('show-hide-cover');

  if (window.innerWidth < 1000) {
    closeButton.innerHTML = 'x';
    closeButton.style.height = '30px';
  } else {
    closeButton.style.width = '50px';
  }
};

function rotateArts() {
  let index = 1;
  setInterval(() => {
    let imgHTML = `<img src="./images/Lucas/${index}.jpg" alt="temp">`;
    rightPanel.innerHTML = imgHTML;
    index += 1;
    if (index > 16) index = 1;
  }, 3000);
}

function closeOverlay() {
  const overlay = document.querySelector('.overlay');
  overlay.style.display = 'none';
}

function openOverlay(link) {
  const overlay = document.querySelector('.overlay');
  overlay.style.display = 'block';
  overlay.innerHTML = `
  <div class="close-overlay">X</div>
  <iframe src="${link}" frameborder="0"></iframe>`;
}

function applyLinksToCards() {
  const { projetos } = data;
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      openOverlay(projetos[index].link);
    });
  });
}

function buildTechHTML(arrayOfTechs) {
  return arrayOfTechs.map(e => data.techslinks[e]).join('\n');
}

function createCard(obj) {
  const { title, description, img, techs } = obj;
  const techIcons = buildTechHTML(techs);
  const cardHTML = `
    <div class="project-card">
        <img class="thumbnail" src="${img}" alt="${title}">
        <div>
          <h3>${title}</h3>
          <p>${description}</p>
          <div class="icons">
            ${techIcons}
          </div>
        </div>
      </div>`;
  return cardHTML;
}

function addClickOpenCover(title) {
  const button = document.querySelector(`#${title}`);
  button.addEventListener('click', () => {
    createCoverContent(title);
  });
}

function attachExternalLink(title, link) {
  const pOnButton = document.querySelector(`#${title} p`);
  pOnButton.innerHTML += '  <span><i class="fas fa-external-link-alt"></i> </span>';
  const button = document.querySelector(`#${title}`);
  const tempHTML = button.innerHTML;
  button.innerHTML = `
  <a href="${link}" target="_blank">${tempHTML}</a>
  `;
}

function copyToClip(title, link) {
  const button = document.querySelector(`#${title}`);
  button.addEventListener('click', () => {
    const input = document.createElement('input');
    input.setAttribute('value', link);
    document.body.appendChild(input);
    input.select();
    let result = document.execCommand('copy');
    alert(`${link} copied to clipboard`);
    document.body.removeChild(input);
  });
}

function createButtonHTML({ title, icon, link, toDoFunction }) {
  const buttonsContainer = document.querySelector('.buttons');
  const buttonHTML = `
    <li id="${title}">
    <div>${icon}</div>
    <p>${title}</p>
    </li>
    `;
  buttonsContainer.innerHTML += buttonHTML;
  setTimeout(() => {
    switch (toDoFunction) {
      case 'addClickOpenCover':
        addClickOpenCover(title);
        break;
      case 'copyToClip':
        copyToClip(title, link);
        break;
      case 'attachExternalLink':
        attachExternalLink(title, link);
        break;
    }
  }, 200);
}

function createButtons() {
  const { buttons } = data;
  buttons.forEach(button => createButtonHTML(button));
}
