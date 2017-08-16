var location;

// filters: take college scorecard programs and list them under rachael's filters using https://bigfuture.collegeboard.org/majors-careers as a ref

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
                for (var i = 0; i < 13; i++) {
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
                    websitePath.setAttribute('class', "font");
                    websitePath.setAttribute('href', `https://${webPath}`);
                    websitePath.innerHTML = webPath;

                    // list (ul)
                    var list = document.createElement("ul");
                    list.setAttribute("id", "resultList");
                    // items (li)
                    var items = document.createElement("li");
                    items.setAttribute("class", "resultLi font");

                    //Carousel

                    // var carousel = document.createElement("div");
                    // carousel.setAttribute("class", "container carousel");

                    // carousel.setAttribute("id", "carouselthing");
                    // var carousel2 = document.createElement("div");
                    // carousel2.setAttribute("class", "carousel slide");
                    // carousel2.setAttribute("id", "myCarousel" + i);
                    // carousel2.setAttribute("data-ride", "carousel");
                    // carousel.appendChild(carousel2);

                    // var ol = document.createElement("ol");
                    // ol.setAttribute("class", "carousel-indicators");
                    // carousel2.appendChild(ol);

                    // var dot1 = document.createElement("li");
                    // dot1.setAttribute("data-target", "#myCarousel" + i);
                    // dot1.setAttribute("data-slide-to", "0");
                    // dot1.setAttribute("class", "active");
                    // ol.appendChild(dot1);

                    // var dot2 = document.createElement("li");
                    // dot2.setAttribute("data-target", "#myCarousel" + i);
                    // dot2.setAttribute("data-slide-to", "1");
                    // ol.appendChild(dot2);

                    // var dot3 = document.createElement("li");
                    // dot3.setAttribute("data-target", "#myCarousel" + i);
                    // dot3.setAttribute("data-slide-to", "2");
                    // ol.appendChild(dot3);

                    // var carouselinner = document.createElement("div");
                    // carouselinner.setAttribute("class", "carousel-inner");
                    // carousel2.appendChild(carouselinner);

                    // var img1 = document.createElement("div");
                    // img1.setAttribute("class", "item active");
                    // carouselinner.appendChild(img1);

                    // var img11 = document.createElement("img");
                    // img11.setAttribute("src", "kwklogozoom.png");
                    // img11.setAttribute("alt", "First Image");
                    // img11.setAttribute("style", "width:100%");
                    // img1.appendChild(img11);

                    // var img2 = document.createElement("div");
                    // img2.setAttribute("class", "item");
                    // carouselinner.appendChild(img2);

                    // var img22 = document.createElement("img");
                    // img22.setAttribute("src", "https://kodewithklossydotcom.files.wordpress.com/2016/08/kwk-hero-image.jpg");
                    // img22.setAttribute("alt", "Second Image");
                    // img22.setAttribute("style", "width:100%");
                    // img2.appendChild(img22);

                    // var img3 = document.createElement("div");
                    // img3.setAttribute("class", "item");
                    // carouselinner.appendChild(img3);
                    // var img33 = document.createElement("img");
                    // img33.setAttribute("src", "karlie2zoom.jpg");
                    // img33.setAttribute("alt", "First Image");
                    // img33.setAttribute("style", "width:100%");
                    // img3.appendChild(img33);

                    // var leftcontrol = document.createElement("a");
                    // leftcontrol.setAttribute("class", "left carousel-control");
                    // leftcontrol.setAttribute("href", "#myCarousel" + i);
                    // leftcontrol.setAttribute("data-slide", "prev");
                    // carousel2.appendChild(leftcontrol);
                    // var leftarrow = document.createElement("span");
                    // leftarrow.setAttribute("class", "glyphicon glyphicon-chevron-left");
                    // leftcontrol.appendChild(leftarrow);
                    // var leftprevious = document.createElement("span");
                    // leftprevious.setAttribute("class", "sr-only");
                    // leftcontrol.appendChild(leftprevious);

                    // var rightcontrol = document.createElement("a");
                    // rightcontrol.setAttribute("class", "right carousel-control");
                    // rightcontrol.setAttribute("href", "#myCarousel" + i);
                    // rightcontrol.setAttribute("data-slide", "next");
                    // carousel2.appendChild(rightcontrol);
                    // var rightarrow = document.createElement("span");
                    // rightarrow.setAttribute("class", "glyphicon glyphicon-chevron-right");
                    // rightcontrol.appendChild(rightarrow);
                    // var rightnext = document.createElement("span");
                    // rightnext.setAttribute("class", "sr-only");
                    // rightcontrol.appendChild(rightnext);

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
                    // resultCard.appendChild(carousel);

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
                    // for (var i = 0; i < sorted.length; i++) {
                        var resultsToString = sorted[i].toString();
                    // }
                    resultsToString = resultsToString.replace("_", " ");
                    resultsToString = capitalize(resultsToString);
                    var strSplit = resultsToString.split(",");
                    var programList = document.createTextNode(resultsToString);
                    console.log(programList);
                    // console.log(programList);
                    if (strSplit[1] == 0) {
                        var noResult = document.createTextNode("No Data is Available");
                        items.appendChild(noResult);
                    }
                    else if (strSplit[1] == 1) {
                        if (strSplit[0] == "Parks Recreation_fitness") {
                            strSplit[0] = "Parks, Recreation, and Fitness";
                        }
                        else if (strSplit[0] == "Theology Religious_vocation") {
                            strSplit[0] = "Theological Studies and Religious Vocations";
                        }
                        else if (strSplit[0] == "Public Administration_social_service") {
                            strSplit[0] = "Public Administration and Social Services";
                        }
                        else if (strSplit[0] == "Visual Performing") {
                            strSplit[0] = "Visual and Performing Arts";
                        }
                        strSplit[1] = "100%";
                        var strCool = strSplit[0] + " - " + strSplit[1];
                        items.innerHTML = strCool;
                    }
                    else if (strSplit[1] < 1){
                        if (strSplit[0] == "Parks Recreation_fitness") {
                            strSplit[0] = "Parks, Recreation, and Fitness";
                        }
                        else if (strSplit[0] == "Theology Religious_vocation") {
                            strSplit[0] = "Theological Studies and Religious Vocations";
                        }
                        else if (strSplit[0] == "Public Administration_social_service") {
                            strSplit[0] = "Public Administration and Social Services";
                        }
                        else if (strSplit[0] == "Visual Performing") {
                            strSplit[0] = "Visual and Performing Arts";
                        }
                        strSplit[1] = strSplit[1] * 100;
                        var firstStrSplit = strSplit[1].toFixed(2);
                        strSplit.toString();
                        var percentage = strSplit[0] + " - " + firstStrSplit + "%";
                        // console.log(percentage)
                        items.innerHTML = percentage;
                    }

                else {
                    items.appendChild(programList);
                }
                list.appendChild(items);
                document.getElementById(list);

                // Iterate through array to get top 5 majors
                // 
                //     console.log(`#${i+1} major:`, sorted[i])
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

function capitalize(str) {
    var split = str.split(' ')
    for (var i = 0; i < split.length; i++) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
    }
    return split.join(" ")
}
