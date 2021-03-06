const data = {
  projetos: [
    {
      title: 'Trivia Game',
      description:
        'Trivia game (with https://opentdb.com/api_config.php API) developed as a Group Project exercise for the redux module at Trybe',
      img: './images/Trivia.jpg',
      link: 'https://trivia-game-rho.vercel.app/',
      techs: ['js', 'css', 'html','react','redux'],
    },
    {
      title: 'Ghibli-Movies',
      description:
        'Movies list to watch and flag as watched, developed in 4 hours as a challenge, to practice react-redux with Thunk and Router',
      img: './images/ghibli-movies.jpg',
      link: 'https://ghibli-movies-sigma.vercel.app/',
      techs: ['js', 'css', 'html','react','redux'],
    },
    {
      title: 'Virtual Wallet',
      description:
        'Expenses control using react-redux, developed during Trybe course',
      img: './images/wallet.jpg',
      link: 'https://wallet-alpha.vercel.app/',
      techs: ['js', 'css', 'html','react','redux'],
    },
    {
      title: 'stopwatch',
      description:
        'Stopwatch to help during classes to time our breaks. ',
      img: './images/cronometro.jpg',
      link: 'https://meianelli.github.io/cronometro/',
      techs: ['js', 'css', 'html'],
    },
    {
      title: 'healingGame',
      description:
        'Healing game Im developing to simulate the healing on raids experience I had during the time I played world of warcraft',
      img: './images/healing-project.jpg',
      link: 'https://meianelli.github.io/healing-project/',
      techs: ['js', 'css', 'html'],
    },
    {
      title: 'flyingLetters',
      description:
        'Idea for a portfolio website whhere I used p5.js library to create this cool flying text effect',
      img: './images/flyingLetters.jpg',
      link: 'https://meianelli.github.io/site-resume-moving-text/',
      techs: ['js', 'css', 'html', 'p5'],
    },
    {
      title: 'entrelinhas',
      description:
        'Website for Entrelinhas brand that only had instagram and asked me for a Website to sell her services',
      img: './images/entrelinhas.jpg',
      link: 'https://meianelli.github.io/entrelinhas-website/',
      techs: ['js', 'css', 'html'],
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
        'Another idea for a portfolio website, this time I used the p5.js library to create the tiles puzzle game with years info. You can use arrows keys to play.',
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
    {
      title: 'Moving Picture',
      description:
        'First portifolio website made during Trybe classes. I added the moving picture animation',
      img: './images/movingPic.jpg',
      link: 'https://meianelli.github.io/portifolio/#foto',
      techs: ['js', 'css', 'html', 'p5'],
    },
    {
      title: 'Click game',
      description: 'Learning how to use addeventlistener and add DOM elements',
      img: './images/click.jpg',
      link: 'https://meianelli.github.io/poping-boxes/',
      techs: ['js', 'css', 'html'],
    },
    {
      title: 'Avoa Wix',
      description: 'Another design option for AVOA website',
      img: './images/avoa-wix.jpg',
      link: 'https://meianelli.github.io/avoa-wix/',
      techs: ['js', 'css', 'html'],
    },
  ],
  techslinks: {
    js: '<i class="fab fa-js-square"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    html: '<i class="fab fa-html5"></i>',
    react: '<i class="fab fa-react"></i>',
    redux: '<img src="./images/redux.png" alt="redux">',
    p5: '<img src="./images/p5.png" alt="p5">',
    php: '<i class="fab fa-php"></i>',
    sql: '<img src="./images/SQL.png" alt="sql">',
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
