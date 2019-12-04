// functions for date
let input = document.getElementById("eventDate");
const submit = document.querySelector('button').addEventListener('click', eventResults);
let eventList = document.getElementById('results');
let eventUrl = document.getElementById('link');
let date = new Date();
let today = date.getFullYear()+'-'+(((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))))+'-'+((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
// let toggleEl = getElementById("toggleEl");

function validDate(){
    if(input.value >= today){
        console.log(input.value)
    } else {input.value = false;
        alert("Date is not valid. Please select a valid date.")}
};

function eventResults(){
    event.preventDefault;
    validDate();
};
//API info
$.ajax({
    type:"GET",
    url:'https://app.ticketmaster.com/discovery/v2/events.json?size=100&city=philadelphia&apikey=RCh1xsSADGGECDgRe6Ff55bjS3Ab8qgM',
    dataType: "json",
    success: function(json) {
                console.log(json);
             },
    error: function(xhr, status, err) {
             }
  }).then(
    function findEvents(data){
        // let currentUrl= data._embedded.events[0].url
        let eventArray = [data._embedded.events[0].name + '</br>',           
                          data._embedded.events[0].dates.start.localDate + '</br>']
        let newEventArray = []
        for(i=0;i < 100; i++) {
        if(data._embedded.events[i] == input.value) {
            $(eventList).append(`${data._embedded.events[i]}`)
        } else {console.log("error")}
        newEventArray.push(data._embedded.events[i])
        console.log(data._embedded.events[0]) };
        // eventList.innerHTML = eventArray;
        console.log(newEventArray);
        // eventUrl.innerHTML = currentUrl;
        });
//function that resets page when home is clicked

//Sticky nav functions
// window.onscroll = function() {stickyScroll()};
// const navbar = document.getElementById("nav");
// const sticky = navbar.offsetTop;

// function stickyScroll() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// };
        
//         var i;
// for (i = 0; i < eventArray.length; i++) {
//   text += cars[i] + "<br>";
// }