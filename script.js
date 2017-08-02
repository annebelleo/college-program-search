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

    var endpoint = `https://api.data.gov/ed/collegescorecard/v1/schools?school.name=${userInput}&api_key=Fd0wPPnAZObFDAAV8HNSt92fbevLl9pFAf8kNZVx`

    fetch(endpoint)
        .then(
            function(data) {
                return data.json()
            })

        .then(function(json) {
                console.log("hi")
                if(clicked){
                    //set to visible 
                    //change if statemnt to !clicked
                    
                    
                    //grab the parent div and remove each child
                    
                    
                    
                }
                clicked = true
                
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
                // location
                var schoolLocation = document.createElement("h4");
                schoolLocation.setAttribute("id", "city");
                // list (ul)
                var list = document.createElement("ul");
                list.setAttribute("id", "resultList");
                // items (li)
                var items = document.createElement("li");
                items.setAttribute("class", "resultLi");
                
                var experimental = document.createElement("div");

                var mapDiv = document.createElement("div")
                mapDiv.setAttribute('id', "map")

                document.body.appendChild(resultCard);
                resultCard.appendChild(panelBody);
                panelBody.appendChild(nameOfSchool);
                panelBody.appendChild(schoolLocation);
                panelBody.appendChild(list);
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
    
    var endpoint = `https://api.data.gov/ed/collegescorecard/v1/schools?school.name=${userInput}&api_key=Fd0wPPnAZObFDAAV8HNSt92fbevLl9pFAf8kNZVx`
    
   
    
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
                var map = new google.maps.Map(document.getElementById('map'), {
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
