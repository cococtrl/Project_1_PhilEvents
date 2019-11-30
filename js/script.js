//API info
const promise = $.ajax({url:'https://app.ticketmaster.com/discovery/v2/events.json?apikey=RCh1xsSADGGECDgRe6Ff55bjS3Ab8qgM',
success: function(eventData) {
    console.log(eventData);
},
error: function (error){
    console.log('bad request: ', error);
}
});
//function - when submit button is clicked, find events function is triggered

//function that finds events on that specific date
    //call function that prefilters to philadelphia
    //call function that displays events on page

//search function displays events and adds each new event to list

//function that prefilters events to philadelphia











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