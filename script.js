const URL = 'http://www.omdbapi.com/?';
const APIKEY = '&apikey=8e6d3ad4';

const movieList = document.querySelector('div.page');

class Movie {
    constructor(obj) {
        this.imdbID = obj.imdbID;
        this.Title = obj.Title;
        this.Year = obj.Year
        this.Poster = obj.Poster;
        this.Type = obj.Type;
    }
};

class MovieDetails extends Movie {
    constructor({ imdbID, Title, Year, Poster, Type, Genre, Plot, imdbRating }) {
        super({ imdbID, Title, Year, Poster, Type });
        this.Genre = Genre;
        this.Plot = Plot;
        this.imdbRating = imdbRating;
    }
}

// generate found movie list
const listHtml = ({ imdbID, Title, Year, Poster, Type }) => `<div class="collection-item avatar" data-id = "${imdbID}" onclick="onUserClick(this)">
<img src="${Poster}" alt="" class="circle" />
<span class="title">${Title}</span>
<p>
  Year: ${Year} <br />
  Type: ${Type}
</p>
</div>`;

// generate additional information of movie
const additionalInfo = ({ Genre, Plot, imdbRating }) => `<div class="details" style='background-color: #80808033'>
<p class="plot">
  <span>Plot:</span> ${Plot}
</p>
<br />
<p class="genre"><span>Genre:</span> ${Genre}</p>
<br />
<p class="rating"><span>Rating:</span>${imdbRating}</p></div>`;


// generate request string
const getString = (elements) => requestString = elements.filter(function (index, element) {
    return $(element).val() != '';
}).serialize();

// show found movies
$('.btn').on('click', function (event) {
    event.preventDefault();
    getMovies(getString(inputElements), 1);
});

// show additional info
const onUserClick = (element) => infoAboutMovie(element.getAttribute('data-id'), element);

// delete active class from movie list
function deleteActive() {
    $('.page__item').removeClass('active');
    $('.desc').remove();
}

// generate pagination dependent from amount of found movies
function createPagination(elem, activePage) {
    for (let i = 1; i <= elem; i++) {
        const li = document.createElement('li');
        li.classList.add('waves-effect');
        li.classList.add('pagination__item');
        i == activePage ? li.classList.add('active') : li;
        li.innerHTML = `<a href="#!">${i}</a>`
        $('.pagination').append(li);
    }
}

// remove pagination active class
const removeActivePage = () => $('.pagination').children().removeClass('active');

// change movies page
$('.pagination').on('click', (event) => {
    getMovies(getString(inputElements), event.target.innerText)
    removeActivePage()
    $(event.target).parent().addClass('active');
});

// request to get additional info 
const infoAboutMovie = async (id, element) => {
    const details = await fetch(`${URL}&i=${id}${APIKEY}`)
        .then(res => res.json())
        .then(data => new MovieDetails(data))

    deleteActive();
    $(element).after(additionalInfo(details));
    $(element).addClass('active');

};


// request to get movie by entered title
let inputElements = $('.form :input');

const getMovies = async (string, page) => {
    $('.btn__wrapper').css('display', 'none')
    $('.error').remove();
    $('.pagination').empty();

    movieList.innerHTML = "";

    const movies = await fetch(`${URL}${string}${`&page=${page}`}${APIKEY}`)
        .then(response => response.json())
        .then(movieData => [movieData.Search.map(movieItem => new Movie(movieItem)), movieData.totalResults])
        .catch(err => {
            $('.wrapper').append(`<h2 class="error" style = "text-align:center; color: darkred; font-size: 25px;">no matches</h2>`);
        });


    createPagination(Math.ceil(movies[1] / 10), page);

    movies[0].map((item) => {
        movieList.innerHTML += listHtml(item)
    });
};