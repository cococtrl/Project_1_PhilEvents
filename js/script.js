// functions for date
let input = document.getElementById("eventDate");
let submit = document.querySelector('button').addEventListener('click', eventResults);
let eventList = document.getElementById('results');
let date = new Date();
let today = date.getFullYear()+'-'+(((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))))+'-'+((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));

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
    url:'https://app.ticketmaster.com/discovery/v2/events.json?city=philadelphia&apikey=RCh1xsSADGGECDgRe6Ff55bjS3Ab8qgM',
    dataType: "json",
    success: function(json) {
                console.log(json);
             },
    error: function(xhr, status, err) {
             }
  }).then(
    function findEvents(data){
        let eventArray = [data._embedded.events[0].name,
                        data._embedded.events[0].dates.start.localDate,
                        data._embedded.events[0].url,]
        for(i=0; i<eventArray.length;i++){
            eventList.innerHTML = eventArray[i] + '<br/>'
        }
        // let newEventArray = []
        // for(i=0;i < eventArray.length; i++)
        // newEventArray.push(i) +=
        console.log(data._embedded.events[0])
        // eventList.innerHTML = eventArray;
        }
  );

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