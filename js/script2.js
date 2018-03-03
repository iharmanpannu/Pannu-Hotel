(() => {
  const url = "http://api.openweathermap.org/data/2.5/weather?q=Seattle,USA";
  const apiKey = "05e62f86576a85bc20cce0e46674216f"; // Api key
  let httpRequest;

  // jquery AJAX request
  $.get(`${url}&appid=${apiKey}`)
    .done(function(response) {
      updateUISuccess(response);
    })
    .fail(function(error) {
      updateUIError();
    });

  // Handle XHR success
  function updateUISuccess(response) {
    const condition = response.weather[0].main;
    const degC = response.main.temp - 273.15;
    const degCInt = Math.floor(degC);
    const degF = degC * 1.8 + 32;
    const degFInt = Math.floor(degF);
    // const weatherBox = document.getElementById("weather");
    // weatherBox.innerHTML = `<p>${degCInt}&#176; C / ${degFInt}&#176; F</p> <p>${condition}</p>`;
    const $weatherBox = $("#weather");
    $weatherBox.append(
      `<p>${degCInt}&#176; C / ${degFInt}&#176; F</p> <p>${condition}</p>`
    );
  }

  // handle XHR error

  function updateUIError() {
    // const weatherBox = document.getElementById("weather");
    // weatherBox.className = "hidden";
    const $weatherBox = $("#weather");
    $weatherBox.addClass("hidden");
  }
})();
