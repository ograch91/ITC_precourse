
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

function onNext(){
  alert('MIIIII')
}

function onPrev(){
  alert('YEBAAAAAA123AAAAAAAAAT')
}

function toSentenceList(words) {
  if (words.length > 1) {
      let last = words.pop();
      last = "and " + last;
      words.push(last);
  }
  return words.join(", ");
}

function toSentenceList_alt(words) {
  let last;
  if (words.length > 1) {
      last = words.pop();
      last = " and " + last;
  }
  let sentence = words.join(", ");
  if (last)
      sentence += last;
  return sentence;
}


// navbar cool style
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