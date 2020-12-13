const data = {
  projetos: [
    {
      title: 'flyingLetters',
      description:
        'First attempt/idea for a portfolio website whhere I used p5.js library to create this cool flying text effect',
      img: './images/flyingLetters.jpg',
      link: 'https://meianelli.github.io/site-resume-moving-text/',
      techs: ['js', 'css', 'html', 'p5'],
    },
    {
      title: 'AVOA',
      description:
        'Made the front end e-commerce website for AVOA brand that only has a Instagram page.',
      img: './images/avoaEcommerce.jpg',
      link: 'https://meianelli.github.io/projeto-avoa/',
      techs: ['js', 'css', 'html', 'react'],
    },
    {
      title: 'Puzzle',
      description:
        'Another idea/attempt for a portfolio website, this time I used the p5.js library to create the tiles puzzle game with years info. You can use arrows keys to play.',
      img: './images/puzzle.jpg',
      link: 'https://meianelli.github.io/site-resume-scramble/',
      techs: ['js', 'css', 'html', 'p5'],
    },
    {
      title: 'Word Crack',
      description:
        'Theres a game for cellphones called Word Crack, where you need to find all possible words within a given 4x4 matriz of letters. Using php and SQL I made a script to solve and give you all the answers.',
      img: './images/wordCrack.jpg',
      link: 'https://meianelli.github.io/wordscrack_solver/',
      techs: ['php', 'css', 'html', 'sql'],
    },
    {
      title: 'Plinko',
      description:
        'Fun animation of Plinko game that you can erase the obstacles with mouse to see how it affects the distribution on the bottom.',
      img: './images/plinko.jpg',
      link: 'https://meianelli.github.io/Plinko/',
      techs: ['js', 'css', 'html', 'p5'],
    },
  ],
  techslinks: {
    js: '<i class="fab fa-js-square"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    html: '<i class="fab fa-html5"></i>',
    react: '<i class="fab fa-react"></i>',
    p5: '<img src="./images/p5.png" alt="p5">',
    php: '<i class="fab fa-php"></i>',
    sql: '<img src="./images/SQL.png" alt="p5">',
  },
  buttons: [
    {
      title: 'projects',
      icon: '<i class="far fa-folder"></i>',
      link: 'projects',
      toDoFunction: 'addClickOpenCover',
    },
    {
      title: 'email',
      icon: '<i class="far fa-envelope"></i>',
      link: 'filipelouzano@gmail.com',
      toDoFunction: 'copyToClip',
    },
    {
      title: 'linkedin',
      icon: '<i class="fab fa-linkedin"></i>',
      link: 'https://www.linkedin.com/in/filipelouzano/',
      toDoFunction: 'attachExternalLink',
    },
    {
      title: 'github',
      icon: '<i class="fab fa-github-square"></i>',
      link: 'https://github.com/MEianelli',
      toDoFunction: 'attachExternalLink',
    },
    {
      title: 'whatsapp',
      icon: '<i class="fab fa-whatsapp-square"></i>',
      link: 'https://api.whatsapp.com/send?phone=16478986972&text=Hi%Filipe:',
      toDoFunction: 'attachExternalLink',
    },
    {
      title: 'codewars',
      icon: '<i class="fab fa-galactic-republic"></i>',
      link: 'https://www.codewars.com/users/MEianelli',
      toDoFunction: 'attachExternalLink',
    },
    {
      title: 'hackerrank',
      icon: '<i class="fab fa-hackerrank"></i>',
      link: 'https://www.hackerrank.com/filipelouzano',
      toDoFunction: 'attachExternalLink',
    },
    {
      title: 'art',
      icon: '<i class="fas fa-pencil-alt"></i>',
      link: 'art',
      toDoFunction: 'addClickOpenCover',
    },
  ],
};

export { data };
