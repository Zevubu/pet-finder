// Fred's New Code

// Defining target variables
let keys= require("../../dbkeys.js")

let mpw = keys.password.mappw


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
let submitBtn = document.getElementById("report-found-form")
L.mapquest.key = mpw;
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
    let newFound = {
      userName: userName.value.trim(),
      userEmail: userEmail.value.trim(),
      userPhone: userPhone.value.trim(),
      userAddress: userAddress.value.trim(),
      userCity: userCity.value.trim(),
      userState: userState.value.trim(),
      userZip: userZip.value.trim(),
      petPhoto: petPhoto.value.trim(),
      petName: petName.value.trim(),
      petType: petType.value.trim(),
      petColor: petColor.value.trim(),
      petDescription: petDescription.value.trim()
    };

    function reset(){
      userName.value = '';
      userEmail.value = '';
      userPhone.value = '';
      userAddress.value = '';
      userCity.value = '';
      userState.value = '';
      userZip.value = '';
      petPhoto.value = '';
      petName.value = '';
      petType.value = '';
      petColor.value = '';
      petDescription.value = '';
    }

    function createPost(){ 
      console.log(newFound)
      postRequest('/api/found', newFound)
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
    };

    let petAddress = `${newFound.userAddress}, ${newFound.userCity}, ${newFound.userState}, ${newFound.userZip}`
    L.mapquest.geocoding().geocode(petAddress, createLatLng);

    function createLatLng(error, response) {
      let location = response.results[0].locations[0];
      let latLng = JSON.stringify(location.displayLatLng); 
      newFound.petLatLng = latLng;
      console.log(newFound);
      // setTimeout(, 5000)
        createPost() ;
        reset();
    }
    
  }
  else {
    alert("Fill valid fields");
    return;
  }
 
})
    
 
