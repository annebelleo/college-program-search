//for college scorecard Api = ID:  a923c819-dd8a-4a1c-afd6-6b364bd03268
// for college scorecard Api = key: Fd0wPPnAZObFDAAV8HNSt92fbevLl9pFAf8kNZVx
// for the google maps Api = key: AIzaSyBpuhS-1SBpfjvocaLU1glAeGu6rUdYp9k

var location;
var clicked = false

function college() {
    console.log("function ran")
    var userInput = document.getElementById('input').value;
    console.log("INPUT", userInput);
    // return userInput;

    var endpoint = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.city=${userInput}&api_key=Fd0wPPnAZObFDAAV8HNSt92fbevLl9pFAf8kNZVx`


    fetch(endpoint)
        .then(
            function(data) {
                return data.json()
            })

        .then(function(json) {

            if (clicked) {
                console.log("hi")
                document.getElementById("search_result").parentNode.removeChild(document.getElementById("search_result"))
                // removeChild(document.getElementById("panel"));
            }
            // next step - storing all of these in a for loop
            // creating the outside search result div
            var resultCard = document.createElement("div");
            resultCard.setAttribute("id", "search_result");
            resultCard.setAttribute("class", "panel panel-default col-sm-8 col-sm-offset-2 container-fluid");

            // creating the child element of resultCard
            var panelBody = document.createElement("div");
            panelBody.setAttribute("class", "panel-body");
            panelBody.setAttribute("id", "panel")
            console.log(document.getElementById("panel"))
            // the school title name
            var nameOfSchool = document.createElement("h3");
            nameOfSchool.setAttribute("id", "schoolName");
            // location
            var schoolLocation = document.createElement("h4");
            schoolLocation.setAttribute("id", "city");
            // map

            //website for the college

            var webPath = json.results["0"].school.school_url;
            var websitePath = document.createElement("a")
            websitePath.setAttribute("id", "web")
            websitePath.setAttribute('href', `https://${webPath}`)
            websitePath.innerHTML = webPath

            // list (ul)
            var list = document.createElement("ul");
            list.setAttribute("id", "resultList");
            // items (li)
            var items = document.createElement("li");
            items.setAttribute("class", "resultLi");

            var experimental = document.createElement("div");

            var mapDiv = document.createElement("div")
            mapDiv.setAttribute('id', "map")
            mapDiv.setAttribute("class", "thumbnail grow")


            document.body.appendChild(resultCard);
            resultCard.appendChild(panelBody);
            panelBody.appendChild(nameOfSchool);
            panelBody.appendChild(schoolLocation);
            // panelBody.appendChild(mapImage);
            panelBody.appendChild(list);
            list.appendChild(websitePath)
            list.appendChild(items);
            resultCard.appendChild(mapDiv)

            var namePath = json.results[0].school.name;
            var schoolName = document.getElementById("schoolName");
            schoolName.innerHTML = namePath;
            schoolName.setAttribute("class", "glow")


            var cityPath = json.results["0"].school.city;
            console.log(cityPath);
            var cityName = document.getElementById('city');
            cityName.innerHTML = cityPath;
            initMap()

            document.getElementById("myForm").reset();
            clicked = true;
        })

        .catch(
            err => {
                console.log(err)
            })
}



function test() {
    // var endpoint = `https://api.data.gov/ed/collegescorecard/v1/schools.json?location.lat=41.318&location.lon=-72.92&api_key=Fd0wPPnAZObFDAAV8HNSt92fbevLl9pFAf8kNZVx`
    var endpoint = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.city=${userInput}&api_key=Fd0wPPnAZObFDAAV8HNSt92fbevLl9pFAf8kNZVx`
    console.log(endpoint)
    fetch(endpoint)
        .then(
            function(data) {
                return data.json()
            })

        .then(
            function(json) {
                console.log(json)

            }
        )

        .catch(
            err => {
                console.log(err)
            })
}



function initMap() {
    var userInput = document.getElementById('input').value;
    console.log("INPUT", userInput);

    var endpoint = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=${userInput}&api_key=Fd0wPPnAZObFDAAV8HNSt92fbevLl9pFAf8kNZVx`;

    fetch(endpoint)
        .then(
            function(data) {
                return data.json()
            })

        .then(
            function(json) {
                console.log(json)

                var latPath = json.results["0"].location.lat
                var lngPath = json.results["0"].location.lon

                var midpoint = { lat: latPath, lng: lngPath };
                console.log(document.getElementById("panel"))
                var map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 4,
                    center: midpoint
                });
                var marker = new google.maps.Marker({
                    position: midpoint,
                    map: map
                });

            }
        )

        .catch(
            err => {
                console.log(err)
            })

}
