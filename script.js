//for college scorecard Api = ID:  a923c819-dd8a-4a1c-afd6-6b364bd03268
// for college scorecard Api = key: Fd0wPPnAZObFDAAV8HNSt92fbevLl9pFAf8kNZVx
// for the google maps Api = key: AIzaSyBpuhS-1SBpfjvocaLU1glAeGu6rUdYp9k

var location;

function college() {
    console.log("function ran")
    var userInput = document.getElementById('input').value;
    console.log("INPUT", userInput);

    var endpoint = `https://api.data.gov/ed/collegescorecard/v1/schools?school.name=${userInput}&api_key=Fd0wPPnAZObFDAAV8HNSt92fbevLl9pFAf8kNZVx`

    fetch(endpoint)
        .then(
            function(data) {
                return data.json()
            })

        .then(
            function(json) {
                console.log(json)
                // next step - storing all of these in a for loop
                // creating the outside search result div
                var resultCard = document.createElement("div");
                resultCard.setAttribute("id", "search_result");
                resultCard.setAttribute("class", "panel panel-default col-sm-8 col-sm-offset-2 container-fluid");
                // creating the child element of resultCard
                var panelBody = document.createElement("div");
                panelBody.setAttribute("class", "panel-body");
                // the school title name
                var nameOfSchool = document.createElement("h3");
                nameOfSchool.setAttribute("id", "schoolName");



                var namePath = json.results[0].school.name;
                var schoolName = document.getElementById("schoolName");
                schoolName.innerHTML = namePath;

                var cityPath = json.results["0"].school.city;
                console.log(cityPath);
                var cityName = document.getElementById('city');
                cityName.innerHTML = cityPath;



            }
        )

        .catch(
            err => {
                console.log(err)
            })
    // console.log("function is running")

}


    var endpoint2 = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBpuhS-1SBpfjvocaLU1glAeGu6rUdYp9k&callback=initMap`

function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          scrollwheel: false,
          zoom: 8
        });
      }