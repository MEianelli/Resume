/// <reference path="./p5.global-mode.d.ts" />;

import { data } from './data.js';

const cover = document.querySelector('.cover');
const closeButton = document.querySelector('.close-button');
const overlay = document.querySelector('.overlay');

window.onload = function () {
  overlay.addEventListener('click', closeOverlay);
  closeButton.addEventListener('click', closeCover);

  createButtons();
  const buttons = document.querySelectorAll('.buttons li');

  buttons[0].addEventListener('click', () => {
    createCoverContent('projects');
  });

  buttons[buttons.length - 1].addEventListener('click', () => {
    createCoverContent('art');
  });

  rotateArts();
};

function createProjectCards() {
  data.projetos.forEach(e => {
    const card = createCard(e);
    cover.innerHTML += card;
  });
}

function createArtCards() {
  for (let i = 1; i <= 16; i++) {
    const artCard = `<img class="art-card" src="./images/Lucas/${i}.jpg" alt="temp">`;
    cover.innerHTML += artCard;
  }
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
  closeButton.style.width = '0';
};

const openCover = () => {
  cover.classList.add('show-hide-cover');
  closeButton.style.width = '50px';
};

function rotateArts() {
  const rightPanel = document.querySelector('.right-panel');
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
  //window.open(link, '_blank');
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

function createButtons() {
  const { buttons } = data;
  const buttonsContainer = document.querySelector('.buttons');
  Object.keys(buttons).forEach(key => {
    const buttonHTML = `
    <li>
    ${buttons[key][0]}
    <p>${key}</p>
    </li>
    `;
    if (buttons[key][1]) {
      const aElement = `<a href="${buttons[key][1]}" target="_blank">${buttonHTML}</a>`;
      buttonsContainer.innerHTML += aElement;
    } else {
      buttonsContainer.innerHTML += buttonHTML;
    }
  });
}
