/// <reference path="./p5.global-mode.d.ts" />;

import { data } from './data.js';

window.onload = function () {
  const cover = document.querySelector('.cover');
  const closeButton = document.querySelector('.close-button');
  const overlay = document.querySelector('.overlay');

  const closeCover = () => {
    cover.classList.remove('show-hide-cover');
    closeButton.style.width = '0';
  };

  const openCover = () => {
    cover.classList.add('show-hide-cover');
    closeButton.style.width = '50px';
  };

  overlay.addEventListener('click', closeOverlay);

  createButtons();

  closeButton.addEventListener('click', closeCover);
  const buttons = document.querySelectorAll('.buttons li');
  buttons.forEach(e => e.addEventListener('click', openCover));

  data.projetos.forEach(e => {
    const card = createCard(e);
    cover.innerHTML += card;
  });

  applyLinks();

  const rightPanel = document.querySelector('.right-panel');
  let index = 1;
  setInterval(() => {
    let imgHTML = `<img src="./images/Lucas/${index}.jpg" alt="temp">`;
    rightPanel.innerHTML = imgHTML;
    index += 1;
    if (index > 16) index = 1;
  }, 3000);
};

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

function applyLinks() {
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
    ${buttons[key]}
    <p>${key}</p>
    </li>
    `;
    buttonsContainer.innerHTML += buttonHTML;
  });
}
