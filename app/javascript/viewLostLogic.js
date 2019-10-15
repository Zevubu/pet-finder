let wrapper = document.getElementById("view-container")


fetch("/api/lost").then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
    
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
 
         let petName = document.createElement("h3")
         petName.textContent = `Pet Name : `
         let nameSpan = document.createElement("span")
         nameSpan.textContent = `${data[i].pet_name}`
         nameSpan.id = "data-span"
         petName.appendChild(nameSpan)


         let petType = document.createElement("h3")
         petType.textContent = `Pet Type : `
         let typeSpan = document.createElement("span")
         typeSpan.textContent = `${data[i].pet_type}`
         typeSpan.id = "data-span"
         petType.appendChild(typeSpan)



         let petColor = document.createElement("h3")
         petColor.textContent = `Pet Color : `
         let colorSpan = document.createElement("span")
         colorSpan.textContent = `${data[i].pet_color}`
         colorSpan.id = `data-span`
         petColor.appendChild(colorSpan)

         let petDescription = document.createElement("h3")
         petDescription.textContent = `Pet Description : `
         let descriptionSpan = document.createElement("span")
         descriptionSpan.textContent = `${data[i].pet_description}`
         descriptionSpan.id = "data-span"
         petDescription.appendChild(descriptionSpan)

 
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
 
         let userName = document.createElement("h3")
         userName.textContent = `Founder Name : `
         let userNameSpan = document.createElement("span")
         userNameSpan.textContent = `${data[i].user_name}`
         userNameSpan.id ="data-span"
         userName.appendChild(userNameSpan)



         let userEmail = document.createElement("h3")
         userEmail.textContent = `Founder Email : `
         let userEmailSpan = document.createElement("span")
         userEmailSpan.textContent = `${data[i].user_email}`
         userEmailSpan.id = "data-span"
         userEmail.appendChild(userEmailSpan)




         let userPhone = document.createElement("h3")
         userPhone.textContent = `Founder Phone : `
         let userPhoneSpan = document.createElement("span")
         userPhoneSpan.textContent = `${data[i].user_phone}`
         userPhoneSpan.id = "data-span"
         userPhone.appendChild(userPhoneSpan)
 
         
         userNep.appendChild(userName)
         userNep.appendChild(userEmail)
         userNep.appendChild(userPhone)
 
       
         userDiv.appendChild(userNep)
 
         let userLocation = document.createElement("div")
 
         let userAddress = document.createElement("h3")
         userAddress.textContent = `Founder Address : `
         let userAddressSpan = document.createElement("span")
         userAddressSpan.textContent = `${data[i].user_address}`
         userAddressSpan.id = "data-span"
         userAddress.appendChild(userAddressSpan)


         let userCityState = document.createElement("h3")
         userCityState.textContent = `Founder City & State: `
         let userCityStateSpan = document.createElement("span")
         userCityStateSpan.textContent = `${data[i].user_city}, ${data[i].user_state}`
         userCityStateSpan.id = "data-span"
         userCityState.appendChild(userCityStateSpan)



         let userZip = document.createElement("h3")
         userZip.textContent = `Founder Zip : `
         let userZipSpan = document.createElement("span")
         userZipSpan.textContent = `${data[i].user_zip}`
         userZipSpan.id = "data-span"
         userZip.appendChild(userZipSpan)
 
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