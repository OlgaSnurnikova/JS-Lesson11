// є масив. створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let favorites = JSON.parse(localStorage.getItem('favorites'))||[];
let usersDiv = document.createElement('div');
for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerText = user.name;
    userDiv.style.margin='20px';
    let button = document.createElement('button');
    button.innerHTML= '<i>add to favorites</i>';
    button.style.marginLeft ='10px';
    button.onclick= function (){
        favorites.push(user);
        localStorage.setItem('favorites',JSON.stringify(favorites));
    }
    document.body.appendChild(usersDiv);
    usersDiv.append(userDiv);
    userDiv.append(button)
}
let favoritesPage = document.createElement('a');
favoritesPage.href='./favorites.html';
favoritesPage.title = 'Favorites Page';
favoritesPage.innerText='Favorites Page';
document.body.append(favoritesPage);
