const input=document.querySelector('input');
const button=document.querySelector('button');
const temp=document.querySelector('.temp');
const humidity=document.querySelector('.humid');
const windSpeed=document.querySelector('.win')
const icon=document.querySelector('.pic')
const loc=document.querySelector('.location')

button.addEventListener('click',function(e){
  e.preventDefault();
  
  fetchweather();


})
const valid=function validation(){
  if(input.value===''|| !isNaN(input.value)){
    alert('Please enter a valid city name');
    return false;
 }
 else{
  return true;
 }

}

async function fetchweather(){
     
  if (valid()===true){

  
  const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`);
  const data=await response.json();
  console.log(data);
  loc.innerHTML=`${input.value}`;
  loc.parentNode.parentNode.style.display='block';
  temp.innerHTML=`${Math.round(data.main.temp )} <sup>o</sup>C ${data.weather[0].main}`;

  humidity.innerHTML = `${data.main.humidity}<span style="font-size: 21px;">%<span>`;
  windSpeed.innerHTML = `${Math.round(data.wind.speed)}<span>Km</span>`;
 
  if(data.weather[0].main=="Clouds" || data.weather[0].main=="Clear"|| data.weather[0].main=="Haze"){
    icon.src="cloudy.png";
  }
  else if(data.weather[0].main=="Rain"){
    icon.src="rain.png";
  }
  else if(data.weather[0].main=="Clear"){
    icon.src="clear.png";
  }
  else if(data.weather[0].main=="Snow"){
    icon.src="snow.png";
  }
  else if(data.weather[0].main=="Mist"){
    icon.src="mist.png";
  }
}
}
