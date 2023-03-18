console.log("hello world i am ahmed workingn from home ")


const button = document.querySelector('#submit');
button.addEventListener("click", e => {
    e.preventDefault();
    // valid()
    if(valid()) {
        return
    }
    load();
})


//fetching the data from the api server 
const getData = async (city) => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=57b4c07506dd2c5d50ee2bf7a7ba03c8')
    const result = await response.json();
    return result
}

// the main function 
function load () {
    const city = document.querySelector("#search").value
    getData(city)
    .then((data) => {
        console.log(data)
        updateUi(data)   
})
}

// update the userinterface
const updateUi = (data) => {
    let d = new Date();
    let newDate = d.getMonth()+ 1 +'.'+ d.getDate()+'.'+ d.getFullYear();
    const visiblity = document.querySelector('.visibilty')
    const statue = document.querySelector(".statue");
    const city = document.querySelector(".city");
    const date = document.querySelector(".date");
    const temp = document.querySelector(".temp");
    const minMax = document.querySelector(".min-max");
    const like = document.querySelector(".like");
    const humdity = document.querySelector(".humdity");
    const pressure = document.querySelector(".pressure");
    statue.textContent = data["weather"] [0] ["main"];
    city.textContent = data["name"];
    date.textContent = `Today ${newDate}` ;
    temp.textContent = ` Temperautre: ${Math.round(data["main"]["temp"])} C`;
    minMax.textContent = ` Max: ${Math.round(data["main"]["temp_max"])} `+`min: ${Math.round(data["main"]["temp_max"])}`;
    like.textContent = ` Feels-like: ${data ["main"] ["feels_like"]} c`;
    humdity.textContent = ` humidity: ${data ["main"] ["humidity"]}`;
    pressure.textContent = `pressure: ${data["main"]["pressure"]}`;
    visiblity.textContent = `visibilty: ${data['visibility']}`    
}

function valid () {
    const city = document.querySelector("#search")
    const error = document.querySelector(".error")
    
    if(city.validity.valueMissing) {
        alert("please enter city name ")
        return true
    }
}

