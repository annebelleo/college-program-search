var location;

// filters: take college scorecard programs and list them under rachael's filters using https://bigfuture.collegeboard.org/majors-careers as a ref
// state: figure out why the first result does not give a state

function college() {
    var userInput = document.getElementById('input').value;
    var endpoint = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.city=${userInput}&api_key=Fd0wPPnAZObFDAAV8HNSt92fbevLl9pFAf8kNZVx`;
    fetch(endpoint)
        .then(
            function(data) {
                return data.json();
            })

        .then(function(json) {
            console.log(json);
            for (var i = 0; i < json.results.length; i++) {
                var resultCard = document.createElement("div");
                resultCard.setAttribute("id", "search_result");
                resultCard.setAttribute("class", "panel panel-default col-sm-8 col-sm-offset-2 container-fluid");

                // creating the child element of resultCard
                var panelBody = document.createElement("div");
                panelBody.setAttribute("class", "panel-body");
                panelBody.setAttribute("id", "panel");

                // the school title name
                var namePath = json.results[i].school.name;
                var nameOfSchool = document.createElement("h3");
                nameOfSchool.setAttribute("id", "schoolName");
                nameOfSchool.setAttribute("class", "glow font");
                nameOfSchool.innerHTML = namePath;

                // location
                var cityPath = json.results[i].school.city;
                var statePath = json.results[i].school.state;
                
                var schoolLocation = document.createElement("h4");
                schoolLocation.setAttribute("id", "location");
                schoolLocation.setAttribute("class", "state");
                schoolLocation.innerHTML = `${cityPath}, ${statePath}`;

                //website for the college
                var webPath = json.results[i].school.school_url;
                var websitePath = document.createElement("a");
                websitePath.setAttribute("id", "web");
                websitePath.setAttribute('href', `https://${webPath}`);
                websitePath.innerHTML = webPath;

                // list (ul)
                var list = document.createElement("ul");
                list.setAttribute("id", "resultList");
                // items (li)
                var items = document.createElement("li");
                items.setAttribute("class", "resultLi");

                //Carousel

                // var carousel = document.createElement("div");
                // carousel.setAttribute("class", "container carousel");
                // carousel.appendChild(resultCard);

                // carousel.setAttribute("id", "carouselthing");
                // var carousel2 = document.createElement("div");
                // carousel2.setAttribute("class", "carousel slide");
                // carousel2.setAttribute("id", "myCarousel");
                // carousel2.setAttribute("data-ride", "carousel");
                // carousel2.appendChild(carousel);

                // var ol = document.createElement("ol");
                // ol.setAttribute("class", "carousel-indicators");
                // ol.appendChild(carousel2);

                // var dot1 = document.createElement("li");
                // dot1.setAttribute("data-target", "#myCarousel");
                // dot1.setAttribute("data-slide-to", "0");
                // dot1.setAttribute("class", "active");
                // dot1.appendChild(ol);

                // var dot2 = document.createElement("li");
                // dot2.setAttribute("data-target", "#myCarousel");
                // dot2.setAttribute("data-slide-to", "1");
                // dot2.appendChild(ol);

                // var dot3 = document.createElement("li");
                // dot3.setAttribute("data-target", "#myCarousel");
                // dot3.setAttribute("data-slide-to", "2");
                // dot3.appendChild(ol);

                // var carouselinner = document.createElement("div");
                // carouselinner.setAttribute("class", "carousel-inner");
                // carouselinner.appendChild(carousel2);

                // var img1 = document.createElement("div");
                // img1.setAttribute("class", "item active");
                // img1.appendChild(carouselinner);
                // var img11 = document.createElement("img");
                // img11.setAttribute("src", "https://assets3.thrillist.com/v1/image/2561558/size/tmg-slideshow_l.jpg");
                // img11.setAttribute("alt", "First Image");
                // img11.setAttribute("style", "width:100%");
                // img11.appendChild(img1);

                // var img2 = document.createElement("div");
                // img2.setAttribute("class", "item");
                // img2.appendChild(carouselinner);
                // var img22 = document.createElement("img");
                // img22.setAttribute("src", "https://assets3.thrillist.com/v1/image/2561558/size/tmg-slideshow_l.jpg");
                // img22.setAttribute("alt", "Second Image");
                // img22.setAttribute("style", "width:100%");
                // img22.appendChild(img2);

                // var img3 = document.createElement("div");
                // img3.setAttribute("class", "item");
                // img3.appendChild(carouselinner);
                // var img33 = document.createElement("img");
                // img33.setAttribute("src", "https://assets3.thrillist.com/v1/image/2561558/size/tmg-slideshow_l.jpg");
                // img33.setAttribute("alt", "First Image");
                // img33.setAttribute("style", "width:100%");
                // img33.appendChild(img3);

                // var leftcontrol = document.createElement("a");
                // leftcontrol.setAttribute("class", "left carousel-control");
                // leftcontrol.setAttribute("href", "#myCarousel");
                // leftcontrol.setAttribute("data-slide", "prev");
                // leftcontrol.appendChild(carousel2);
                // var leftarrow = document.createElement("span");
                // leftarrow.setAttribute("class", "glyphicon glyphicon-chevron-left");
                // leftarrow.appendChild(leftcontrol);
                // var leftprevious = document.createElement("span");
                // leftprevious.setAttribute("class", "sr-only");
                // leftprevious.appendChild(leftcontrol);

                // var rightcontrol = document.createElement("a");
                // rightcontrol.setAttribute("class", "right carousel-control");
                // rightcontrol.setAttribute("href", "#myCarousel");
                // rightcontrol.setAttribute("data-slide", "next");
                // rightcontrol.appendChild(carousel2);
                // var rightarrow = document.createElement("span");
                // rightarrow.setAttribute("class", "glyphicon glyphicon-chevron-right");
                // rightarrow.appendChild(rightcontrol);
                // var rightnext = document.createElement("span");
                // rightnext.setAttribute("sr-only");
                // rightnext.appendChild(rightcontrol);



                //end Carousel

                var mapDiv = document.createElement("div");
                mapDiv.setAttribute('id', "map" + i);
                mapDiv.setAttribute("class", "thumbnail grow map");

                document.body.appendChild(resultCard);
                resultCard.appendChild(panelBody);
                panelBody.appendChild(nameOfSchool);
                panelBody.appendChild(schoolLocation);
                panelBody.appendChild(list);
                list.appendChild(websitePath);
                list.appendChild(items);
                resultCard.appendChild(mapDiv);
                initMap();

                var schoolName = document.getElementById("schoolName");
                schoolName.innerHTML = namePath;
                schoolName.setAttribute("class", "glow font");
                document.getElementById("myForm").reset();

                /////////////////////////  FILTERS  ////////////////////////////////////

                var programs = json.results[i][2014].academics.program_percentage;
                // Turn object into an array
                var programsArray = Object.entries(programs);

                // Sort the array by the object value
                var sorted = programsArray.sort(function(prev, curr) {
                    return curr[1] - prev[1];
                });
                
                var programList = document.createTextNode(sorted[0]);
                console.log(programList);
                items.appendChild(programList);
                list.appendChild(items);
                document.getElementById(list);
                
                // Iterate through array to get top 5 majors
                // for (var i = 0; i < 1; i++) {
                //     console.log(`#${i+1} major:`, sorted[i])
                // }
                
                // if (programList != programList){
                //     resultCard.style.display = "none";
                // }

                ///////////////////////  END FILTERS  ///////////////////////////////////

            }
        })

        .catch(
            err => {
                console.log(err);
            });
}


function initMap() {
    var userInput = document.getElementById('input').value;

    var endpoint = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=${userInput}&api_key=Fd0wPPnAZObFDAAV8HNSt92fbevLl9pFAf8kNZVx`;

    fetch(endpoint)
        .then(
            function(data) {
                return data.json();
            })

        .then(
            function(json) {
                for (var i = 0; i < json.results.length; i++) {

                    var latPath = json.results[i].location.lat;
                    var lngPath = json.results[i].location.lon;

                    var midpoint = { lat: latPath, lng: lngPath };
                    var map = new google.maps.Map(document.getElementById("map" + i), {
                        zoom: 4,
                        center: midpoint
                    });
                    var marker = new google.maps.Marker({
                        position: midpoint,
                        map: map
                    });
                }
            }
        )

        .catch(
            err => {
                console.log(err);
            });

}
