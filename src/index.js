setInterval(function () {
  let lagos = document.querySelector("#lagos");
  let lagosElement = document.querySelector("#lagos .time");
  lagosElement.innerHTML = moment()
    .tz("Africa/Lagos")
    .format("HH:mm:ss [<small>]A[<small>]");

  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesElement = document.querySelector("#los-angeles .time");
  losAngelesElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("HH:mm:ss [<small>]A[<small>]");

  let moscow = document.querySelector("#moscow");
  let moscowElement = document.querySelector("#moscow .time");
  moscowElement.innerHTML = moment()
    .tz("Europe/Moscow")
    .format("HH:mm:ss [<small>]A[<small>]");
}, 1000);

let dateElement = document.querySelector("#date");
dateElement.innerHTML = moment().format("MMMM Do YYYY");

let losAngelesDateElement = document.querySelector("#los-angeles .date");
losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
