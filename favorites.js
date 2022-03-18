let favorites = JSON.parse(localStorage.getItem('favorites'));
for (const favorite of favorites) {
    let userDiv = document.createElement('div');
    userDiv.innerText = favorite.name;
    userDiv.style.margin='20px';
    document.body.appendChild(userDiv);
}
