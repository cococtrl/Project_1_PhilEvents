// functions for date
let input = document.getElementById("eventDate");
let submit = document.querySelector('button').addEventListener('click', eventResults);
let eventList = document.getElementById('results');
let date = new Date();
let today = date.getFullYear()+'-'+(((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))))+'-'+((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));

function eventResults(){
    event.preventDefault;
    validDate();
};

function validDate(){
    if(input.value >= today){
        console.log(input.value)
    } else {input.value = false;
        alert("Date is not valid. Please select a valid date.")}
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
        let eventArray = data._embedded.events
        let newEventArray = []
        console.log(eventArray[2])
        for(i=0, i < eventArray.length; i++){
            if(eventArray[i].dates.start.localDate == input.value){
          newEventArray.push(i);
        eventList.innerHTML = (newEventArray);
      }
        //   console.log(data._embedded.events);
          // eventList.innerHTML = (newEventArray);
        }
  );

  //create array to push onto page
  //create four loop to itirate through events on date 

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