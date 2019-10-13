let wrapper = document.getElementById("view-container")


fetch("/api/found").then(function(response){
    return response.json()
}).then(function(data){

    
    for(let i = 0; i<data.length; i++){

        // Parent Div
        let newDiv = document.createElement("div")
        newDiv.setAttribute("id","pet-container-display")

        let petHeaderDiv = document.createElement("div")
        petHeaderDiv.setAttribute("id","pet-header")
        let petHeader = document.createElement("h1")
        petHeader.textContent ="Pet Information"

        petHeaderDiv.appendChild(petHeader)

        // Child div to be appended to parent div
        let petDiv = document.createElement("div")
        petDiv.setAttribute("id","pet-info")

        // Photodiv
        let photoDiv = document.createElement("div")
        photoDiv.setAttribute("id","photo-container")

        // Append Image to petDiv
        let petImg = document.createElement("img")
        petImg.setAttribute("src",`${data[i].pet_photo}`)
        photoDiv.appendChild(petImg)

        // Creating PetInfo Div
        let petInfo = document.createElement("div")
        petInfo.setAttribute("id","pet-ntcd")

        // Adding content to pet info div

        let petName = document.createElement("h2")
        petName.textContent = `Pet Name : ${data[i].pet_name}`
        let petType = document.createElement("h2")
        petType.textContent = `Pet Type : ${data[i].pet_type}`
        let petColor = document.createElement("h2")
        petColor.textContent = `Pet Color : ${data[i].pet_color}`
        let petDescription = document.createElement("h2")
        petDescription.textContent = `Pet Description : ${data[i].pet_description}`

        // Appending to pet Info
    
        petInfo.appendChild(petName)
        petInfo.appendChild(petType)
        petInfo.appendChild(petColor)
        petInfo.appendChild(petDescription)

        // Appending photo and info to pet Div
        petDiv.appendChild(photoDiv)
        petDiv.appendChild(petInfo)

        // Creating user-info div
        let userDiv = document.createElement("div")
        userDiv.setAttribute("id","user-info")

        let userPersonalDiv = document.createElement("div")
        userPersonalDiv.id = "user-header"
        let userPersonalHeader = document.createElement("h1")
        userPersonalHeader.textContent = `Personal Information`
        userPersonalDiv.appendChild(userPersonalHeader)

        // Will contain first div
        let userNep = document.createElement("div")

        let userName = document.createElement("h2")
        userName.textContent = `Founder Name : ${data[i].user_name}`
        let userEmail = document.createElement("h2")
        userEmail.textContent = `Founder Email : ${data[i].user_email}`
        let userPhone = document.createElement("h2")
        userPhone.textContent = `Founder Phone : ${data[i].user_phone}`

        
        userNep.appendChild(userName)
        userNep.appendChild(userEmail)
        userNep.appendChild(userPhone)

      
        userDiv.appendChild(userNep)

        let userLocation = document.createElement("div")

        let userAddress = document.createElement("h2")
        userAddress.textContent = `Founder Address : ${data[i].user_address}`
        let userCityState = document.createElement("h2")
        userCityState.textContent = `Founder City & State: ${data[i].user_city}, ${data[i].user_state}`
        let userZip = document.createElement("h2")
        userZip.textContent = `Founder Zip : ${data[i].user_zip}`

        userLocation.appendChild(userAddress)
        userLocation.appendChild(userCityState)
        userLocation.appendChild(userZip)

        userDiv.appendChild(userLocation)


        newDiv.appendChild(petHeaderDiv)
        newDiv.appendChild(petDiv)
        newDiv.appendChild(userPersonalDiv)
        newDiv.appendChild(userDiv)

        wrapper.appendChild(newDiv)

    }

})