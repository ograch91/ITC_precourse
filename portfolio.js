/**
 * section for homePage
 */
function loadPhoto(){
  const GITHUB_URL = "https://api.github.com/users/ograch91";

  fetch(GITHUB_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const profileImage = document.getElementById("profile-image");
      profileImage.src = data.avatar_url;
    });
}

/// inspired by & taken from:
/// https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
function pop (e) {
  let x, y;
  // Quick check if user clicked the button using a keyboard // div cant be accessed with keyboard
  // if (e.clientX === 0 && e.clientY === 0) {
  //   const bbox = e.currentTarget.getBoundingClientRect();
  //   x = bbox.left + bbox.width / 2;
  //   y = bbox.top + bbox.height / 2;
  // } else {
    x = e.clientX;
    y = e.clientY;
  // }
  let amount = 60;
  for (let i = 0; i < amount; i++) {
    createParticle(x, y, e.currentTarget.dataset.type);
  }
}

/// creation + animation + randomized attr`s
function createParticle (x, y, type) {
  const particle = document.createElement('particle');
  document.body.appendChild(particle);
  let width = Math.floor(Math.random() * 30 + 8);
  let height = width;
  let destinationX = (Math.random() - 0.5) * 300;
  let destinationY = (Math.random() - 0.5) * 300;
  let rotation = Math.random() * 520;
  let delay = Math.random() * 200;

  /// which particle will be shown 
  switch (type) {
    case 'square':
      particle.style.background = `hsl(${Math.random() * 90 + 270}, 70%, 60%)`;
      particle.style.border = '1px solid white';
      break;
    case 'emoji':
      particle.innerHTML = ['❤','🧡','💛','💚','💙','💜','🤎'][Math.floor(Math.random() * 7)];
      particle.style.fontSize = `${Math.random() * 24 + 10}px`;
      width = height = 'auto';
      break;
    case 'mario':
      particle.style.backgroundImage = 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/mario-face.png)';
      break;
    case 'shadow':
      var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;
      particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`;
      particle.style.background = color;
      particle.style.borderRadius = '50%';
      width = height = Math.random() * 5 + 4;  // between 4-9px size particle
      break;
    case 'line':
      var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;
      particle.style.background = 'black';
      height = 1;
      rotation += 1000;
      delay = Math.random() * 1000;
      break;
  }
  
  /// size of the particles 
  particle.style.width = `${width}px`;
  particle.style.height = `${height}px`;
  
  /// set animation with start state & and state 
  const animation = particle.animate([
    {
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
      opacity: 1
    },
    {
      transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
      opacity: 0
    }
  ],
  {
    duration: Math.random() * 1000 + 5000,
    easing: 'cubic-bezier(0, .9, .57, 1)',
    delay: delay
  });
  animation.onfinish = removeParticle;
}
function removeParticle (e) {
  e.srcElement.effect.target.remove();
}


/**
 * section for aboutPage
 */
 let selectedMapIndex = 0;

 const mapLinks = [
   {
     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73756.24342548318!2d20.39449070116236!3d54.71168848319853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e33d8d4b7c21a9%3A0x5050960016126ed3!2sKaliningrad%2C%20Kaliningrad%20Oblast%2C%20Russia!5e0!3m2!1sen!2sil!4v1644439372705!5m2!1sen!2sil',
     description: 'Kaliningrad is were I was born and my home town, its part of the Baltic Coast. The city is home to the headquarters of the Baltic Fleet of the Russian Navy.'
   },
   {
     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54084.90495520023!2d34.76222657309957!3d32.08799940302947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1644439419435!5m2!1sen!2sil',
     description: 'This is were i live for more than 20 years and still counting 😎, Tel Aviv, is the most populous city in the Gush Dan metropolitan area of Israel.',
   },
   {
     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251774.6948321878!2d4.158430708289193!3d52.209365348612714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e4bb%3A0xb3a175ceffbd0a9f!2sNetherlands!5e0!3m2!1sen!2sil!4v1645467921339!5m2!1sen!2sil',
     description: 'I have visited several city`s in the Netherlands, a country in northwestern Europe, it is known for a flat landscape of canals, tulip fields, windmills and cycling routes which are amazing.'
   },
   {
     mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12415911.079875875!2d166.02351660837923!3d-40.55863561371235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2c200e17779687%3A0xb1d618e2756a4733!2sNew%20Zealand!5e0!3m2!1sen!2sil!4v1644439495573!5m2!1sen!2sil',
     description: 'New Zealand is on top of my list of "Places to visit", few of my friends live there, I miss them a lot and New Zealand ranks highly in international comparisons of national performance, such as quality of life, education, protection of civil liberties, government transparency, and economic freedom.'
   },
 ];
 
 function onNext(){
   selectedMapIndex++;
   updateMap();
 }
 
 function onPrev(){
   selectedMapIndex--;
   updateMap();
 }
 
 function updateMap() {
   let mapDetails = mapLinks[selectedMapIndex];
   let mapIframe = document.querySelector('iframe');
   mapIframe.src = mapDetails.mapUrl;
   let mapDesc = document.querySelector('#mapDesc');
   mapDesc.textContent = "- " + mapDetails.description;
   disableNextPrevButton();
 }
 
 function disableNextPrevButton(){
   let blockNextButton = document.querySelector('.nextButton');
   if (selectedMapIndex === 3)
     blockNextButton.disabled = true;
   else
     blockNextButton.disabled = false;
 
   let blockPreviousButton = document.querySelector('.previousButton');
   if (selectedMapIndex === 0)
     blockPreviousButton.disabled = true;
   else
     blockPreviousButton.disabled = false;
 }
 
 function loadInitMap(){
   selectedMapIndex = 0;
   updateMap();
 }


/**
 * section for contactPage
 */
 function validateForm(){
  let isFormValid = true;
  let reqInputFields = document.querySelectorAll('input[type="text"][required], input[type="email"][required], textarea[required]');

  for (i = 0; i<reqInputFields.length; i++){
    let currentInput = reqInputFields[i];
    if (currentInput.checkValidity() == false)
    {
      isFormValid = false;
    }
  }

  let genderRadio = document.querySelector('input[name="gender"]:checked');
  if (genderRadio == null) {
    isFormValid = false;
  }

  let subButton = document.querySelector('.subButton')
  if (isFormValid == true){
    subButton.disabled = false;
  }
  else {
    subButton.disabled = true;
  }
}

function formSubmit(){
  let fNameValue = document.querySelector('#fname').value;
  let lNameValue = document.querySelector('#lname').value;
  let emailValue = document.querySelector('#email').value;
  let messageValue = document.querySelector('#yourmessage').value;
  let genderValue =document.querySelector('input[name="gender"]:checked').value;
  console.log(`First Name: ${fNameValue}, Last Name: ${lNameValue}, Email: ${emailValue}, Gender: ${genderValue}, Message: "${messageValue}".`)
  alert('Thanks for the feedback 👍');
  //return false; // disable page reload/submit
}


/**
 * section for allPages
 */
function langsToCent(langs){
  if (langs === undefined || langs.length === 0) {
    return ("To be determined 🤷‍♂️");
  }
  else if (langs.length === 1){
    return (langs[0]);
  }
  else {
    let together = "";
    for (let i=0; i < langs.length - 2; i++){
      let wordAt = langs[i] 
      together = together + wordAt + ", ";
    }
    let last = langs.length - 1;
    let befLast = langs.length - 2;
    return (
      together +
      langs[befLast] + " and " + langs[last]
    );
  }
}

const codingLanguages = ["HTML", "CSS", "JavaScript", "💖"];
function updateCentFooter() {
  let finalcent = langsToCent(codingLanguages);
  document.querySelector("#builtWith").innerHTML = finalcent;
}


/// onload-indexpage
function afterPloadIndex() {
  loadPhoto();
  updateCentFooter();
}

/// onload-contactpage
function afterPloadContact() {
  validateForm();
  updateCentFooter();
}

/// onload-aboutpage
function afterPloadAbout() {
  loadInitMap();
  updateCentFooter();
}