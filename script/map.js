var map;
var infowindow;

// Trova la posizione tramite il browser
function findPosition(cosaDaCercare) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function (position) {
				pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				//
				findPlaces(cosaDaCercare);
			});
	} else {
		alert('Unable to get the location through the browser');
	}
}

// Cerca posti in base alla stringa passata
function findPlaces(cosaDaCercare) {
	map = new google.maps.Map(document.getElementById('map'), {
		center: pos,
		zoom: 15
	});

	infowindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(map);
	service.nearbySearch({
		location: pos,
		radius: 1000,	//Metri di distanza massima
		keyword: cosaDaCercare,
	}, callback);
}

// Per ogni posto trovato, lo metto sulla mappa
function callback(results, status) {
	if (status === google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < results.length; i++) {
			createMarker(results[i]);
		}
	}
}
// Segno sulla mappa
function createMarker(place) {
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
	});

	google.maps.event.addListener(marker, 'click', function () {
		infowindow.setContent(place.name);
		infowindow.open(map, this);
	});
}

// Avvio tutto
findPosition('conad');
