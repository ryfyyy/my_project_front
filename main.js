// let a = 100  // локальная
// // var b = 100 //на весь проект
// const c = 100 //не перезаписывается заново

// // let obj = {
// //     age: 100,
// //     color: 'red',
// //     mt1: () => {

// //     }
// // }

// // obj.mt1() //метод знает контекст объекта удобно

// // === более жесткое по типам данных

// //типы данных не указываются в js они изменяемы

// if (a === c) {

// } else {

// }

//null
//undefiend пустые типы данных

// let a = document.getElementById('title')

// a.innerHTML = "Другой текст" //поменяли текст уже скриптом по айди лучше использовать queryselector

let a = document.querySelector('#title')
let button = document.querySelector('#button')

button.addEventListener('click', () => {
    let currentText = a.innerHTML
    a.innerHTML = currentText + " нажали"
})

