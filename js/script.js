//API info
const promise = $.ajax({url:'https://app.ticketmaster.com/discovery/v2/events.json?city=philadelphia&apikey=RCh1xsSADGGECDgRe6Ff55bjS3Ab8qgM',
});
$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?city=philadelphia&apikey=RCh1xsSADGGECDgRe6Ff55bjS3Ab8qgM",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  }).then(
      function findEvents(data){
          console.log(data.events);
    }
  );

// functions for date
let input = document.getElementById("eventDate");
let submit = document.querySelector('button').addEventListener('click', eventResults);

function eventResults(){
    event.preventDefault;
    validDate();
};
let date = new Date();
let today = date.getFullYear()+'-'+(((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))))+'-'+((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));

function validDate(){
    if(input.value >= today){
        console.log('valid')
        //if date is valid, call function to find events on that date
    } else {console.log("not valid")}
};

// function to find events on that date
function eventsFoundOnDate(){

}

//function that itirates through event and keeps ones based on location and adds event to array if it is within location



//function - when submit button is clicked, find events function is triggered
// function that decides if that click is valid

//function that finds events on that specific date
    //call function that prefilters to philadelphia
    //call function that displays events on page

//search function displays events and adds each new event to list

//function that prefilters events to philadelphia

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