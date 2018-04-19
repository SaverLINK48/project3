var map;
var pin;
var locationm;
var mexicocity={lat: 19.3910038, lng: -99.1536997}
var kyotojapan={lat: 35.0061653, lng: 135.7259305};
var chicagous={lat: 41.8339042, lng: -87.712152};
var romeitaly={lat: 41.9674596, lng: 12.3930454};
var locations=["mexicocity","kyotojapan","chicagous","romeitaly"];
function myMap() {
  locationm={lat: 19.3910038, lng: -99.1536997};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom:10,
  center: mexicocity});
  pin = new google.maps.Marker({
    position:mexicocity,
    animation:google.maps.Animation.DROP,
  map: map });
}
function travel(location, myplaces) {
	map.panTo(location);
	map.setZoom(10);
	pin = new google.maps.Marker({
		position: location,
			animation:google.maps.Animation.DROP,
		map: map
	});
	if(myplaces==locations[0]){
	}
	else if(myplaces==locations[1]){
	}
	else if(myplaces==locations[2]){
	}
	else if(myplaces==locations[3]) {
	}
	else {
	}
}

