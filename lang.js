// Define the translations
const translations = {
    en: {
      title: "Norbert Molnár",
      role1: "Backend Developer",
      role2: "Data Engineer",
      contact: "Contact",
      email: "Email:",
      phone: "Phone:",
      skills: "Skills",
      profile: "Professional Profile",
      profileText: "I am a versatile IT professional with a primary focus on backend development, but with extensive experience in full-stack development and system administration tasks as well. My expertise lies in Python and NodeJS technologies, which I successfully apply in designing and implementing robust and scalable backend systems. My recently acquired Data Engineer certification complements my existing skills, enabling me to solve complex data handling tasks. Additionally, I have experience in cloud-based solutions, allowing me to develop and operate modern, cloud-based applications. My system administrator background ensures that the developed systems are not only efficient but also easily maintainable and secure. I know and effectively apply the latest AI technologies in my daily work, integrating them into development processes to increase efficiency and innovation.",
      experience: "Professional Experience",
      exp1Title: "Senior Backend Developer - TechCo Ltd.",
      exp1Date: "2020 - Present",
      exp1Bullet1: "Development of highly scalable microservices using Python and NodeJS",
      exp1Bullet2: "Database optimization and performance tuning",
      exp1Bullet3: "Establishment and maintenance of CI/CD processes",
      exp2Title: "Fullstack Developer - InnoSoft Plc.",
      exp2Date: "2018 - 2020",
      exp2Bullet1: "Web application development using MERN stack",
      exp2Bullet2: "Design and implementation of RESTful APIs",
      exp2Bullet3: "Application of Agile development methodologies",
      education: "Education and Qualifications",
      edu1: "Data Engineer Certification - DataCamp",
      edu1Date: "2023",
      edu2: "BSc Computer Science - Example University",
      edu2Date: "2014 - 2018"
    },
    hu: {
      title: "Molnár Norbert",
      role1: "Backend Fejlesztő",
      role2: "Adatmérnök",
      contact: "Kapcsolat",
      email: "Email:",
      phone: "Telefon:",
      skills: "Készségek",
      profile: "Szakmai Profil",
      profileText: "Sokoldalú IT szakember vagyok, elsődlegesen backend fejlesztői fókusszal, de széleskörű tapasztalattal rendelkezem fullstack fejlesztésben és rendszergazdai feladatokban is. Szakterületem a Python és NodeJS technológiák, amelyeket sikeresen alkalmazok robusztus és skálázható backend rendszerek tervezésében és implementálásában. Nemrég megszerzett Data Engineer képesítésem kiegészíti meglévő készségeimet, lehetővé téve komplex adatkezelési feladatok megoldását. Emellett tapasztalatom van cloud-alapú megoldások terén, ami lehetővé teszi számomra, hogy modern, felhő alapú alkalmazásokat fejlesszek és üzemeltessek. Rendszergazdai hátterem biztosítja, hogy a fejlesztett rendszerek ne csak hatékonyak, de könnyen karbantarthatók és biztonságosak is legyenek. Ismerem és mindennapi munkáimban hatékonyan alkalmazom a legújabb AI technológiákat, integrálva azokat a fejlesztési folyamatokba a hatékonyság és innováció növelése érdekében.",
      experience: "Szakmai Tapasztalat",
      exp1Title: "Senior Backend Fejlesztő - TechCo Kft.",
      exp1Date: "2020 - Jelenlegi",
      exp1Bullet1: "Nagymértékben skálázható mikroszolgáltatások fejlesztése Python és NodeJS használatával",
      exp1Bullet2: "Adatbázis optimalizálás és teljesítmény hangolás",
      exp1Bullet3: "CI/CD folyamatok kialakítása és karbantartása",
      exp2Title: "Fullstack Fejlesztő - InnoSoft Zrt.",
      exp2Date: "2018 - 2020",
      exp2Bullet1: "Webalkalmazások fejlesztése MERN stack használatával",
      exp2Bullet2: "RESTful API-k tervezése és implementálása",
      exp2Bullet3: "Agilis fejlesztési módszertanok alkalmazása",
      education: "Oktatás és Képesítések",
      edu1: "Data Engineer Képesítés - DataCamp",
      edu1Date: "2023",
      edu2: "BSc Számítástechnika - Példa Egyetem",
      edu2Date: "2014 - 2018"
    }
  };
  
  // Function to set the language
  function setLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    localStorage.setItem('language', lang);
  }
  
  // Function to create language selector
  function createLanguageSelector() {
    const selector = document.createElement('div');
    selector.className = 'language-selector';
    
    const enButton = document.createElement('button');
    enButton.textContent = 'EN';
    enButton.onclick = () => setLanguage('en');
    
    const huButton = document.createElement('button');
    huButton.textContent = 'HU';
    huButton.onclick = () => setLanguage('hu');
    
    selector.appendChild(enButton);
    selector.appendChild(huButton);
    document.body.appendChild(selector);
  }
  
  // Function to initialize the page
  function initPage() {
    // Add data-translate attributes to elements
    document.querySelector('h1').setAttribute('data-translate', 'title');
    document.querySelectorAll('h2').forEach((h2, index) => {
      if (index === 0) h2.setAttribute('data-translate', 'role1');
      if (index === 1) h2.setAttribute('data-translate', 'role2');
      if (index === 2) h2.setAttribute('data-translate', 'contact');
      if (index === 3) h2.setAttribute('data-translate', 'skills');
    });
    document.querySelectorAll('.right-column h2').forEach((h2, index) => {
      if (index === 0) h2.setAttribute('data-translate', 'profile');
      if (index === 1) h2.setAttribute('data-translate', 'experience');
      if (index === 2) h2.setAttribute('data-translate', 'education');
    });
    document.querySelector('.right-column p').setAttribute('data-translate', 'profileText');
    // ... Add more data-translate attributes as needed
  
    // Create language selector
    createLanguageSelector();
  
    // Set initial language
    const browserLang = navigator.language.split('-')[0];
    const savedLang = localStorage.getItem('language');
    const initialLang = savedLang || (browserLang in translations ? browserLang : 'en');
    setLanguage(initialLang);
  }
  
  // Initialize the page when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initPage);