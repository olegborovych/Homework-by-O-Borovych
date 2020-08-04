const searchButton = document.querySelector('.btn');
const formInput = Object.values(document.querySelectorAll('.input'));

const startLocationToInit = { lat: 49.447731, lng: 30.542721 };

let map;

function initMap() {
    map = new google.maps.Map(
        document.getElementById('map'), { zoom: 5.2, center: startLocationToInit });
};

searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (validateForm()) {
        getRoute(document.querySelector('input').value, document.querySelector('input').value);
    };
});

const validateForm = () => formInput[0].value !== "" && formInput[1].value !== "" ? true : false;

const getRoute = (from, to) => {
    let directionsRenderer = new google.maps.DirectionsRenderer();
    let directionsService = new google.maps.DirectionsService();


    map = new google.maps.Map(document.getElementById('map'));
    directionsRenderer.setMap(map);

    var request = {
        origin: from,
        destination: to,
        travelMode: 'DRIVING'
    };

    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
        }
    });
};