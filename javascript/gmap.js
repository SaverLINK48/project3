var map;
var pin;
var locationm;
var mexicocity={lat: 19.3910038, lng: -99.1536997}
function myMap() {
	locationm={lat: 19.3910038, lng: -99.1536997};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom:10,
	center: mexicocity});
	pin = new google.maps.pin({
		position:mexicocity,
		animation:google.maps.Animation.DROP,
	map: map });
}

