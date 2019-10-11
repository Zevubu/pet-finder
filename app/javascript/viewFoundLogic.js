let wrapper = document.getElementById("wrapper")


fetch("/api/found").then(function(response){
    return response.json()
}).then(function(data){
    
    for(let i = 0; i<data.length; i++){

        let newDiv = document.createElement("div");
        let petName = document.createElement("h1");
        let petPhoto = document.createElement("img");
        petPhoto.setAttribute('src', `${data[i].pet_photo}`);
        petPhoto.setAttribute(`width`, "400");
        let petColor = document.createElement("h2");
        let petDescription = document.createElement("h2");
        let userName = document.createElement("h3");
        let userEmail = document.createElement("h3");
        let userPhone = document.createElement("h3");
        let userAddress = document.createElement("h4");
        let userCity = document.createElement("h4");
        let userZip = document.createElement("h4");
        let hr = document.createElement("hr");

        petName.textContent = `Pet Name : ${data[i].pet_name}`
        // petPhoto.textContent = `Pet Photo : ${data[i].pet_photo}`
        petColor.textContent = `Pet Color : ${data[i].pet_color}`
        petDescription.textContent = `Pet Description : ${data[i].pet_description}`
        userName.textContent = `Founder Name : ${data[i].user_name}`
        userEmail.textContent = `Founder Email : ${data[i].user_email}`
        userPhone.textContent = `Founder Phone : ${data[i].user_phone}`
        userAddress.textContent = `Founder Address : ${data[i].user_address}`
        userCity.textContent = `Founder City : ${data[i].user_city}`
        userZip.textContent =` Founder Zip : ${data[i].user_zip}`

        newDiv.appendChild(petName)
        newDiv.appendChild(petPhoto)
        newDiv.appendChild(petColor)
        newDiv.appendChild(petDescription)
        newDiv.appendChild(userName)
        newDiv.appendChild(userEmail)
        newDiv.appendChild(userPhone)
        newDiv.appendChild(userAddress)
        newDiv.appendChild(userCity)
        newDiv.appendChild(userZip)

        wrapper.appendChild(newDiv)
        wrapper.appendChild(hr)


    }

})