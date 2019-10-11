// Fred's New Code

// Defining target variables

let userName = document.getElementById("user-name")
let userEmail = document.getElementById("user-email")
let userPhone = document.getElementById("user-phone")
let userAddress = document.getElementById("user-address")
let userCity = document.getElementById("user-city")
let userState = document.getElementById("user-state")
let userZip = document.getElementById("user-zip")
let petPhoto = document.getElementById("pet-photo")
let petName = document.getElementById("pet-name")
let petType = document.getElementById("pet-type")
let petColor = document.getElementById("pet-color")
let petDescription = document.getElementById("pet-description")
let submitBtn = document.getElementById("report-lost-form")

// Event listener to construct object from form with validation
submitBtn.addEventListener("click", function () {

  event.preventDefault();

  let valid = true

  if (
    (userName.value == "") ||
    (userEmail.value == "") ||
    (userPhone.value == "") ||
    (userAddress.value == "") ||
    (userCity.value == "") ||
    (userState.value == "") ||
    (userZip.value == "") ||
    (petPhoto.value == "") ||
    (petName.value == "") ||
    (petType.value == "") ||
    (petColor.value == "") ||
    (petDescription.value == "")
  ) 
  {
    valid = false
  }

// Make post if valid
  if (valid) {

    
    // Construct Object
    let newLost = {
      userName: userName.value.trim(),
      userEmail: userEmail.value.trim(),
      userPhone: userPhone.value.trim(),
      userAddress: userAddress.value.trim(),
      userCity: userCity.value.trim(),
      userZip: userZip.value.trim(),
      petPhoto: petPhoto.value.trim(),
      petName: petName.value.trim(),
      petType: petType.value.trim(),
      petColor: petColor.value.trim(),
      petDescription: petDescription.value.trim(),

    }

    postRequest('/api/lost', newLost)
    .then(function(data){
     console.log(data)
    })

    function postRequest(url, data) {
        return fetch(url, {
          credentials: 'same-origin', // 'include', default: 'omit'
          method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
          body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
        })
        .then(response => response.json())
      }

  }

  else {
    alert("Fill valid fields")
  }

})









// Jeremy's Old Code


// let name = document.getElementById('name').value.trim();
// let email = document.getElementById('email').value.trim();
// let phone = parseInt(document.getElementById('phone').value.trim());
// let species = document.getElementById('species').value.trim();
// let breed = document.getElementById('breed').value.trim();
// let color = document.getElementById('color').value.trim();
// let feature = document.getElementById('features').value.trim();

// //Create object to store variable values
// let lostPet = {
//     contactName: name.value,
//     contactEmail: email.value,
//     contactPhone: phone.value,
//     petSpecies: species.value,
//     petBreed: breed.value,
//     petColor: color.value,
//     feature: feature.value
// }

// //Create on-click event listener for submit button
// document.getElementById('contact-submit').addEventListener('click', function (event) {
//     event.preventDefault();
//     //form validation
//     let valid = true;

//     if (name === '' ||
//         email === '' ||
//         phone === '' ||
//         (isNaN(phone == true))
//         || species === '' ||
//         breed === '' ||
//         color === '' ||
//         features === '') {
//         valid = false;
//     }
//     else {
//         if (valid == true) {
//             console.log(name);
//             console.log(email);
//             console.log(phone);
//             console.log(species);
//             console.log(breed);
//             console.log(color);
//             console.log(feature);
//         }

//         else {
//             alert('Error: all fields are required');
//         }

//     }

//     postRequest('/api/lost', lostPet)
//         .then(function () {
//             document.getElementById('response').innerHTML = 'Thank you for your post.Please check your email for frequesnt updates';

//         });

//     function postRequest(url, data) {
//         return fetch(url, {
//             credentials: 'same-origin', // 'include', default: 'omit'
//             method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
//             body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//             }),
//         })
//             .then(response => response.json())
//             .then(data => console.log(data));
//     }
// });


