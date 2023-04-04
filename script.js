fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        const tableBody = document.querySelector('.table tbody');
        data.forEach((post) => {
            const row = tableBody.insertRow();
            row.insertCell().textContent = post.userId;
            row.insertCell().textContent = post.id;
            row.insertCell().textContent = post.title;
            row.insertCell().textContent = post.body;
        });
    })
    .catch((error) => console.error(error));
