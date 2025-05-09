// Translations
// translation.js

const translations = {
  de: {
    // Navigation
    about: 'Über mich',
    projects: 'Projekte',
    contact: 'Kontakt',

    // Home Section
    jobTitle: 'Webseitenentwickler',
    homeDesc:
      'Henify_ konzentriert sich auf den Aufbau zugänglicher und benutzerfreundlicher Webseiten.',

    // About Section
    aboutTitle: 'ÜBER MICH',
    aboutP1:
      'Ich bin ein leidenschaftlicher Technik-Enthusiast mit einem starken Antrieb für Full-Stack-Webentwicklung und Cybersicherheit. Wenn ich nicht studiere, entwerfe und style ich verschiedene Benutzeroberflächen <b>(UI)</b> und verbessere kontinuierlich meine Fähigkeiten in React, Node.js, Express.js und MongoDB.',

    aboutP2:
      'Mein Tech-Stack umfasst <b>MERN</b> (<b class="tak">MongoDB</b>, <b class="tak">Express.js</b>, <b class="tak">React</b>, <b class="tak">Node.js</b>) sowie GitHub für Entwicklung und Versionskontrolle. Ich lerne stetig, skalierbare, sichere und benutzerfreundliche Websites zu erstellen. In meiner Freizeit unterrichte ich HTML und CSS in Outreach-Kursen für Anfänger.',

    aboutP3:
      'Ich vertiefe mein Verständnis von Backend-Systemen, <b class="tak">Server-APIs</b> und Konzepten der Sicherheitsentwicklung, um meine Fähigkeiten über das Frontend hinaus zu erweitern. <b class="tak">Mein</b> aktueller Workflow umfasst Tools wie <b>Visual Studio Code</b> und <b>PyCharm</b>. Ich verfeinere stetig meine JavaScript- und Python-Fähigkeiten, um internationalen Standards gerecht zu werden – insbesondere für Chancen in <b class="tak">Deutschlands</b> Tech-Ökosystem.',

    aboutP4: `Ob mehrsprachiger Code, <b class="tak">Sicherheitspraktiken</b> oder echte Projekte – ich bringe <b class="tak">Leidenschaft</b> und Disziplin in alles ein. Meine Reise wird von mehr als nur der <b class="tak">Liebe</b> zum Code angetrieben – sie geht darum, eine Zukunft aufzubauen, in der ich erschaffe, beitrage und <b class="tak">global</b> gedeihe.`,

    aboutP5: 'Henify_',

    // Projects Section
    projectsTitle: 'PROJEKTE',
    cssIntroTitle: 'CSS-Intro <span>&#8599;</span>',
    cssDesc: `Ein deutsch inspiriertes Projekt, basierend auf einem YouTube-Tutorial von <a href="https://youtube.com/@traversymedia?si=rlugzAA0gD6-DKwj" rel="noopener noreferrer" target="_blank">Brad Traversy</a>. Es behandelt HTML5-Syntax, VSCode-Setup, das CSS-Boxmodell und mehr.`,

    snowAnimationTitle: 'Schneeanimation <span>&#8599;</span>',
    snowDesc:
      'Eine einfache Website zur Visualisierung eines <b>Schneeeffekts</b> mit JavaScript. Deutsch inspiriert, mit Fokus auf ein einfaches, benutzerfreundliches UI.',

    observerTitle: 'Observer & Zähler <span>&#8599;</span>',
    observerDesc: `Observer- API mit JavaScript, die ein Zähleffekt beim Scrollen aktiviert.Verwendet in einem <a href="https://1501henify.github.io/frontend-project-idea/assets/HTML/about.html" rel="noopener noreferrer" target="_blank">meiner</a> <a href="https://phlox.pro" rel="noopener noreferrer" target="_blank">Phlox-</a>inspirierten Projekte.`,

    pythonTitle: 'Python <span>&#8599;</span>',
    pythonDesc:
      'Ich lerne Python zusammen mit Frameworks wie  <b class="tak">Django</b> und <b class="tak">Flask</b> zur Unterstützung der Webentwicklung.',
    repoView: 'Alle Repositories ansehen...',

    // Contact Section
    contactTitle: 'KONTAKTE',
    contactWa: `verfügbar für Website-bezongene projekte, Fragen oder Interessen; nur ein <b class="tak">dm</b> entfernt`,
    contactSlack: `Ich bin verfügbar, um zu Open-Source-frontend-Designs <b class="tak">beizutragen</b>. Ich mochte an aufregenden Webprojekten <b class="tak">zusammenarbeiten</b>.`,

    // Footer
    bChiang: `Website von  <a href="https://brittanychiang.com/" rel="noopener noreferrer" target="_blank">Brittany Chiang</a> inspiriert`,
    techStack: 'Diese Website wurde mit HTML, CSS und JavaScript erstellt.',
    footer: 'Alle Rechte vorbehalten',
  },
};

const switcher = document.getElementById('language-switcher');
const elements = {
  aboutNav: document.querySelector('a[href="#aboutPage"]'),
  projectsNav: document.querySelector('a[href="#projectsPage"]'),
  contactNav: document.querySelector('a[href="#contactPage"]'),
  jobTitle: document.querySelector('.info-text h3'),
  homeDesc: document.querySelector('.info-text p'),
  aboutTitle: document.querySelector('.about h1'),
  aboutP1: document.querySelector('.about .aboutP1'),
  aboutP2: document.querySelector('.about .aboutP2'),
  aboutP3: document.querySelector('.about .aboutP3'),
  aboutP4: document.querySelector('.about .aboutP4'),
  aboutP5: document.querySelector('.about .aboutP5'),
  projectsTitle: document.querySelector('.projects h1'),
  cssIntroTitle: document.querySelector('.projects .pro-card .cssIntroTitle'),
  cssDesc: document.querySelector('.projects .pro-card .cssDesc'),
  snowAnimationTitle: document.querySelector(
    '.projects .pro-card .snowAnimationTitle'
  ),
  snowDesc: document.querySelector('.projects .pro-card .snowDesc'),
  observerTitle: document.querySelector('.projects .pro-card .observerTitle'),
  observerDesc: document.querySelector('.projects .pro-card .observerDesc'),
  pythonTitle: document.querySelector('.projects .pro-card .pythonTitle'),
  pythonDesc: document.querySelector('.projects .pro-card .pythonDesc'),
  repoView: document.querySelector('.projects > p > a'),
  contactTitle: document.querySelector('.contact h1'),
  contactWa: document.querySelector('.contact .contactWa'),
  contactSlack: document.querySelector('.contact .contactSlack'),
  bChiang: document.querySelector('footer .bChiang'),
  techStack: document.querySelector('footer .techStack'),
  footer: document.querySelector('footer .footer'),
};

switcher.addEventListener('change', (e) => {
  const lang = e.target.value;
  const t = translations[lang];

  if (lang === 'de') {
    elements.aboutNav.innerHTML = t.about;
    elements.projectsNav.innerHTML = t.projects;
    elements.contactNav.innerHTML = t.contact;
    elements.jobTitle.innerHTML = t.jobTitle;
    elements.homeDesc.innerHTML = t.homeDesc;
    elements.aboutTitle.innerHTML = t.aboutTitle;

    elements.aboutP1.innerHTML = t.aboutP1;
    elements.aboutP2.innerHTML = t.aboutP2;
    elements.aboutP3.innerHTML = t.aboutP3;
    elements.aboutP4.innerHTML = t.aboutP4;
    elements.aboutP5.innerHTML = t.aboutP5;

    elements.projectsTitle.innerHTML = t.projectsTitle;
    elements.cssIntroTitle.innerHTML = t.cssIntroTitle;
    elements.cssDesc.innerHTML = t.cssDesc;
    elements.snowAnimationTitle.innerHTML = t.snowAnimationTitle;
    elements.snowDesc.innerHTML = t.snowDesc;
    elements.observerTitle.innerHTML = t.observerTitle;
    elements.observerDesc.innerHTML = t.observerDesc;
    elements.pythonTitle.innerHTML = t.pythonTitle;
    elements.pythonDesc.innerHTML = t.pythonDesc;
    elements.repoView.innerHTML = t.repoView;
    elements.contactTitle.innerHTML = t.contactTitle;
    elements.contactWa.innerHTML = t.contactWa;
    elements.contactSlack.innerHTML = t.contactSlack;
    elements.bChiang.innerHTML = t.bChiang;
    elements.techStack.innerHTML = t.techStack;
    elements.footer.innerHTML = t.footer;
  } else {
    location.reload();
  }
});
