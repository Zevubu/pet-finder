// Declare gloabal variables
let name = document.getElementById('name').value.trim();
let email = document.getElementById('user-email').value.trim();
let phone = parseInt(document.getElementById('user-phone').value.trim());
let photo = document.getElementById("image-upload").files[0];
let type = document.getElementById('pet-type').value.trim();
let color = document.getElementById('pet-color').value.trim();
let description = document.getElementById('pet-description').value.trim();
let formData = new FormData();

// !photo upload - review this section

formData.append("photo", photo);
fetch('/api/lost', {method: "POST", body: formData});// fix the fetch upload url

async function SavePhoto(inp) 

{
    let user = { name:'john', age:34 };
    let formData = new FormData();
    let photo = inp.files[0];      
         
    formData.append("photo", photo);
    formData.append("user", JSON.stringify(user));  
    
    try {
       let r = await fetch('/api/lost', {method: "POST", body: formData}); 
       console.log('HTTP response code:',r.status); 
    } catch(e) {
       console.log('Huston we have problem...:', e);
    }
    
}
// end photo upload

//Create object to store variable values
let lostPet = {
    Name: name.value,
    userEmail: email.value,
    userPhone: phone.value,
    petType: type.value,
    petColor: color.value,
    petDescription: description.value
}

//Create on-click event listener for submit button
document.getElementById('report-lost-form').addEventListener('click', function (event) {
    event.preventDefault();
    //form validation
    let valid = true;

    if (name === '' ||
        email === '' ||
        phone === '' ||
        (isNaN(phone == true))
        || type === '' ||
        color === '' ||
        description === '') {
        valid = false;
    }
    else {
        if (valid == true) {
            console.log(sucess);
            console.log('------------------------');
        }

        else {
            alert('Error: all fields are required');
        }
    }

    postRequest('/api/lost', lostPet)
        .then(function () {
            document.getElementById('response').innerHTML = 'Thank you for your post.Please check your email for frequent updates';

        });

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
            .then(data => console.log(data));
    }
});