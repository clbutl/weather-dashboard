var weatherInfo = document.querySelector(".weather-info")
var submitBtn = document.querySelector("#submit-btn")
var cityInputId = document.getElementById("city-input")
var cityInputEl = document.querySelector(".city-input")
var topSearch = document.querySelector(".top-search")
var inputForm = document.getElementById("input-form")
var currentCity = document.getElementById("current-city")
var APIKey = "d59c6fbed137376c90ca9f8b31ec0dc0";
var APIKeyForecast = '78ccf997ae2d3fd6d52a10b9be9331f3'
var weatherIcon = document.getElementById("weather-icon")
var cities = document.getElementById('past-cities')

var currentTemp = document.getElementById('current-temp') 
var currentWind = document.getElementById('current-wind') 
var currentHumidity = document.getElementById('current-humidity') 
var currentUV = document.getElementById('current-uv') 

// Get main weather
function getWeather(api) {
  fetch(api)
  .then(function (response) {
    if (response.status === 200) {
      weatherInfo.classList.remove('hidden')
      return response.json();
    } else {
      cityInputEl.classList.remove('normal-border')
      cityInputEl.classList.add('error-border')
      weatherInfo.classList.add("hidden")
      return;
    }
});
}

// 5 Day Variables
var date1 = document.getElementById('1-date')
var date2 = document.getElementById('2-date')
var date3 = document.getElementById('3-date')
var date4 = document.getElementById('4-date')
var date5 = document.getElementById('5-date')
var date1icon = document.getElementById('1-date-icon')
var date2icon = document.getElementById('2-date-icon')
var date3icon = document.getElementById('3-date-icon')
var date4icon= document.getElementById('4-date-icon')
var date5icon = document.getElementById('5-date-icon')
var date1Temp = document.getElementById('1-date-temp')
var date2Temp = document.getElementById('2-date-temp')
var date3Temp = document.getElementById('3-date-temp')
var date4Temp = document.getElementById('4-date-temp')
var date5Temp = document.getElementById('5-date-temp')
var date1Wind = document.getElementById('1-date-wind')
var date2Wind = document.getElementById('2-date-wind')
var date3Wind = document.getElementById('3-date-wind')
var date4Wind = document.getElementById('4-date-wind')
var date5Wind = document.getElementById('5-date-wind')
var date1Humidity = document.getElementById('1-date-humidity')
var date2Humidity = document.getElementById('2-date-humidity')
var date3Humidity = document.getElementById('3-date-humidity')
var date4Humidity = document.getElementById('4-date-humidity')
var date5Humidity = document.getElementById('5-date-humidity')


// Future Dates for the 5 days
function futureDates() {
  date1.textContent = moment().add(1, 'days').format('M/D/YYYY')
  date2.textContent = moment().add(2, 'days').format('M/D/YYYY')
  date3.textContent = moment().add(3, 'days').format('M/D/YYYY')
  date4.textContent = moment().add(4, 'days').format('M/D/YYYY')
  date5.textContent = moment().add(5, 'days').format('M/D/YYYY')
}

// Future Weather
function futureWeather(fAPI) {
  fetch(fAPI)
  .then(function (response) {
    return response.json();
  })
  // 5 Day weather icons
  .then(function (data) {
    console.log(data.list[0])
    var iconURL1 = "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png"
    fetch(iconURL1)
    .then(function(){
      date1icon.setAttribute('src', "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png")
    })

    var iconURL2 = "https://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png"
    fetch(iconURL2)
    .then(function(){
      date2icon.setAttribute('src', "http://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png")
    })

    var iconURL3 = "https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png"
    fetch(iconURL3)
    .then(function(){
      date3icon.setAttribute('src', "http://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png")
    })

    var iconURL4 = "https://openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png"
    fetch(iconURL4)
    .then(function(){
      date4icon.setAttribute('src', "http://openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png")
    })

    var iconURL5 = "https://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png"
    fetch(iconURL5)
    .then(function(){
      date5icon.setAttribute('src', "http://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png")
    })

    // 5 Day temp, wind, humidity
    date1Temp.textContent = Math.round((1.8*((data.list[0].main.temp)-273) + 32)*10)/10 + '°F'
    date2Temp.textContent = Math.round((1.8*((data.list[1].main.temp)-273) + 32)*10)/10 + '°F'
    date3Temp.textContent = Math.round((1.8*((data.list[2].main.temp)-273) + 32)*10)/10 + '°F'
    date4Temp.textContent = Math.round((1.8*((data.list[3].main.temp)-273) + 32)*10)/10 + '°F'
    date5Temp.textContent = Math.round((1.8*((data.list[4].main.temp)-273) + 32)*10)/10 + '°F'
    date1Wind.textContent = data.list[0].wind.speed + ' MPH'
    date2Wind.textContent = data.list[1].wind.speed + ' MPH'
    date3Wind.textContent = data.list[2].wind.speed + ' MPH'
    date4Wind.textContent = data.list[3].wind.speed + ' MPH'
    date5Wind.textContent = data.list[4].wind.speed + ' MPH'
    date1Humidity.textContent = data.list[0].main.humidity + '%'
    date2Humidity.textContent = data.list[1].main.humidity + '%'
    date3Humidity.textContent = data.list[2].main.humidity + '%'
    date4Humidity.textContent = data.list[3].main.humidity + '%'
    date5Humidity.textContent = data.list[4].main.humidity + '%'
  })
}

// Current Weather Info
function weatherInformation(api) {
  fetch(api)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    var icon = data.weather[0].icon
    var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    fetch(iconUrl)
    .then(function () {
      currentCity.textContent = cityInputEl.value + '(' + moment().format('M/D/YYYY') + ')'
      weatherIcon.setAttribute('src', 'http://openweathermap.org/img/w/' + icon + '.png')
    })  
    currentTemp.textContent = Math.round((1.8*((data.main.temp)-273) + 32)*10)/10 + '°F'
    currentWind.textContent = data.wind.speed + ' MPH'
    currentHumidity.textContent = data.main.humidity + '%'
    console.log(data)
    currentUV.textContent = "N/A.."

    futureDates()
  })
}

// Get city and response
inputForm.addEventListener('submit', function(event){
  event.preventDefault()

  if (cityInputEl.value === '') {
    cityInputEl.classList.remove('normal-border')
    cityInputEl.classList.add('error-border')
    return;
  }
  cityInputEl.classList.remove('error-border')
  cityInputEl.classList.add('normal-border')


  if (localStorage.getItem('city1')) {
    if(localStorage.getItem('city2')) {
      if(localStorage.getItem('city3')) {
        if(localStorage.getItem('city4')) {
          if(localStorage.getItem('city5')) {
            console.log('storage full')
          } else {
            if (cityInputEl.value === localStorage.getItem('city1') || cityInputEl.value === localStorage.getItem('city2') || cityInputEl.value === localStorage.getItem('city3') || cityInputEl.value === localStorage.getItem('city4')) {
              console.log('duplicate')
            } else {
              localStorage.setItem('city5', cityInputEl.value)
            }
          } 
        } else {
          if (cityInputEl.value === localStorage.getItem('city1') || cityInputEl.value === localStorage.getItem('city2') || cityInputEl.value === localStorage.getItem('city3')) {
            console.log('duplicate')
          } else {
            localStorage.setItem('city4', cityInputEl.value)
          }
        } 
      } else {
        if (cityInputEl.value === localStorage.getItem('city1') || cityInputEl.value === localStorage.getItem('city2')) {
          console.log('duplicate')
        } else {
          localStorage.setItem('city3', cityInputEl.value)
        }
      } 
    } else {
      if (cityInputEl.value === localStorage.getItem('city1')) {
        console.log('duplicate')
      } else {
        localStorage.setItem('city2', cityInputEl.value)
      }
    } 
  } else {
    localStorage.setItem('city1', cityInputEl.value)
  }

  
  recentCities()
  
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl.value + '&appid=' + APIKey;
  getWeather(requestUrl)
  weatherInformation(requestUrl)
  
  var forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInputEl.value + '&cnt=5&appid=' + APIKeyForecast;
  futureWeather(forecastAPI)

  // getNames()
})




function getNames() {
  // names.push(cityInputEl.value)
  localStorage.setItem('history', JSON.stringify(names))
  for (var i = 0; i < names.length; i++) {
    pastCities(localNames[i])
  }
}


function recentCities() {
  if (localCity1) {
    var localBtn1 = document.getElementById('city-1-local')
    localBtn1.textContent = localCity1
    document.getElementById('city-1').classList.remove('hidden')
    localBtn1.addEventListener('click', function (){
      runWeather(localCity1)
    })
  } 

  if (localCity2) {
    var localBtn2 = document.getElementById('city-2-local')
    localBtn2.textContent = localCity2
    document.getElementById('city-2').classList.remove('hidden')
    localBtn2.addEventListener('click', function (){
      runWeather(localCity2)
    })
  } 

  if (localCity3) {
    var localBtn3 = document.getElementById('city-3-local')
    localBtn3.textContent = localCity3
    document.getElementById('city-3').classList.remove('hidden')
    localBtn3.addEventListener('click', function (){
      runWeather(localCity3)
    })
  } 

  if (localCity4) {
    var localBtn4 = document.getElementById('city-4-local')
    localBtn4.textContent = localCity4
    document.getElementById('city-4').classList.remove('hidden')
    localBtn4.addEventListener('click', function (){
      runWeather(localCity4)
    })
  } 
  
  if (localCity5) {
    var localBtn5 = document.getElementById('city-5-local')
    localBtn5.textContent = localCity5
    document.getElementById('city-5').classList.remove('hidden')
    localBtn5.addEventListener('click', function (){
      runWeather(localCity5)
    })
  } 

}

function runWeather(local) {

  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + local + '&appid=' + APIKey;
  getWeather(requestUrl)
  weatherInformation2(requestUrl, local)
  
  var forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=' + local + '&cnt=5&appid=' + APIKeyForecast;
  futureWeather(forecastAPI)
}

function weatherInformation2(api, local) {
  fetch(api)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    var icon = data.weather[0].icon
    var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    fetch(iconUrl)
    .then(function () {
      currentCity.textContent = local + '(' + moment().format('M/D/YYYY') + ')'
      weatherIcon.setAttribute('src', 'https://openweathermap.org/img/w/' + icon + '.png')
    })  
    currentTemp.textContent = Math.round((1.8*((data.main.temp)-273) + 32)*10)/10 + '°F'
    currentWind.textContent = data.wind.speed + ' MPH'
    currentHumidity.textContent = data.main.humidity + '%'
    console.log(data)
    currentUV.textContent = "N/A.."

    futureDates()
  })
}



var localCity1 = localStorage.getItem('city1')
var localCity2 = localStorage.getItem('city2')
var localCity3 = localStorage.getItem('city3')
var localCity4 = localStorage.getItem('city4')
var localCity5 = localStorage.getItem('city5')

recentCities()