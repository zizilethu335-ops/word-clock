
function updateClocks() {
let citiElement = document.getElementById("new-york");
let citiDateElement = document.querySelector("#new-york .date");
let citiTimeElement = document.querySelector("#new-york .time");
let citiTimezone = moment().tz("America/New_York");

citiDateElement.innerHTML = citiTimezone.format("MMMM Do YYYY");
citiTimeElement.innerHTML = citiTimezone.format("h:mm:ss [<small>]A[</small>]");

let londonElement = document.getElementById("london");
let londonDateElement = document.querySelector("#london .date");
let londonTimeElement = document.querySelector("#london .time");
let londonTimezone = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTimezone.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTimezone.format("h:mm:ss [<small>]A[</small>]");

}
updateClocks();
setInterval(updateClocks, 1000);
