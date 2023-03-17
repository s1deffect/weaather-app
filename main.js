console.log("hello world i am ahmed workingn from home ")

const getData = async (city) => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=57b4c07506dd2c5d50ee2bf7a7ba03c8')
    console.log(response)
    const result = await response.json();
    console.log(result)
}
getData("egypt");



// const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57b4c07506dd2c5d50ee2bf7a7ba03c8')

