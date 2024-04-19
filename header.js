const buttonWatchAll = document.querySelectorAll('.watch-all'),
        logos = document.querySelectorAll('.logo'),
        searching = document.querySelector('.searching'),
        searchBar = document.querySelector('.searching__input')
        

searching.addEventListener('click', ()=>{
    searchBar.focus();
})



buttonWatchAll.forEach(el => {
    const category = el.getAttribute('category')
    el.addEventListener('click', () => {
        localStorage.setItem('category', category)
        document.location='./list.html';
    })
})
logos.forEach( function (el) {
    el.addEventListener('click', function () {
        document.location='./main.html';
    })
})
const categories = ['movies', 'series', 'anime']
const films = categories.map(category => JSON.parse(localStorage.getItem(category))).flat()

const input = document.querySelector('.searching__input'),
    searchMovie = document.querySelector('.search__founded')

input.addEventListener('input', () => search(films))


function search (list) {
    render()
    let inputValue = input.value
    const searchingValue = list.filter(el => el.movieName.toLowerCase().includes(inputValue.toLowerCase())) 

    if (inputValue.length > 0) {
        searchMovie.classList.remove('display')

        searchingValue.forEach ((el) => {
            const text = `
                <div class="founded" id="${el.id}"> 
                    <img class="founded__img" src="${el.image}" alt="promo">
                    <div class="founded__text">
                        <p class="font-size18">${el.movieName}</p>
                        <p class="font-size16">${el.genre}</p>
                    </div>
                </div>
                `

            searchMovie.insertAdjacentHTML('afterbegin', text)
        })
    } else {
        searchMovie.classList.add('display')
    }
    
    if (inputValue.length > 0 && !searchMovie.firstChild) {
        const nothingFound = `
                <div class="founded__text">
                    <p class="font-size18">К сожалению, ничего не найдено :(</p>
                </div>
                `

        searchMovie.insertAdjacentHTML('afterbegin', nothingFound)
    }
    if (searchMovie.children.length < 5) {
        searchMovie.classList.remove('overflow')
    }
    if (searchMovie.children.length > 5) {
        searchMovie.classList.add('overflow')
    }
}

function render () {
    while (searchMovie.firstChild) {
        searchMovie.firstChild.remove()
    }
}