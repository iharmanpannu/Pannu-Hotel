const url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
const apiKey = "05e62f86576a85bc20cce0e46674216f"; // Replace "API KEY" with your own API key; otherwise, your HTTP request will not work
let httpRequest;
makeRequest();

// Create and send XHR Request

function makeRequest() {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = responseMethod;
  httpRequest.open("GET", `${url}&appid=${apiKey}`);
  httpRequest.send();
}

// Handle XHR response

function responseMethod() {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      updateUISuccess(httpRequest.responseText);
    } else {
      updateUIError();
    }
  }
}

// Handle XHR success
function updateUISuccess(responseText) {
  const response = JSON.parse(responseText);
  const condition = response.weather[0].main;
  const degC = response.main.temp - 273.15;
  const degCInt = Math.floor(degC);
  const degF = degC * 1.8 + 32;
  const degFInt = Math.floor(degF);
  const weatherBox = document.getElementById("weather");
  weatherBox.innerHTML = `<p>${degCInt}&#176; C / ${degFInt}&#176; F</p> <p>${condition}</p>`;
}

// handle XHR error

function updateUIError() {
  const weatherBox = document.getElementById("weather");
  weatherBox.className = "hidden";
}

// // XHR
// const url = "https://harmanpannu.com";
// const request = new XMLHttpRequest();
// request.onreadystatechange = responseMethod;
// request.open("GET", url);
// request.send();

// // Fetch
// const url = "https://harmanpannu.com";
// fetch(url).then(function(response) {
//   responseMethod(response);
// });

// Simple fetch Request example

// fetch(url)
//   .then(function(response) {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then(function(response) {
//     // do something
//   })
//   .catch(function() {
//     // do something with error
//   });

// fetch AJAX request

(() => {
  const url = "http://api.openweathermap.org/data/2.5/weather?q=Seattle,USA";
  const apiKey = "05e62f86576a85bc20cce0e46674216f"; // Api key
  let httpRequest;

  fetch(`${url}&appid=${apiKey}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.text);
      }
      return response.json();
    })
    .then(function(response) {
      updateUISuccess(response);
    })
    .catch(function(error) {
      updateUIError();
    });

  // Handle XHR success
  function updateUISuccess(response) {
    const condition = response.weather[0].main;
    const degC = response.main.temp - 273.15;
    const degCInt = Math.floor(degC);
    const degF = degC * 1.8 + 32;
    const degFInt = Math.floor(degF);
    const weatherBox = document.getElementById("weather");
    weatherBox.innerHTML = `<p>${degCInt}&#176; C / ${degFInt}&#176; F</p> <p>${condition}</p>`;
  }

  // handle XHR error

  function updateUIError() {
    const weatherBox = document.getElementById("weather");
    weatherBox.className = "hidden";
  }
})();

// Jquery Ajax Request

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
