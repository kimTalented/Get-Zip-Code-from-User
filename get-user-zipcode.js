$(document).ready(function() {   
	//Initiate Map Loading in background
	$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD-EpZjNyQwdyhiQvwnFcL3IOsbgcEu-FI&callback=getLocation");   
});

function getLocation() {
	//Get users coordinates
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(myMap);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

function myMap(position) {
  
	//Get users address based on coordinates
	var geocoder = new google.maps.Geocoder;
	var latlng = {lat: position.coords.latitude, lng: position.coords.longitude};
	
	geocoder.geocode({'location': latlng}, function(results, status) {
		  
		if (status === 'OK') {
			
			if (results[0]) {
 
				var address = results[0].address_components;
				var zipcode = address[address.length - 1].long_name;
			  
				//Check that the zip code is valid
				if(parseInt(zipcode) > 9999) {
					console.log(zipcode);
				}
				else {
					console.log("Invalid zip code");
				}
			  
			}
			
		}
		  
	});
}