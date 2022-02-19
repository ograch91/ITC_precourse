function loadPhoto(){
  const GITHUB_URL = "https://api.github.com/users/ograch91";

  fetch(GITHUB_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const profileImage = document.getElementById("profile-image"); // $('#profile-image');
      profileImage.src = data.avatar_url;
    });
}

let selectedMapIndex = 0;

const mapLinks = [
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73756.24342548318!2d20.39449070116236!3d54.71168848319853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e33d8d4b7c21a9%3A0x5050960016126ed3!2sKaliningrad%2C%20Kaliningrad%20Oblast%2C%20Russia!5e0!3m2!1sen!2sil!4v1644439372705!5m2!1sen!2sil',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54084.90495520023!2d34.76222657309957!3d32.08799940302947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1644439419435!5m2!1sen!2sil',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457540963!2d2.2769955282495715!3d48.85894658072431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sil!4v1644439449738!5m2!1sen!2sil',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12415911.079875875!2d166.02351660837923!3d-40.55863561371235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2c200e17779687%3A0xb1d618e2756a4733!2sNew%20Zealand!5e0!3m2!1sen!2sil!4v1644439495573!5m2!1sen!2sil',
];

function onNext(){
  selectedMapIndex++;
  let newLink = mapLinks[selectedMapIndex];
  let mapIframe = document.querySelector('iframe');
  mapIframe.src = newLink;
  if (selectedMapIndex === 3){
    let blockNextButton = document.querySelector('.nextButton');
    blockNextButton.disabled = true;
  }
}

function onPrev(){
  selectedMapIndex--;
  let newLink = mapLinks[selectedMapIndex];
  let mapIframe = document.querySelector('iframe');
  mapIframe.src = newLink;
  if (selectedMapIndex === 0){
    let blockPreviousButton = document.querySelector('.previousButton');
    blockPreviousButton.disabled = true;
  }
}

function validateForm(){
  let isFormValid = true;

  let reqInputFields = document.querySelectorAll('input[type="text"][required], input[type="email"][required]');

  for (i = 0; i<reqInputFields.length; i++){
    let currentInput = reqInputFields[i];
    if (currentInput.checkValidity() == false){
      isFormValid = false;
      // console.log('empty', currentInput.id);
    }
    // else {
    //   console.log(currentInput.value);
    // }
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


// function toSentenceList(words) {
//   if (words.length > 1) {
//       let last = words.pop();
//       last = "and " + last;
//       words.push(last);
//   }
//   return words.join(", ");
// }

// function toSentenceList_alt(words) {
//   let last;
//   if (words.length > 1) {
//       last = words.pop();
//       last = " and " + last;
//   }
//   let sentence = words.join(", ");
//   if (last)
//       sentence += last;
//   return sentence;
// }

function langsToCent(langs){
  if (langs === undefined || langs.length === 0) {
    return ("Dont know yet 💩");
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

let codingLanguages =["HTML", "CSS", "JavaScript", "Python", "Java", "C++"]
let finalcent = langsToCent(codingLanguages);
console.log(finalcent)




  // if (contactForm === fieldsFull) {
  //   document.getElementById("sButton").disabled = false
  // }

// navbar cool styleeee
// const barOuter = document.querySelector(".bar-outer");
// const options = document.querySelectorAll(".bar-grey .option");
// let current = 1;
// options.forEach((option, i) => (option.index = i + 1));
// options.forEach(option =>
//                 option.addEventListener("click", function() {
//   barOuter.className = "bar-outer";
//   barOuter.classList.add(`pos${option.index}`);
//   if (option.index > current) {
//     barOuter.classList.add("right");
//   } else if (option.index < current) {
//     barOuter.classList.add("left");
//   }
//   current = option.index;
// }));