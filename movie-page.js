let movie

const id = Number(localStorage.getItem('selected'))
const category = localStorage.getItem('category')
const movies = JSON.parse(localStorage.getItem(category))

function getSelectedItem() {
    
    const foundMovie = movies.find(v => v.id === id)
    if (foundMovie) movie = foundMovie
}

getSelectedItem()
drawMoviesInfo()

function drawMoviesInfo() {
    
        const moviePage = `
    <div class=" container__movies" id="${movie.id}">
    <div class="page__images">
        <div>
            <div class="promo-img">
                <img class="promo-img__photo" src="${movie.image}" alt="promo">
                <div class="promo-img__score">
                    <button class="promo-img__button" id="like">
                        <svg width="30" height="30" viewBox="0 0 30 30">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.875 5.625C19.875 3.75 18.0225 2.5 16.575 2.5C15.5675 2.5 15.4888 3.265 15.3337 4.775C15.265 5.4375 15.1825 6.2425 15 7.1875C14.5175 9.69 12.85 12.8875 11.255 13.8438V21.25C11.25 24.0625 12.1875 25 16.25 25H20.9663C23.6863 25 24.345 23.2087 24.59 22.545L24.6062 22.5C24.7487 22.1175 25.0537 21.8162 25.4037 21.475C25.7913 21.0925 26.2337 20.6588 26.5625 20C26.9513 19.2213 26.9 18.5287 26.8538 17.9125C26.825 17.5387 26.7987 17.1938 26.875 16.875C26.955 16.5375 27.0575 16.2813 27.1562 16.0363C27.335 15.5913 27.5 15.1788 27.5 14.375C27.5 12.5 26.565 11.2525 24.6062 11.2525H19.375C19.375 11.2525 19.875 7.5 19.875 5.625ZM6.875 12.5C6.37772 12.5 5.90081 12.6975 5.54917 13.0492C5.19754 13.4008 5 13.8777 5 14.375V23.125C5 23.6223 5.19754 24.0992 5.54917 24.4508C5.90081 24.8025 6.37772 25 6.875 25C7.37228 25 7.84919 24.8025 8.20083 24.4508C8.55246 24.0992 8.75 23.6223 8.75 23.125V14.375C8.75 13.8777 8.55246 13.4008 8.20083 13.0492C7.84919 12.6975 7.37228 12.5 6.875 12.5Z"/>
                        </svg>
                        <p class="likes-count font-size20">${movie.like}</p>
                    </button>
                    <div class="promo-img__line"></div>
                    <button class="promo-img__button" id="dislike">
                        <svg class="dislike" width="30" height="30" viewBox="0 0 30 30">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.875 5.625C19.875 3.75 18.0225 2.5 16.575 2.5C15.5675 2.5 15.4888 3.265 15.3337 4.775C15.265 5.4375 15.1825 6.2425 15 7.1875C14.5175 9.69 12.85 12.8875 11.255 13.8438V21.25C11.25 24.0625 12.1875 25 16.25 25H20.9663C23.6863 25 24.345 23.2087 24.59 22.545L24.6062 22.5C24.7487 22.1175 25.0537 21.8162 25.4037 21.475C25.7913 21.0925 26.2337 20.6588 26.5625 20C26.9513 19.2213 26.9 18.5287 26.8538 17.9125C26.825 17.5387 26.7987 17.1938 26.875 16.875C26.955 16.5375 27.0575 16.2813 27.1562 16.0363C27.335 15.5913 27.5 15.1788 27.5 14.375C27.5 12.5 26.565 11.2525 24.6062 11.2525H19.375C19.375 11.2525 19.875 7.5 19.875 5.625ZM6.875 12.5C6.37772 12.5 5.90081 12.6975 5.54917 13.0492C5.19754 13.4008 5 13.8777 5 14.375V23.125C5 23.6223 5.19754 24.0992 5.54917 24.4508C5.90081 24.8025 6.37772 25 6.875 25C7.37228 25 7.84919 24.8025 8.20083 24.4508C8.55246 24.0992 8.75 23.6223 8.75 23.125V14.375C8.75 13.8777 8.55246 13.4008 8.20083 13.0492C7.84919 12.6975 7.37228 12.5 6.875 12.5Z"/>
                        </svg>
                        <p class="dislikes-count font-size20">${movie.dislike}</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="page__information">
        <div class="movie-info">
            <div class="movie-name">
                <h1 class="font-size30">${movie.movieName}</h1>
                <div class="movie-promo__rating white-color font-weight-bold position-static">
                    ${calculateRating(movie.like, movie.dislike)}
                </div>
            </div>
            <p class="movie-description font-size18">${movie.description}</p>
            <button class="button button__watch font-size18">Смотреть</button>
            <div class="movie-about">
                <h2 class="font-size22">О фильме</h2>
                <div class="movie-about__items">
                    <div class="movie-about__item">
                        <p class="movie-about__title font-size16">Год производства</p>
                        <p class="movie-about__subtitle font-size16">${movie.productionYear}</p>
                    </div>
                    <div class="movie-about__item">
                        <p class="movie-about__title font-size16">Страна</p>
                        <p class="movie-about__subtitle font-size16">${movie.country}</p>
                    </div>
                    <div class="movie-about__item">
                        <p class="movie-about__title font-size16">Жарн</p>
                        <p class="movie-about__subtitle font-size16">${movie.genre}</p>
                    </div>
                    <div class="movie-about__item">
                        <p class="movie-about__title font-size16">Режиссер</p>
                        <p class="movie-about__subtitle font-size16">${movie.producer}</p>
                    </div>
                    <div class="movie-about__item">
                        <p class="movie-about__title font-size16">Продолжительность</p>
                        <p class="movie-about__subtitle font-size16">${movie.length} мин</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    `

    const parentEl = document.querySelector('.container__movies')
    while(parentEl.firstChild) {
        parentEl.removeChild(parentEl.firstChild)
    }
    parentEl.insertAdjacentHTML('afterbegin', moviePage)

    const likeBtn = parentEl.querySelector('#like')
    
    likeBtn.addEventListener('click', () => {
        movie.like += 1
        const index = movies.findIndex(v => v.id === id)
        if (index !== -1) {
            movies.splice(index, 1, movie)
            localStorage.setItem(category, JSON.stringify(movies))
            drawMoviesInfo()
        }
    })

    const dislikeBtn = parentEl.querySelector('#dislike')
    
    dislikeBtn.addEventListener('click', () => {
        movie.dislike += 1
        const index = movies.findIndex(v => v.id === id)
        if (index !== -1) {
            movies.splice(index, 1, movie)
            localStorage.setItem(category, JSON.stringify(movies))
            drawMoviesInfo()
        }
    })

    function calculateRating(likes, dislikes) {
        if (likes + dislikes === 0) {
          return 0;
        }
      
        const score = (likes / (likes + dislikes)) * 10;
        return parseFloat(score.toFixed(1));
      }
}