function updateTime() {
  // abuja Nigeria
  let abujaElement = document.querySelector("#abuja");
  if (abujaElement) {
    let abujaDateElement = abujaElement.querySelector(".date");
    let abujaTimeElement = abujaElement.querySelector(".time");
    let abujaTime = moment().tz("Africa/Lagos");

    abujaDateElement.innerHTML = abujaTime.format("MMMM	Do YYYY");
    abujaTimeElement.innerHTML = abujaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // lisbon
  let lisbonElement = document.querySelector("#lisbon");
  if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Paris");

    lisbonDateElement.innerHTML = lisbonTime.format("MMMM	Do YYYY");
    lisbonTimeElement.innerHTML = lisbonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
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

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
