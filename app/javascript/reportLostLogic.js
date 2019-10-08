let name = document.getElementById('name').value.trim();
let email = document.getElementById('user-email').value.trim();
let phone = parseInt(document.getElementById('user-phone').value.trim());
let type = document.getElementById('pet-type').value.trim();
let color = document.getElementById('pet-color').value.trim();
let description = document.getElementById('pet-description').value.trim();

//Create object to store variable values
let lostPet = {
    Name: name.value,
    userEmail: user - email.value,
    userPhone: user - phone.value,
    petType: pet - type.value,
    petColor: pet - color.value,
    petDescription: pet - description.value
}

//Create on-click event listener for submit button
document.getElementById('report-lost-form"').addEventListener('click', function (event) {
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