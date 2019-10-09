// Declare gloabal variables
let name = document.getElementById('name').value.trim();
let email = document.getElementById('user-email').value.trim();
let phone = parseInt(document.getElementById('user-phone').value.trim());
let photo = document.getElementById('photo').value.trim();
let petName = document.getElementById('pet-name').value.trim();
let type = document.getElementById('pet-type').value.trim();
let color = document.getElementById('pet-color').value.trim();
let description = document.getElementById('pet-description').value.trim();

//Create on-click event listener for submit button
document.getElementById('report-lost-form').addEventListener('click', function (event) {
    event.preventDefault();

    let lostPet = {
        userName: document.getElementById('name').value.trim(),
        userEmail: document.getElementById('user-email').value.trim(),
        userPhone: parseInt(document.getElementById('user-phone').value.trim()),
        petPhoto: document.getElementById('photo').value.trim(),
        petName: document.getElementById('pet-name').value.trim(),
        petType: document.getElementById('pet-type').value.trim(),
        petColor: document.getElementById('pet-color').value.trim(),
        petDescription: document.getElementById('pet-description').value.trim()
    }
   
    // form logic 
    let valid = true;

    if (document.getElementById('name').value === '' ||
        document.getElementById('user-email').value === '' ||
        document.getElementById('user-phone').value === '' ||
        document.getElementById('photo').value === '' ||
        document.getElementById('pet-name').value === '' ||
        document.getElementById('pet-type').value === '' ||
        document.getElementById('pet-color').value === '' ||
        document.getElementById('pet-description').value === ''
    ){
        valid = false;
        alert('All fields must contain a values');
    }
    else
    {
        console.log(valid);
        console.log(lostPet);
        // alert('Thank you for your post.Please check your email for frequent updates');
    }

    postRequest('/api/lost', lostPet)
        .then(function () {
            document.getElementById('response').innerHTML = 'Thank you for your post.Please check your email for frequent updates';
            console.log(data);
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