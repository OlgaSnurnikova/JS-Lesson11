// // -створити форму з інпутами для name та age.
// //     При відправці форми записати об'єкт в localstorage


// let userForm = document.userForm;
// userForm.onsubmit = function (e){
//     e.preventDefault();
//     let userName = e.target.userName.value;
//     let userAge = e.target.userAge.value;
//     let user = {userName, userAge};
//     localStorage.setItem(userName, JSON.stringify(user));
// }


// let userForm = document.userForm;
// userForm.onsubmit = function (e){
//     e.preventDefault();
//     localStorage.setItem('userName', JSON.stringify({
//         userName:e.target.userName.value,
//         userAge:e.target.userAge.value
//     }));
// }

// // -створити форму з інпутами для model,type та volume автівки.
// //     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//
// let carsArray = JSON.parse(localStorage.getItem('cars')) || [];
// document.carsForm.onsubmit =function (e){
//     e.preventDefault();
//     let car = {model: e.target.model.value, type: e.target.type.value, volume: e.target.volume.value};
//     carsArray.push(car);
//     localStorage.setItem('cars', JSON.stringify(carsArray));
// }