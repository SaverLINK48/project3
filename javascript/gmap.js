<!DOCTYPE html>
<html>
  <body>
    <h1>My First Google Map</h1>
    <div id="map" style="width:400px;height:400px;background:yellow"></div>
    <script>
      function myMap() {
      var mapOptions = {
        center: new google.maps.LatLng(19.3910038, -99.1536997),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
                       }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
                       }
        var pin = new google.maps.Marker({
        position:chicago_il,
        animation:google.maps.Animation.BOUNCE,
        map: map });
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMn9W7-6KgR3FW0gfZLPFR96jcvaKJkrQ&callback=myMap">
    </script>
</body>
</html>