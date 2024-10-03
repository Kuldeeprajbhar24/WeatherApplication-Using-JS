let input=document.querySelector("input");
let search=document.querySelector("button");
let city=document.querySelector("h2");
let temp1=document.querySelectorAll("h3")[0];
let climate=document.querySelectorAll("h3")[1];
let output=document.querySelector("#output");
search.addEventListener("click",async()=>{
    try{
    let apiKey=`8ca057cd3a06714ab1f768ee8a15c075`;
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;
    console.log(input.value);
    let datafromInternet= await fetch(api);
    let weatherdata=await datafromInternet.json();
    city.innerHTML=`City Name : ${weatherdata.name}`;
    temp1.innerHTML=`Temp :${Math.floor(weatherdata.main.temp-273)}`;
    climate.innerHTML=`Climate :${weatherdata.weather[0].main}`;
    console.log(datafromInternet);
    console.log(weatherdata);
    }
    catch(error){
        output.innerHTML=`<h3>Invalid city name</h1>`;
    }
})