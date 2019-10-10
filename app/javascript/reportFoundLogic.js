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
let submitBtn = document.getElementById("report-found-form")

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
      userZip: userZip.value.trim(),
      petPhoto: petPhoto.value.trim(),
      petName: petName.value.trim(),
      petType: petType.value.trim(),
      petColor: petColor.value.trim(),
      petDescription: petDescription.value.trim(),

    }
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

  }

  else {
    alert("Fill valid fields")
  }

})
