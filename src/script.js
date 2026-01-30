
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


function updateCity(event) {
  let cityTimeZone = event.target.value;
 let cityName = cityTimeZone.split("/")[1].replaceAll("_", " ");

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#city");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}


let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCity);