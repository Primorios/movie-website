
const category = localStorage.getItem('category')

const neededFilm = JSON.parse(localStorage.getItem(category))

const listEl = document.getElementById('list')

drawFilms(neededFilm)

/**
 * 
 * @param {Array<any>} listOfFilms 
 */
function drawFilms(listOfFilms) {
    while(listEl.firstChild) {
        listEl.removeChild(listEl.firstChild)
    }

    listOfFilms.forEach(film => {
        const movie = `
            <div class="promo-play">
                <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.725 23.9991L14 41.924C12.25 42.974 10 41.724 10 39.674V19.6741C10 10.9491 19.425 5.49913 27 9.84913L38.475 16.4491L43.7 19.4491C45.425 20.4741 45.45 22.9741 43.725 23.9991Z" fill="#FF6914"/>
                <path d="M45.222 38.6515L35.097 44.5015L24.9971 50.3265C21.3721 52.4015 17.2721 51.9765 14.2971 49.8765C12.8471 48.8765 13.0221 46.6515 14.5471 45.7515L46.322 26.7015C47.822 25.8015 49.797 26.6515 50.072 28.3765C50.697 32.2515 49.097 36.4265 45.222 38.6515Z" fill="#FF6914"/>
                </svg>
            </div>
            <div class="movie-promo__picture">
                <div class="movie-promo__rating white-color font-weight-bold">
                    ${film.totalScore}
                </div>
                <img class="movie-promo__img" src="${film.image}" alt="promo">
            </div>
            <div class="movie-promo__info">
                <p class="title-text font-size20 white-color font-weight-bold">${film.movieName}</p>
                <div class="movie-promo__subtitle">
                    <p class="movie-promo__subtitle__year">${film.productionYear},</p>
                    <p class="movie-promo__subtitle__genre">${film.genre}</p>
                </div>
            </div>
        `


            const element = document.createElement('div')
            element.classList.add('movie-line__cover')
            element.setAttribute('id', film.id)
            element.innerHTML = movie
            listEl.appendChild(element)

            element.addEventListener('click', () => {
                localStorage.setItem('selected', film.id)
                localStorage.setItem('category', category)
                location.href = 'movie-page.html'
            })
    })
}