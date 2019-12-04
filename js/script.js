// functions for date
let input = document.getElementById("eventDate");
const submit = document.querySelector('button').addEventListener('click', eventResults);
let eventList = document.getElementById('results');
let date = new Date();
let today = date.getFullYear()+'-'+(((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))))+'-'+((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
// let toggleEl = getElementById("toggleEl");

function validDate(){
    if(input.value >= today){
        console.log(input.value)
    } else {input.value = false;
        alert("Date is not valid. Please select a valid date.")}
};

function eventResults(event){
    event.preventDefault();
    validDate();

//API info
// startDateTime=2019-12-12T00:00:00Z&endDateTime=2019-12-14T00:00:00Z&
$.ajax({
    type:"GET",
    url:`https://app.ticketmaster.com/discovery/v2/events.json?size=200&city=philadelphia&apikey=RCh1xsSADGGECDgRe6Ff55bjS3Ab8qgM`,
    dataType: "json",
  }).then(
    function findEvents(data){
        // let currentUrl= data._embedded.events[0].url
        let newEventArray = []
        for(i=0;i < 200; i++) {
            // console.log(input.value)
            let dataStuff = data._embedded.events[i]
            console.log(dataStuff.dates.start.localDate===input.value)
        if(dataStuff.dates.start.localDate == input.value) {
            eventList.style.display = "block"
            let eventArray = [data._embedded.events[0].name + '</br>',           
                            data._embedded.events[0].dates.start.localDate + '</br>'].join("")
                            eventUrl.href = data._embedded.events[0].url;
            console.log(data._embedded.events[i])
            $(eventList).append(eventArray)
        } else {
            // message saying there is no matches
        }
        // newEventArray.push(data._embedded.events[i])
        // console.log(data._embedded.events[0])
     };
        // eventList.innerHTML = eventArray;
        // console.log(newEventArray);
        // eventUrl.innerHTML = currentUrl;
        });
    };

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