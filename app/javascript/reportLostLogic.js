let name = document.getElementById('name').value.trim();
let photo = document.getElementById('photo').value.trim();
let email = document.getElementById('email').value.trim();
let phone = parseInt(document.getElementById('phone').value.trim());
let species = document.getElementById('species').value.trim();
let breed = document.getElementById('breed').value.trim();
let color = document.getElementById('color').value.trim();
let feature = document.getElementById('features').value.trim();

//Create object to store variable values
let lostPet = {
    contactName: name.value,
    petPhoto: photo.value,
    contactEmail: email.value,
    contactPhone: phone.value,
    petSpecies: species.value,
    petBreed: breed.value,
    petColor: color.value,
    feature: feature.value
}

//Create on-click event listener for submit button
document.getElementById('contact-submit').addEventListener('click', function (event) {
    event.preventDefault();
    //form validation
    let valid = true;

    if (name === '' ||
        email === '' ||
        phone === '' ||
        (isNaN(phone == true))
        || species === '' ||
        breed === '' ||
        color === '' ||
        features === '') {
        valid = false;
    }
    else {
        if (valid == true) {
            console.log(name);
            console.log(photo);
            console.log(email);
            console.log(phone);
            console.log(species);
            console.log(breed);
            console.log(color);
            console.log(feature);
        }

        else {
            alert('Error: all fields are required');
        }

    }

    postRequest('/api/lost', lostPet)
        .then(function () {
            document.getElementById('response').innerHTML = 'Thank you for your post.Please check your email for frequesnt updates';

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