fetch('http://localhost:3000/', {
    method: 'GET',
    credentials: 'include'
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

