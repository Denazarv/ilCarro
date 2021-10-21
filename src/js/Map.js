function initMap() {
    let mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(32.073367, 34.777674)
    };
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);

    let TelAviv = {lat: 32.073367, lng: 34.777674};
    let marker = new google.maps.Marker({
        position: TelAviv,
        map: map,
        title: 'Get this car!',
        animation: google.maps.Animation.DROP,
        icon: 'http://maps.google.com/mapfiles/kml/pal4/icon7.png'
    });

    let Rishon = {lat: 31.97102, lng: 34.78939};
    let marker2 = new google.maps.Marker({
        position: Rishon,
        map: map,
        title: 'Get this car!',
        animation: google.maps.Animation.DROP,
        icon: 'http://maps.google.com/mapfiles/kml/pal4/icon7.png'
    });

    let Rosh_haayin = {lat: 32.09556, lng: 34.95664};
    let marker3 = new google.maps.Marker({
        position: Rosh_haayin,
        map: map,
        title: 'Get this car!',
        animation: google.maps.Animation.DROP,
        icon: 'http://maps.google.com/mapfiles/kml/pal4/icon7.png'
    });

    let contentString = '<div id="content"><h1>Honda Civic 2019</h1><p>Турбированная бензиновая «четвёрка» с линейки «Earth Dream VTEC», генерирующая пиковую отдачу в 174 «лошадки» и 220 Нм тяги</p> <a href="../layouts/still_available.html" style="color: #062639">' + 'Rent this car!</a></div>';

    let infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
