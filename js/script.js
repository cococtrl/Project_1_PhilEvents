//API info
const promise = $.ajax({url:'https://app.ticketmaster.com/discovery/v2/events.json?apikey=RCh1xsSADGGECDgRe6Ff55bjS3Ab8qgM',
});
let input = document.getElementById("eventDate");
let submit = document.querySelector('button').addEventListener('click', eventResults);


function eventResults(){
    console.log(input.value)
    console.log(today)
    validDate();
};
// let today = new Date();
let date = new Date();
let today = date.getFullYear()+'-'+(((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))))+'-'+((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));

function validDate(input){
    if(input >= today){
        console.log('valid')
    } else {console.log("not valid")}
};
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